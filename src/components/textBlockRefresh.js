import React from 'react';
import PropTypes from 'prop-types';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';

const TextBlockRefresh = function (props) {
    return (        
            <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 ms-font-xxl" >
                <ActionButton
                    data-automation-id="Refresh text blocks"
                    iconProps={{ iconName: 'Refresh' }}
                    onClick={() => props.refreshTextBlocksClick()}>
                    Refresh
                </ActionButton>
            </div >
        );
}

TextBlockRefresh.propTypes = {
    refreshTextBlocksClick: PropTypes.func.isRequired
}

export default TextBlockRefresh;