import * as types from '../constants/ActionTypes';

export function setResults(value, REQ_TYPE) {
  const inputValue = parseInt(value);
  return {
    type: REQ_TYPE,
    inputValue
  };
}

export function dropResults(REQ_TYPE) {
  return {
    type: REQ_TYPE
  };
}

export function setFinalRes(REQ_TYPE) {
  return {
    type: REQ_TYPE
  };
}
