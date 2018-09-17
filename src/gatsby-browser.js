import React, { Fragment } from 'react';
import AppProvider from 'store/provider';
// import wrapPageElementWithTransition from 'helpers/wrapPageElement';

// React Context in Browser
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// Page Transitions
// export const wrapPageElement = wrapPageElementWithTransition;
export const wrapPageElement = ({ element, props }) =>
  <Fragment {...props}>{element}</Fragment>;

