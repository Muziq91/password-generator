import Dispatcher from '../dispatcher'
import ActionTypes from '../constants'

export function createTextBlock() {
    Dispatcher.dispatch({ type: ActionTypes.CREATE_TEXT_BLOCK })
}
