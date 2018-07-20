import React, { Component } from 'react';
import TextBlockRow from './textBlockRow';
import TextBlockReset from './textBlockReset';
import TextBlockRefresh from './textBlockRefresh';
import TextBlockDisplay from './textBlockDisplay';
import TotalPasswordsGenerated from './totalPasswordsGenerated'
import PasswordDetails from './passwordDetails';
import * as TextBlockRowActions from '../actions/textBlockRowActions';
import * as Utils from '../utils';
import PropTypes from 'prop-types';

class TextBlocksCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textBlockValues: [],
            textBlockRows: 4,
            passwordSize: 12,
            symbolSize: 3,
            totalNumberOfPasswords: 1
        }

        this._onResetTextBlocksClick = this._onResetTextBlocksClick.bind(this);
        this._onRefreshTextBlocksClick = this._onRefreshTextBlocksClick.bind(this);
        this._onTextBlockSelected = this._onTextBlockSelected.bind(this);
        this._onTextBlockRemoved = this._onTextBlockRemoved.bind(this);
        this._onPasswordSizeChange = this._onPasswordSizeChange.bind(this);
        this._onSymbolSizeChange = this._onSymbolSizeChange.bind(this);
        this._onTotalNumberOfPasswordsChange = this._onTotalNumberOfPasswordsChange.bind(this);
        this._processTextBlock = this._processTextBlock.bind(this);
    }

    _onResetTextBlocksClick() {
        this.setState((prevState) => {
            return {
                textBlockValues: [],
                textBlockRows: 4,
                passwordSize: 12,
                symbolSize: 3,
                totalNumberOfPasswords: 1
            };
        });

        this.props.textBlocksReset();
    }

    _onRefreshTextBlocksClick() {
        this._processTextBlock();
    }

    _onTextBlockSelected(text) {
        this.setState((prevState) => {
            return {
                textBlockValues: [...prevState.textBlockValues, text],
                textBlockRows: prevState.textBlockRows - 1
            };
        }, this._processTextBlock);
    }

    _onTextBlockRemoved(text) {
        this.setState((prevState) => {
            const index = prevState.textBlockValues.indexOf(text);
            return {
                textBlockValues: prevState.textBlockValues.filter((_, i) => i !== index),
                textBlockRows: prevState.textBlockRows + 1
            };
        }, this._processTextBlock);
    }

    _onPasswordSizeChange(value) {
        this.setState((prevState) => {
            return {
                passwordSize: value
            };
        }, this._processTextBlock);
    }

    _onSymbolSizeChange(value) {
        this.setState((prevState) => {
            return {
                symbolSize: value
            };
        }, this._processTextBlock);
    }

    _onTotalNumberOfPasswordsChange(value) {
        this.setState((prevState) => {
            return {
                totalNumberOfPasswords: value
            };
        }, this._processTextBlock);
    }

    _processTextBlock() {
        const { textBlockValues, passwordSize, symbolSize, totalNumberOfPasswords } = this.state;
        TextBlockRowActions.processTextBlock(textBlockValues, passwordSize, symbolSize, totalNumberOfPasswords);
    }

    _initializeBlockRows() {
        var rows = [];
        const { textBlockRows } = this.state;
        for (var i = 0; i < textBlockRows; i++) {
            rows.push(
                <div key={Utils.getUniqueId()}>
                    <TextBlockRow textBlockSelected={this._onTextBlockSelected} />
                    <br />
                </div>);
        }

        return rows;
    }

    render() {
        const { textBlockValues, passwordSize, symbolSize, totalNumberOfPasswords } = this.state;
        return (
            <div>
                <br />
                <div className="ms-Grid-row row">
                    <TextBlockRefresh refreshTextBlocksClick={this._onRefreshTextBlocksClick} />
                    <TextBlockReset resetTextBlocksClick={this._onResetTextBlocksClick} />
                </div >
                <br />
                <PasswordDetails
                    passwordSize={passwordSize}
                    symbolSize={symbolSize}
                    onPasswordSizeChange={this._onPasswordSizeChange}
                    onSymbolSizeChange={this._onSymbolSizeChange} />
                <br />
                {this._initializeBlockRows()}
                <br />
                <TotalPasswordsGenerated onTotalNumberOfPasswordsChange={this._onTotalNumberOfPasswordsChange}
                    totalNumberOfPasswords={totalNumberOfPasswords} />
                <br />
                <TextBlockDisplay textBlockValues={textBlockValues}
                    textBlockRemoved={this._onTextBlockRemoved} />
            </div>)
    }
}

TextBlocksCreator.propTypes = { textBlocksReset: PropTypes.func.isRequired }

export default TextBlocksCreator;