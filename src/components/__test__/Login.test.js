import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer';
import { render,cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../Login';


afterEach(cleanup);

it("Renders Username and password", () => {

    // const div = document.createElement("div");
    // ReactDOM.render(<Login />, div);
    const { getByPlaceholderText } = render(<Login/>);
    expect(getByPlaceholderText('email')).toBeInTheDocument();
    expect(getByPlaceholderText('password')).toBeInTheDocument();
    
})

it("Can Login with correct passoword", () => {
    
    const { getByRole, queryByText } = render(<Login/>);
    expect(getByRole('button')).toBeInTheDocument();
    fireEvent.click(getByRole('button'));
    // const results = getByRole('notification');
    // console.log(results);
    expect(queryByText('/Wrong Password!/i')).toBeInTheDocument();

})