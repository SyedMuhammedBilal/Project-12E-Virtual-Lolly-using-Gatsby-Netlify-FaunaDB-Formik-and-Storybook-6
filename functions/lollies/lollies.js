const { ApolloServer, gql } = require("apollo-server-lambda")
const dotenv = require("dotenv")
const shortid = require("shortid")
const faunadb = require("faunadb"),
  q = faunadb.query
  dotenv.config()

const typeDefs = gql`
  type Query {
    getVCard: [vCard]
  }
  type vCard {
    c1: String!
    c2: String!
    c3: String!
    rec: String!
    sender: String!
    msg: String!
    link: String!
  }
  type Mutation {
    addVCard(c1: String!, c2: String!, c3: String!, rec: String!, sender: String!, msg: String!): vCard
  }
`;

const resolvers = {
  Query: {
    getVCard: async (root, args, context) => {
      try {
        var adminClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET })
        const result = await adminClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index("Link"))),
            q.Lambda(x => q.Get(x))
          )
        )
        console.log(result.data)
        return result.data.map(d => {
          return {
            c1: d.data.c1,
            c2: d.data.c2,
            c3: d.data.c3,
            sender: d.data.sender,
            msg: d.data.msg,
            rec: d.data.rec,
            link: d.data.link
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
  Mutation: {
    addVCard: async (_, { c1, c2, c3, rec, msg, sender }) => {
      var adminClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET })
      console.log(c1, c2, c3, rec, msg, sender)
      const result = await adminClient.query(
        q.Create(
          q.Collection("vCards"), 
          {
          data: {
            c1, c2, c3, rec, msg, sender,
            link: shortid.generate()
          },
        })
      )
      return result.data
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()
