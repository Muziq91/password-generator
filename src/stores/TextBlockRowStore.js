
import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';
import uuidv5 from 'uuid'

const CHANGE = 'CHANGE';
let _blockRowsState = [];

class TextBlockRowStore extends EventEmitter {
    constructor() {
        super();
        Dispatcher.register(this._registerToActions.bind(this));
    }

    _registerToActions(action) {
        console.log('TextBlockRowStore received an action', action);

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
        _blockRowsState = uuidv5().toString().split('-');
        this.emit(CHANGE);
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

export default TextBlockRowStore;