import React, { Component } from 'react';
import TextBlockRow from './textBlockRow'
import TextBlockRefresh from './textBlockRefresh'
import TextBlockDisplay from './textBlockDisplay'
import * as TextBlockRowActions from '../actions/textBlockRowActions'
import * as Utils from '../utils';

class TextBlocksCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textBlockValues: [],
            textBlockRows: 4
        }

        this._onRefreshTextBlocksClick = this._onRefreshTextBlocksClick.bind(this);
        this._onTextBlockSelected = this._onTextBlockSelected.bind(this);
        this._onTextBlockRemoved = this._onTextBlockRemoved.bind(this);
    }

    _onRefreshTextBlocksClick() {
        this.setState((prevState) => {
            return {
                textBlockValues: [],
                textBlockRows: 4
            };
        });
    }

    _onTextBlockSelected(text) {
        this.setState((prevState) => {
            return {
                textBlockValues: [...prevState.textBlockValues, text],
                textBlockRows: prevState.textBlockRows - 1
            };
        });
    }

    _onTextBlockRemoved(text) {
        this.setState((prevState) => {
            const index = prevState.textBlockValues.indexOf(text);
            return {
                textBlockValues: prevState.textBlockValues.filter((_, i) => i !== index),
                textBlockRows: prevState.textBlockRows + 1
            };
        });
    }

    componentDidUpdate() {
        TextBlockRowActions.processTextBlock(this.state.textBlockValues);
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
        const { textBlockValues } = this.state;
        return (
            <div>
                <div className="ms-Grid-row row">
                    <TextBlockRefresh refreshTextBlocksClick={this._onRefreshTextBlocksClick} />
                </div>
                <br />
                {this._initializeBlockRows()}
                <br />
                <div className="ms-Grid-row row">
                    <TextBlockDisplay textBlockValues={textBlockValues}
                        textBlockRemoved={this._onTextBlockRemoved} />
                </div>
            </div>)
    }
}

export default TextBlocksCreator;