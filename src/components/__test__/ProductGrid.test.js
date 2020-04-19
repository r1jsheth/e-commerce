import React from 'react';
import ReactDOM from 'react-dom';
import ProductGrid from '../ProductGrid';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import data from '../../data';


afterEach(cleanup);

it('Renders ProductGrid', () => {

	const div = document.createElement("div");
    ReactDOM.render(<ProductGrid/>, div);

})