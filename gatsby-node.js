const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      get_vCard {
        getVCard {
          id,
          c1,
          c2,
          c3,
          link,
          rec,
          sender,
          msg
        }
      }
    }
  `)

  data.get_vCard.getVCard.forEach(node => {
    createPage({
      path: `lolly/${node.link}`,
      component: path.resolve("./src/templates/template.tsx"),
      context: {
        c1: node.c3,
        c2: node.c2,
        c3: node.c1,
        link: node.link,
        msg: node.msg,
        sender: node.sender,
        rec: node.rec,
      },
    })
  })
}
