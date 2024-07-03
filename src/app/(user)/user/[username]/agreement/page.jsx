"use client";
import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    fontSize: 10,
    marginBottom: 10,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>LoanLenders Agreement</Text>
      <View style={styles.section}>
        <Text style={styles.content}>Address: H H.NO-9&10 S/F, C-1 BLK RAMA PARK UTTAM NAGAR NEAR METRO STATION DELHI New Delhi DL 110059 IN</Text>
        <Text style={styles.content}>Email: partner@loanlenders.in Website: www.loanlenders.in Official No. +91-7669914776</Text>
        <Text style={styles.content}>AGREEMENT</Text>
        <Text style={styles.content}>COMPANY NAME: HOOGMATIC ADVISORY PRIVATE LIMITED</Text>
        <Text style={styles.content}>This agreement signed on 18.03.2022 and is for PARTNER</Text>
        <Text style={styles.content}>Partner Name ID No. Aadhar Number PAN Number NAZRUL ISLAM #DSA-2592 766039762079 ACJPI0815Q</Text>
        {/* Add more content as needed */}
      </View>
    </Page>
  </Document>
);

const App = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <PDFDownloadLink document={<MyDocument />} fileName="agreement.pdf" className="mt-4">
      {({ blob, url, loading, error }) =>
        loading ? (
          <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-700">
            Loading document...
          </button>
        ) : (
          <button className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-700">
            Download PDF
          </button>
        )
      }
    </PDFDownloadLink>
  </div>
);

export default App;
