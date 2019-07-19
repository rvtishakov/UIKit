// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

import type { NativeMethodsMixinType } from 'react-native/Libraries/Renderer/shims/ReactNativeTypes';

import UIConstant from '../../../helpers/UIConstant';
import UIStyle from '../../../helpers/UIStyle';
import UIComponent from '../../UIComponent';
import UILabel from '../../text/UILabel';

type Props = {
    balance: string,
    separator: string,
    description: string,
    tokenSymbol: string,
    testID?: string,
    cacheKey?: string,
    textStyle?: ViewStyleProp,
};

type State = {
    balance: string,
    auxBalance: string,
};

const styles = StyleSheet.create({
    auxBalance: {
        opacity: 0,
        zIndex: -1,
    },
});

const cachedBalance = {};

export default class UIBalanceView extends UIComponent<Props, State> {
    static defaultProps = {
        balance: '',
        description: '',
        tokenSymbol: '',
        textStyle: UIStyle.Text.titleLight(),
    };

    // constructor
    balance: ?string;
    constructor(props: Props) {
        super(props);

        this.state = {
            balance: this.getCachedBalance(),
            auxBalance: '',
        };

        this.balance = null;
    }

    componentDidUpdate() {
        const { balance, separator } = this.props;
        if (balance !== this.balance) {
            this.balance = balance;
            const formattedBalance = balance.split(separator).length > 1
                ? balance
                : `${balance}${separator}${'0'.repeat(UIConstant.maxDecimalDigits())}`;
            this.setAuxBalance(formattedBalance, () => { // start component layout and measuring
                this.measureAuxBalanceText(formattedBalance);
            });
        }
    }

    // Events
    auxBalanceLineHeight: ?number;
    onAuxBalanceLayout = (e: any) => {
        const { height } = e.nativeEvent.layout;
        if (!this.auxBalanceLineHeight) {
            this.auxBalanceLineHeight = height;
        }
    };

    // Setters
    setBalance(balance: string) {
        this.setCachedBalance(balance);
        this.setStateSafely({ balance });
    }

    setAuxBalance(auxBalance: string, callback?: () => void) {
        this.setStateSafely({ auxBalance }, callback);
    }

    // Getters
    getSeparator(): string {
        return this.props.separator || '.';
    }

    getBalance(): string {
        return this.state.balance
            || `0${this.getSeparator()}${'0'.repeat(UIConstant.maxDecimalDigits())}`;
    }

    getAuxBalance(): string {
        return this.state.auxBalance || this.getBalance();
    }

    getDescription(): string {
        return this.props.description || '';
    }

    getTokenSymbol(): string {
        return this.props.tokenSymbol || '';
    }

    getTestID(): ?string {
        return this.props.testID;
    }

    getCacheKey(): ?string {
        return this.props.cacheKey;
    }

    // Processing
    processAuxBalanceHeight(height: number, auxBalance: string) {
        if (!this.auxBalanceLineHeight) {
            this.auxBalanceLineHeight = height;
        }
        if (this.auxBalanceLineHeight < height) {
            const truncatedAuxBalance = auxBalance.slice(0, -1); // reduce balance size
            this.setAuxBalance(truncatedAuxBalance, () => {
                this.measureAuxBalanceText(truncatedAuxBalance);
            });
        } else {
            this.setBalance(auxBalance);
        }
    }

    // Actions
    measureAuxBalanceText(auxBalance: string) {
        setTimeout(() => {
            if (!this.auxBalanceText) {
                return;
            }
            this.auxBalanceText.measure((relX, relY, w, h) => {
                this.processAuxBalanceHeight(h, auxBalance);
            });
        }, 0);
    }

    setCachedBalance(balance: string) {
        const key = this.getCacheKey();
        if (key) {
            cachedBalance[key] = balance;
        }
    }

    getCachedBalance(): string {
        const key = this.getCacheKey();
        return (key && cachedBalance[key]) || '';
    }

    // Render
    renderBalance() {
        const balance = this.getBalance();
        const separator = this.getSeparator();
        const stringParts = balance.split(separator);
        return (
            <Text
                style={[UIStyle.Text.primary(), this.props.textStyle]}
                numberOfLines={1}
            >
                {stringParts[0]}
                <Text style={UIStyle.Text.tertiary()}>
                    {`${separator}${stringParts[1]} ${this.getTokenSymbol()}`}
                </Text>
            </Text>
        );
    }

    /* eslint-disable-next-line */
    auxBalanceText: ?(React$Component<*> & NativeMethodsMixinType);
    renderAuxBalance() {
        const auxBalance = this.getAuxBalance();
        return (
            <Text
                ref={(component) => { this.auxBalanceText = component; }}
                style={[
                    UIStyle.topScreenContainer,
                    UIStyle.Text.primaryTitleLight(),
                    styles.auxBalance,
                ]}
                onLayout={this.onAuxBalanceLayout}
                numberOfLines={2}
            >
                {`${auxBalance} ${this.getTokenSymbol()}`}
            </Text>
        );
    }

    renderDescription() {
        return (<UILabel
            style={UIStyle.Margin.topSmall()}
            text={this.getDescription()}
            role={UILabel.Role.CaptionTertiary}
        />);
    }

    render() {
        const testID = this.getTestID();
        const testIDProp = testID ? { testID } : null;
        return (
            <View {...testIDProp} >
                {this.renderBalance()}
                {this.renderAuxBalance()}
                {this.renderDescription()}
            </View>
        );
    }
}
