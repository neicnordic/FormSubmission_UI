const tree = {
    name: "RUN_SET",
    conent: false,
    childs: [
        {
            name: "RUN",
            content: false,
            meta: {
                // accession_id: {
                //     required: true,
                //     placeholder: "Identifies a record by its accession. The scope of resolution is the entire Archive",
                //     value: ""
                // },
                // alias: {
                //     placeholder: "UNIQUE NAME FOR RUN",
                //     value: ""
                // },
                // center_name: {
                //     placeholder: " ACCOUNT CENTER_NAME ACRONYM",
                //     value: ""
                // },
                // run_center: {
                //     placeholder: " ACCOUNT CENTER_NAME ACRONYM",
                //     value: ""
                // },
                // run_date: {
                //     placeholder: "",
                //     value: ""
                // }
            },
            childs: [
                // {
                //     name: "EXPERIMENT_REF",
                //     content: false,
                //     meta: {
                //         refname: {
                //             placeholder: "EXPERIMENT ALIAS OF RELEVANT EXPERIMENT OBJECT",
                //             value: "",
                //         }
                //     }
                // },
                {
                    name: "FILES",
                    content: false,
                    childs: [
                        {
                            name: "FILE",
                            content: false,
                            meta: {
                                alias: {
                                    placeholder: "UNIQUE NAME FOR RUN",
                                    value: ""
                                },
                                center_name: {
                                    placeholder: " ACCOUNT CENTER_NAME ACRONYM",
                                    value: ""
                                },
                                run_center: {
                                    placeholder: " ACCOUNT CENTER_NAME ACRONYM",
                                    value: ""
                                },
                                run_date: {
                                    placeholder: "",
                                    value: ""
                                },
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
                    name: "RUN_TYPE",
                    content: false,
                    childs: [
                        {
                            name: "EXPERIMENT_REF",
                            content: false,
                            meta: {
                                refname: {
                                    placeholder: "EXPERIMENT ALIAS OF RELEVANT EXPERIMENT OBJECT",
                                    value: "",
                                }
                            }
                        },
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
                    name: "DATA_BLOCK",
                    content: false,
                    meta: {
                        member_name: {
                            placeholder: " Same emmber name as an experiment xml of a pooled experiment.For experiments without a pool is not necessary",
                            value: ""
                        }
                    },
                    // childs: [
                    // {
                    //     name: "FILES",
                    //     content: false,
                    //     childs: [
                    //         {
                    //             name: "FILE",
                    //             content: false,
                    //             meta: {
                    //                 accession_id: {
                    //                     required: true,
                    //                     placeholder: "Identifies a record by its accession. The scope of resolution is the entire Archive",
                    //                     value: ""
                    //                 },
                    //                 filename: {
                    //                     placeholder: " File name",
                    //                     value: ""
                    //                 },
                    //                 filetype: {
                    //                     placeholder: "File type",
                    //                     options: [
                    //                         "srf",
                    //                         "sff",
                    //                         "fastq",
                    //                         "cram",
                    //                         "bam",
                    //                         "Illumina_native_qseq",
                    //                         "Illumina_native_scarf",
                    //                         "Illumina_native_fastq",
                    //                         "SOLiD_native_csfasta",
                    //                         "SOLiD_native_qual",
                    //                         "PacBio_HDF5",
                    //                         "CompleteGenomics_native"
                    //                     ],
                    //                     value: ""
                    //                 },
                    //                 checksum_method: {
                    //                     placeholder: "enter MD5 or SHA-256",
                    //                     value: ""
                    //                 },
                    //                 checksum: {
                    //                     placeholder: "Checksum1",
                    //                     value: ""
                    //                 },
                    //                 unencrypted_checksum: {
                    //                     placeholder: "Checksum2",
                    //                     value: ""
                    //                 }
                    //             }
                    //         }
                    //     ]
                    // }
                    // ]
                }
            ]
        }
    ]

}

export default {
    tree
};