import cloudinary from './cloudinary';

export const uploadImage = async (file, folder) => {
  try {
    const buffer = await file.arrayBuffer();
    const bytes = Buffer.from(buffer);

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'auto',
          folder: folder,
        },
        (err, result) => {
          if (err) {
            return reject(err.message);
          }
          resolve(result);
        }
      );

      uploadStream.end(bytes);
    });
  } catch (error) {
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};
