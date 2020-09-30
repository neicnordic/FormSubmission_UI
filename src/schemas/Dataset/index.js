const tree = {
    name: "DATASETS",
    content: false,
    childs: [
        {
            name: "DATASET",
            content: false,
            // meta: {
            //     // alias: {
            //     //     placeholder: "Unique name.",
            //     //     value: ""
            //     // },
            //     // center_name: {
            //     //     placeholder: "ACCOUNT CENTER_NAME ACRONYM",
            //     //     value: ""
            //     // },
            //     // broker_name: {
            //     //     placeholder: "EGA",
            //     //     value: ""
            //     // }
            // },
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
                                    placeholder: "Unique name.",
                                    value: ""
                                },
                                center_name: {
                                    placeholder: "ACCOUNT CENTER_NAME ACRONYM",
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
                    placeholder: "DATASET TITLE e.g. Control samples for X",
                    value: "",
                    content: true
                },
                {
                    name: "DATASET_TYPE",
                    placeholder: "Whole genome sequencing",
                    content: true,
                    value: ""
                },
                {
                    name: "RUN_REF",
                    content: false,
                    meta: {
                        accession: {
                            placeholder: "ACCESSION NUMBER(EGAR)",
                            value: "",
                            options: [
                                "Controlled terms for Dataset type",
                                "Whole genome sequencing",
                                "Exome sequencing",
                                "Genotyping by array",
                                "Transcriptome profiling by high-throughput sequencing",
                                "Transcriptome profiling by array",
                                "Amplicon sequencing",
                                "Methylation binding domain sequencing",
                                "Methylation profiling by high-throughput sequencing",
                                "Phenotype information",
                                "Study summary information",
                                "Genomic variant calling "
                            ]
                        }
                    }
                },
                {
                    name: "ANALYSIS_REF",
                    content: false,
                    meta: {
                        accession: {
                            placeholder: "ACCESSION NUMBER(EGAR)",
                            value: "",
                            options: [
                                "Controlled terms for Dataset type",
                                "Whole genome sequencing",
                                "Exome sequencing",
                                "Genotyping by array",
                                "Transcriptome profiling by high-throughput sequencing",
                                "Transcriptome profiling by array",
                                "Amplicon sequencing",
                                "Methylation binding domain sequencing",
                                "Methylation profiling by high-throughput sequencing",
                                "Phenotype information",
                                "Study summary information",
                                "Genomic variant calling "
                            ]
                        }
                    }
                },
                {
                    name: "POLICY_REF",
                    content: false,
                    meta: {
                        accession: {
                            placeholder: "ACCESSION NUMBER(EGAR)",
                            value: "",
                            options: [
                                "Controlled terms for Dataset type",
                                "Whole genome sequencing",
                                "Exome sequencing",
                                "Genotyping by array",
                                "Transcriptome profiling by high-throughput sequencing",
                                "Transcriptome profiling by array",
                                "Amplicon sequencing",
                                "Methylation binding domain sequencing",
                                "Methylation profiling by high-throughput sequencing",
                                "Phenotype information",
                                "Study summary information",
                                "Genomic variant calling "
                            ]
                        },
                        refcenter: {
                            placeholder: "Consortium name if appropriate",
                            value: ""
                        }
                    }
                },
                {
                    name: "DATASET_LINKS",
                    content: false,
                    multiple: true,
                    childs: [
                        {
                            name: "DATASET_LINK",
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
                {
                    name: "DATASET_ATTRIBUTES",
                    content: false,
                    childs: [
                        {
                            name: "DATASET_ATTRIBUTE",
                            content: false,
                            multiple: true,
                            childs: [
                                {
                                    name: "TAG",
                                    content: true,
                                    value: "",
                                    placeholder: "Submitter defined tag name"
                                },
                                {
                                    name: "VALUE",
                                    content: true,
                                    value: "",
                                    placeholder: "Submitter defined value"
                                },
                                {
                                    name: "UNITS",
                                    content: true,
                                    value: "",
                                    placeholder: "Submitter defined units"
                                },
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

