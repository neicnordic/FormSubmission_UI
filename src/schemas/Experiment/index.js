const libraryStrategies = [
    "WGS (Random sequencing of the whole genome)",
    "WGA (whole genome amplification to replace some instances of RANDOM)",
    "WXS (Random sequencing of exonic regions selected from the genome)",
    "RNA-Seq (Random sequencing of whole transcriptome)",
    "miRNA-Seq (for micro RNA and other small non-coding RNA sequencing)",
    "ncRNA-Seq(Non-coding RNA)",
    " WCS (Random sequencing of a whole chromosome or other replicon isolated from a genome)",
    "CLONE (Genomic clone based (hierarchical) sequencing)",
    "POOLCLONE (Shotgun of pooled clones (usually BACs and Fosmids))",
    "AMPLICON (Sequencing of overlapping or distinct PCR or RT-PCR products)",
    "CLONEEND (Clone end (5', 3', or both) sequencing)",
    "FINISHING (Sequencing intended to finish (close) gaps in existing coverage)",
    "ChIP-Seq (Direct sequencing of chromatin immunoprecipitates)",
    "MNase-Seq (Direct sequencing following MNase digestion)",
    "DNase-Hypersensitivity (Sequencing of hypersensitive sites, or segments of open chromatin that are more readily cleaved by DNaseI)",
    "Bisulfite-Seq (Sequencing following treatment of DNA with bisulfite to  convert cytosine residues to uracil depending on methylation status)",
    "EST (Single pass sequencing of cDNA templates)",
    "FL-cDNA (Full-length sequencing of cDNA templates)",
    "CTS (Concatenated Tag Sequencing)",
    "MRE-Seq (Methylation-Sensitive Restriction Enzyme Sequencing strategy)",
    "MeDIP-Seq (Methylated DNA Immunoprecipitation Sequencing strategy)",
    "MBD-Seq (Direct sequencing of methylated fractions sequencing strategy)",
    "Tn-Seq (for gene fitness determination through transposon seeding)",
    "VALIDATION",
    "FAIRE-seq (Formaldehyde-Assisted Isolation of Regulatory Elements) ",
    "SELEX (Systematic Evolution of Ligands by EXponential enrichment (SELEX) is an  in vitro strategy to analyze RNA sequences that perform an activity of interest, most commonly high affinity binding to a ligand)",
    "RIP-Seq (Direct sequencing of RNA immunoprecipitates (includes CLIP-Seq, HITS-CLIP and PAR-CLI))",
    "ChiA-PET (Direct sequencing of proximity-ligated chromatin immunoprecipitates)",
    "OTHER (Library strategy not listed)",
]

const librarySources = [
    "GENOMIC (Genomic DNA (includes PCR products from genomic DNA))",
    "TRANSCRIPTOMIC (Transcription products or non genomic DNA (EST, cDNA, RT-PCR, screened libraries))",
    "METAGENOMIC (Mixed material from metagenome)",
    "METATRANSCRIPTOMIC (Transcription products from community targets)",
    "SYNTHETIC (Synthetic DNA)",
    "VIRAL RNA (Viral RNA)",
    "OTHER (Other, unspecified, or unknown library source material)"
]

const librarySelection = [
    "RANDOM (Random selection by shearing or other method)",
    "PCR (Source material was selected by designed primers)",
    "RANDOM PCR (Source material was selected by randomly generated primers)",
    "RT-PCR (Source material was selected by reverse transcription PCR)",
    "HMPR (Hypo-methylated partial restriction digest)",
    "MF (Methyl Filtrated)",
    "repeat fractionation (replaces: CF-S, CF-M, CF-H, CF-T)",
    "size fractionation",
    "MSLL (Methylation Spanning Linking Library)",
    "cDNA (complementary DNA)",
    "ChIP (Chromatin immunoprecipitation)",
    "MNase (Micrococcal Nuclease (MNase) digestion)",
    "DNAse (Deoxyribonuclease (MNase) digestion)",
    "Hybrid Selection (Selection by hybridization in array or solution)",
    "Reduced Representation",
    "Restriction Digest (DNA fractionation using restriction enzymes)",
    "5-methylcytidine antibody",
    "MBD2 protein methyl-CpG binding domain (Enrichment by methyl-CpG binding domain)",
    "CAGE (Cap-analysis gene expression)",
    "RACE (Rapid Amplification of cDNA Ends)",
    "MDA (Multiple displacement amplification)",
    "padlock probes capture method (to be used in conjuction with Bisulfite-Seq)",
    "other (Other library enrichment, screening, or selection process)",
    "unspecified (Library enrichment, screening, or selection is not specified)"
]
const instrumentModels = [
    "Illumina Genome Analyzer",
    "Illumina Genome Analyzer II",
    "Illumina Genome Analyzer IIx",
    "Illumina HiSeq 2500",
    "Illumina HiSeq 2000",
    "Illumina HiSeq 1000",
    "Illumina MiSeq",
    "Illumina HiScanSQ",
    "unspecified"
]

