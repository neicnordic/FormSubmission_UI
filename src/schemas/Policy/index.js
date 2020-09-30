const tree = {
    name: "POLICY_SET",
    childs: [
        {
            name: "POLICY",
            content: false,
            placeholder: "Describes an object that contains data access policy information.",
            meta: [{
                alias: {
                    placeholder: "Unique name for submission",
                    value: ""
                },
                center_name: {
                    placeholder: "Center name abbreviation",
                    value: ""
                }
            }],

            choice: ["POLICY_SET", "POLICY_FILE"],
            childs: [
                {
                    name: "FILES",
                    content: false,
                    childs: [
                        {
                            name: "FILE",
                            content: false,
                            meta: {
                                accession_id: {
                                    required: true,
                                    placeholder: "Identifies a record by its accession. The scope of resolution is the entire Archive",
                                    value: ""
                                },
                                filename: {
                                    placeholder: " File name",
                                    value: "",
                                    required: true
                                },
                                filetype: {
                                    placeholder: "File type",
                                    options: [
                                        "srf",
                                        "sff",
                                        "fastq",
                                        "cram",
                                        "bam",
                                        "Illumina_native_qseq",
                                        "Illumina_native_scarf",
                                        "Illumina_native_fastq",
                                        "SOLiD_native_csfasta",
                                        "SOLiD_native_qual",
                                        "PacBio_HDF5",
                                        "CompleteGenomics_native"
                                    ],
                                    value: ""
                                },
                                checksum_method: {
                                    placeholder: "MD5",
                                    value: ""
                                },
                                checksum: {
                                    placeholder: "Checksum1",
                                    value: ""
                                },
                                unencrypted_checksum: {
                                    placeholder: "Checksum2",
                                    value: ""
                                }
                            }
                        }
                    ]
                },
                {
                    name: "TITLE",
                    content: true,
                    placeholder: "Name of policy"
                },

                {
                    name: "DAC_REF",
                    meta: {
                        accession: {
                            placeholder: "Accession number",
                            value: ""
                        },
                        refcenter: {
                            placeholder: "REFERENCE CENTRE NAME (e.g. consortium name if appropriate",
                            value: ""
                        }
                    }
                },
                {
                    name: "POLICY_TEXT",
                    content: true,
                    placeholder: "POLICY TEXT HERE"
                },
                {
                    name: "POLICY_LINKS",
                    content: false,
                    multiple: true,
                    childs: [
                        {
                            name: "POLICY_LINK",
                            content: false,
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
                // {
                //     name: "DATA_USE",
                //     meta: {
                //         ontology: {
                //             value: "",
                //             placeholder: "Ontology abbreviation, e.g. DUO for Data Use Ontology"
                //         },
                //         code: {
                //             value: "",
                //             placeholder: "Code for the ontology"
                //         },
                //         version: {
                //             value: "",
                //             placeholder: "Data Use Ontology code version"
                //         }
                //     },
                //     content: false,
                //     placeholder: "Data use ontologies (DUO) related to the policy",
                //
                //     multiple: true,
                //     min: 0,
                //     max: 1,
                //     childs: [
                //         {
                //             name: "MODIFIER",
                //             content: false,
                //             placeholder: "Database cross-reference.",
                //             meta: {
                //                 db: {
                //                     value: "",
                //                     placeholder: "Ontology abbreviation, e.g. DUO for Data Use Ontology"
                //                 },
                //                 id: {
                //                     value: "",
                //                     placeholder: ""
                //                 },
                //                 secondaryId: {
                //                     value: "",
                //                     placeholder: ""
                //                 }
                //             }
                //         },
                //         {
                //             name: "URL",
                //             content: true,
                //             placeholder: "Link to URL describing the Data Use",
                //             value: ""
                //
                //         }
                //     ]
                // },

                {
                    name: "POLICY_ATTRIBUTES",
                    content: false,
                    min: 0,
                    max: 1,
                    childs: [
                        {
                            name: "POLICY_ATTRIBUTE",
                            content: false,
                            placeholder: "Reusable attributes to encode tag-value pairs with optional units.",
                            multiple: true,
                            min: 1,
                            childs: [
                                {
                                    name: "TAG",
                                    content: true,
                                    placeholder: "Name of the attribute."
                                },
                                {
                                    name: "VALUE",
                                    content: true,
                                    placeholder: "Value of the attribute."
                                },
                                {
                                    name: "UNITS",
                                    content: true,
                                    placeholder: "Optional scientific units."
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
}