const tree = {
    name: "STUDY_SET",
    content: false,
    required: true,
    meta: {
        xmlns: {
            value: "xsi:http://www.w3.org/2001/XMLSchema-instance"
        },
        noNamespaceSchemaLocation: {
            value: "ftp://ftp.sra.ebi.ac.uk/meta/xsd/sra_1_5/SRA.study.xsd"
        }
    },
    childs: [
        {
            name: "STUDY",
            content: false,

            meta: {
                alias: {
                    placeholder: "Unique name for submission",
                    value: ""
                },
                center_name: {
                    placeholder: "Center name abbreviation",
                    value: ""
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
                    name: "DESCRIPTOR",
                    content: false,
                    required: true,
                    childs: [
                        {
                            name: "STUDY_TITLE",
                            content: true,
                            required: true,
                            placeholder: "STUDY TITLE AS IT COULD APPEAR IN A PUBLICATION",
                            value: ""
                        },
                        {
                            name: "STUDY_TYPE",
                            content: false,
                            required: true,
                            meta: {
                                existing_study_type: {
                                    placeholder: "Existing study type",
                                    value: "",
                                    options: [
                                        "Whole Genome Sequencing",
                                        "Metagenomics",
                                        "Transcriptome Analysis",
                                        "Resequencing",
                                        "Epigenetics",
                                        "Synthetic Genomics",
                                        "Forensic or Paleo-genomics",
                                        "Gene Regulation Study",
                                        "Cancer Genomics",
                                        "Population Genomics",
                                        "RNASeq",
                                        "Exome Sequencing",
                                        "Pooled Clone Sequencing",
                                        "Other"
                                    ]
                                },
                                // accession_id: {
                                //     required: true,
                                //     placeholder: "Identifies a record by its accession. The scope of resolution is the entire Archive",
                                //     value: ""
                                // }
                            },
                        },
                        {
                            name: "STUDY_ABSTRACT",
                            content: true,
                            placeholder: "STUDY ABSTRACT AS IT COULD APPEAR IN A PUBLICATION",
                            value: ""
                        },
                        {
                            name: "RELATED_STUDIES",
                            content: false,
                            required: false,
                            childs: [
                                {
                                    name: "RELATED_STUDY",
                                    content: false,
                                    required: true,
                                    multiple: true,
                                    min: 1,
                                    childs: [
                                        // {
                                        //     name: "RELATED_LINK",
                                        //     placeholder: "Related study or project record from a list of supported databases. The study's information is derived from this project record rather than stored as first class information.",
                                        //     content: true,
                                        //     value: ""
                                        // },
                                        {
                                            name: "IS_PRIMARY",
                                            placeholder: "Whether this study object is designated as the primary source of the study or project information.",
                                            content: true,
                                            type: "boolean",
                                            value: null
                                        }
                                    ]
                                }
                                // {
                                //     name: "STUDY_DESCRIPTION",
                                //     content: true,
                                //     placeholder: "More extensive free-form description of the study.",
                                //     value: ""
                                // }
                            ]
                        }
                    ]
                },
                {
                    name: "STUDY_ATTRIBUTES",
                    content: false,
                    childs: [
                        {
                            name: "STUDY_ATTRIBUTE",
                            content: false,
                            multiple: true,
                            min: 1,
                            childs: [
                                {
                                    name: 'TAG',
                                    content: true,
                                    placeholder: "TAG name",
                                    value: ""
                                },
                                {
                                    name: 'VALUE',
                                    content: true,
                                    placeholder: "TAG value",
                                    value: ""

                                }
                            ]
                        }
                    ]
                },

                // {
                //     name: "STUDY_LINKS",
                //     content: false,
                //     multiple: true,
                //     min: 0,
                //     max:1,
                //     childs: [
                //         {
                //             name: "STUDY_LINK",
                //             content: true,
                //             required:true,
                //             placeholder: "",
                //             value: ""
                //         }]
                // }
            ]
        },
    ]

}

export default {
    tree
};