import { v2 as cloudinary } from "cloudinary"

/** Configure Cloudinary from .env.local */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key:    process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
})

/**
 * uploadImage
 * Uploads a Buffer to Cloudinary and returns the secure URL.
 * All images go into the "nassira-properties" folder.
 */
export async function uploadImage(buffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "nassira-properties" },
      (error, result) => {
        if (error || !result) return reject(error)
        resolve(result.secure_url)
      }
    )
    stream.end(buffer)              // pipe the buffer into the stream
  })
} 