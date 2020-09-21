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

// var XLink_1_0 = require('w3c-schemas').XLink_1_0;
// var Jsonix = require('jsonix').Jsonix;
// var XMLParser = require('react-xml-parser');
//
// var context =  new Jsonix.Context([XLink_1_0]);
// var unmarshaller = context.createUnmarshaller();
// // unmarshaller.unmarshalFile("XML_schemas/schema_1.xml", function(result) {
// 	unmarshaller.unmarshalFile("schemas/Study/Study.xml", function(result) {
// 	test.equal("label", result.value.label);
// 	test.done();
// });


