import React, { Component } from 'react';
import TextBlocksCreator from './TextBlocksCreator';
import TextBlockRowProcesStore from '../stores/textBlockRowProcessStore';
import AppTitle from './appTitle';
import AppInstructions from './appInstructions';
import PasswordDisplay from './passwordDisplay';
import CopyPasswordToClipboard from './copyPasswordToClipboard';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import * as Utils from '../utils';

class App extends Component {
    constructor() {
        super();
        this.state = {
            passwordValues: [],
            isCopied: false
        }

        this._onTextBlockProcess = this._onTextBlockProcess.bind(this);
        this._onTextBlocksReset = this._onTextBlocksReset.bind(this);
        this._onPasswordTextCopied = this._onPasswordTextCopied.bind(this);
        this._onPasswordTextCopiedStop = this._onPasswordTextCopiedStop.bind(this);
    }

    _onTextBlockProcess() {
        let newPasswordValues = TextBlockRowProcesStore.getProcessedPassword();

        this.setState({
            passwordValues: newPasswordValues
        })
    }

    _onTextBlocksReset() {
        this.setState((prevState) => {
            return {
                passwordValues: []
            };
        });
    }

    _onPasswordTextCopied() {
        this.setState((prevState) => {
            return {
                isCopied: true
            };
        }, this._onPasswordTextCopiedStop);
    }

    _onPasswordTextCopiedStop() {
        window.setTimeout(() => {
            this.setState({
                isCopied: false
            });
        }, 2000);
    }

    componentWillMount() {
        TextBlockRowProcesStore.addChangeListener(this._onTextBlockProcess)
    }

    componentWillUnmount() {
        TextBlockRowProcesStore.removeChangeListener(this._onTextBlockProcess)
    }

    getPasswordsManipulationButtons() {
        const { passwordValues } = this.state;
        let singlePasswordValue = '';
        let csvPasswordValue = '';

        singlePasswordValue = passwordValues.join('\n');
        csvPasswordValue = passwordValues.join(', ');

        return singlePasswordValue && (
            <div className="ms-Grid-row row copy-passwords-row">
                <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4 ms-font-l" >
                    <CopyPasswordToClipboard
                        value={singlePasswordValue}
                        text={"Copy Passwords on new line"}
                        passwordTextCopied={this._onPasswordTextCopied} />
                </div >
                <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4 ms-font-l" >
                    <CopyPasswordToClipboard
                        value={csvPasswordValue}
                        text={"Copy Passwords as CSV"}
                        passwordTextCopied={this._onPasswordTextCopied} />
                </div >
            </div >);
    }

    getPasswordsToDisplay() {
        const { passwordValues } = this.state;

        return passwordValues.map(passwordValue => {
            return passwordValue &&
                (<div className="ms-Grid-row row password-display" key={Utils.getUniqueId()}>
                    <PasswordDisplay text={passwordValue} />
                    <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2 ms-font-l" >
                        <CopyPasswordToClipboard
                            value={passwordValue}
                            text={"Copy"}
                            passwordTextCopied={this._onPasswordTextCopied} />
                    </div >
                </div>);
        })
    }

    render() {
        const { isCopied } = this.state;
        return (
            <div className="content">
                <div className="ms-Grid">
                    <AppTitle />
                    <br />
                    <AppInstructions />
                    <br />
                    <TextBlocksCreator textBlocksReset={this._onTextBlocksReset} />
                    <br />
                    {this.getPasswordsManipulationButtons()}
                    <br />
                    {this.getPasswordsToDisplay()}
                    <br />
                    {isCopied && (
                        <div className='custom-message-bar'>
                            <MessageBar messageBarType={MessageBarType.success}
                                dismissButtonAriaLabel="Close"
                                isMultiline={false}>
                                Copied
                            </MessageBar>
                        </div>)}
                </div>
            </div>
        )
    }
}

export default App;