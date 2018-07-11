import React from 'react';
import PropTypes from 'prop-types';
import * as Utils from '../utils';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';

const TextBlockDisplay = function (props) {

    const { textBlockValues } = props;
    return textBlockValues.map(textBlockValue =>
        <div key={Utils.getUniqueId()}
            className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 action-button-display ms-font-xxl">
            <ActionButton
                data-automation-id="remove text block"
                iconProps={{ iconName: 'StatusCircleErrorX' }}
                onClick={() => props.textBlockRemoved(textBlockValue)}>
                {textBlockValue}
            </ActionButton>
        </div>);
}

TextBlockDisplay.propTypes = {
    textBlockValues: PropTypes.array.isRequired,
    textBlockRemoved: PropTypes.func.isRequired
}

export default TextBlockDisplay;