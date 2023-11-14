// @ts-check
import { gql } from 'apollo-server-express'

export const ImageSchema = gql`
  extend type Query {
    image(id: ID!): Image
    images(options: Options): [Image]
  }

  extend type Mutation {
    imageCreate(input: ImageCreateInput!): Image
    imageUpdate(id: ID!, input: ImageUpdateInput!): Image
    imageRemove(id: ID!): Boolean
  }

  type Image {
    id: ID!
    url: String!
    isActive: Boolean
    isLock: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input ImageCreateInput {
    url: String!
    isActive: Boolean
  }

  input ImageUpdateInput {
    url: String
    isActive: Boolean
    isLock: Boolean
  }
`

export const ImageResolvers = {
  Query: {
    image: async (_, { id }, ctx) => { },
    images: async (_, { options }, ctx) => { }
  },
  Mutation: {
    imageCreate: async (_, { input }, ctx) => { },
    imageUpdate: async (_, { id, input }, ctx) => { },
    imageRemove: async (_, { id }, ctx) => { }
  },
  Image: {
    createdAt: async ({ createdAt }, args, ctx) => { },
    updatedAt: async ({ updatedAt }, args, ctx) => { }
  }
}
