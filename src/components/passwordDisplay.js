import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'office-ui-fabric-react/lib/Label';

const PasswordDisplay = function (props) {

    const { text } = props;

    return (
        <div className="password-display ms-font-xxl">
            <Label> {text}</Label>
        </div>
    )
}

PasswordDisplay.propTypes = {
    text: PropTypes.string.isRequired
}

export default PasswordDisplay;