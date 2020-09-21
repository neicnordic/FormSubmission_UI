import {render} from '@testing-library/react';
import App from './App';
import React from "react";

import {fireEvent} from '@testing-library/react';


Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

it("submits", () => {
    const onSubmit = jest.fn();
    const {getByTestId} = render(<App onSubmit={onSubmit}/>);
    const test = fireEvent.submit(getByTestId("XML_form"));
    expect(test).equal = true;
});




