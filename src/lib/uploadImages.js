import { Buffer } from 'buffer';
import cloudinary from './cloudinary';

const uploadImage = async (file, folder) => {
  try {
    if (!file instanceof File || !file.arrayBuffer) {
      throw new Error('Invalid file object');
    }
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

export default uploadImage;
