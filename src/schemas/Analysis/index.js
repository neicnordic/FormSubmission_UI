const tree = {
    name: "ANALYSIS_SET",
    content: false,
    childs: [
        {
            name: "ANALYSIS",
            content: false,
            meta: {
                alias: {
                    placeholder: "UNIQUE NAME FOR ANALYSIS",
                    value: ""
                },
                center_name: {
                    placeholder: "Center name abbreviation",
                    value: ""
                },
                broker_name: {
                    placeholder: "Center name abbreviation",
                    value: ""
                },
                analysis_center: {
                    placeholder: "Center name abbreviation",
                    value: ""
                },
                analysis_date: {
                    placeholder: "Analysis date",
                    value: ""
                }
            },
            childs: [
                {
                    name: "TITLE",
                    content: true,
                    placeholder: "Descriptive title for the analysis shown in search results",
                    value: ""
                },
                {
                    name: "DESCRIPTION",
                    content: true,
                    placeholder: "Detained description of the analysis",
                    value: ""
                },
                {
                    name: "STUDY_REF",
                    content: false,
                    meta: {
                        refname: {
                            placeholder: "STUDY ALIAS OF RELEVANT STUDY OBJECT",
                            value: ""
                        },
                        refcenter: {
                            placeholder: "center name abbreviation",
                            value: ""
                        }
                    }

                },
                {
                    name: "SAMPLE_REF",
                    content: false,
                    meta: {
                        refname: {
                            placeholder: "SAMPLE ALIAS OF RELEVANT SAMPLE OBJECT",
                            value: ""
                        },
                        refcenter: {
                            placeholder: "Center name abbreviation",
                            value: ""
                        },
                        label: {
                            placeholder: "sample name in the BAM file",
                            value: ""
                        },
                    }
                },
                {
                    name: "EXPERIMENT_REF",
                    content: false,
                    meta: {
                        refname: {
                            placeholder: "EXPERIMENT ALIAS OF RELEVANT STUDY OBJECT",
                            value: ""
                        },
                        refcenter: {
                            placeholder: "center name abbreviation",
                            value: ""
                        }
                    }
                },
                {
                    name: "RUN_REF",
                    content: false,
                    meta: {
                        refname: {
                            placeholder: "EXPERIMENT ALIAS OF RELEVANT STUDY OBJECT",
                            value: ""
                        },
                        refcenter: {
                            placeholder: "center name abbreviation",
                            value: ""
                        }
                    }
                },
                {
                    name: "ANALYSIS_REF",
                    content: false,
                    multiple: true,
                    childs: [
                        {
                            name: "REFERENCE_ALIGNMENT",
                            content: false,
                            childs: [
                                {
                                    name: "ASSEMBLY",
                                    content: false,
                                    childs: [
                                        {
                                            name: "STANDARD",
                                            content: false,
                                            meta: {
                                                refname: {
                                                    placeholder: "TODO: INSDC assembly name (e.g. GRCh37 or GRCh37.p1)",
                                                    value: ""
                                                },
                                                accession: {
                                                    placeholder: "TODO: INSDC assembly accession (e.g. GCA_000001405.1)",
                                                    value: ""
                                                }
                                            },
                                        }
                                    ]
                                },
                                {
                                    name: "SEQUENCE",
                                    content: false,
                                    meta: {
                                        accession: {
                                            placeholder: "TODO: INSDC sequence accession and version",
                                            value: ""
                                        },
                                        label: {
                                            placeholder: "TODO: reference sequence name in the BAM file",
                                            value: ""
                                        }
                                    }
                                }
                            ]
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
                                    placeholder: " File name",
                                    value: ""
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
                    name: "ANALYSIS_ATTRIBUTES",
                    content: false,
                    multiple: true,
                    childs: [
                        {
                            name: "ANALYSIS_ATTRIBUTE",
                            content: false,
                            childs: [
                                {
                                    name: "TAG",
                                    value: "",
                                    content: true,
                                    placeholder: ""
                                },
                                {
                                    name: "VALUE",
                                    value: "",
                                    content: true,
                                    placeholder: ""
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
