import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextBlockDisplay extends Component {

    constructor() {
        super();
    }

    displayTextBlockValues() {
        let { textBlockValues } = this.props;
        let displayValues =
            textBlockValues.map(textBlockValue => {
                return <div key={`row${textBlockValue}`} className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">{textBlockValue}</div>
            });

        return displayValues;
    }

    render() {
        return this.displayTextBlockValues()
    }
}

TextBlockDisplay.propTypes = {
    textBlockValues: PropTypes.array.isRequired
}

export default TextBlockDisplay;