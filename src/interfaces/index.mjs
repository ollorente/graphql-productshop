export const Admin = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    name: String(db.name),
    isActive: Boolean(db.isActive === true ? true : false),
    isLock: Boolean(db.isLock === true ? true : false),
    createdAt: db.createdAt ? db.createdAt : '',
    updatedAt: db.updatedAt ? db.updatedAt : '',
  }
}

export const RefAdmin = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    name: String(db.name),
    isActive: Boolean(db.isActive === true ? true : false),
    isLock: Boolean(db.isLock === true ? true : false),
  }
}

export const Category = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    name: String(db.name),
    isActive: Boolean(db.isActive === true ? true : false),
    isLock: Boolean(db.isLock === true ? true : false),
    createdAt: db.createdAt ? db.createdAt : '',
    updatedAt: db.updatedAt ? db.updatedAt : '',
  }
}

export const RefCategory = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    name: String(db.name),
    isActive: Boolean(db.isActive === true ? true : false),
    isLock: Boolean(db.isLock === true ? true : false),
  }
}

export const Country = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    title: String(db.title),
    slug: String(db.slug),
    _products: Array(db._products.length > 0 ? db._products : []),
    _productsCount: Number(db._productsCount ? db._productsCount : 0),
    isActive: Boolean(db.isActive === true ? true : false),
    isLock: Boolean(db.isLock === true ? true : false),
    createdAt: db.createdAt ? db.createdAt : '',
    updatedAt: db.updatedAt ? db.updatedAt : '',
  }
}

export const RefCountry = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    title: String(db.title),
    slug: String(db.slug),
    _productsCount: Number(db._productsCount ? db._productsCount : 0),
    isActive: Boolean(db.isActive === true ? true : false),
    isLock: Boolean(db.isLock === true ? true : false),
  }
}

export const Image = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    url: String(db.url),
    publicId: String(db.publicId ? db.publicId : ''),
    productId: String(db.productId),
    userId: String(db.userId),
    isActive: Boolean(db.isActive === true ? true : false),
    isLock: Boolean(db.isLock === true ? true : false),
    createdAt: db.createdAt ? db.createdAt : '',
    updatedAt: db.updatedAt ? db.updatedAt : '',
  }
}

export const RefImage = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    url: String(db.url),
    productId: String(db.productId),
    isActive: Boolean(db.isActive === true ? true : false),
    isLock: Boolean(db.isLock === true ? true : false),
  }
}

export const Product = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    name: String(db.name),
    isActive: Boolean(db.isActive === true ? true : false),
    isLock: Boolean(db.isLock === true ? true : false),
    createdAt: db.createdAt ? db.createdAt : '',
    updatedAt: db.updatedAt ? db.updatedAt : '',
  }
}

export const RefProduct = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    name: String(db.name),
    isActive: Boolean(db.isActive === true ? true : false),
    isLock: Boolean(db.isLock === true ? true : false),
  }
}

export const RefreshToken = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    token: String(db.token),
    userId: String(db.userId),
    createdAt: db.createdAt ? db.createdAt : '',
    updatedAt: db.updatedAt ? db.updatedAt : '',
  }
}

export const RefRefreshToken = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    token: String(db.token),
    userId: String(db.userId),
  }
}

export const User = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    name: String(db.name),
    email: String(db.email),
    password: String(db.password),
    username: String(db.username),
    phone: String(db.phone),
    image: String(db.image ? db.image : ''),
    publicId: String(db.publicId ? db.publicId : ''),
    gravatar: String(db.gravatar ? db.gravatar : ''),
    provider: String(db.provider ? db.provider : 'local'),
    _categories: Array(db._categories.length > 0 ? db._categories : []),
    _categoriesCount: Number(db._categoriesCount ? db._categoriesCount : 0),
    _images: Array(db._images.length > 0 ? db._images : []),
    _imagesCount: Number(db._imagesCount ? db._imagesCount : 0),
    _products: Array(db._products.length > 0 ? db._products : []),
    _productsCount: Number(db._productsCount ? db._productsCount : 0),
    isActive: Boolean(db.isActive === true ? true : false),
    isLock: Boolean(db.isLock === true ? true : false),
    createdAt: db.createdAt ? db.createdAt : '',
    updatedAt: db.updatedAt ? db.updatedAt : '',
  }
}

export const RefUser = (db) => {
  return {
    id: String(db._id ? db._id : ''),
    name: String(db.name),
    username: String(db.username),
    phone: String(db.phone),
    image: String(db.image ? db.image : ''),
    gravatar: String(db.gravatar ? db.gravatar : ''),
    _categoriesCount: Number(db._categoriesCount ? db._categoriesCount : 0),
    _imagesCount: Number(db._imagesCount ? db._imagesCount : 0),
    _productsCount: Number(db._productsCount ? db._productsCount : 0),
    isActive: Boolean(db.isActive === true ? true : false),
    isLock: Boolean(db.isLock === true ? true : false),
  }
}