import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated, Platform, Dimensions } from 'react-native';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';

import UIConstant from '../../helpers/UIConstant';
import UIColor from '../../helpers/UIColor';
import UIFont from '../../helpers/UIFont';
import UIDevice from '../../helpers/UIDevice';
import UIStyle from '../../helpers/UIStyle';

import icoCloseBlue from '../../assets/ico-close/close-blue.png';
import icoCloseGrey from '../../assets/ico-close/close-grey.png';

const doubleOffset = 2 * UIConstant.largeContentOffset();
const doubleVisibleOffset = 2 * UIConstant.contentOffset();

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        paddingVertical: UIConstant.largeContentOffset(),
        margin: UIConstant.contentOffset() - UIConstant.largeContentOffset(),
    },
    noticeStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: UIConstant.contentOffset(),
        paddingHorizontal: UIConstant.contentOffset(),
        borderRadius: UIConstant.smallBorderRadius(),
        backgroundColor: UIColor.white(),
        ...UIConstant.cardShadow(),
    },
    contentContainer: {
        flex: 1,
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
            marginLeft: 0,
            pageWidth: 0,
        };
    }

    componentDidMount() {
        masterRef = this;
    }

    componentWillUnmount() {
        masterRef = null;
    }

    // Events
    onWindowContainerLayout(e) {
        const { width } = e.nativeEvent.layout;
        this.setPageWidth(width);
    }

    // Setters
    setMarginLeft(marginLeft, callback) {
        this.setState({ marginLeft }, callback);
    }

    setPageWidth(pageWidth) {
        this.setState({ pageWidth });
    }

    // Getters
    getMarginLeft() {
        return this.state.marginLeft;
    }

    getPageWidth() {
        return this.state.pageWidth;
    }

    getContainerWidth() {
        return Math.min(this.getPageWidth(), UIConstant.noticeWidth() + doubleVisibleOffset);
    }

    // Actions
    showMessage({
        title, subComponent, message, action,
        placement = UINotice.Place.Bottom,
        autoHide = true,
        onCancel = () => {},
    }) {
        this.subComponent = subComponent || null;
        this.title = title || '';
        this.message = message || '';
        this.action = action || { title: '', onPress: () => {} };
        this.onCancel = onCancel;
        showMessage({
            position: placement,
            animated: false,
            message: '', // unused but required param
            duration: 5000,
            autoHide,
        });
        this.animateOpening();
    }

    closeWithCancel() {
        this.onCancel();
        this.animateClosing();
    }

    closeWithAction() {
        this.action.onPress();
        this.animateClosing();
    }

    animateOpening() {
        const containerWidth = this.getContainerWidth();
        this.setMarginLeft(new Animated.Value(containerWidth + UIConstant.contentOffset()), () => {
            Animated.spring(this.state.marginLeft, {
                toValue: UIConstant.largeContentOffset(),
                duration: UIConstant.animationDuration(),
            }).start();
        });
    }

    animateClosing() {
        const containerWidth = this.getContainerWidth();
        Animated.timing(this.state.marginLeft, {
            toValue: containerWidth + UIConstant.contentOffset(),
            duration: UIConstant.animationDuration(),
        }).start(() => hideMessage());
    }

    // Render
    renderCloseButton() {
        const icoClose = this.action.title ? icoCloseGrey : icoCloseBlue;
        return (
            <TouchableOpacity onPress={() => this.closeWithCancel()} >
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
                    style={{ marginTop: UIConstant.largeContentOffset() }}
                    onPress={() => this.closeWithAction()}
                >
                    <Text style={styles.actionTitleStyle}>{this.action.title}</Text>
                </TouchableOpacity>
            );
        }
        return null;
    }

    renderMessageComponent() {
        const alignItems = Platform.OS === 'web' || UIDevice.isTablet() ? 'flex-start' : 'center';
        const marginLeft = this.getMarginLeft();
        const containerWidth = this.getContainerWidth();
        const noticeWidth = containerWidth - doubleOffset;

        return (
            <View
                style={{ alignItems }}
                onLayout={e => this.onWindowContainerLayout(e)}
            >
                <View style={[styles.container, { width: containerWidth }]}>
                    <Animated.View style={[styles.noticeStyle, { width: noticeWidth, marginLeft }]}>
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
