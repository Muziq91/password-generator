import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';
import * as Utils from '../utils';

const CHANGE = 'CHANGE';
let _passwordState = [];
const _symbols = "!@#$%^&*()_-+={}[]<>,.?/*".split('');

class TextBlockRowProcessStore extends EventEmitter {
    constructor() {
        super();
        Dispatcher.register(this._registerToActions.bind(this));
    }

    _registerToActions(action) {
        if (action.type == ActionTypes.PROCESS_TEXT_BLOCK)
            this.processTextBlock(action.payload);
    }

    processTextBlock(payload) {
        const { textBlockValues, passwordSize, symbolSize, totalNumberOfPasswords } = payload;
        _passwordState = [];

        if (!textBlockValues)
            return;

        if (textBlockValues.length > 0) {
            for (var i = 0; i < totalNumberOfPasswords; i++) {
                let newPassword = '';
                if (textBlockValues.length < 4) {
                    newPassword = textBlockValues.join('');
                }
                else {
                    newPassword = this._computeNewPassword(textBlockValues, passwordSize, symbolSize);
                }

                _passwordState.push(newPassword);
            }
        }
        this.emit(CHANGE);
    }

    _computeNewPassword(textBlockValues, passwordSize, symbolSize) {
        let passwordText = this._computePasswordText(textBlockValues, passwordSize);
        return this._computePasswordTextWithSymbols(passwordText, symbolSize);
    }

    _computePasswordTextWithSymbols(passwordText, symbolSize) {
        let passwordTextWithSymbols = passwordText;
        let usedPasswordIndex = [];
        let symbolsCounter = 0;
        const symbolsLength = _symbols.length;

        while (symbolsCounter != symbolSize) {

            let newPasswordTextIndex = Utils.getRandomInteger(passwordTextWithSymbols.length);

            if (usedPasswordIndex.indexOf(newPasswordTextIndex) === -1) {
                let newSymbolIndex = Utils.getRandomInteger(symbolsLength);
                passwordTextWithSymbols = Utils.replaceCharacter(passwordTextWithSymbols, newPasswordTextIndex, _symbols[newSymbolIndex]);
                symbolsCounter++;
                usedPasswordIndex.push(newPasswordTextIndex);
            }
        }

        return passwordTextWithSymbols;
    }

    _computePasswordText(textBlockValues, passwordSize) {
        let passwordText = textBlockValues.join('');

        if (passwordText.length === passwordSize)
            return passwordText;

        const alphabet = Utils.getAlphabet();
        const alphabetLength = alphabet.length;

        while (passwordText.length != passwordSize) {
            let randomIndex = Utils.getRandomInteger(alphabetLength);
            passwordText += alphabet[randomIndex];
        }

        return passwordText;
    }



    getProcessedPassword() {
        return _passwordState;
    }

    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }

}

export default new TextBlockRowProcessStore();