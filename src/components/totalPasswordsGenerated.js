import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'office-ui-fabric-react/lib/Slider';

const TotalPasswordsGenerated = function (props) {
    const { totalNumberOfPasswords } = props;
    return (
        <div className="ms-Grid-row row">
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                <Slider
                    label="Number of passwords to generate:"
                    min={1}
                    max={100}
                    step={1}
                    value={totalNumberOfPasswords}
                    onChange={(value) => props.onTotalNumberOfPasswordsChange(value)}
                    showValue={true} />
            </div>
        </div>)

}

TotalPasswordsGenerated.propTypes = {
    totalNumberOfPasswords: PropTypes.number.isRequired,
    onTotalNumberOfPasswordsChange: PropTypes.func.isRequired
}

export default TotalPasswordsGenerated;