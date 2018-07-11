import React from 'react';
import PropTypes from 'prop-types';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';

const TextBlockDisplayRefresh = function (props) {
    return (
        <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 action-button-display-refresh ms-font-xxl" >
            <ActionButton
                data-automation-id="Refresh text blocks"
                iconProps={{ iconName: 'Refresh' }}
                onClick={() => props.refreshTextBlocksClick()}>
                Refresh
                </ActionButton>
        </div >);
}

TextBlockDisplayRefresh.propTypes = {
    refreshTextBlocksClick: PropTypes.func.isRequired
}

export default TextBlockDisplayRefresh;