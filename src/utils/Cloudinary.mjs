// @ts-check
import { env } from 'node:process'
import cloudinary from 'cloudinary'
import fs from 'fs-extra'

// @ts-ignore
cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUDNAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET
})

export const up = async function (params) {
  const result = await cloudinary.v2.uploader.upload(
    params.path, {
    folder: `/${env.CLOUDINARY_APP}/${params.folder}`
  },
    function (error, result) {
      console.log(error)
    }
  )

  await fs.unlink(params.path)

  return {
    image: result.secure_url,
    publicId: result.public_id
  }
}

export const down = async function (params) {
  // @ts-ignore
  cloudinary.uploader.destroy(params, function (result) {
    console.log(result)
  })

  return true
}