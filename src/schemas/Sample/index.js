const tree = {
    name: "SAMPLE_SET",
    conent: false,
    childs: [
        {
            name: "SAMPLE",
            content: false,
            meta: {
                // accession_id: {
                //     required: true,
                //     placeholder: "Identifies a record by its accession. The scope of resolution is the entire Archive",
                //     value: ""
                // },
                alias: {
                    placeholder: "Unique name for submission"
                },
                center_name: {
                    placeholder: "Center name abbreviation"
                }
            },
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
                    placeholder: "A SHORT INFORMATIVE DESCRIPTION OF THE SAMPLE"
                },
                // {
                //     name: "FILES",
                //     content: false,
                //     childs: [
                //         {
                //             name: "FILE",
                //             content: false,
                //             meta: {
                //                 filename: {
                //                     placeholder: " File name",
                //                     value: "",
                //                     required: true
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
                //                     placeholder: "MD5",
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
                // },
                {
                    name: "SAMPLE_NAME",
                    content: false,
                    required: true,
                    meta: {
                        display_name: {
                            value: "",
                            placeholder: "Display name"
                        },
                        // accession_id: {
                        //     required: true,
                        //     placeholder: "Identifies a record by its accession. The scope of resolution is the entire Archive",
                        //     value: ""
                        // }
                    },
                    childs: [
                        {
                            name: "TAXON_ID",
                            content: true,
                            required: true,
                            value: "",
                            placeholder: "PROVIDE NCBI TAXID FOR ORGANISM (e.g. 9606 for human)"
                        },
                        {
                            name: "SCIENTIFIC_NAME",
                            content: true,
                            required: true,
                            value: "",
                            placeholder: "SCIENTIFIC NAME AS APPEARS IN NCBI TAXONOMY FOR THE TAXON_ID (e.g. homo sapiens)"
                        },
                        {
                            name: "COMMON_NAME",
                            content: true,
                            required: true,
                            value: "",
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
                    name: "SAMPLE_LINKS",
                    placeholder: "Links to resources related to this sample or sample set (publication, datasets, online databases).",
                    content: false,
                    multiple: true,
                    childs: [
                        {
                            name: "SAMPLE_LINK",
                            conent: false,
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
                                },
                                // {
                                //     name: "UNIT",
                                //     content: true,
                                //     placeholder: "Optional Unit"
                                // }
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