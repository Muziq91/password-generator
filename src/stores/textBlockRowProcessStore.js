
import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

const CHANGE = 'CHANGE';

class TextBlockRowProcessStore extends EventEmitter {
    constructor() {
        super();
        Dispatcher.register(this._registerToActions.bind(this));
    }

    _registerToActions(action) {
        switch (action.type) {
            case ActionTypes.PROCESS_TEXT_BLOCK:
                this.processTextBlock(action.payload);
                break;
            default:
                console.log('NOTHING')
        }
    }

    processTextBlock(textBlockValues) {

        if (!textBlockValues || textBlockValues.length < 4)
            return;

        this.emit(CHANGE);
    }

    getProcessedPassword() {
        return "PROCESSING";
    }

    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }

}

export default new TextBlockRowProcessStore();