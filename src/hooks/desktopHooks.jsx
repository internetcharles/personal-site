import React, { useState, useEffect } from 'react';

export const useAboutMeDisplayed = (bool) => {
  const [aboutMeDisplayed, setAboutMeDisplayed] = useState(true);

  useEffect(() => {
    setAboutMeDisplayed(bool);
  }, []);

  return aboutMeDisplayed;
};
