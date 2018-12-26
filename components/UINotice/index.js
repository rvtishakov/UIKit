import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated, Platform } from 'react-native';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';

import UIConstant from '../../helpers/UIConstant';
import UIColor from '../../helpers/UIColor';
import UIFont from '../../helpers/UIFont';
import UIDevice from '../../helpers/UIDevice';
import UIStyle from '../../helpers/UIStyle';

import icoCloseBlue from '../../assets/ico-close/close-blue.png';
import icoCloseGrey from '../../assets/ico-close/close-grey.png';

const hiddenContainerWidth = UIConstant.noticeWidth() + (2 * UIConstant.contentOffset());

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    hiddenContainer: {
        overflow: 'hidden',
        width: hiddenContainerWidth,
        paddingVertical: UIConstant.contentOffset(),
    },
    noticeStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: UIConstant.noticeWidth(),
        padding: UIConstant.contentOffset(),
        paddingHorizontal: UIConstant.contentOffset(),
        borderRadius: UIConstant.smallBorderRadius(),
        backgroundColor: UIColor.white(),
        ...UIConstant.cardShadow(),
    },
    contentContainer: {
        width: UIConstant.noticeWidth() - (3 * UIConstant.contentOffset()) - UIConstant.iconSize(),
        marginRight: UIConstant.contentOffset(),
    },
    messageStyle: {
        color: UIColor.grey(),
        ...UIFont.captionRegular(),
    },
    actionTitleStyle: {
        color: UIColor.primary(),
        ...UIFont.smallMedium(),
    },
});

let masterRef = null;

export default class UINotice extends Component {
    static Type = {
        Default: 'default',
        Alert: 'alert',
    }

    static Place = {
        Top: 'top',
        Bottom: 'bottom',
    }

    static showMessage(args) {
        if (typeof args === 'string') {
            masterRef.showMessage({ message: args });
        } else {
            masterRef.showMessage(args);
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            marginLeft: new Animated.Value(hiddenContainerWidth + 10),
        };
    }

    componentDidMount() {
        masterRef = this;
    }

    componentWillUnmount() {
        masterRef = null;
    }

    // Setters
    setMarginLeft(marginLeft, callback) {
        this.setState({ marginLeft }, callback);
    }

    // Getters
    getMarginLeft() {
        return this.state.marginLeft;
    }

    // Actions
    showMessage({
        title, subComponent, message, action, placement = UINotice.Place.Bottom, autoHide = true,
    }) {
        this.subComponent = subComponent || null;
        this.title = title || '';
        this.message = message || '';
        this.action = action || { title: '', onPress: () => {} };
        showMessage({
            position: placement,
            animated: false,
            message: '', // unused but required param
            duration: 5000,
            autoHide,
        });
        this.animateOpening();
    }

    animateOpening() {
        this.setMarginLeft(new Animated.Value(hiddenContainerWidth + 10), () => {
            Animated.spring(this.state.marginLeft, {
                toValue: UIConstant.contentOffset(),
                duration: UIConstant.animationDuration(),
            }).start();
        });
    }

    closeNotice() {
        this.animateClosing();
    }

    animateClosing() {
        Animated.timing(this.state.marginLeft, {
            toValue: hiddenContainerWidth + 10,
            duration: UIConstant.animationDuration(),
        }).start(() => hideMessage());
    }

    // Render
    renderCloseButton() {
        const icoClose = this.action.title ? icoCloseGrey : icoCloseBlue;
        return (
            <TouchableOpacity onPress={() => this.closeNotice()} >
                <Image source={icoClose} />
            </TouchableOpacity>
        );
    }

    renderHeader() {
        const title = (
            <Text style={UIStyle.textPrimaryBodyBold}>
                {this.title}
            </Text>
        );
        const titleComponent = this.title ? title : null;
        const subView = (
            <View style={{ marginRight: UIConstant.normalContentOffset() }}>
                {this.subComponent}
            </View>
        );
        const subComponent = this.subComponent ? subView : null;
        if (titleComponent) {
            return (
                <View style={[UIStyle.centerLeftContainer, UIStyle.marginBottomSmall]}>
                    {subComponent}
                    {titleComponent}
                </View>
            );
        }
        return null;
    }

    renderActionButton() {
        if (this.action.title) {
            return (
                <TouchableOpacity
                    style={{ marginTop: UIConstant.largeContentOffset()}}
                    onPress={() => {
                        this.action.onPress();
                        this.closeNotice();
                    }}
                >
                    <Text style={styles.actionTitleStyle}>{this.action.title}</Text>
                </TouchableOpacity>
            );
        }
        return null;
    }

    renderMessageComponent() {
        const margin = { marginLeft: this.getMarginLeft() };
        const alignItems = Platform.OS === 'web' || UIDevice.isTablet() ? 'start' : 'flex-end';
        
        return (
            <View style={[styles.container, { alignItems }]}>
                <View style={styles.hiddenContainer}>
                    <Animated.View style={[styles.noticeStyle, margin]}>
                        <View style={styles.contentContainer}>
                            {this.renderHeader()}
                            <Text style={styles.messageStyle}>
                                {this.message}
                            </Text>
                            {this.renderActionButton()}
                        </View>
                        {this.renderCloseButton()}
                    </Animated.View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <FlashMessage
                position="bottom"
                MessageComponent={() => this.renderMessageComponent()}
            />
        );
    }
}
