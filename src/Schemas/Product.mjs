// @ts-check
import { gql } from 'apollo-server-express'

export const ProductSchema = gql`
  extend type Query {
    product(id: ID!): Product
    products(options: Options): [Product]
  }

  extend type Mutation {
    productCreate(input: ProductCreateInput!): Product
    productUpdate(id: ID!, input: ProductUpdateInput!): Product
    productRemove(id: ID!): Boolean
  }

  type Product {
    id: ID!
    title: String!
    isActive: Boolean
    isLock: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input ProductCreateInput {
    title: String!
    isActive: Boolean
  }

  input ProductUpdateInput {
    title: String
    isActive: Boolean
    isLock: Boolean
  }
`

export const ProductResolvers = {
  Query: {
    product: async (_, { id }, ctx) => { },
    products: async (_, { options }, ctx) => { }
  },
  Mutation: {
    productCreate: async (_, { input }, ctx) => { },
    productUpdate: async (_, { id, input }, ctx) => { },
    productRemove: async (_, { id }, ctx) => { }
  },
  Product: {
    createdAt: async ({ createdAt }, args, ctx) => { },
    updatedAt: async ({ updatedAt }, args, ctx) => { }
  }
}
