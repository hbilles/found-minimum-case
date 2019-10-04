// Site Reducer

// site action types
export const types = {
  SET_IS_MOBILE: 'SITE/SET_IS_MOBILE',
}

export const initialState = {
  isMobile: false,
}

// site reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_MOBILE:
      return {
        ...state,
        isMobile: action.isMobile,
      }
    default:
      return state
  }
}

// site actions
export const actions = {
  setIsMobile: isMobile => ({
    type: types.SET_IS_MOBILE,
    isMobile,
  }),
}
