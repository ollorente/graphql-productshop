// @ts-check
import { gql } from 'apollo-server-express'

import { CategoryResolvers, CategorySchema } from './Schemas/Category.mjs'
import { CountryResolvers, CountrySchema } from './Schemas/Country.mjs'
import { ImageResolvers, ImageSchema } from './Schemas/Image.mjs'
import { ProductResolvers, ProductSchema } from './Schemas/Product.mjs'
import { UserResolvers, UserSchema } from './Schemas/User.mjs'

const typeDefinitions = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  input Options {
    limit: Int
    page: Int
  }

  type DateTime {
    _: String
  }
`

export const rootTypeDefs = [
  typeDefinitions,
  CategorySchema,
  CountrySchema,
  ImageSchema,
  ProductSchema,
  UserSchema
]

export const rootResolvers = [
  CategoryResolvers,
  CountryResolvers,
  ImageResolvers,
  ProductResolvers,
  UserResolvers
]
