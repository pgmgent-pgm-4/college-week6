import {fireEvent, render} from '@testing-library/react';

import React from 'react';
import ReactDOM from 'react-dom';
import Todo from "./Todo";
import userEvent from '@testing-library/user-event';
import {within} from '@testing-library/dom';

test('renders all text of todo form correctly ', () => {
    const {getByLabelText, getByText} = render(<Todo/>);
    getByLabelText("Enter your todo's:");
    getByText("Add todo");
})

test('user can add todo to todo list', () => {
    const {getByLabelText, getByDisplayValue, getByText} = render(<Todo/>);
    const input = getByLabelText("Enter your todo's:");
    const button = getByText("Add todo");

    // fireEvent.change(input, {
    //     target: {
    //         value: 'This is a todo'
    //     }
    // });
    userEvent.type(input, 'This is a todo');
    fireEvent.click(button);

    getByText('This is a todo');
})