const tree = {
    name: "EXPERIMENT_SET",
    content: false,
    required: true,
    placeholder: "An EXPERIMENT_SET is a container for a set of experiments and a common namespace.",
    childs: [
        {
            name: "EXPERIMENT",
            content: false,
            placeholder: "An Experiment specifies of what will be sequenced and how the sequencing will be performed. It does not contain results. An Experiment is composed of a design, a platform selection, and processing parameters.",
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
                    placeholder: "The library design including library properties, layout, protocol, targeting information, and spot and gap descriptors. ",
                    content: false,
                    childs: [
                        {
                            name: "DESIGN_DESCRIPTION",
                            content: true,
                            placeholder: "Goal and setup of the individual library including library was constructed.",
                            value: ""
                        },
                        {
                            name: "SAMPLE_DESCRIPTOR",
                            content: false,
                            placeholder: "Pick a sample to associate this experiment with. The sample may be an individual or a pool, depending on how it is specified.",
                            value: "",
                            // options: instrumentModels
                        },
                        {
                            name: "LIBRARY_DESCRIPTOR",
                            content: false,
                            placeholder: "The LIBRARY_DESCRIPTOR specifies the origin of the material being sequenced and any treatments that the material might have undergone that affect the sequencing result. This specification is needed even if the platform does not require a library construction step per se.",
                            childs: [
                                {
                                    name: "LIBRARY_NAME",
                                    content: true,
                                    required: false,
                                    placeholder: "The submitter's name for this library.",
                                    value: ""
                                },
                                {
                                    name: "LIBRARY_STRATEGY",
                                    required: true,
                                    value: "",
                                    meta: {
                                        existing_library_strategies: {
                                            placeholder: "Existing Library Strategies",
                                            value: "",
                                            options: libraryStrategies
                                        }
                                    }
                                },
                                {
                                    name: "LIBRARY_SOURCE",
                                    // content: true,
                                    required: true,
                                    value: "",
                                    meta: {
                                        existing_library_sources: {
                                            placeholder: "Existing Library Sources",
                                            value: "",
                                            options: librarySources
                                        }
                                    }
                                },
                                {
                                    name: "LIBRARY_SELECTION",
                                    required: true,
                                    value: "",
                                    meta: {
                                        existing_libraries: {
                                            placeholder: "Existing Libraries",
                                            value: "",
                                            options: librarySelection
                                        }
                                    }
                                },
                                {
                                    name: "LIBRARY_LAYOUT",
                                    content: false,
                                    placeholder: "LIBRARY_LAYOUT specifies whether to expect single, paired, or other configuration of reads.In the case of paired reads, information about the relative distance and orientation is specified.",
                                    childs: [
                                        {
                                            name: "SINGLE",
                                            content: false
                                        },
                                        {
                                            name: "PAIRED",
                                            content: false
                                        }

                                    ]
                                },
                                // {
                                //     name:"TARGETED_LOCI",
                                //     placeholder:"Names the gene(s) or locus(loci) or other genomic feature(s) targeted by the sequence."
                                // },
                                {
                                    name: "POOLING_STRATEGY",
                                    content: true,
                                    value: "",
                                    placeholder: "The optional pooling strategy indicates how the library or libraries are organized if multiple samples are involved."
                                },
                                {
                                    name: "LIBRARY_CONSTRUCTION_PROTOCOL",
                                    content: true,
                                    value: "",
                                    placeholder: "Free form text describing the protocol by which the sequencing library was constructed."

                                }
                            ]
                        },
                        // {
                        //     name: "SPOT_DESCRIPTOR",
                        //     content: false,
                        //     placeholder: "The SPOT_DESCRIPTOR specifies how to decode the individual reads of interest from the monolithic spot sequence. The spot descriptor contains aspects of the experimental design, platform, and processing information. There will be two methods of specification: one will be an index into a table of typical decodings, the other being an exact specification. This construct is needed for loading data and for interpreting the loaded runs. It can be omitted if the loader can infer read layout (from multiple input files or from one input files)."
                        // },
                        // {
                        //     name: ""
                        // }
                    ]
                },
                {
                    name: "PLATFORM",
                    content: false,
                    childs: [
                        {
                            name: "ILLUMINA",
                            content: false,
                            childs: [
                                {
                                    name: "INSTRUMENT_MODEL",
                                    content: true,
                                    placeholder: "CHOOSE FROM CONTROLLED VOCABULARY AT END OF XML",
                                    value: ""
                                }]
                        }]
                },
                // {
                //     name: "PROCESSING",
                //     content: false,
                // },
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
                },
                // {
                //     name: "EXPERIMENT_ATTRIBUTES",
                //     content: false
                // }
            ]
        }
    ]
};

export default {
    tree
}