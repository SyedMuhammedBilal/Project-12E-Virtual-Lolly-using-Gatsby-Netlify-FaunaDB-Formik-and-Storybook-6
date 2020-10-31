// const path = require("path")
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPages } = actions

//   const { data } = await graphql(`
//   {
//     get_lollies {
//       getVCard {
//         c1
//         c2
//         c3
//         link
//         rec
//         msg
//         sender
//       }
//     }
//   }
  
//   `)
//   console.log(data)

//   data.get_lollies.getVCard.forEach(node => {
//     createPages({
//       path: `lolly/${node.link}`,
//       component: path.resolve("./src/templates/template.tsx"),
//       context: {
//         top: node.c1,
//         middle: node.c2,
//         bottom: node.c3,
//         link: node.link,
//         msg: node.msg,
//         sender: node.sender,
//         rec: node.rec,
//       },
//     })
//   })
// }
