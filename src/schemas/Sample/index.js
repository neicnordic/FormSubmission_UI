
const tree = {
    name: "SAMPLE_SET",
    conent: false,
    childs: [
        {
            name: "SAMPLE",
            content: false,
            meta: {
                alias: {
                    placeholder: "Unique name for submission"
                },
                center_name: {
                    placeholder: "Center name abbreviation"
                }
            },
            childs: [
                {
                    name: "TITLE",
                    content: true,
                    placeholder: "A SHORT INFORMATIVE DESCRIPTION OF THE SAMPLE"
                },
                {
                    name: "SAMPLE_NAME",
                    content: false,
                    required:true,
                    meta:{
                        display_name:{
                            value:"",
                            placeholder:"Display name"
                        }
                    },
                    childs: [
                        {
                            name: "TAXON_ID",
                            content: true,
                            required:true,
                            value:"",
                            placeholder: "PROVIDE NCBI TAXID FOR ORGANISM (e.g. 9606 for human)"
                        },
                        {
                            name: "SCIENTIFIC_NAME",
                            content: true,
                            required:true,
                            value:"",
                            placeholder: "SCIENTIFIC NAME AS APPEARS IN NCBI TAXONOMY FOR THE TAXON_ID (e.g. homo sapiens)"
                        },
                        {
                            name: "COMMON_NAME",
                            content: true,
                            required:true,
                            value:"",
                            placeholder: "OPTIONAL COMMON NAME AS APPEARS IN NCBI TAXONOMY FOR THE TAXON_ID (e.g. human)"
                        },
                    ]
                },
                {
                    name: "DESCRIPTION",
                    content: true,
                    placeholder: "A LONGER DESCRIPTION OF SAMPLE AND HOW IT DIFFERS FROM OTHER SAMPLES"
                },
                {
                    name:"SAMPLE_LINKS",
                    placeholder:"Links to resources related to this sample or sample set (publication, datasets, online databases).",
                    content:false,
                    multiple:true,
                    childs:[
                        {
                            name:"SAMPLE_LINK",
                            conent:false,
                            childs: [
                                {
                                    name: "URL_LINK",
                                    content: false,
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
                            ]
                        }
                    ]
                },
                {
                    name: "SAMPLE_ATTRIBUTES",
                    content: false,
                    childs: [
                        {
                            name: "SAMPLE_ATTRIBUTE",
                            content: false,
                            multiple: true,
                            childs: [
                                {
                                    name: "TAG",
                                    content: true,
                                    placeholder: "Subject ID"
                                },
                                {
                                    name: "VALUE",
                                    content: true,
                                    placeholder: "Tag value"
                                }, {
                                    name: "UNIT",
                                    content: true,
                                    placeholder: "Optional Unit"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export default {
    tree
};