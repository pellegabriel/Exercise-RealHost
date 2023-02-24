import { call, put, takeEvery } from 'redux-saga/effects';
import { errorFetchingQuote, fetchQuote, quoteFetched } from './quotesSlice';
import { fetchNewQuote } from '../api';

export function* loadQuotes() {
    try {
        const newQuote = yield call(fetchNewQuote);
        yield put(quoteFetched(newQuote.content));
    } catch (err) {
        yield put(errorFetchingQuote());
    }
}

export default function* quoteSaga() {
    yield takeEvery(fetchQuote.type, loadQuotes);
}