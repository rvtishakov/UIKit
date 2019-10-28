// @flow
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, LayoutAnimation, Animated, Vibration } from 'react-native';

import UIComponent from '../../UIComponent';
import UIStyle from '../../../helpers/UIStyle';
import UIColor from '../../../helpers/UIColor';
import UIConstant from '../../../helpers/UIConstant';
import UITextStyle from '../../../helpers/UITextStyle';
import UILabel from '../../text/UILabel';

import UILocalized from '../../../helpers/UILocalized';

type State = {
    pin: string,
    wrongPin: boolean,
    rightPin: boolean,
    description: string,
    shakeMargin: number,
};

type Props = {
    pinCodeLenght: number,
    pinToConfirm?: string,
    pinTitle?: string,
    pinDescription?: string,
    pinDescriptionColor?: string,
    usePredefined?: boolean,
    disabled?: boolean,
    pinCodeEnter: (pin: string) => void,
    testID?: string,
    commentTestID?: string,
};

const dotSize = UIConstant.tinyCellHeight();

const styleProperties = {
    key: {
        width: UIConstant.buttonHeight(),
        height: UIConstant.buttonHeight(),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: UIConstant.mediumContentOffset(),
        marginRight: UIConstant.mediumContentOffset(),
    },
    dotView: {
        width: UIConstant.smallContentOffset() + dotSize + UIConstant.smallContentOffset(),
        height: UIConstant.smallContentOffset() + dotSize + UIConstant.smallContentOffset(),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: UIConstant.smallContentOffset(),
    },
    dotBlue: {
        width: dotSize,
        height: dotSize,
        borderRadius: dotSize / 2,
        backgroundColor: UIColor.primary(),
    },
    dotRed: {
        width: dotSize,
        height: dotSize,
        borderRadius: dotSize / 2,
        backgroundColor: UIColor.error(),
    },
    dotGreen: {
        width: dotSize,
        height: dotSize,
        borderRadius: dotSize / 2,
        backgroundColor: UIColor.success(),
    },
    dotGray: {
        width: dotSize / 2,
        height: dotSize / 2,
        borderRadius: dotSize / 4,
        backgroundColor: UIColor.grey3(),
    },
    animatedView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: UIConstant.mediumCellHeight(),
    },
};

const styles = StyleSheet.create(styleProperties);

export default class UIPinCodeInput extends UIComponent<Props, State> {
    static defaultProps = {
        pinTitle: '',
        pinDescription: ' \n ',
        usePredefined: false,
        disabled: false,
    };

    indicator: Array<number>;
    shakeValue: any;

    // constructor
    constructor(props: Props) {
        super(props);

        this.state = {
            pin: '',
            wrongPin: false,
            rightPin: false,
            description: '',
            shakeMargin: 0,
        };
    }

    componentDidMount() {
        super.componentDidMount();
        this.initiateIndicator();
        this.resetShake();
    }

    // events
    onKeyPress(key: string) {
        if (!this.props.disabled) {
            const pin = `${this.state.pin}${key}`;
            this.setPin(pin);
            if (this.props.pinToConfirm
                && pin.length === this.props.pinCodeLenght
                && pin !== this.props.pinToConfirm) {
                this.wrongPin();
            }
        }
    }

    onDeletePress = () => {
        const { length } = this.state.pin;
        const pin = this.state.pin.substr(0, length - 1);
        this.setPin(pin);
    }

    onPressPredefined = () => {
        // generate string consisted of '1' and with length = props.pinCodeLenght
        const str = Array.prototype.join.call({ length: (this.props.pinCodeLenght || -1) + 1 }, '1');
        this.setPin(str);
    }

