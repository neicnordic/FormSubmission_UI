const tree = {
    name: "EXPERIMENT_SET",
    content: false,
    placeholder: "An EXPERMENT_SET is a container for a set of experiments and a common namespace.",
    childs: [
        {
            name: "EXPERIMENT",
            content: false,
            placeholder: "An Experiment specifies of what will be sequenced and how the sequencing will be performed. It does not contain results. An Experiment is composed of a design, a platform selection, and processing parameters.",
            childs: [
                {
                    name: "TITLE",
                    content: true,
                    placeholder: "Short text that can be used to call out experiment records in searches or in displays.This element is technically optional but should be used for all new records.",
                    value: ""
                },
                {
                    name: "STUDY_REF",
                    meta: {
                        refname: {
                            value: "",
                            placeholder: ""
                        }
                    }
                },
                {
                    name: "DESIGN",
                    content: true,
                    value: ""
                },
                {
                    name: "EXPERIMENT_LINKS",
                    placeholder: "Links to resources related to this experiment or experiment set (publication, datasets, online databases).",
                    content: false,
                    childs: [
                        {
                            name: "EXPERIMENT_LINK",
                            multiple: true,
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
        }
    ]
};



export default {
    tree
}