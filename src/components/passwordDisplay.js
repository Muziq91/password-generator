import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'office-ui-fabric-react/lib/Label';

const PasswordDisplay = function (props) {

    const { text } = props;

    return (
        <div className="ms-Grid-col ms-sm10 ms-md10 ms-lg10 ms-font-xxl">
            <Label> {text}</Label>
        </div>
    )
}

PasswordDisplay.propTypes = {
    text: PropTypes.string.isRequired
}

export default PasswordDisplay;