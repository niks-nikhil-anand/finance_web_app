"use client";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jsPDF } from 'jspdf';
import logo from '../../../public/logo2.png'
import QrCode from '../../../public//paymentqr.jpeg'
import Image from 'next/image';





const UploadResumeForm = () => {
  const [resume, setResume] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [paymentReceipt, setPaymentReceipt] = useState(null);
  const [bankPassbook, setBankPassbook] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [qualificationCertificate, setQualificationCertificate] = useState(null);
  const [experienceCertificate, setExperienceCertificate] = useState(null);
  const [computerCertificate, setComputerCertificate] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [loading, setLoading] = useState(false);


  const [showQrCode, setShowQrCode] = useState(false); 



  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const jobTitles = [
    { title: 'Chartered Accountant', code: 'CA', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'State Manager', code: 'SM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Area Sales Manager', code: 'ASM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Distributor Team Manager', code: 'DTM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Distributor Sales Manager', code: 'DSM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Zonal Branch Manager', code: 'ZBM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Zonal Manager', code: 'ZM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Team Service Manager', code: 'TSM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Team Manager', code: 'TM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Branch Manager', code: 'BM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Area Manager', code: 'AM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Retailer Team Leader', code: 'RTL', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Field Officer', code: 'FO', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Assistant Manager', code: 'AM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Relationship Manager', code: 'RM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Accountant', code: 'AC', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Cashier', code: 'CR', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'District Distributor Manager', code: 'DDM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Loan Manager', code: 'LM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Direct Selling Agent', code: 'DSA', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Royal Branch Manager', code: 'RBM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Area Branch Manager', code: 'ABM', type: 'Fulltime', salary: '₹96k - 540k/year' },
    { title: 'Home Delivery Grocery Ration Agent', code: 'HDGRA', type: 'Fulltime', salary: '₹96k - 540k/year' },
  ];

  const handleFileChange = (e, setFile) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // First Page: Payment Receipt
    doc.setFontSize(14);
    doc.setTextColor(40);
    doc.text('Payment Receipt', 14, 20);
    
    // Add company name and description
    doc.setFontSize(16);
    doc.setTextColor(252, 186, 3); // Legal257 color
    doc.text('Legal257 Financial & Tax Services', 14, 30);
    doc.setFont("helvetica", "normal");

    

    // Company description text
    doc.setFontSize(14);
    doc.setTextColor(0);
    const companyDescription = 'Thank you for your payment! This receipt confirms that we have successfully received your payment. Below are the details of your transaction:';
    doc.text(companyDescription, 14, 50, { maxWidth: 180 });

    

    // Add client details
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 14, 70);
    doc.text(`Email: ${email}`, 14, 80);
    doc.text(`Mobile: ${mobile}`, 14, 90);
    doc.text(`City: ${city}`, 14, 100);
    doc.text(`State: ${state}`, 14, 110);
    doc.text(`Pin Code: ${pinCode}`, 14, 120);
    doc.text(`Job Title: ${jobTitle}`, 14, 130);
    doc.text('Amount Paid: ₹499', 14, 140);

    // Service Description
    const serviceDescription = 'At Legal257, we are dedicated to providing top-notch financial and tax services to our valued clients. Our offerings include expert GST and ITR filing services to ensure your business remains compliant and stress-free. Additionally, we offer competitive loan options tailored to meet your financial needs.';
    doc.text(serviceDescription, 14, 160, { maxWidth: 180 });

    // Add a new page for Terms and Conditions (first 5 terms)
    doc.addPage();
    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.text('Terms and Conditions', 14, 20);

    // Terms and Conditions text (first 5 terms)
    const termsPage2 = [
        '1. Acceptance of Terms: By using the services of Legal257, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. These terms apply to all services offered by Legal257, including financial, tax, and related services. If you do not agree with any of these terms, you must discontinue the use of our services immediately.',
        '2. Services: Legal257 provides a variety of financial and tax-related services, including but not limited to GST filing, ITR filing, mobile and DTH recharge, UPI payments, AEPS & MATM services, and loan options. A full description of our services can be found on our website. Legal257 reserves the right to modify, suspend, or discontinue any of its services at any time without prior notice.',
        '3. Payment: All payments for services rendered by Legal257 are required in advance. Once a payment is made, it is considered final and non-refundable. This includes payments for GST filing, ITR services, loan consultation fees, mobile recharges, and other services offered. It is your responsibility to ensure that the information provided at the time of payment is correct. In case of payment issues, you are required to contact us immediately.',
        '4. Non-Refundable Payment Policy: All payments made to Legal257 are non-refundable. Under no circumstances will refunds be provided after the payment is made, regardless of whether the service is used or not. You agree to this non-refundable policy at the time of making any purchase or payment for services.',
        '5. Candidate Responsibility for Interviews: If you are applying for a job through Legal257, it is your responsibility to ensure that your interview is scheduled within one week of your application. If no interview is arranged during this period, you must contact Legal257 promptly via email, phone, or the contact form on our website. Failure to do so within the specified time may result in the termination of your application process.',
    ];

    // Add the first 5 terms on the second page
    let currentY = 40;
    const lineHeight = 10;

    termsPage2.forEach((term) => {
        const wrappedText = doc.splitTextToSize(term, 180);
        wrappedText.forEach(line => {
            doc.text(line, 14, currentY);
            currentY += lineHeight;
        });
        currentY += 5; // Add extra space between terms
    });

    // Add a new page for remaining terms (Page 3)
    doc.addPage();
    doc.setFontSize(10);
    doc.text('Terms and Conditions', 14, 20);

    // Remaining terms on the third page
    const termsPage3 = [
        '6. Job Application Receipt: Upon applying for a job through Legal257, you will receive an official receipt confirming your application. This receipt does not guarantee a job offer but serves as proof of your submission. The processing time and scheduling of interviews will depend on the company discretion. Legal257 is not responsible for any delays in the hiring process.',
        '7. Liability: Legal257 is not liable for any direct, indirect, incidental, special, or consequential damages that may arise from the use of our services. This includes but is not limited to any errors, inaccuracies, or delays in the services provided, or any losses incurred as a result of decisions made based on the information provided by Legal257. You agree to use our services at your own risk.',
        '8. Changes to Terms: Legal257 reserves the right to modify, amend, or update these terms and conditions at any time without prior notice. Any changes made will be effective immediately upon posting on our website. It is your responsibility to review the terms and conditions periodically to stay informed of any changes.',
        '9. Termination of Service: Legal257 reserves the right to terminate or suspend access to our services for any reason, including violation of these terms and conditions. If services are terminated due to a violation, no refund will be provided.',
        '10. Governing Law: These terms and conditions shall be governed and construed in accordance with the laws of the jurisdiction in which Legal257 operates, without regard to its conflict of law provisions.'
    ];

    // Add remaining terms to the third page
    currentY = 40;
    termsPage3.forEach((term) => {
        const wrappedText = doc.splitTextToSize(term, 180);
        wrappedText.forEach(line => {
            doc.text(line, 14, currentY);
            currentY += lineHeight;
        });
        currentY += 5; // Add extra space between terms
    });

    // Save the PDF
    doc.save('payment_receipt_with_terms.pdf');
};


  

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const toggleQrCode = () => {
    setShowQrCode(!showQrCode); // Toggle the QR code visibility
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
    if (profilePhoto) formData.append('profilePhoto', profilePhoto);
    if (paymentReceipt) formData.append('paymentReceipt', paymentReceipt);
    if (bankPassbook) formData.append('bankPassbook', bankPassbook);
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
    formData.append('pinCode', pinCode);
    formData.append('jobTitle', jobTitle);
    formData.append('address' , address)
    try {
      const response = await fetch('/api/jobApplication', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log(formData)
        setResume(null);
        setProfilePhoto(null);
        setAadhaarCard(null);
        setPanCard(null);
        setPaymentReceipt(null);
        setBankPassbook(null);
        setQualificationCertificate(null);
        setExperienceCertificate(null);
        setComputerCertificate(null);
        setName('');
        setEmail('');
        setMobile('');
        setAddress('');
        setCity('');
        setState('');
        setPinCode('');
        setJobTitle('');
        notifySuccess();
        
        generatePDF();
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
    <div className="min-h-screen flex flex-col  items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 p-6 pb-[6rem] md:mb-[0rem]" >
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
              <label className="block text-gray-700 font-bold mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
            <label htmlFor="pinCode" className="block text-gray-700 font-bold mb-2">Pin Code:</label>
            <input
              type="text"
              id="pinCode"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              className="w-full p-2 rounded bg-white bg-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="jobTitle" className="block text-gray-700 font-bold mb-2">Job Title:</label>
            <select
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full p-2 rounded bg-white bg-opacity-50"
              required
            >
              <option value="">Select Job Title</option>
              {jobTitles.map((job) => (
                <option key={job.code} value={job.title}>{job.title}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
        <label htmlFor="profilePhoto" className="block text-gray-700 font-bold mb-2">Upload Profile Photo:</label>
        <input
          type="file"
          id="resume"
          onChange={(e) => handleFileChange(e, setProfilePhoto)}
          className="w-full p-2 rounded bg-white bg-opacity-50"
          
        />
      </div>
      <div className="mb-4">
        <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">Upload Resume:</label>
        <input
          type="file"
          id="resume"
          onChange={(e) => handleFileChange(e, setResume)}
          className="w-full p-2 rounded bg-white bg-opacity-50"
          
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
        <label htmlFor="paymentReceipt" className="block text-gray-700 font-bold mb-2">Payment Receipt(Job Apply Fee ₹499)</label>
        <input
          type="file"
          id="paymentReceipt"
          onChange={(e) => handleFileChange(e, setPaymentReceipt)}
          className="w-full p-2 rounded bg-white bg-opacity-50"
          
      
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bankPassbook" className="block text-gray-700 font-bold mb-2">Bank Passbook:</label>
        <input
          type="file"
          id="bankPassbook"
          onChange={(e) => handleFileChange(e, setBankPassbook)}
          className="w-full p-2 rounded bg-white bg-opacity-50"
      
        />
      </div>


      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
  <button
    onClick={toggleQrCode}
    className="bg-green-500 text-white py-2 px-4 rounded my-1 w-full sm:w-auto"
  >
    View QR Code
  </button>

  <a
    href="/paymentqr.jpeg"
    download="paymentqr.jpeg"
    className="bg-green-500 text-white py-2 px-4 rounded my-2 w-full sm:w-auto text-center"
  >
    Download QR Code
  </a>

  {showQrCode && (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded shadow-lg text-center w-11/12 md:w-3/4 lg:w-1/2">
        <button
          onClick={toggleQrCode}
          className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full"
        >
          Close
        </button>

        <Image
          src={QrCode}
          alt="QR Code"
          width={400}
          height={400}
          className="mx-auto"
        />
      </div>
    </div>
  )}
</div>


                




      <div className="mb-4">
      
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="mr-2"
            
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
