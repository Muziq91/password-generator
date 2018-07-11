
import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';
import uuidv1 from 'uuid'

const CHANGE = 'CHANGE';
let _blockRowsState = [];

class TextBlockRowCreationStore extends EventEmitter {
    constructor() {
        super();
        Dispatcher.register(this._registerToActions.bind(this));
    }

    _registerToActions(action) {
        switch (action.type) {
            case ActionTypes.CREATE_TEXT_BLOCK:
                this.createTextBlock();
                break;
            default:
                console.log('NOTHING')
        }
    }

    getTextBlock() {
        return _blockRowsState;
    }

    createTextBlock() {
        _blockRowsState = this._getNewTextBlocks();
        this.emit(CHANGE);
    }

    _getNewTextBlocks() {
        let blockRows = uuidv1().toString().split('-');
        let processedTextBlocks = blockRows.map(block => this._processTextBlock(block));
        return this._randomizeTextBlocksCase(processedTextBlocks);
    }
    _processTextBlock(blockOfText) {
        let blockOfTextLength = blockOfText.length;
        let newBlockOfText = '';

        if (blockOfTextLength == 3)
            return blockOfText;

        while (newBlockOfText.length != 3) {
            let newIndex = this._getRandomInteger(blockOfTextLength);
            newBlockOfText += blockOfText[newIndex];
        }

        return newBlockOfText;
    }

    _randomizeTextBlocksCase(textBlocks) {

        return textBlocks.map((textBlock, index) => {
            let randomIndex = this._getRandomInteger(textBlocks.length);
            if (index <= randomIndex)
                return textBlock.toUpperCase();

            return textBlock;
        });
    }

    _getRandomInteger(max) {
        return Math.floor(Math.random() * max);
    }

    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }

}

export default TextBlockRowCreationStore;