import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

class TextBlockRow extends Component {

    initializeTextBlocks() {
        var textBlocks = [];
        for (var i = 0; i < 4; i++) {
            textBlocks.push(                
                    <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3"
                         key = {`textBlockColumn${i}`}>
                        <PrimaryButton                            
                            data-automation-id="text block column"
                            ariaDescription="This is a text block column.">
                            RIG
                        </PrimaryButton>
                    </div>);
        }

        return( <div className="ms-Grid-row row"> {textBlocks}</div>)
    };
        
    render() { return this.initializeTextBlocks() }
}
                
TextBlockRow.propTypes = { textBlockSelected: PropTypes.func.isRequired }
                
export default TextBlockRow;