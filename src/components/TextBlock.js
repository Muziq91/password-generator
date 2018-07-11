import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const TextBlock = function (props) {

    const { text } = props;

    return (
        <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
            <PrimaryButton
                data-automation-id="text block"
                ariaDescription="This is a text block."
                onClick={() => props.onTextBlockClicked(text)}
                text={text} />
        </div>)
}

TextBlock.propTypes = {
    onTextBlockClicked: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default TextBlock;