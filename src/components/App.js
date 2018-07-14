import React, { Component } from 'react';
import TextBlocksCreator from './TextBlocksCreator'
import TextBlockRowProcesStore from '../stores/textBlockRowProcessStore'
import PasswordDisplay from './passwordDisplay'
import PasswordStrengthDisplay from './passwordStrengthDisplay'

class App extends Component {
    constructor() {
        super();
        this.state = {
            passwordValue: ""
        }

        this._onTextBlockProcess = this._onTextBlockProcess.bind(this);
        this._onTextBlocksReset = this._onTextBlocksReset.bind(this);
    }

    _onTextBlockProcess() {
        let newPasswordValue = TextBlockRowProcesStore.getProcessedPassword();

        this.setState({
            passwordValue: newPasswordValue
        })
    }

    _onTextBlocksReset() {
        this.setState((prevState) => {
            return {
                passwordValue: ""
            };
        });
    }

    componentWillMount() {
        TextBlockRowProcesStore.addChangeListener(this._onTextBlockProcess)
    }

    componentWillUnmount() {
        TextBlockRowProcesStore.removeChangeListener(this._onTextBlockProcess)
    }

    render() {
        const { passwordValue } = this.state;
        return (
            <div className="content">
                <div className="ms-Grid">
                    <TextBlocksCreator textBlocksReset={this._onTextBlocksReset} />
                    <br />
                    <PasswordDisplay text={passwordValue} />
                    <br />
                    <PasswordStrengthDisplay key={'UniqueKEy'} text={passwordValue} />                    
                </div>
            </div>
        )
    }
}

export default App;