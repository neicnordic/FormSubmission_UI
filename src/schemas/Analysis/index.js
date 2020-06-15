const tree = {
    name: "ANALYSIS_SET",
    content: false,
    childs: [
        {
            name: "ANALYSIS",
            content: false,
            meta: {
                alias: {
                    placeholder: "Unique name for submission",
                    value: ""
                },
                center_name: {
                    placeholder: "Center name abbreviation",
                    value: ""
                },
                broker_name: {
                    placeholder: "center name abbreviation",
                    value: ""
                },
                analysis_center: {
                    placeholder: "center name abbreviation",
                    value: ""
                },
                analysis_date: {
                    placeholder: "2011-11-18T10:10:10.0Z",
                    value: ""
                }
            },
            childs: [
                {
                    name: "TITLE",
                    content: true,
                    placeholder: "A SHORT INFORMATIVE DESCRIPTION OF THE SAMPLE"
                },
                {
                    name: "DESCRIPTION",
                    content: true,
                    placeholder: "a detailed description of the analysis"
                },
                {
                    name: "STUDY_REF",
                    content: false,
                    meta: {
                        ref_name: {
                            placeholder: "STUDY ALIAS OF RELEVANT STUDY OBJECT",
                            value: ""
                        },

                        ref_center: {
                            placeholder: "center name abbreviation",
                            value: ""
                        }
                    }
                },
                {
                    name: "SAMPLE_REF",
                    content: false,
                    meta: {
                        alias: {
                            placeholder: "Unique name for submission",
                            value: ""
                        },
                        center_name: {
                            placeholder: "Center name abbreviation",
                            value: ""
                        },
                        broker_name: {
                            placeholder: "center name abbreviation",
                            value: ""
                        },
                        analysis_center: {
                            placeholder: "center name abbreviation",
                            value: ""
                        },
                        analysis_date: {
                            placeholder: "2011-11-18T10:10:10.0Z",
                            value: ""
                        }
                    }
                },
                {
                    name: "ANALYSIS_TYPE",
                    content: false,
                    childs: [
                        {
                            name: "SAMPLE_PHENOTYPE",
                            content: true,
                            placeholder: "PHENOTYPE ID"
                        }
                    ]
                },
                {
                    name: "FILES",
                    content: false,
                    childs: [
                        {
                            name: "FILE",
                            content: false,
                            meta: {
                                filename: {
                                    placeholder: "phenotype file name",
                                    value: ""
                                },
                                filetype: {
                                    placeholder: "phenotype_file",
                                    value: ""
                                },
                                checksum_method: {
                                    placeholder: "MD5",
                                    value: ""
                                },
                                checksum: {
                                    placeholder: "CHECKSUM",
                                    value: ""
                                },
                                unencrypted_checksum: {
                                    placeholder: "CHECKSUM",
                                    value: ""
                                }
                            }
                        }]
                },
                {
                    name: "ANALYSIS_ATTRIBUTES",
                    content: false,
                    childs: [
                        {
                            name: "ANALYSIS_ATTRIBUTE",
                            content: false,
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