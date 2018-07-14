import React, { Component } from 'react';
import TextBlocksCreator from './TextBlocksCreator';
import TextBlockRowProcesStore from '../stores/textBlockRowProcessStore';
import AppTitle from './appTitle';
import AppInstructions from './appInstructions';
import PasswordDisplay from './passwordDisplay';
import CopyPasswordToClipboard from './copyPasswordToClipboard';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';

class App extends Component {
    constructor() {
        super();
        this.state = {
            passwordValue: "",
            isCopied: false
        }

        this._onTextBlockProcess = this._onTextBlockProcess.bind(this);
        this._onTextBlocksReset = this._onTextBlocksReset.bind(this);
        this._onPasswordTextCopied = this._onPasswordTextCopied.bind(this);
        this._onPasswordTextCopiedStop = this._onPasswordTextCopiedStop.bind(this);
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

    _onPasswordTextCopied() {
        this.setState((prevState) => {
            return {
                isCopied: true
            };
        });

        setInterval(this._onPasswordTextCopiedStop, 3000);
    }

    _onPasswordTextCopiedStop() {
        this.setState((prevState) => {
            return {
                isCopied: false
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
        const { passwordValue, isCopied } = this.state;
        return (
            <div className="content">
                <div className="ms-Grid">
                    <AppTitle />
                    <br />
                    <AppInstructions />
                    <br />
                    <TextBlocksCreator textBlocksReset={this._onTextBlocksReset} />
                    <br />
                    {passwordValue &&
                        (<div className="ms-Grid-row row password-display" >
                            <PasswordDisplay text={passwordValue} />
                            <CopyPasswordToClipboard text={passwordValue} passwordTextCopied={this._onPasswordTextCopied} />
                        </div>)}
                    <br />
                    {isCopied && (<MessageBar messageBarType={MessageBarType.success} dismissButtonAriaLabel="Close">
                        Copied
                    </MessageBar>)}
                </div>
            </div>
        )
    }
}

export default App;