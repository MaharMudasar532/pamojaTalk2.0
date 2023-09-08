export const ISDARKMODE = 'ISDARKMODE';
export const DARKBG = 'DARKBG';
export const LIGHTBG = 'LIGHTBG';
export const PURPLE = 'PURPLE';
export const PINK = 'PINK';
export const LIGHTGRAY = 'LIGHTGRAY';
export const DARKGRAY = 'DARKGRAY';

export const DOUBLEDARK = 'DOUBLEDARK';
export const SOLIDDARK = 'SOLIDDARK';


export const switchDarkMode = Colors => {
  console.log('Colors at   redux--', Colors);
  return {
    type: 'switchMode',
    Colors: Colors,
  };
};

export const setIsDarkMode = isdarkmode => dispatch => {
  dispatch({
    type: ISDARKMODE,
    payload: isdarkmode,
  });
};
export const setdarkbg = darkbg => dispatch => {
  dispatch({
    type: DARKBG,
    payload: darkbg,
  });
};

export const setlightbg = lightbg => dispatch => {
  dispatch({
    type: LIGHTBG,
    payload: lightbg,
  });
};
export const setpurple = purple => dispatch => {
  dispatch({
    type: PURPLE,
    payload: purple,
  });
};
export const setpink = pink => dispatch => {
  dispatch({
    type: PINK,
    payload: pink,
  });
};

export const setFirstDark = lightgray => dispatch => {
  dispatch({
    type: LIGHTGRAY,
    payload: lightgray,
  });
};

export const setSecondDark = darkgray => dispatch => {
  dispatch({
    type: DARKGRAY,
    payload: darkgray,
  });
};
export const setDoubleDark = doubledark => dispatch => {
  dispatch({
    type: DOUBLEDARK,
    payload: doubledark,
  });
};
export const setSolidDark = soliddark => dispatch => {
  dispatch({
    type: SOLIDDARK,
    payload: soliddark,
  });
};