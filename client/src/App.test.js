import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './components/Display';
import DataFetch from './components/DataFetch';
import { render, fireEvent } from '@testing-library/react'

test('renders without crashing Display', () => {
render(<Display/>);
});

test('renders without crashing DataFetch', () => {
render(<DataFetch/>);
});

test('render Womens World Cup', () => {
  const wrapper = rtl.render(
    <span className="greet">Women's World Cup</span>
  );
  // the querying functionality is accessed through the wrapper:
  const element = wrapper.queryByText(/WomensWorldCup/i);

  // assertions will come in here
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});