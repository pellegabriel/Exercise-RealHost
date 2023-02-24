import { createSlice } from '@reduxjs/toolkit'

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState: {
    text: 'Every human being is the author of his own health or disease.',
    hasError: false,
    isLoading: false,
  },
  reducers: {
    fetchQuote: (state) => {
      state.isLoading = true;
    },
    quoteFetched: (state, action) => {
      state.isLoading = false;
      state.text = action.payload
    },
    errorFetchingQuote: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
})

export const {
  quoteFetched,
  errorFetchingQuote,
  fetchQuote
} = quotesSlice.actions

export const quoteSelector = (state) => {
  return state.quotes?.text
}

export const loadingSelector = (state) => {
  return state.quotes?.isLoading
}

export const errorSelector = (state) => {
  return state.quotes?.hasError
}

export default quotesSlice.reducer
