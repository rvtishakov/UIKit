import React from 'react';
import PropTypes from 'prop-types';

import { Platform, View, Modal, StyleSheet, TouchableWithoutFeedback, FlatList, Animated } from 'react-native';

import UIColor from '../../../helpers/UIColor';
import UIConstant from '../../../helpers/UIConstant';
import UILocalized from '../../../helpers/UILocalized';
import UIStyle from '../../../helpers/UIStyle';
import UIComponent from '../../UIComponent';

import MenuItem from './MenuItem';

const styles = StyleSheet.create({
    container: {
        backgroundColor: UIColor.overlay60(),
        justifyContent: 'flex-end',
    },
    downMenu: {
        position: 'absolute',
        backgroundColor: 'white',
        left: UIConstant.contentOffset(),
        right: UIConstant.contentOffset(),
        bottom: UIConstant.contentOffset(),
        borderRadius: UIConstant.borderRadius(),
        paddingHorizontal: UIConstant.contentOffset(),
    },
});

let masterRef = null;

class UIActionSheet extends UIComponent {
    static show(menuItemsList, needCancelItem, onCancelCallback) {
        if (masterRef) {
            masterRef.show(menuItemsList, needCancelItem, onCancelCallback);
        }
    }

    // constructor
    constructor(props) {
        super(props);
        this.menuItemsList = [];
        this.needCancelItem = true;
        this.onCancelCallback = () => {};

        this.state = {
            marginBottom: new Animated.Value(-this.calculateHeight()),
            modalVisible: false,
        };
    }

    componentDidMount() {
        super.componentDidMount();
        if (this.props.masterActionSheet) {
            masterRef = this;
        }
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        if (this.props.masterActionSheet) {
            masterRef = null;
        }
    }

    // Events

    // Getters
    getMarginBottom() {
        return this.state.marginBottom;
    }

    getModalVisible() {
        return this.state.modalVisible;
    }

    // Setters
    setModalVisible(modalVisible, callback) {
        this.setStateSafely({
            modalVisible,
        }, callback);
    }

    // Actions
    show(menuItemsList = [], needCancelItem = true, onCancelCallback = () => {}) {
        if (this.props.masterActionSheet) {
            this.menuItemsList = menuItemsList;
            this.needCancelItem = needCancelItem;
            this.onCancelCallback = onCancelCallback;
        } else {
            this.menuItemsList = this.props.menuItemsList;
            this.needCancelItem = this.props.needCancelItem;
            this.onCancelCallback = this.props.onCancelCallback;
        }
        this.setModalVisible(true, () => {
            Animated.spring(this.state.marginBottom, {
                toValue: UIConstant.contentOffset(),
            }).start();
        });
    }

    hide(callback) {
        Animated.timing(this.state.marginBottom, {
            toValue: -this.calculateHeight(),
            duration: UIConstant.animationDuration(),
        }).start(() => {
            this.setModalVisible(false, () => {
                setTimeout(() => {
                    if (callback) {
                        callback();
                    }
                }, 100); // Timeout is required!
            });
        });
    }

    calculateHeight() {
        const height = UIConstant.actionSheetItemHeight();
        const numberItems = this.menuItemsList.length;
        const actionSheetHeight = height * (numberItems + (this.needCancelItem ? 1 : 0));
        return actionSheetHeight + UIConstant.contentOffset();
    }

    // Render
    renderCancelItem() {
        if (!this.needCancelItem) {
            return null;
        }
        return (
            <MenuItem
                title={UILocalized.Cancel}
                onPress={() => this.hide(() => this.onCancelCallback())}
            />
        );
    }

    renderMenuItem(item) {
        return (
            <MenuItem
                {...item}
                onPress={() => this.hide(() => item.onPress())}
                textStyle={{ color: UIColor.primary() }}
            />
        );
    }

    renderContainer() {
        return (
            <TouchableWithoutFeedback onPress={() => this.hide(() => this.onCancelCallback())}>
                <View style={[UIStyle.absoluteFillObject, styles.container]}>
                    <Animated.View
                        style={[
                            UIStyle.bottomScreenContainer,
                            styles.downMenu,
                            { bottom: this.getMarginBottom() },
                        ]}
                    >
                        <FlatList
                            data={this.menuItemsList}
                            renderItem={({ item }) => this.renderMenuItem(item)}
                            scrollEnabled={false}
                        />
                        {this.renderCancelItem()}
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    render() {
        if (!this.getModalVisible()) {
            return null;
        }
        if (Platform.OS === 'web') {
            return this.renderContainer();
        }
        return (
            <Modal
                animationType="fade"
                transparent
                visible={this.getModalVisible()}
            >
                {this.renderContainer()}
            </Modal>
        );
    }
}

export default UIActionSheet;

UIActionSheet.defaultProps = {
    masterActionSheet: true,
    menuItemsList: [],
    needCancelItem: true,
    onCancelCallback: () => {},
};

UIActionSheet.propTypes = {
    menuItemsList: PropTypes.arrayOf(Object),
    needCancelItem: PropTypes.bool,
    onCancelCallback: PropTypes.func,
    masterActionSheet: PropTypes.bool,
};
