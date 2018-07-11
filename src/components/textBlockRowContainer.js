import React, { Component } from 'react';
import TextBlockRow from './textBlockRow'
import TextBlockDisplay from './textBlockDisplay'
import * as TextBlockRowActions from '../actions/textBlockRowActions'

class TextBlockRowContainer extends Component {
    constructor() {
        super();
        this.state = {
            textBlockValues: [],
            textBlockRows: 4
        }
    }

    onTextBlockSelected(text) {
        this.setState((prevState) => {
            return {
                textBlockValues: [...prevState.textBlockValues, text],
                textBlockRows: prevState.textBlockRows - 1
            };
        });
    }

    componentDidUpdate() {
        TextBlockRowActions.processTextBlock(this.state.textBlockValues);
    }

    initializeBlockRows() {
        var rows = [];
        const { textBlockRows } = this.state;
        for (var i = 0; i < textBlockRows; i++) {
            rows.push(
                <div>
                    <TextBlockRow key={`row${i}`} textBlockSelected={this.onTextBlockSelected.bind(this)} />
                    <br />
                </div>);
        }

        return rows;
    }

    displaySelectedTextBlocks() {
        let { textBlockValues } = this.state;
        return textBlockValues.map(textBlockValue => {
            return <div key={`row${textBlockValue}`}>{textBlockValues}</div>
        });
    }

    render() {
        const { textBlockValues } = this.state;
        return (
            <div>
                {this.initializeBlockRows()}
                <br />
                <TextBlockDisplay textBlockValues={textBlockValues} />
            </div>)
    }
}

export default TextBlockRowContainer;