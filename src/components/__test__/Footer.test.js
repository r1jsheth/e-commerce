import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer';
import { render,cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);
it("renders without crashing", () => {

    const div = document.createElement("div");
    ReactDOM.render(<Footer></Footer>, div);

})

it("Checks address", () => {
    const { getByTestId } = render(<Footer></Footer>);
    expect(getByTestId('footer')).toBeInTheDocument();
})

it("Checks Footer Heading text", () => {
    const { getByRole } = render(<Footer/>);
    expect(getByRole('heading')).toBeInTheDocument();
})