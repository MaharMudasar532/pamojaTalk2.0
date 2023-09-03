import {
  PINK,
  LIGHTBG,
  DARKBG,
  PURPLE,
  SOLIDDARK,
  DARKGRAY,
  LIGHTGRAY,
  DOUBLEDARK,
  DARKMODETEXT,
  ISDARKMODE,
} from './actions';

const initialState = {
  darkbg: '#000000',
  lightbg: '#FFFFFF',

  pink: '#F62E8E',
  purple:'#AC1AF0',


  lightgray: '#F5F5F5',
  darkgray: '#262626',

  soliddark: '#1C1C1C',
  doubledark: ['#0A0A0A', '#303030'],
  darkmodetext: '#fff',


  isdarkmode: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case DARKBG:
      return { ...state, darkbg: action.payload };
    case LIGHTBG:
      return { ...state, lightbg: action.payload };
    case PURPLE:
      return { ...state, purple: action.payload };
    case PINK:
      return { ...state, pink: action.payload };
    case LIGHTGRAY:
      return { ...state, lightgray: action.payload };
    case DARKGRAY:
      return { ...state, darkgray: action.payload };
    case DOUBLEDARK:
      return { ...state, doubledark: action.payload };
    case SOLIDDARK:
      return { ...state, soliddark: action.payload };
    case DARKMODETEXT:
      return { ...state, darkmodetext: action.payload };
  
    case ISDARKMODE:
      return { ...state, isdarkmode: action.payload };
      
    default:
      return state;
  }
}

export default userReducer;
