import Dispatcher from '../dispatcher'
import ActionTypes from '../constants'

export function createTextBlock() {
    Dispatcher.dispatch({ type: ActionTypes.CREATE_TEXT_BLOCK })
}

export function removeTextBlock(textBlockValue) {
    Dispatcher.dispatch(
        {
            type: ActionTypes.PROCESS_TEXT_BLOCK,
            payload: textBlockValue
        })
}

export function processTextBlock(textBlockValues, passwordSize, symbolSize, totalNumberOfPasswords) {
    Dispatcher.dispatch(
        {
            type: ActionTypes.PROCESS_TEXT_BLOCK,
            payload: {
                textBlockValues: textBlockValues,
                passwordSize: passwordSize,
                symbolSize: symbolSize,
                totalNumberOfPasswords: totalNumberOfPasswords
            }
        })
}