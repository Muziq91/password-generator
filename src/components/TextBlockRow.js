import React, { Component } from 'react';
import * as TextBlockRowActions from '../actions/textBlockRowActions'
import TextBlockRowCreationStore from '../stores/textBlockRowCreationStore'
import TextBlock from './textBlock';
import PropTypes from 'prop-types';

class TextBlockRow extends Component {

    constructor() {
        super();
        this._textBlockRowCreationStore = new TextBlockRowCreationStore();
        this.state = {
            blockRowText: []
        }
        this._onTextBlockChange = this._onTextBlockChange.bind(this);
    }

    _onTextBlockChange() {
        this.setState({
            blockRowText: this._textBlockRowCreationStore.getTextBlock()
        })
    }

    componentWillMount() {
        this._textBlockRowCreationStore.addChangeListener(this._onTextBlockChange)
    }

    componentDidMount() {
        TextBlockRowActions.createTextBlock();
    }

    componentWillUnmount() {
        this._textBlockRowCreationStore.removeChangeListener(this._onTextBlockChange)
    }

    onTextBlockClicked(text) {
        this.props.textBlockSelected(text);
        TextBlockRowActions.createTextBlock();
    }

    initializeTextBlocks() {
        const { blockRowText } = this.state;

        return (
            <div className="ms-Grid-row row">
                {blockRowText.map(row => {
                    return (
                        <TextBlock key={row}
                            text={row}
                            onTextBlockClicked={this.onTextBlockClicked.bind(this)} />)
                })}
            </div>);
    }

    render() { return this.initializeTextBlocks() }
}

TextBlockRow.propTypes = { textBlockSelected: PropTypes.func.isRequired }

export default TextBlockRow;