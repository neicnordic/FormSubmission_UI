// const tree = {
//     name: "ANALYSIS_SET",
//     content: false,
//     childs: [
//         {
//             name: "ANALYSIS",
//             content: false,
//             meta: {
//                 alias: {
//                     placeholder: "UNIQUE NAME FOR ANALYSIS",
//                     value: ""
//                 },
//                 center_name: {
//                     placeholder: "Center name abbreviation",
//                     value: ""
//                 },
//                 broker_name: {
//                     placeholder: "center name abbreviation",
//                     value: ""
//                 },
//                 analysis_center: {
//                     placeholder: "center name abbreviation",
//                     value: ""
//                 },
//                 analysis_date: {
//                     placeholder: "2011-11-18T10:10:10.0Z",
//                     value: ""
//                 },
//             },
//             childs: [
//                 {
//                     name: "TITLE",
//                     content: true,
//                     placeholder: "A SHORT INFORMATIVE DESCRIPTION OF THE SAMPLE"
//                 },
//
//                 {
//                     name: "DESCRIPTION",
//                     content: true,
//                     placeholder: "a detailed description of the analysis"
//                 },
//                 {
//                     name: "STUDY_REF",
//                     content: false,
//                     meta: {
//                         ref_name: {
//                             placeholder: "STUDY ALIAS OF RELEVANT STUDY OBJECT",
//                             value: ""
//                         },
//
//                         refcenter: {
//                             placeholder: "center name abbreviation",
//                             value: ""
//                         }
//                     }
//                 },
//                 {
//                     name: "SAMPLE_REF",
//                     content: false,
//                     meta: {
//                         alias: {
//                             placeholder: "Unique name for submission",
//                             value: ""
//                         },
//                         center_name: {
//                             placeholder: "Center name abbreviation",
//                             value: ""
//                         },
//                         broker_name: {
//                             placeholder: "center name abbreviation",
//                             value: ""
//                         },
//                         analysis_center: {
//                             placeholder: "center name abbreviation",
//                             value: ""
//                         },
//                         analysis_date: {
//                             placeholder: "2011-11-18T10:10:10.0Z",
//                             refname: {
//                                 placeholder: "SAMPLE ALIAS OF RELEVANT SAMPLE OBJECT",
//                                 value: ""
//                             },
//                             refcenter: {
//                                 placeholder: "Center name abbreviation",
//                                 value: ""
//                             },
//                             label: {
//                                 placeholder: "sample name in the BAM file",
//                                 value: ""
//                             },
//                         }
//                     }
//                 },
//                 {
//                     name: "EXPERIMENT_REF",
//                     content: false,
//                     meta: {
//                         refname: {
//                             placeholder: "EXPERIMENT ALIAS OF RELEVANT STUDY OBJECT",
//                             value: ""
//                         },
//                         refcenter: {
//                             placeholder: "center name abbreviation",
//                             value: ""
//                         }
//                     }
//                 },
//                 {
//                     name: "RUN_REF",
//                     content: false,
//                     meta: {
//                         refname: {
//                             placeholder: "EXPERIMENT ALIAS OF RELEVANT STUDY OBJECT",
//                             value: ""
//                         },
//                         refcenter: {
//                             placeholder: "center name abbreviation",
//                             value: ""
//                         }
//                     }
//                 },
//                 {
//
//                     name: "ANALYSIS_TYPE",
//                     content: false,
//                     childs: [
//                         {
//                             name: "SAMPLE_PHENOTYPE",
//                             content: true,
//                             placeholder: "PHENOTYPE ID"
//                                 name
// :
// "ANALYSIS_REF",
//     content
// :
// false,
//     multiple
// :
// true,
//     childs
// :
// [
//     {
//         name: "REFERENCE_ALIGNMENT",
//         content: false,
//         childs: [
//                 {
//                     name: "ASSEMBLY",
//                     content: false,
//                     childs: [
//                         {
//                             name: "STANDARD",
//                             content: false,
//                             meta: {
//                                 refname: {
//                                     placeholder: "TODO: INSDC assembly name (e.g. GRCh37 or GRCh37.p1)",
//                                     value: ""
//                                 },
//                                 accession: {
//                                     placeholder: "TODO: INSDC assembly accession (e.g. GCA_000001405.1)",
//                                     value: ""
//                                 }
//                             },
//                         }
//                     ]
//                 },
//                 {
//                     name: "SEQUENCE",
//                     content: false,
//                     meta: {
//                         accession: {
//                             placeholder: "TODO: INSDC sequence accession and version",
//                             value: ""
//                         },
//                         label: {
//                             placeholder: "TODO: reference sequence name in the BAM file",
//                             value: ""
//                         }
//                     }
//                 }
//             ]
//             >>> >>> > change_form_style
//     }
// ]
// },
// {
//     name: "FILES",
//         content
// :
//     false,
//         childs
// :
//     [
//         {
//             name: "FILE",
//             content: false,
//             meta: {
//                 filename: {
//         <
//         <
//         <
//         <
//         <
//         << HEAD
//             placeholder: "phenotype file name",
// value: ""
// },
// filetype: {
//     placeholder: "phenotype_file",
//     =======
//     placeholder: " File name",
//     value: ""
// },
// filetype: {
//     placeholder: "File type",
//     options: [
//     "srf",
//     "sff",
//     "fastq",
//     "cram",
//     "bam",
//     "Illumina_native_qseq",
//     "Illumina_native_scarf",
//     "Illumina_native_fastq",
//     "SOLiD_native_csfasta",
//     "SOLiD_native_qual",
//     "PacBio_HDF5",
//     "CompleteGenomics_native"
//     ],
//     >>>>>>> change_form_style
//     value: ""
// },
// checksum_method: {
//     placeholder: "MD5",
//     value: ""
// },
// checksum: {
//     <
//     <
//     <
//     <
//     <
//     << HEAD
//         placeholder: "CHECKSUM",
//     value: ""
//     },
//     unencrypted_checksum: {
//         placeholder: "CHECKSUM",
//         value: ""
//     }
//     }
//     }]
//     =======
//     placeholder: "Checksum1",
//     value: ""
//     },
//     unencrypted_checksum: {
//         placeholder: "Checksum2",
//         value: ""
//     }
//     }
//     }
//     ]
//     >>>>>>> change_form_style
//     },
//     {
//     name: "ANALYSIS_ATTRIBUTES",
//     content: false,
//     <<<<<<< HEAD
//     =======
//     multiple: true,
//     >>>>>>> change_form_style
//     childs: [
// {
//     name: "ANALYSIS_ATTRIBUTE",
//     content: false,
//     childs: [
// {
//     name: "TAG",
//     <<<<<<< HEAD
//     content: true,
//     placeholder: "Subject ID"
//     },
//     {
//     name: "VALUE",
//     content: true,
//     placeholder: "Tag value"
//     =======
//     value: "",
//     content: true,
//     placeholder: ""
//     },
//     {
//     name: "VALUE",
//     value: "",
//     content: true,
//     placeholder: ""
//     >>>>>>> change_form_style
//     }
//     ]
//     }
//     ]
//     }
//     ]
//     }
//     ]
//     }
//
//     <<<<<<< HEAD
//     export default {
//         tree
//     };
//     =======
//
//
//     export default {
//         tree
//     }
//     >>>>>>> change_form_style
