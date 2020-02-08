import { put, all, takeEvery, call } from 'redux-saga/effects';
import { ActionType } from './types';
import { requestAustinFeedSuccess, requestAustinFeedFailure } from './actions';

export function* requestAustinFeedAsync() {

    try {

        const response = yield call(fetch, 'https://drafthouse.com/s/mother/v1/page/market/main/austin');
        const json = response.json();

        yield put(requestAustinFeedSuccess(json));

    } catch (e) {

        yield put(requestAustinFeedFailure(e));

    }

};

export function* watchRequestAustinFeedAsync() {
    yield takeEvery(ActionType.REQUEST_AUSTIN_FEED, requestAustinFeedAsync);
}

export function* sagas() {
    yield all([
        watchRequestAustinFeedAsync()
    ]);
}

export default sagas;