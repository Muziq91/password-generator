
import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';
import * as Utils from '../utils';

const BLOCK_ROW_SIZE = 6;
const CHANGE = 'CHANGE';
let _blockRowsState = [];

class TextBlockRowCreationStore extends EventEmitter {
    constructor() {
        super();
        Dispatcher.register(this._registerToActions.bind(this));
    }

    _registerToActions(action) {
        if (action.type == ActionTypes.CREATE_TEXT_BLOCK)
            this.createTextBlock();
    }

    getTextBlock() {
        return _blockRowsState;
    }

    createTextBlock() {
        _blockRowsState = this._getTextBlocks();
        this.emit(CHANGE);
    }

    _getTextBlocks() {
        let blockRows = [];

        while (blockRows.length != BLOCK_ROW_SIZE) {
            let blockRow = this._getBlockRow();

            if (blockRows.indexOf(blockRow) === -1)
                blockRows.push(blockRow);
        }

        return blockRows;
    }

    _getBlockRow() {
        let blockRow = '';
        const alphabet = Utils.getAlphabet();
        const alphabetLength = alphabet.length;

        while (blockRow.length != 3) {
            let firstLetter = alphabet[Utils.getRandomInteger(alphabetLength)];
            let secondLetter = alphabet[Utils.getRandomInteger(alphabetLength)]
            let firstNumber = Utils.getRandomInteger(10);

            if (firstLetter != secondLetter) {
                blockRow = Utils.shuffle(`${firstLetter}${secondLetter}${firstNumber}`);
            }
        }

        return blockRow;
    }

    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }

}

export default TextBlockRowCreationStore;