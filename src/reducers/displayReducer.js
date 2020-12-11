/* eslint-disable max-len */
import { SET_GREETING, SET_ABOUT, SET_PORTFOLIO } from '../actions/displayActions';

const initialState = {
  aboutMeDisplayed: false,
  greetingDisplayed: true,
  portfolioDisplayed: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_ABOUT:
      return { ...state, aboutMeDisplayed: action.payload.aboutMeDisplayed };
    case SET_GREETING:
      return { ...state, greetingDisplayed: action.payload.greetingDisplayed };
    case SET_PORTFOLIO:
      return { ...state, portfolioDisplayed: action.payload.portfolioDisplayed };
    default: 
      return state;
  }
}
