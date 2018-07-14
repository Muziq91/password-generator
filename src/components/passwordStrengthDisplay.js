import React from 'react';
import PropTypes from 'prop-types';
import ReactPasswordStrength from 'react-password-strength'
import * as Utils from '../utils';

const PasswordStrengthDisplay = function (props) {

    const { text } = props;

    return (
        <div key={Utils.getUniqueId()}>
            <ReactPasswordStrength
                className="password-strength"
                minLength={text.length}
                minScore={4}
                scoreWords={['weak', 'okay', 'good', 'strong', 'strongest']}
                defaultValue={text}
                inputProps={{ type: "text" }} />
        </div>
    )
}

PasswordStrengthDisplay.propTypes = {
    text: PropTypes.string.isRequired
}

export default PasswordStrengthDisplay;