import React, { Component } from 'react';
import TextBlockRow from './textBlockRow'
import TextBlockDisplayRefresh from './textBlockDisplayRefresh'
import TextBlockDisplay from './textBlockDisplay'
import * as TextBlockRowActions from '../actions/textBlockRowActions'
import * as Utils from '../utils';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';

class TextBlockRowContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textBlockValues: [],
            textBlockRows: 4
        }

        this.onRefreshTextBlocksClick = this.onRefreshTextBlocksClick.bind(this);
        this.onTextBlockSelected = this.onTextBlockSelected.bind(this);
        this.onTextBlockRemoved = this.onTextBlockRemoved.bind(this);
    }

    onRefreshTextBlocksClick() {
        this.setState((prevState) => {
            return {
                textBlockValues: [],
                textBlockRows: 4
            };
        });
    }

    onTextBlockSelected(text) {
        this.setState((prevState) => {
            return {
                textBlockValues: [...prevState.textBlockValues, text],
                textBlockRows: prevState.textBlockRows - 1
            };
        });
    }

    onTextBlockRemoved(text) {
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

    initializeBlockRows() {
        var rows = [];
        const { textBlockRows } = this.state;
        for (var i = 0; i < textBlockRows; i++) {
            rows.push(
                <div key={Utils.getUniqueId()}>
                    <TextBlockRow textBlockSelected={this.onTextBlockSelected} />
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
                    <TextBlockDisplayRefresh refreshTextBlocksClick={this.onRefreshTextBlocksClick} />
                </div>
                <br />
                {this.initializeBlockRows()}
                <br />
                <div className="ms-Grid-row row">
                    <TextBlockDisplay textBlockValues={textBlockValues}
                        textBlockRemoved={this.onTextBlockRemoved} />
                </div>
            </div>)
    }
}

export default TextBlockRowContainer;