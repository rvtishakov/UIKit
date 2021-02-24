/* eslint-disable no-alert */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

import { UIConstant } from '@tonlabs/uikit.core';
import {
    UICountryPicker,
    UIActionSheet,
    UICustomSheet,
    UIPopover,
    UIPopoverMenu,
} from '@tonlabs/uikit.navigation_legacy';
import {
    UITextButton,
    UIButton,
    UISlider,
    UIStepBar,
    UITabView,
} from '@tonlabs/uikit.components';
import {
    UIBottomSheet,
    UIMaterialTextView,
    UIQRCodeScannerSheet,
    UICardSheet,
} from '@tonlabs/uikit.hydrogen';

export const actionSheet = React.createRef<typeof UIActionSheet>();
export const customSheet = React.createRef<typeof UICustomSheet>();

export const Menus = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [cardSheetVisible, setCardSheetVisible] = React.useState(false);
    const [cardSheet2Visible, setCardSheet2Visible] = React.useState(false);
    const [bottomSheetVisible, setBottomSheetVisible] = React.useState(false);
    const [qrVisible, setQrVisible] = React.useState(false);
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <View
                style={{
                    width: '96%',
                    paddingLeft: 40,
                    paddingBottom: 10,
                    marginHorizontal: '2%',
                    marginTop: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0,0,0,.1)',
                }}
            >
                <Text>UIActionSheet</Text>
            </View>
            <View style={{ maxWidth: 300, paddingVertical: 20 }}>
                <UITextButton
                    title="Show ActionSheet"
                    onPress={() => {
                        if (actionSheet.current) {
                            actionSheet.current.show(
                                [
                                    {
                                        title: 'Item 1',
                                        onPress: () =>
                                            alert('Action 1 was called'),
                                    },
                                    {
                                        title: 'Item 2',
                                        onPress: () =>
                                            alert('Action 2 was called'),
                                    },
                                ],
                                true,
                            );
                        }
                    }}
                />
            </View>
            <View
                style={{
                    width: '96%',
                    paddingLeft: 40,
                    paddingBottom: 10,
                    marginHorizontal: '2%',
                    marginTop: 50,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0,0,0,.1)',
                }}
            >
                <Text>UICountryPicker</Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
                <UITextButton
                    title="Show UICountryPicker"
                    onPress={() => UICountryPicker.show({})}
                />
            </View>
            <View
                style={{
                    width: '96%',
                    paddingLeft: 40,
                    paddingBottom: 10,
                    marginHorizontal: '2%',
                    marginTop: 50,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0,0,0,.1)',
                }}
            >
                <Text>UICustomSheet</Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
                <UITextButton
                    title="Show UICustomSheet"
                    onPress={() => {
                        if (customSheet.current) {
                            customSheet.current.show();
                        }
                    }}
                />
                <UITextButton
                    title="Show UICardSheet"
                    onPress={() => {
                        setCardSheetVisible(true);
                    }}
                />
                <UICardSheet
                    visible={cardSheetVisible}
                    onClose={() => {
                        setCardSheetVisible(false);
                    }}
                    style={{
                        backgroundColor: 'white',
                        padding: 20,
                        borderRadius: 10,
                    }}
                >
                    <Text>Hi there!</Text>
                    <UIButton
                        title="close"
                        onPress={() => {
                            setCardSheetVisible(false);
                        }}
                    />
                </UICardSheet>
                <UITextButton
                    title="Show UICardSheet with input"
                    onPress={() => {
                        setCardSheet2Visible(true);
                    }}
                />
                <UICardSheet
                    visible={cardSheet2Visible}
                    onClose={() => {
                        setCardSheet2Visible(false);
                    }}
                    style={{
                        backgroundColor: 'white',
                        padding: 20,
                        borderRadius: 10,
                    }}
                >
                    <UIMaterialTextView label="Write smth" />
                    <UIButton
                        title="close"
                        onPress={() => {
                            setCardSheet2Visible(false);
                        }}
                    />
                </UICardSheet>
                <UITextButton
                    title="Show UIBottomSheet"
                    onPress={() => {
                        setBottomSheetVisible(true);
                    }}
                />
                <SafeAreaInsetsContext.Consumer>
                    {(insets) => (
                        <UIBottomSheet
                            visible={bottomSheetVisible}
                            onClose={() => {
                                setBottomSheetVisible(false);
                            }}
                            style={{
                                backgroundColor: 'white',
                                padding: 20,
                                paddingBottom: Math.max(
                                    insets?.bottom || 0,
                                    UIConstant.contentOffset(),
                                ),
                                borderRadius: 10,
                            }}
                        >
                            <Text>Hi there!</Text>
                            <UIButton
                                title="close"
                                onPress={() => {
                                    setBottomSheetVisible(false);
                                }}
                            />
                        </UIBottomSheet>
                    )}
                </SafeAreaInsetsContext.Consumer>
                <UITextButton
                    title="Show UIQRcodeScannerSheet"
                    onPress={() => {
                        setQrVisible(true);
                    }}
                />
                <UIQRCodeScannerSheet
                    visible={qrVisible}
                    onClose={() => {
                        setQrVisible(false);
                    }}
                    onRead={() => {
                        setQrVisible(false);
                    }}
                />
            </View>
            <View
                style={{
                    width: '96%',
                    paddingLeft: 40,
                    paddingBottom: 10,
                    marginHorizontal: '2%',
                    marginTop: 50,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0,0,0,.1)',
                }}
            >
                <Text>UIPopover</Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
                <UIPopover
                    placement="top"
                    component={<Text>This is a popover</Text>}
                >
                    <UITextButton title="Show UIPopover" />
                </UIPopover>
            </View>
            <View
                style={{
                    width: '96%',
                    paddingLeft: 40,
                    paddingBottom: 10,
                    marginHorizontal: '2%',
                    marginTop: 50,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0,0,0,.1)',
                }}
            >
                <Text>UIPopoverMenu</Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
                <UIPopoverMenu
                    placement="top"
                    menuItemsList={[
                        {
                            title: 'Item 1',
                            onPress: () => alert('Action 1 was called'),
                        },
                        {
                            title: 'Item 2',
                            onPress: () => alert('Action 2 was called'),
                        },
                    ]}
                >
                    <UITextButton title="Show UIPopoverMenu" />
                </UIPopoverMenu>
            </View>
            <View
                style={{
                    width: '96%',
                    paddingLeft: 40,
                    paddingBottom: 10,
                    marginHorizontal: '2%',
                    marginTop: 50,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0,0,0,.1)',
                }}
            >
                <Text>UISlider</Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
                <UISlider
                    itemsList={[
                        {
                            title: 'Card 1',
                            details: 'details',
                        },
                        {
                            title: 'Card 2',
                            details: 'details',
                        },
                        {
                            title: 'Card 3',
                            details: 'details',
                        },
                        {
                            title: 'Card 4',
                            details: 'details',
                        },
                        {
                            title: 'Card 5',
                            details: 'details',
                        },
                    ]}
                    itemRenderer={({
                        title,
                        details,
                    }: {
                        title: string;
                        details: string;
                    }) => (
                        <View
                            key={`slider-item-${title}-${details}`}
                            style={{ width: 200, height: 200 }}
                        >
                            <Text>{title}</Text>
                            <Text>{details}</Text>
                        </View>
                    )}
                    itemWidth={256}
                />
            </View>
            <View
                style={{
                    width: '96%',
                    paddingLeft: 40,
                    paddingBottom: 10,
                    marginHorizontal: '2%',
                    marginTop: 50,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0,0,0,.1)',
                }}
            >
                <Text>UIStepBar</Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
                <UIStepBar
                    itemsList={['Item 1', 'Item 2', 'Item 3', 'Item 4']}
                    activeIndex={activeIndex}
                    onPress={(i: number) => setActiveIndex(i)}
                />
            </View>
            <View
                style={{
                    width: '96%',
                    paddingLeft: 40,
                    paddingBottom: 10,
                    marginHorizontal: '2%',
                    marginTop: 50,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0,0,0,.1)',
                }}
            >
                <Text>UITabView</Text>
            </View>
            <View style={{ paddingVertical: 20 }}>
                <UITabView
                    width={95}
                    pages={[
                        {
                            title: 'Left',
                            component: <Text>Some left content</Text>,
                        },
                        {
                            title: 'Center',
                            component: <Text>Some center content</Text>,
                        },
                        {
                            title: 'Right',
                            component: <Text>Some right content</Text>,
                        },
                    ]}
                />
            </View>
        </ScrollView>
    );
};
