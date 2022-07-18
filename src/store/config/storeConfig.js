import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from "../reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from "../sagas/sagas";

export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools());

    return store;
}

export const createAppAsyncStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    let store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(sagaMiddleware), 
            composeWithDevTools()
        )
    );
    //we init the watcher saga
    sagaMiddleware.run(watcherSaga);

    return store;
}