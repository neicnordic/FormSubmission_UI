
// var XLink_1_0 = require('w3c-schemas').XLink_1_0;
// var Jsonix = require('jsonix').Jsonix;
//
// var context =  new Jsonix.Context([XLink_1_0]);
// var unmarshaller = context.createUnmarshaller();
// unmarshaller.unmarshalFile("XML_schemas/schema_1.xml", function(result) {
// 	test.equal("label", result.value.label);
// 	test.done();
// });


// import React from "react";
// import { render, fireEvent } from "react-testing-library";
// import XML_FORM from '/../components/XML_Form'
//
// it("submits", () => {
// 	const onSubmit = jest.fn();
// 	const { getByTestId } = render(<XML_FORM onSubmit={onSubmit} />);
// 	fireEvent.submit(getByTestId("xmlForm"));
// 	expect(onSubmit).toHaveBeenCalled();
// });

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

Copy
