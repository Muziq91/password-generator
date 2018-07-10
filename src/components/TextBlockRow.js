import React, { Component } from 'react';
import * as TextBlockRowActions from '../actions/TextBlockRowActions'
import TextBlockRowStore from '../stores/TextBlockRowStore'
import TextBlock from './TextBlock';
import PropTypes from 'prop-types';

class TextBlockRow extends Component {

    constructor() {
        super();
        this._textBlockRowStore = new TextBlockRowStore();
        this.state = {
            blockRowText: []
        }
        this._onTextBlockChange = this._onTextBlockChange.bind(this);
    }

    _onTextBlockChange() {
        this.setState({
            blockRowText: this._textBlockRowStore.getTextBlock()
        })
    }

    componentWillMount() {
        this._textBlockRowStore.addChangeListener(this._onTextBlockChange)
    }

    componentDidMount() {
        TextBlockRowActions.createTextBlock();
    }

    componentWillUnmount() {
        _textBlockRowStore.removeChangeListener(this._onTextBlockChange)
    }

    onTextBlockClicked(text) {
        TextBlockRowActions.createTextBlock();
    }

    initializeTextBlocks() {
        var textBlocks = [];
        const { blockRowText } = this.state;

        textBlocks = blockRowText.map(row => {

            return (<TextBlock key={row}
                text={row}
                onTextBlockClicked={this.onTextBlockClicked.bind(this)} />)
        });

        return (<div className="ms-Grid-row row"> {textBlocks} </div>);
    }

    render() { return this.initializeTextBlocks() }
}

TextBlockRow.propTypes = { textBlockSelected: PropTypes.func.isRequired }

export default TextBlockRow;