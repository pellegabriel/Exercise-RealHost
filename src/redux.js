const NEW_QUOTE = 'NEW_QUOTE'

export const addNewQuote = text => ({
  type: NEW_QUOTE,
  payload: { text }
})

export const quoteReducer = (state = {}, action) => {
    switch (action.type) {
      case NEW_QUOTE:
        return {
            ...state,
            liked: action.payload.text
        }
      default:
        return state
    }
  }