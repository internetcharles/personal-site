import { SET_GREETING, SET_ABOUT } from '../actions/displayActions';

const initialState = {
  aboutMeDisplayed: false,
  greetingDisplayed: true,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_ABOUT:
      return { ...state, aboutMeDisplayed: action.payload.aboutMeDisplayed };
    case SET_GREETING:
      return { ...state, greetingDisplayed: action.payload.greetingDisplayed };
    default: 
      return state;
  }
}
