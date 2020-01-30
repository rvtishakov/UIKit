import React from 'react';
import PropTypes from 'prop-types';
import StylePropType from 'react-style-proptype';
import { StyleSheet, TextInput, Text, View, Platform } from 'react-native';

import UIStyle from '../../helpers/UIStyle';
import UITextStyle from '../../helpers/UITextStyle';
import UIColor from '../../helpers/UIColor';
import UIComponent from '../../components/UIComponent';

const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 32,
    },
    beginningTag: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    textInput: {
        height: 32,
        padding: 0,
        zIndex: 1,
        lineHeight: null,
    },
    androidInputAlignment: {
        textAlign: 'left',
    },
});

export default class UIDialogTextInput extends UIComponent {
    // Events
    onChangeText = text => {
        const { beginningTag, tagSeparator, onChangeText } = this.props;
        let value = text;
        if (beginningTag && value.startsWith(beginningTag)) {
            value = value.substring(beginningTag.length);
        }
        if (tagSeparator && value.startsWith(tagSeparator)) {
            value = value.substring(tagSeparator.length);
        }
        onChangeText(value);
    };

    // Getters
    getTextAlign() {
        return { textAlign: this.props.textAlign };
    }

    getTextInputAlign() {
        // FIXME(savelichalex): `textAlign: center` doesn't work good on Android for now
        // https://github.com/facebook/react-native/issues/27658
        // https://github.com/facebook/react-native/issues/26512
        // I couldn't find a fix that could be applied from our side
        // So for now `textAlign: left` is looks like the best available solution
        if (Platform.OS === 'android' && this.props.textAlign === 'center') {
            return styles.androidInputAlignment;
        }
        return this.getTextAlign();
    }

    getBeginningTagStyle() {
        return this.props.textAlign === 'center' ? styles.beginningTag : { flex: 0 };
    }

    // Actions
    focus() {
        this.textInput.focus();
    }

    blur() {
        this.textInput.blur();
    }

    // Render
    renderBeginningTagExpander() {
        if (this.props.textAlign === 'left') {
            return null;
        }
        const {
            beginningTag, tagSeparator, placeholder,
        } = this.props;
        return (
            <Text style={[UITextStyle.primarySubtitleLight, { color: 'transparent' }]}>
                {`${tagSeparator}${placeholder.trim()}${tagSeparator}${tagSeparator}${beginningTag}`}
            </Text>
        );
    }

    renderBeginningTag() {
        const {
            value, beginningTag, tagSeparator, textStyle,
        } = this.props;
        if (value.length || !beginningTag) {
            return null;
        }
        return (
            <Text
                style={[
                    UITextStyle.primarySubtitleLight,
                    styles.textInput,
                    textStyle,
                    this.getTextAlign(),
                    this.getBeginningTagStyle(),
                ]}
            >
                {`${beginningTag}${tagSeparator}`}
                {this.renderBeginningTagExpander()}
            </Text>
        );
    }

    render() {
        const {
            beginningTag, tagSeparator, placeholder, value, editable,
            autoFocus, autoCapitalize, maxLength, returnKeyType, keyboardType,
            needBorderBottom, style, textStyle, secureTextEntry,
            onSubmitEditing,
        } = this.props;
        const input = value ? `${beginningTag}${value}` : ''; // ${tagSeparator} between was removed
        const returnKeyTypeProp = returnKeyType ? { returnKeyType } : null;
        const underlineColorAndroid = secureTextEntry ? null : { underlineColorAndroid: "transparent" };
        return (
            <View
                style={[
                    styles.inputView,
                    style,
                    needBorderBottom ? UIStyle.borderBottom : null,
                ]}
            >
                {this.renderBeginningTag()}
                <TextInput
                    ref={(component) => { this.textInput = component; }}
                    {...underlineColorAndroid}
                    autoCapitalize={autoCapitalize}
                    secureTextEntry={secureTextEntry}
                    autoCorrect={false}
                    keyboardType={keyboardType}
                    {...returnKeyTypeProp}
                    style={[
                        input.length
                            ? UITextStyle.primarySubtitleRegular
                            : UITextStyle.primarySubtitleLight,
                        styles.textInput,
                        textStyle,
                        this.getTextAlign(),
                    ]}
                    placeholderTextColor={UIColor.textTertiary()}
                    selectionColor={UIColor.primary()}
                    placeholder={`${tagSeparator}${placeholder}${tagSeparator}`}
                    value={input}
                    editable={editable}
                    autoFocus={autoFocus}
                    maxLength={maxLength}
                    onChangeText={this.onChangeText}
                    onSubmitEditing={onSubmitEditing}
                />
            </View>
        );
    }
}

UIDialogTextInput.defaultProps = {
    beginningTag: '',
    tagSeparator: '',
    placeholder: '',
    value: '',
    keyboardType: 'default',
    returnKeyType: null,
    autoCapitalize: 'none',
    textAlign: 'left',
    needBorderBottom: false,
    style: null,
    textStyle: null,
    secureTextEntry: false,
    editable: true,
    autoFocus: false,
    maxLength: null,
    onChangeText: () => {},
    onSubmitEditing: () => {},
};

UIDialogTextInput.propTypes = {
    beginningTag: PropTypes.string,
    tagSeparator: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    keyboardType: PropTypes.string,
    returnKeyType: PropTypes.string,
    autoCapitalize: PropTypes.string,
    textAlign: PropTypes.oneOf(['left', 'center']),
    needBorderBottom: PropTypes.bool,
    style: StylePropType,
    textStyle: StylePropType,
    secureTextEntry: PropTypes.bool,
    editable: PropTypes.bool,
    autoFocus: PropTypes.bool,
    maxLength: PropTypes.number,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
};
