import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ActionButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

const CopyPasswordToClipboard = function (props) {

    const { value, text } = props;

    return (
        <CopyToClipboard text={value}>
            <ActionButton
                data-automation-id="Copy password"
                iconProps={{ iconName: 'Copy' }}
                onClick={() => props.passwordTextCopied()}>
                {text}
            </ActionButton>
        </CopyToClipboard>
    )
}

CopyPasswordToClipboard.propTypes = {
    passwordTextCopied: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CopyPasswordToClipboard;