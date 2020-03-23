// import { BLOCKS } from '@contentful/rich-text-types'
// import { Document } from '@contentful/rich-text-types/dist/types/types'
// import Head from '~/components/Head'
// import React from 'react'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import { graphql } from 'gatsby'

// type ViewProps = {
//     data: {
//         allContentfulPost: {
//             nodes: {
//                 title: string
//                 body: {
//                     json: Document
//                 }
//             }[]
//         }
//     }
// }

// const options = {
//     renderNode: {
//         [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
//             console.log(node)
//             // let { description, title, file } = node.data.target.fields
//             return <div></div>
//             // return <img src={file['en-US'].url} />
//         },
//     },
// }

// export default ({ data }: ViewProps) => (
//     <div>
//         <Head title="Blog" />
//         {data.allContentfulPost.nodes.map((post, i) => (
//             <div key={i}>
//                 <h3>{post.title}</h3>

//                 {documentToReactComponents(post.body.json, options)}
//             </div>
//         ))}
//     </div>
// )

// export const query = graphql`
//     {
//         allContentfulPost {
//             nodes {
//                 title
//                 body {
//                     json
//                 }
//             }
//         }
//     }
// `
