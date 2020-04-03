const LinkType = {
    childs: [
        {
            name: "LABEL",
            content: true,
            placeholder: "Data Access Agreement",
            value: ""
        },
        {
            name: "URL",
            content: true,
            placeholder: "Website address",
            value: ""
        }

    ]
}

const NameType = {
    meta:{
        label:{
            value:"",
            placeholder:"Alternative/explanatory description of the same object/identifier."
        }
    }
}

const ObjectType = {
    meta: {
        alias:{
            value:"",
            placeholder:"Submitter designated name for the object. The name must be unique within the submission account."
        },
        center_name:{
            value:"",
            placeholder:"The center name of the submitter."
        },
        broker_name:{
            value:"",
            placeholder:"The center name of the broker."
        },
        accession:{
            value:"",
            placeholder:"The object accession assigned by the archive."
        }
    },
    childs:[
        {
            name:"IDENTIFIERS",
            content:false,
            max:1,
            min:1
        }
    ]
}

const IdentifierType ={
    placeholder:"Set of record identifiers.",
    content:false,
    childs:[
        {   
            ...NameType,
            name:"PRIMARY_ID",
            content:true,
            value:"",
            placeholder:"A primary identifier in the INSDC namespace."
        },
        {
            ...NameType,
            name:"SECONDARY_ID",
            content:true,
            value:"",
            placeholder:"A secondary identifier in the INSDC namespace."
        },
        {
            name:"EXTERNAL_ID",
            content:true,
            value:"",
            placeholder:"An identifer rom a public non-INSDC resource."
        },
        {
            name:"SUBMITTER_ID",
            content:true,
            value:"",
            placeholder:"A submitter provided identifier."
        },
        {
            name:"UUID",
            content:true,
            value:"",
            placeholder:"A universally unique identifier that requires no namespace."
        }
    ]
}
