"use client";
import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';
import axios from 'axios'; 
import { FaArrowLeft, FaCertificate } from 'react-icons/fa';


// Register font
Font.register({
    family: 'Times-Roman',
    fonts: [
      { src: 'https://fonts.gstatic.com/s/timesnewroman/v11/4vNZF4UuGpXBzaxqDJ1guQ.ttf' },
      { src: 'https://fonts.gstatic.com/s/timesnewroman/v11/bMczVy5hV1AtpyFwsnuE-Q.ttf', fontWeight: 'bold' }
    ]
  });
  
  // Create styles
  const styles = StyleSheet.create({
    page: {
      padding: 30,
    },
    section: {
      marginBottom: 10,
    },
    header: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 10,
    },
    subHeader: {
      fontSize: 10,
      textAlign: 'center',
      marginBottom: 10,
    },
    content: {
      fontSize: 11,
      marginBottom: 10,
    },
    bold: {
      fontFamily: 'Times-Roman',
      fontWeight: 'bold',
    },
    underline: {
      textDecoration: 'underline',
    },
    footer: {
      fontSize: 10,
      marginTop: 20,
    },
    table: {
      display: 'table',
      width: 'auto',
      marginBottom: 10,
    },
    tableRow: {
      flexDirection: 'row',
    },
    tableCol: {
      width: '25%',
      borderStyle: 'solid',
      borderWidth: 1,
    },
    tableCell: {
      margin: 5,
      fontSize: 10,
    }
  });

