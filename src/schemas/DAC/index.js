const tree = {
    name: "DAC_SET",
    content: false,
    childs: [
        {
            name: "DAC",
            meta: {
                // alias: {
                //     placeholder: "Unique name for DAC",
                //     value: ""
                // },
                // center_name: {
                //     placeholder: " ACCOUNT CENTER_NAME ACRONYM",
                //     value: ""
                // },
                // broker_name: {
                //     placeholder: "EGA",
                //     value: ""
                // }
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
                    name: "TITLE",
                    content: true,
                    placeholder: "Formal DAC name",
                    value: ""
                },
                {
                    name: "CONTACTS",
                    content: false,
                    multiple: true,
                    childs: [
                        {
                            name: "CONTACT",
                            content: false,
                            meta: {
                                name: {
                                    placeholder: "name of contact",
                                    value: ""
                                },
                                email: {
                                    placeholder: "Email address",
                                    value: ""
                                },
                                organisation: {
                                    placeholder: "Name of organisation contact affiliated to",
                                    value: ""
                                },
                                telephone_number: {
                                    placeholder: "Telephone number",
                                    value: ""
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