    // setters
    setPin(pin: string) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setStateSafely({ pin }, () => {
            if (pin.length === this.props.pinCodeLenght) {
                this.props.pinCodeEnter(pin);
            }
        });
    }

    // actions
    initiateIndicator() {
        this.indicator = [];
        for (let i = 1; i <= this.props.pinCodeLenght; i += 1) {
            this.indicator.push(i);
        }
    }

    resetPin() {
        this.setStateSafely({ pin: '' }, () => {
            this.props.pinCodeEnter('');
        });
    }

    wrongPin(description?: string) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.setStateSafely({ wrongPin: true, description });
                Vibration.vibrate(500);
                this.shakeIndicator();
            }, 300);
            setTimeout(() => {
                this.setStateSafely({ wrongPin: false, description: '' });
                this.resetPin();
                resolve();
            }, 1300);
        });
    }

    rightPin(description?: string) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.setStateSafely({ rightPin: true, description });
            }, 300);

            setTimeout(() => {
                this.setStateSafely({ rightPin: false, description: '' });
                this.resetPin();
                resolve();
            }, 1300);
        });
    }

    resetShake() {
        this.shakeValue = new Animated.Value(0);
        const shakeMargin = this.shakeValue.interpolate({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
            outputRange: [0, -10, 10, -10, 10, -10, 0],
        });
        this.setState({
            shakeMargin,
        });
    }

    shakeIndicator() {
        Animated.timing(this.shakeValue, {
            toValue: 1,
            duration: 250,
        }).start(() => this.resetShake());
    }

    // render
    renderLabel() {
        return (
            <UILabel
                style={UIStyle.Margin.bottomDefault()}
                role={UILabel.Role.SecondaryBody}
                text={this.props.pinTitle}
                numberOfLines={1}
                selectable={false}
            />
        );
    }

    renderItem(item: number) {
        let dotStyle;
        let testID = 'pinValueNotSet';
        if (this.state.wrongPin) {
            dotStyle = styles.dotRed;
        } else if (item > this.state.pin.length) {
            dotStyle = styles.dotGray;
        } else if (this.state.rightPin) {
            dotStyle = styles.dotGreen;
        } else {
            dotStyle = styles.dotBlue;
            testID = 'pinValueSet';
        }


        return (
            <View
                testID={testID}
                style={styles.dotView}
            >
                <View style={dotStyle} />
            </View>
        );
    }

    renderIndicator() {
        return (
            <Animated.View style={[styles.animatedView, { marginLeft: this.state.shakeMargin }]}>
                <FlatList
                    horizontal
                    data={this.indicator}
                    extraData={this.state}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => `${item}`}
                />
            </Animated.View>
        );
    }

    renderDescription() {
        // eslint-disable-next-line no-nested-ternary
        const color = this.state.wrongPin
            ? UIColor.error()
            : this.state.rightPin
                ? UIColor.success()
                : this.props.pinDescriptionColor;

        const description = (this.state.wrongPin || this.state.rightPin)
            ? this.state.description
            : this.props.pinDescription;

        const descStyle = StyleSheet.create({
            descColor: {
                color,
                minHeight: UIConstant.mediumCellHeight(),
            },
        });

        return (
            <UILabel
                testID={this.props.commentTestID}
                style={[UIStyle.Margin.bottomMassive(), descStyle.descColor]}
                role={UILabel.Role.CaptionTertiary}
                text={description}
                numberOfLines={2}
                selectable={false}
            />
        );
    }

    renderKeyboard() {
        const { pinTitle } = this.props;
        const relatedScreen = pinTitle ? pinTitle.split(' ')[0] : '';
        return (
            <View>
                <View style={[UIStyle.flexRow, UIStyle.Margin.bottomNormal()]}>
                    <TouchableOpacity
                        testID={`${relatedScreen}_pincode_digit_1`}
                        style={styles.key}
                        onPress={() => this.onKeyPress('1')}
                        disabled={this.state.pin.length === this.props.pinCodeLenght}
                    >
                        <Text style={UITextStyle.primaryTitleLight}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID={`${relatedScreen}_pincode_digit_2`}
                        style={styles.key}
                        onPress={() => this.onKeyPress('2')}
                        disabled={this.state.pin.length === this.props.pinCodeLenght}
                    >
                        <Text style={UITextStyle.primaryTitleLight}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID={`${relatedScreen}_pincode_digit_3`}
                        style={styles.key}
                        onPress={() => this.onKeyPress('3')}
                        disabled={this.state.pin.length === this.props.pinCodeLenght}
                    >
                        <Text style={UITextStyle.primaryTitleLight}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={[UIStyle.flexRow, UIStyle.Margin.bottomNormal()]}>
                    <TouchableOpacity
                        testID={`${relatedScreen}_pincode_digit_4`}
                        style={styles.key}
                        onPress={() => this.onKeyPress('4')}
                        disabled={this.state.pin.length === this.props.pinCodeLenght}
                    >
                        <Text style={UITextStyle.primaryTitleLight}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID={`${relatedScreen}_pincode_digit_5`}
                        style={styles.key}
                        onPress={() => this.onKeyPress('5')}
                        disabled={this.state.pin.length === this.props.pinCodeLenght}
                    >
                        <Text style={UITextStyle.primaryTitleLight}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID={`${relatedScreen}_pincode_digit_6`}
                        style={styles.key}
                        onPress={() => this.onKeyPress('6')}
                        disabled={this.state.pin.length === this.props.pinCodeLenght}
                    >
                        <Text style={UITextStyle.primaryTitleLight}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={[UIStyle.flexRow, UIStyle.Margin.bottomNormal()]}>
                    <TouchableOpacity
                        testID={`${relatedScreen}_pincode_digit_7`}
                        style={styles.key}
                        onPress={() => this.onKeyPress('7')}
                        disabled={this.state.pin.length === this.props.pinCodeLenght}
                    >
                        <Text style={UITextStyle.primaryTitleLight}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID={`${relatedScreen}_pincode_digit_8`}
                        style={styles.key}
                        onPress={() => this.onKeyPress('8')}
                        disabled={this.state.pin.length === this.props.pinCodeLenght}
                    >
                        <Text style={UITextStyle.primaryTitleLight}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID={`${relatedScreen}_pincode_digit_9`}
                        style={styles.key}
                        onPress={() => this.onKeyPress('9')}
                        disabled={this.state.pin.length === this.props.pinCodeLenght}
                    >
                        <Text style={UITextStyle.primaryTitleLight}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={[UIStyle.flexRow, UIStyle.Margin.bottomMedium()]}>
                    <TouchableOpacity
                        style={styles.key}
                        disabled={!this.props.usePredefined}
                        onPress={this.onPressPredefined}
                    >
                        <Text style={UITextStyle.primaryCaptionMedium}>
                            {this.props.usePredefined ? 'DEV' : ''}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID={`${relatedScreen}_pincode_digit_0`}
                        style={styles.key}
                        onPress={() => this.onKeyPress('0')}
                        disabled={this.state.pin.length === this.props.pinCodeLenght}
                    >
                        <Text style={UITextStyle.primaryTitleLight}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID={`${relatedScreen}_pincode_digit_delete`}
                        style={styles.key}
                        onPress={this.onDeletePress}
                        disabled={this.state.pin.length === 0}
                    >
                        <Text style={UITextStyle.primaryCaptionMedium}>{UILocalized.Delete}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        const { testID } = this.props;
        const testIDProp = testID ? { testID } : null;
        return (
            <View
                {...testIDProp}
                style={[UIStyle.fullWidthCenterContainer, UIStyle.flex]}
            >
                <View style={[UIStyle.flexJustifyCenter, UIStyle.alignCenter]}>
                    {this.renderLabel()}
                    {this.renderIndicator()}
                    {this.renderDescription()}
                </View>
                {this.renderKeyboard()}
            </View>
        );
    }
}