// Create Document Component
const MyDocument = ({ agreementData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>AGREEMENT</Text>
        <Text style={styles.subHeader}>
          COMPANY NAME: LEGAL257 PRIVATE LIMITED
        </Text>
        <Text style={styles.content}>
          This agreement signed on <Text style={styles.bold}>18.03.2022</Text> and is for
        </Text>
        <Text style={[styles.content, styles.bold, { textAlign: 'center' }]}>PARTNER</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={[styles.tableCell, styles.bold]}>Partner Name</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={[styles.tableCell, styles.bold]}>ID No.</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={[styles.tableCell, styles.bold]}>Aadhar Number</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={[styles.tableCell, styles.bold]}>PAN Number</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{agreementData?.name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>#DSA-2592</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>766039762079</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>ACJPI0815Q</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.header, styles.bold, styles.underline]}>BETWEEN</Text>
        <Text style={styles.content}>
          <Text style={styles.bold}>HOOGMATIC ADVISORY PRIVATE LIMITED</Text> (from this point will be known as
          <Text style={styles.bold}> Loan Lenders</Text>, a private limited company incorporated under the company’s act 2013, and having
          its corporate office at <Text style={styles.bold}>H.NO-9&10 S/F, C-1 BLK RAMA PARK UTTAM NAGAR NEAR METRO STATION DELHI New Delhi DL 110059 IN</Text>, hereinafter referred to as the “Franchiser” which expression shall unless repugnant to the context or meaning thereof include its successors and assigns of <Text style={styles.bold}>ONE PART</Text>.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.content}>
          And
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.content}>
          <Text style={styles.bold}>NAZRUL ISLAM</Text> is a proprietor and having his/her office at <Text style={styles.bold}>UTTAR KHATOWAL PO UTTAR KHATOWAL PS RUPAHIHAT NAGAON ASSAM PIN 782125, NAGAON, Assam: 782125, India</Text> and residence address at <Text style={styles.bold}>Juria Road Rupahi Near L.P School Kali Dinga Pam, NAGAON, Assam: 782124, India</Text> from now on referred to as the “<Text style={styles.bold}>Partner</Text>” and “<Text style={styles.bold}>BCP</Text>” which expression unless repugnant to the context or meaning thereof be deemed to include, legal representative, executors, administrators, successors and permitted assigns of the other PART, each a party and collectively referred to as parties.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}>1. Definitions</Text>
        <Text style={styles.content}>
          As used herein, the following terms shall have the meanings set forth below:
        </Text>
        <Text style={styles.content}>
          1. <Text style={styles.bold}>Services</Text> shall mean the Company’s services to be sold by Partner and such services as may be communicated by the Company in writing to the Partner from time to time.
        </Text>
        <Text style={styles.content}>
          2. <Text style={styles.bold}>Territory</Text> shall be allocated during the time of engagement by the Company in writing to the Partner. Any change in “Territory” shall be communicated by the Company in writing to the Partner from time to time.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.content}>
          Address: H.NO-9&10 S/F, C-1 BLK RAMA PARK UTTAM NAGAR NEAR METRO STATION DELHI New Delhi DL 110059 IN
        </Text>
        <Text style={styles.content}>
          Email: partner@loanlenders.in Website: www.loanlenders.in Official No. +91-7669914776
        </Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={[styles.header, styles.bold, styles.underline]}>BETWEEN</Text>
        <Text style={styles.content}>
          <Text style={styles.bold}>Legal257 PRIVATE LIMITED</Text> (from this point will be known as
          <Text style={styles.bold}> Loan Lenders</Text>, a private limited company incorporated under the company’s act 2013, and having
          its corporate office at <Text style={styles.bold}>H.NO-9&10 S/F, C-1 BLK RAMA PARK UTTAM NAGAR NEAR METRO STATION DELHI New Delhi DL 110059 IN</Text>, hereinafter referred to as the “Franchiser” which expression shall unless repugnant to the context or meaning thereof include its successors and assigns of <Text style={styles.bold}>ONE PART</Text>.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.content}>
          And
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.content}>
          <Text style={styles.bold}>NAZRUL ISLAM</Text> is a proprietor and having his/her office at <Text style={styles.bold}>UTTAR KHATOWAL PO UTTAR KHATOWAL PS RUPAHIHAT NAGAON ASSAM PIN 782125, NAGAON, Assam: 782125, India</Text> and residence address at <Text style={styles.bold}>Juria Road Rupahi Near L.P School Kali Dinga Pam, NAGAON, Assam: 782124, India</Text> from now on referred to as the “<Text style={styles.bold}>Partner</Text>” and “<Text style={styles.bold}>BCP</Text>” which expression unless repugnant to the context or meaning thereof be deemed to include, legal representative, executors, administrators, successors and permitted assigns of the other PART, each a party and collectively referred to as parties.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}>1. Definitions</Text>
        <Text style={styles.content}>
          As used herein, the following terms shall have the meanings set forth below:
        </Text>
        <Text style={styles.content}>
          1. <Text style={styles.bold}>Services</Text> shall mean the Company’s services to be sold by Partner and such services as may be communicated by the Company in writing to the Partner from time to time.
        </Text>
        <Text style={styles.content}>
          2. <Text style={styles.bold}>Territory</Text> shall be allocated during the time of engagement by the Company in writing to the Partner. Any change in “Territory” shall be communicated by the Company in writing to the Partner from time to time.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.content}>
          Address: H.NO-9&10 S/F, C-1 BLK RAMA PARK UTTAM NAGAR NEAR METRO STATION DELHI New Delhi DL 110059 IN
        </Text>
        <Text style={styles.content}>
          Email: partner@loanlenders.in Website: www.loanlenders.in Official No. +91-7669914776
        </Text>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={[styles.header, styles.bold, styles.underline]}>BETWEEN</Text>
        <Text style={styles.content}>
          <Text style={styles.bold}>Legal257 PRIVATE LIMITED</Text> (from this point will be known as
          <Text style={styles.bold}> Loan Lenders</Text>, a private limited company incorporated under the company’s act 2013, and having
          its corporate office at <Text style={styles.bold}>H.NO-9&10 S/F, C-1 BLK RAMA PARK UTTAM NAGAR NEAR METRO STATION DELHI New Delhi DL 110059 IN</Text>, hereinafter referred to as the “Franchiser” which expression shall unless repugnant to the context or meaning thereof include its successors and assigns of <Text style={styles.bold}>ONE PART</Text>.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.content}>
          And
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.content}>
          <Text style={styles.bold}>NAZRUL ISLAM</Text> is a proprietor and having his/her office at <Text style={styles.bold}>UTTAR KHATOWAL PO UTTAR KHATOWAL PS RUPAHIHAT NAGAON ASSAM PIN 782125, NAGAON, Assam: 782125, India</Text> and residence address at <Text style={styles.bold}>Juria Road Rupahi Near L.P School Kali Dinga Pam, NAGAON, Assam: 782124, India</Text> from now on referred to as the “<Text style={styles.bold}>Partner</Text>” and “<Text style={styles.bold}>BCP</Text>” which expression unless repugnant to the context or meaning thereof be deemed to include, legal representative, executors, administrators, successors and permitted assigns of the other PART, each a party and collectively referred to as parties.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}> Dispute Resolution and Jurisdiction</Text>
        <Text style={styles.content}>
          1.Any dispute, controversy or claims arising out of or relating to this Agreement or the
            breach, termination or invalidity thereof, shall be settled by arbitration in accordance
            with the provisions of the [Indian] Arbitration and Conciliation Act,
        </Text>
        <Text style={styles.content}>
          2. The arbitral tribunal shall be composed of three arbitrators, one arbitrator appointed by
            Loan Lenders a second arbitrator appointed by “Franchisee” and a third arbitrator to be
            appointed by such arbitrators. This Agreement has been executed on the date set forth
            herein in two (2) copies of which the Parties have taken one
        </Text>
        <Text style={styles.content}>
          3. The place of arbitration shall be at Delhi for any award whether interim or
        </Text>
        <Text style={styles.content}>
          4.The arbitral procedure shall be conducted in the English language, and any award or
            awards shall be rendered in English. The procedural law of the arbitration shall be
            Indian
        </Text>
        <Text style={styles.content}>
          5.The award of the arbitral tribunal shall be final, conclusive and binding upon the Parties,
          and the provisions of the [Indian] Arbitration and Conciliation Act, 1996 shall
        </Text>
        <Text style={styles.content}>
          6.The rights and obligations of the Parties under, or under, this Clause, including the
            arbitration agreement in this Clause, shall be governed by and be subject to Indian law,
            and the agreement shall be subject to the exclusive jurisdiction of the courts at
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.content}>
          Address: H.NO-9&10 S/F, C-1 BLK RAMA PARK UTTAM NAGAR NEAR METRO STATION DELHI New Delhi DL 110059 IN
        </Text>
        <Text style={styles.content}>
          Email: partner@loanlenders.in Website: www.loanlenders.in Official No. +91-7669914776
        </Text>
      </View>
    </Page>
  </Document>
);

const AgreementComponent = () => {
  const [agreementData, setAgreementData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/cookies'); // Replace with your API endpoint
        setAgreementData(response.data[0]);
      } catch (error) {
        setError('Error fetching agreement data.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="w-full max-w-6xl mt-5 flex items-center">
                <button onClick={() => window.history.back()} className="text-xl text-red-700 border-black rounded-full p-3">
                    <FaArrowLeft />
                </button>
            </div>

<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      
      <h1 className="text-2xl font-bold mb-4">Agreement Document</h1>
      {agreementData ? (
        <div className="flex flex-col items-center">
          <PDFDownloadLink
            document={<MyDocument agreementData={agreementData} />}
            fileName="agreement.pdf"
            className="mb-4 downloadButton bg-blue-500 text-white py-2 px-4 rounded shadow-lg transform transition-transform duration-300 hover:bg-blue-600 active:shadow-inner active:translate-y-1"
          >
            {({ loading }) =>
              loading ? 'Loading document...' : 'Download Agreement PDF'
            }
          </PDFDownloadLink>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>

    </div>
    
  );
};



export default AgreementComponent;
