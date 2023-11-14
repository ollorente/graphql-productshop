// @ts-check
import { gql } from 'apollo-server-express'

export const CountrySchema = gql`
  extend type Query {
    country(id: ID!): Country
    countries(options: Options): [Country]
  }

  extend type Mutation {
    countryCreate(input: CountryCreateInput!): Country
    countryUpdate(id: ID!, input: CountryUpdateInput!): Country
    countryRemove(id: ID!): Boolean
  }

  type Country {
    id: ID!
    title: String!
    isActive: Boolean
    isLock: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CountryCreateInput {
    title: String!
    isActive: Boolean
  }

  input CountryUpdateInput {
    title: String
    isActive: Boolean
    isLock: Boolean
  }
`

export const CountryResolvers = {
  Query: {
    country: async (_, { id }, ctx) => { },
    countries: async (_, { options }, ctx) => { }
  },
  Mutation: {
    countryCreate: async (_, { input }, ctx) => { },
    countryUpdate: async (_, { id, input }, ctx) => { },
    countryRemove: async (_, { id }, ctx) => { }
  },
  Country: {
    createdAt: async ({ createdAt }, args, ctx) => { },
    updatedAt: async ({ updatedAt }, args, ctx) => { }
  }
}
