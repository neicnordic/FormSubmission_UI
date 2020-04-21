const tree = {
    name: "DAC_SET",
    content: false,
    childs: [
        {
            name: "DAC",
            meta: {
                alias: {
                    placeholder: "Unique name for DAC",
                    value: ""
                },
                center_name: {
                    placeholder: " ACCOUNT CENTER_NAME ACRONYM",
                    value: ""
                },
                broker_name: {
                    placeholder: "EGA",
                    value: ""
                }
            },
            childs: [
                {
                    name: "TITLE",
                    content: true,
                    placeholder:"Formal DAC name",
                    value:""
                },
                {
                    name: "CONTACTS",
                    content: false,
                    multiple:true,
                    childs:[
                        {
                            name:"CONTACT",
                            content:false,
                            meta:{
                                name:{
                                    placeholder:"name of contact",
                                    value:""
                                },
                                email:{
                                    placeholder:"Email address",
                                    value:""
                                },
                                organisation:{
                                    placeholder:"Name of organisation contact affiliated to",
                                    value:""
                                },
                                telephone_number:{
                                    placeholder:"Telephone number",
                                    value:""
                                }

                            }
                        }
                    ]
                }
            ]
        }
    ]
}


export default {
    tree
}