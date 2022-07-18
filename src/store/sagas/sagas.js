import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/asyncActions';

// Watcher saga
// listens the API_CALL_REQUEST actions
export function* watcherSaga(){
    //Listens the action ans starts a Worker Saga
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// Worker saga
// is called from watcher Saga, does the login and dispatches an action
export function* workerSaga(action){
    try{
        const response = yield call(fetchHttp(action.payload.request))
        //We Obtain the token from response
        const token = response.data.token;
        yield put({
            type: action.payload.okAction, //API_CALL_SUCCESS
            payload : {
                token: token
            }
        });
    } catch(error) {
        yield put({
            type: action.payload.failedAction, // API_CALL_FAILURE
            payload : {
                error: error
            }
        });
    }
}

function fetchHttp(request){
    return function() {
        return(axios(request))
    }
}