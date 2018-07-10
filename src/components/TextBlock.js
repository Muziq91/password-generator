import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

class TextBlock extends Component {

    constructor() {
        super();
    }

    onTextBlockClicked(text) {
        this.props.onTextBlockClicked(text);
    }

    render() {
        const text = this.props.text;
        return (
            <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                <PrimaryButton
                    data-automation-id="text block"
                    ariaDescription="This is a text block."
                    onClick={this.onTextBlockClicked.bind(this, text)}
                    text={text} />
            </div>)
    }
}

TextBlock.propTypes = {
    onTextBlockClicked: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default TextBlock;