import * as React from 'react';
import { StyleSheet, View, LayoutChangeEvent, Pressable } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSequence,
    withTiming,
} from 'react-native-reanimated';
import type { UICarouselViewContainerProps, UICarouselViewPageProps } from '../../types';
import { duration } from '../animations';

type PageProps = {
    page: React.ReactElement<UICarouselViewPageProps>;
    index: number;
    currentIndex: { current: number };
    width: number;
    offset: { value: number };
    onPress: () => void;
    shouldPageMoveOnPress: boolean;
};

const PageView: React.FC<PageProps> = React.memo(
    ({ page, index, currentIndex, width, offset, onPress, shouldPageMoveOnPress }: PageProps) => {
        const PageComponent = page.props.component;

        const animatedStyles = useAnimatedStyle(() => {
            const opacity = interpolate(offset.value, [1, 0], [0, 1]);
            const transform = [
                {
                    scale: interpolate(offset.value, [1, 0], [0.9, 1]),
                },
            ];
            return { opacity, transform };
        });

        const focused = React.useMemo(() => index === currentIndex.current, [currentIndex]);

        const pageWidthStyle = React.useMemo(() => {
            return width ? { width } : focused ? { ...StyleSheet.absoluteFillObject } : null;
        }, [width, focused]);

        return (
            <Pressable
                disabled={!shouldPageMoveOnPress}
                onPress={onPress}
                testID={page.props.testID}
            >
                <Animated.View style={[animatedStyles, pageWidthStyle]}>
                    {width ? <PageComponent /> : null}
                </Animated.View>
            </Pressable>
        );
    },
);

type Props = UICarouselViewContainerProps & {
    pages: React.ReactElement<UICarouselViewPageProps>[];
};

export function CarouselViewContainer({
    pages,
    initialIndex = 0,
    testID,
    shouldPageMoveOnPress = true,
    onPageIndexChange,
}: Props) {
    const [layout, setLayout] = React.useState({ width: 0, height: 0 });

    const carouselOffset = useSharedValue(0);
    const itemOffset = useSharedValue(0);

    const currentIndexRef = React.useRef(0);
    const maxWidthTranslate = React.useMemo(() => layout.width * pages.length, [layout, pages]);

    const [isMoving, setIsMoving] = React.useState(false);

    const containerAnimatedStyle = useAnimatedStyle(() => {
        const transform = [
            {
                translateX: interpolate(
                    carouselOffset.value,
                    [-maxWidthTranslate, 0],
                    [-maxWidthTranslate, 0],
                ),
            },
        ];

        return { transform };
    });

    const jumpToIndex = React.useCallback(
        (index: number) => {
            const offset = -index * layout.width;
            carouselOffset.value = withTiming(offset, { duration });
            itemOffset.value = withSequence(
                withTiming(1, { duration: duration / 2 }),
                withTiming(0, { duration }),
            );
            setIsMoving(false);
            onPageIndexChange && onPageIndexChange(index);
        },
        [carouselOffset, itemOffset, layout.width, onPageIndexChange],
    );

    const jumpToNext = React.useCallback(() => {
        if (!isMoving) {
            const nextIndex = (currentIndexRef.current + 1) % pages.length;
            jumpToIndex(nextIndex);
        }
    }, [jumpToIndex, isMoving, pages]);

    React.useEffect(() => {
        if (currentIndexRef.current !== initialIndex) {
            currentIndexRef.current = initialIndex;
            jumpToIndex(initialIndex);
        }
    }, [initialIndex, jumpToIndex]);

    const handleLayout = React.useCallback(
        ({
            nativeEvent: {
                layout: { height, width },
            },
        }: LayoutChangeEvent) => {
            setLayout(prevLayout => {
                if (prevLayout.width === width && prevLayout.height === height) {
                    return prevLayout;
                }
                return { height, width };
            });
        },
        [],
    );

    return (
        <View testID={testID} onLayout={handleLayout} style={[styles.pager]}>
            <Animated.View
                style={[
                    styles.sheet,
                    layout.width ? { width: maxWidthTranslate, ...containerAnimatedStyle } : null,
                ]}
            >
                {pages.map((page, index) => {
                    return (
                        <PageView
                            key={index}
                            page={page}
                            index={index}
                            currentIndex={currentIndexRef}
                            offset={itemOffset}
                            onPress={jumpToNext}
                            shouldPageMoveOnPress={shouldPageMoveOnPress}
                            width={layout.width}
                        />
                    );
                })}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    pager: {
        overflow: 'hidden',
        flex: 1,
    },
    sheet: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },
});
