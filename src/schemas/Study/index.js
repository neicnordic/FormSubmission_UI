const tree = {
    name: "STUDY_SET",
    conent: false,
    childs: [
        {
            name: "STUDY",
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
                    name: "DESCRIPTOR",
                    content: false,
                    childs: [
                        {
                            name: "STUDY_TITLE",
                            content: true,
                            placeholder: "STUDY TITLE AS IT COULD APPEAR IN A PUBLICATION"
                        },
                        {
                            name: "STUDY_TYPE",
                            content: false,
                            meta: {
                                existing_study_type: {
                                    placeholder: "Existing study type",
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
                                }
                            }
                        },
                        {
                            name: " STUDY_ABSTRACT",
                            content: true,
                            placeholder: "STUDY ABSTRACT AS IT COULD APPEAR IN A PUBLICATION"
                        }
                    ]
                },
                {
                    name: "STUDY_ATTRIBUTES",
                    content: false,
                    multiple: true,
                    min: 0,
                    childs: [
                        {
                            name: 'TAG',
                            content: true,
                            placeholder: "TAG name"
                        },
                        {
                            name: 'VALUE',
                            content: true,
                            placeholder: "TAG value"

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