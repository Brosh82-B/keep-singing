import React, { useState } from 'react';
import axios from 'axios';

const CloudinaryUploader = () => {
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [publicUrl, setPublicUrl] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const uploadImage = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'fpl0cyrm'); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dxgpdylke/image/upload`, // Replace with your Cloudinary cloud name
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            setUploadProgress(progress);
          },
        }
      );
        console.log(response.data.secure_url)
      setPublicUrl(response.data.secure_url);
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={uploadImage}>Upload Image</button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
      {publicUrl && <img src={publicUrl} alt="Uploaded" />}
      {publicUrl && <p>Public URL: {publicUrl}</p>}
    </div>
  );
};

export default CloudinaryUploader;
