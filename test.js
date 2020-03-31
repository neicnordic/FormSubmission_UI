var XLink_1_0 = require('w3c-schemas').XLink_1_0;
var Jsonix = require('jsonix').Jsonix;

var context =  new Jsonix.Context([XLink_1_0]);
var unmarshaller = context.createUnmarshaller();
unmarshaller.unmarshalFile("XML_schemas/schema_1.xml", function(result) {
	test.equal("label", result.value.label);
	test.done();
});