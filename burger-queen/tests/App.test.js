import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import Home from '../src/Components/Home';
import Waiter from '../src/Components/Waiter-choice';
import Orders from '../src/Components/Do-orders';
// 🐐

describe('App component', () => {
  it('renders without error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});

describe('Home component', () => {
  test('Home renderiza', () => {
    shallow(<Home />);
  });
  test('renders PEDIDOS at button', () => {
    const { getByText } = render(<Home />);
    const buttonElement = getByText(/PEDIDOS/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test('render COCINA at button', () => {
    const { getByText } = render(<Home />);
    const buttonElement = getByText(/COCINA/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

test('Waiter-choice renderiza', () => {
  shallow(<Waiter />);
});

test('Orders renderiza', () => {
  shallow(<Orders />);
});

test('Bienvenida no existe', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to my ReactApp!</h2>;
  expect(wrapper.contains(welcome)).toEqual(false);
});

it('add count', () => {
  const wrapper = shallow(<Orders />);
  expect(wrapper.find('#counter-span').text().includes('1')).toBe(true);
  wrapper.find('#counter-add').simulate('click');

  expect(wrapper.find('#counter-span').text().includes('2')).toBe(true);
  wrapper.find('#counter-add').simulate('click');

  expect(wrapper.find('#counter-span').text().includes('3')).toBe(true);
});
