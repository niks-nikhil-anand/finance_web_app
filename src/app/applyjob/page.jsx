"use client";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UploadResumeForm = () => {
  const [resume, setResume] = useState(null);
  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [qualificationCertificate, setQualificationCertificate] = useState(null);
  const [experienceCertificate, setExperienceCertificate] = useState(null);
  const [computerCertificate, setComputerCertificate] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);


  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleFileChange = (e, setFile) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const notifyLoading = () => {
    toast.info("Submitting form...", {
      position: "bottom-right"
    });
  };

  const notifySuccess = () => {
    toast.success("Form submitted successfully!", {
      position: "bottom-right"
    });
  };

  const notifyError = (message) => {
    toast.error(`Error: ${message}`, {
      position: "bottom-right"
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    notifyLoading();

    const formData = new FormData();
    if (resume) formData.append('resume', resume);
    if (aadhaarCard) formData.append('aadhaarCard', aadhaarCard);
    if (panCard) formData.append('panCard', panCard);
    if (qualificationCertificate) formData.append('qualificationCertificate', qualificationCertificate);
    if (experienceCertificate) formData.append('experienceCertificate', experienceCertificate);
    if (computerCertificate) formData.append('computerCertificate', computerCertificate);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('city', city);
    formData.append('state', state);



    
    

    try {
      const response = await fetch('/api/jobApplication', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log(formData)
        setResume(null);
        setAadhaarCard(null);
        setPanCard(null);
        setQualificationCertificate(null);
        setExperienceCertificate(null);
        setComputerCertificate(null);
        setName('');
        setEmail('');
        setMobile('');
        setCity('');
        setState('');
        notifySuccess();
      } else {
        console.error('Error:', await response.json());
        notifyError(errorData.message);
      }
    } catch (error) {
      console.log(formData)
      console.error('Error:', error);
      notifyError('Something went wrong.');
    } finally {
      console.log(formData)
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col  items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 p-6 mb-[6rem] md:mb-[0rem]" >
      <div  className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-white mb-6">Hiring Form - Legal257</h2>
      
     
      <form onSubmit={handleSubmit} >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="w-full p-2 rounded bg-white bg-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-2 rounded bg-white bg-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2">Mobile Number:</label>
        <input
          type="tel"
          id="mobile"
          value={mobile}
          onChange={handleMobileChange}
          className="w-full p-2 rounded bg-white bg-opacity-50"
          required
        />
      </div>

      <div>
              <label className="block text-gray-700 font-bold mb-2">City</label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2 rounded bg-white bg-opacity-50"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">State</label>
              <select
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full p-2 rounded bg-white bg-opacity-50"
              >
                <option value="" disabled>Select State</option>
                {statesOfIndia.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>
      <div className="mb-4">
        <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">Upload Resume:</label>
        <input
          type="file"
          id="resume"
          onChange={(e) => handleFileChange(e, setResume)}
          className="w-full p-2 rounded bg-white bg-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="aadhaarCard" className="block text-gray-700 font-bold mb-2">Aadhaar Card:</label>
        <input
          type="file"
          id="aadhaarCard"
          onChange={(e) => handleFileChange(e, setAadhaarCard)}
          className="w-full p-2 rounded bg-white bg-opacity-50"
          
        />
      </div>
      <div className="mb-4">
        <label htmlFor="panCard" className="block text-gray-700 font-bold mb-2">PAN Card:</label>
        <input
          type="file"
          id="panCard"
          onChange={(e) => handleFileChange(e, setPanCard)}
          className="w-full p-2 rounded bg-white bg-opacity-50"
         
        />
      </div>
      <div className="mb-4">
        <label htmlFor="qualificationCertificate" className="block text-gray-700 font-bold mb-2">Qualification Certificate:</label>
        <input
          type="file"
          id="qualificationCertificate"
          onChange={(e) => handleFileChange(e, setQualificationCertificate)}
          className="w-full p-2 rounded bg-white bg-opacity-50"
          
        />
      </div>
      <div className="mb-4">
        <label htmlFor="experienceCertificate" className="block text-gray-700 font-bold mb-2">Experience Certificate:</label>
        <input
          type="file"
          id="experienceCertificate"
          onChange={(e) => handleFileChange(e, setExperienceCertificate)}
          className="w-full p-2 rounded bg-white bg-opacity-50"
       
        />
      </div>
      <div className="mb-4">
        <label htmlFor="computerCertificate" className="block text-gray-700 font-bold mb-2">Computer Certificate:</label>
        <input
          type="file"
          id="computerCertificate"
          onChange={(e) => handleFileChange(e, setComputerCertificate)}
          className="w-full p-2 rounded bg-white bg-opacity-50"
      
        />
      </div>
      <div className="mb-4">
      
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="mr-2"
            required
          />
          <details>
  <summary>I declare that I have not been convicted of any criminal offence</summary>
  <p> under any laws of the land I further declare that the above entries in my application from are correct I am fully aware that I am liable for legal aections including cancellation of my candidature if any information so provided by me above found to be folded AR incorrect I am aware that after the submit button is clicked l will not able to do any further corrections I am responsible for the corrections of the entries made in the application form.</p>
</details>
        </div>
        </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Submit'}
      </button>
    </form>
      </div>
    </div>
    
  );
};

export default UploadResumeForm;
