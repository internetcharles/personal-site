export const SET_ABOUT = 'SET_ABOUT';
export const setAbout = aboutDisplayed => ({
  type: SET_ABOUT,
  payload: aboutDisplayed
});

export const SET_GREETING = 'SET_GREETING';
export const setGreeting = greetingDisplayed => ({
  type: SET_GREETING,
  payload: greetingDisplayed
});
