import React, { Component } from 'react';
import TextBlockRowContainer from './textBlockRowContainer'
import TextBlockRowProcesStore from '../stores/textBlockRowProcessStore'

class App extends Component {
    constructor() {
        super();
    }

    _onTextBlockProcess() {
        console.log(TextBlockRowProcesStore.getProcessedPassword());
    }

    componentWillMount() {
        TextBlockRowProcesStore.addChangeListener(this._onTextBlockProcess)
    }

    componentWillUnmount() {
        TextBlockRowProcesStore.removeChangeListener(this._onTextBlockProcess)
    }

    render() {
        return (
            <div className="content">
                <div className="ms-Grid">
                    <TextBlockRowContainer />
                </div>
            </div>
        )
    }
}

export default App;