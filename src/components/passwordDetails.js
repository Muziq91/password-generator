import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'office-ui-fabric-react/lib/Slider';

const PasswordDetails = function (props) {
    const { passwordSize, symbolSize } = props;
    return (
        <div className="ms-Grid-row row">
            <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                <Slider
                    label="Password Size:"
                    min={12}
                    max={24}
                    step={1}
                    value={passwordSize}
                    onChange={(value) => props.onPasswordSizeChange(value)}
                    showValue={true} />
            </div>
            <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6">
                <Slider
                    label="Number of symbols (!@#):"
                    min={3}
                    max={8}
                    step={1}
                    value={symbolSize}
                    onChange={(value) => props.onSymbolSizeChange(value)}
                    showValue={true} />
            </div>
        </div>)

}

PasswordDetails.propTypes = {
    passwordSize: PropTypes.number.isRequired,
    symbolSize: PropTypes.number.isRequired,
    onPasswordSizeChange: PropTypes.func.isRequired,
    onSymbolSizeChange: PropTypes.func.isRequired
}

export default PasswordDetails;