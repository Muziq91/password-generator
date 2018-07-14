import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ActionButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

const CopyPasswordToClipboard = function (props) {

    return (
        <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 text-block-reset ms-font-xxl" >
            <CopyToClipboard text={props.text}>
                <ActionButton
                    data-automation-id="Copy password"
                    iconProps={{ iconName: 'Copy' }}
                    onClick={() => props.passwordTextCopied()}>
                    Copy
                    </ActionButton>
            </CopyToClipboard>
        </div >)
}

CopyPasswordToClipboard.propTypes = {
    passwordTextCopied: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default CopyPasswordToClipboard;