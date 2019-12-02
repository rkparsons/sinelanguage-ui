import { graphql } from 'gatsby'

export const newsFragment = graphql`
    fragment newsFragment on Query {
        prismicNews {
            data {
                body {
                    __typename
                    ... on PrismicNewsBodyArtist {
                        primary {
                            artist {
                                uid

                                document {
                                    data {
                                        name
                                        published_date
                                        image {
                                            localFile {
                                                childImageSharp {
                                                    fluid {
                                                        ...GatsbyImageSharpFluid_withWebp
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ... on PrismicNewsBodyRelease {
                        primary {
                            release {
                                uid

                                document {
                                    data {
                                        name
                                        published_date
                                        image {
                                            localFile {
                                                childImageSharp {
                                                    fluid {
                                                        ...GatsbyImageSharpFluid_withWebp
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
