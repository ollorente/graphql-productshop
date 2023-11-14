// @ts-check
import { gql } from 'apollo-server-express'

export const CategorySchema = gql`
  extend type Query {
    category(id: ID!): Category
    categories(options: Options): [Category]
  }

  extend type Mutation {
    categoryCreate(input: CategoryCreateInput!): Category
    categoryUpdate(id: ID!, input: CategoryUpdateInput!): Category
    categoryRemove(id: ID!): Boolean
  }

  type Category {
    id: ID!
    title: String!
    isActive: Boolean
    isLock: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CategoryCreateInput {
    title: String!
    isActive: Boolean
  }

  input CategoryUpdateInput {
    title: String
    isActive: Boolean
    isLock: Boolean
  }
`

export const CategoryResolvers = {
  Query: {
    category: async (_, { id }, ctx) => { },
    categories: async (_, { options }, ctx) => { }
  },
  Mutation: {
    categoryCreate: async (_, { input }, ctx) => { },
    categoryUpdate: async (_, { id, input }, ctx) => { },
    categoryRemove: async (_, { id }, ctx) => { }
  },
  Category: {
    createdAt: async ({ createdAt }, args, ctx) => { },
    updatedAt: async ({ updatedAt }, args, ctx) => { }
  }
}
