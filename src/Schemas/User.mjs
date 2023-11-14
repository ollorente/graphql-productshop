// @ts-check
import { gql } from 'apollo-server-express'

export const UserSchema = gql`
  extend type Query {
    me: User
    user(id: ID!): User
    users(options: Options): [User]
  }

  extend type Mutation {
    auth(input: UserDataInput!): UserData
    userCreate(input: UserCreateInput!): User
    userUpdate(id: ID!, input: UserUpdateInput!): User
    userRemove(id: ID!): Boolean
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    phone: String!
    gravatar: String
    isActive: Boolean
    isLock: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input UserDataInput {
    username: String!
    password: String!
  }

  type UserData {
    token: String!
    user: User
  }

  input UserCreateInput {
    phone: String!
    name: String!
    email: String!
    password: String!
    isActive: Boolean
  }

  input UserUpdateInput {
    phone: String
    name: String
    password: String
    isActive: Boolean
    isLock: Boolean
  }
`

export const UserResolvers = {
  Query: {
    me: async (_, { id }, ctx) => { },
    user: async (_, { id }, ctx) => { },
    users: async (_, { options }, ctx) => { }
  },
  Mutation: {
    auth: async (_, { input }, ctx) => { },
    userCreate: async (_, { input }, ctx) => {
      console.log("🚀 ~ file: User.mjs:67 ~ userCreate: ~ input:", input)
      return input
    },
    userUpdate: async (_, { id, input }, ctx) => { },
    userRemove: async (_, { id }, ctx) => { }
  },
  User: {
    createdAt: async ({ createdAt }, args, ctx) => { },
    updatedAt: async ({ updatedAt }, args, ctx) => { }
  }
}
