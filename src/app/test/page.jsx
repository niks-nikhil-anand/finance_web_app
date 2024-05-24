"use client"
import { useState } from 'react';

const UploadResumeForm = () => {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    if(e.target.files){
      setResume(e.target.files[0]);
    }
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(!resume){
      return
    }

    const formData = new FormData();
    formData.append('resume', resume);

    try {
     
      const response = await fetch('/api/test', {
        method: 'POST',
        body: formData,
      });
      console.log(formData)

      if (response.ok) {
        alert('Resume uploaded successfully!');
      } else {
        alert('Failed to upload resume');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while uploading the resume');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">Upload Resume:</label>
        <input
          type="file"
          id="resume"
          onChange={handleFileChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Submit'}
      </button>
    </form>
  );
};

export default UploadResumeForm;
