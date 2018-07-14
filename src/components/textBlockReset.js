import React from 'react';
import PropTypes from 'prop-types';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';

const TextBlockReset = function (props) {
    return (        
            <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 text-block-reset ms-font-xxl" >
                <ActionButton
                    data-automation-id="Reset text blocks"
                    iconProps={{ iconName: 'Redo' }}
                    onClick={() => props.resetTextBlocksClick()}>
                    Reset
                </ActionButton>
            </div >
        );
}

TextBlockReset.propTypes = {
    resetTextBlocksClick: PropTypes.func.isRequired
}

export default TextBlockReset;