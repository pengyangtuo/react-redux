import * as types from '../actions/actionTypes';
import initialState from './initialState';

function ajaxCallCompleted(type) {
  return type.substring(type.length - 8) == '_SUCCESS'
    || type == types.AJAX_CALL_ERROR;
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (ajaxCallCompleted(action.type)) {
    return state - 1;
  }

  return state;
}