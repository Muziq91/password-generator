import React, { Component } from 'react';
import * as TextBlockRowActions from '../actions/textBlockRowActions'
import TextBlockRowCreationStore from '../stores/textBlockRowCreationStore'
import * as Utils from '../utils';
import TextBlock from './textBlock';
import PropTypes from 'prop-types';

class TextBlockRow extends Component {

    constructor() {
        super();
        this._textBlockRowCreationStore = new TextBlockRowCreationStore();
        this.state = {
            blockRowText: []
        }
        this._onTextBlockClicked = this._onTextBlockClicked.bind(this)
        this._onTextBlockChange = this._onTextBlockChange.bind(this);
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

    _onTextBlockChange() {
        this.setState({
            blockRowText: this._textBlockRowCreationStore.getTextBlock()
        })
    }

    _onTextBlockClicked(text) {
        this.props.textBlockSelected(text);
    }

    initializeTextBlocks() {
        const { blockRowText } = this.state;

        return (
            <div className="ms-Grid-row row">
                {blockRowText.map(row => {
                    return (
                        <TextBlock key={Utils.getUniqueId()}
                            text={row}
                            onTextBlockClicked={this._onTextBlockClicked} />)
                })}
            </div>);
    }

    render() { return this.initializeTextBlocks() }
}

TextBlockRow.propTypes = { textBlockSelected: PropTypes.func.isRequired }

export default TextBlockRow;