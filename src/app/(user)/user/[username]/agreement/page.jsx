"use client";
import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, PDFDownloadLink , StyleSheet , Image } from '@react-pdf/renderer';
import axios from 'axios'; 
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../../../../../../public/logo2.png'
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#E4E4E4',
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
      <Page size="A4" style={{ padding: 30, backgroundColor: '#FFFFFF'    }}>
        <View style={{  }}>
          <Text style={{ fontWeight: 'bold'  , marginBottom: 10 , textAlign: 'center' , marginBottom: 10 ,   borderBottomColor: 'black', borderBottomWidth: 1, borderStyle: 'double'   }}>AGREEMENT - LEGAL257 PRIVATE LIMITED</Text>
          <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 10 }}>
            COMPANY NAME:- LEGAL257 PRIVATE LIMITED - ISO 9001:2015 R 24/7
          </Text>
          <Text style={{ textAlign: 'center' , marginBottom: 10 }}>PARTNER</Text>
          <View style={{ display: 'table', width: 'auto', margin: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '25%', borderStyle: 'solid', borderWidth: 1 }}>
                <Text style={{ margin: 5, fontSize: 10, fontWeight: 'bold' }}>Partner Name</Text>
              </View>
              <View style={{ width: '25%', borderStyle: 'solid', borderWidth: 1 }}>
                <Text style={{ margin: 5, fontSize: 10, fontWeight: 'bold' }}>ID No.</Text>
              </View>
              <View style={{ width: '25%', borderStyle: 'solid', borderWidth: 1 }}>
                <Text style={{ margin: 5, fontSize: 10, fontWeight: 'bold' }}>Services</Text>
              </View>
              <View style={{ width: '25%', borderStyle: 'solid', borderWidth: 1 }}>
                <Text style={{ margin: 5, fontSize: 10, fontWeight: 'bold' }}>Mobile Number</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '25%', borderStyle: 'solid', borderWidth: 1 }}>
                <Text style={{ margin: 5, fontSize: 10 }}>{agreementData?.name}</Text>
              </View>
              <View style={{ width: '25%', borderStyle: 'solid', borderWidth: 1 }}>
                <Text style={{ margin: 5, fontSize: 10 }}>#{agreementData?.role}-{agreementData?.username}</Text>
              </View>
              <View style={{ width: '25%', borderStyle: 'solid', borderWidth: 1 }}>
                <Text style={{ margin: 5, fontSize: 10 }}>{agreementData?.services}</Text>
              </View>
              <View style={{ width: '25%', borderStyle: 'solid', borderWidth: 1 }}>
                <Text style={{ margin: 5, fontSize: 10 }}>{agreementData?.mobileNumber}</Text>
              </View>
            </View>
          </View>
          <Text style={{ fontSize: 12, textAlign: 'center', marginBottom: 10, fontWeight: 'bold', textDecoration: 'underline' }}>BETWEEN</Text>
          <Text style={{ fontSize: 11, marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Legal257 PRIVATE LIMITED</Text> (from this point will be known as
            <Text style={{ fontWeight: 'bold' }}> Loan Lenders</Text>, a private limited company incorporated under the company’s act 2013, and having
            its corporate office at <Text style={{ fontWeight: 'bold' }}>BISWANATH CHARIALI ,SONITPUR ASSAM - 784176</Text>, we are dedicated to providing top-notch financial and tax services to our valued clients. Our offerings include expert GST and ITR filing services to ensure your business remains compliant and stress-free. Additionally, we offer competitive loan options tailored to meet your financial needs.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.content}>
            And
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.content}>
            <Text style={styles.bold}>{agreementData?.name}</Text> is a proprietor and having his/her office at <Text style={styles.bold}>{agreementData?.shopAddress}</Text> and residence address at <Text style={styles.bold}>{agreementData?.city} {agreementData?.state} , {agreementData?.pinCode}</Text> from now on referred to as the “<Text style={styles.bold}>Partner</Text>” and “<Text style={styles.bold}>{agreementData?.role}</Text>” which expression unless repugnant to the context or meaning thereof be deemed to include, legal representative, executors, administrators, successors and permitted assigns of the other PART, each a party and collectively referred to as parties.
          </Text>
        </View> 

        <View style={styles.section}>
          <Text style={[styles.header, styles.bold]}> Definitions</Text>
          <Text style={styles.content}>
            As used herein, the following terms shall have the meanings set forth below:
          </Text>
          <Text style={styles.content}>
            1. <Text style={styles.bold}>Services</Text> shall mean the Company&quot;s services to be sold by Partner and such services as may be communicated by the Company in writing to the Partner from time to time.
          </Text>
          <Text style={styles.content}>
            2. <Text style={styles.bold}>Territory</Text> shall be allocated during the time of engagement by the Company in writing to the Partner. Any change in “Territory” shall be communicated by the Company in writing to the Partner from time to time.
          </Text>
          <Text style={styles.content}>
            2. <Text style={styles.bold}>Partner</Text> will have the title of Partner.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.header, styles.bold]}> Appointment</Text>
          <Text style={styles.content}>
          Company hereby appoints Partner as its non-exclusive selling agent for the services in the
          territory, and Partner hereby accepts such appointment. Partner&quot;s sole authority shall be to
          solicit customers for the services in the territory in accordance with the terms of this
          agreement. Partner shall not have the authority to make any commitments whatsoever on
          behalf of Company.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.header, styles.bold]}> General Duties</Text>
          <Text style={styles.content}>
          Partner shall use his best efforts to promote the services and maximize the sale of the services
          in the territory. Partner shall also provide reasonable assistance to Company in promotional
          activities in the territory. Partner will assist the company by taking part in all promotional
          events, use the marketing inputs judiciously for maximizing orders for the company.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.header, styles.bold]}> Reserved Rights</Text>
          <Text style={styles.content}>
          Company reserves the right to solicit/engage other Agents, Partners directly from businesses
        within the territory. Partner&quot;s task is to solicit customers from all potential businesses in the
        territory.
          </Text>
        </View>
      </Page>

    <Page size="A4" style={{ padding: 30, backgroundColor: '#FFFFFF'    }}>
    <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}> Conflict of Interest</Text>
        <Text style={styles.content}>
        Partner warrants to Company that it does not currently represent or promote any Services that
        compete with the Company&quot;s Services. During the term of this Agreement, Partner shall not
        represent, promote or otherwise try to sell within the Territory any Services that, in Company&quot;s
        judgment, compete with the Services covered by this Agreement.
        </Text>
      </View>
    <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}> Independent Contractor</Text>
        <Text style={styles.content}>
        Partner is an independent contractor, and nothing contained in this Agreement shall be
        construed to give either party the power to direct and control the day-to-day activities of the other, (ii)
        constitute the parties as partners, joint ventures, co-owners or otherwise, or (iii) allow Partner
        to create or assume any obligation on behalf of Company for any purpose whatsoever. Partner
        is not an employee of Company and is not entitled to any employee benefits. Partner shall be
        responsible for paying all income taxes and other taxes charged to Partner on amounts earned
        hereunder. All financial and other obligations associated with Partner&quot;s business are the sole
        responsibility of Partner.

        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}> Indemnification by Partner</Text>
        <Text style={styles.content}>
        Partner shall indemnify and hold Company free and harmless from any and all claims, damages
        or lawsuits (including reasonable attorney&quot;s fees) arising out of negligence or malfeasant acts
        of Partner or misrepresentation or breach of any obligations under this agreement.
        </Text>
      </View>


      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}> Commission</Text>
        <Text style={styles.content}>
        A. Sole Compensation
        </Text>
        <Text style={styles.content}>
        The Company shall pay the Partner a commission at such rate as may be communicated by the
        Company in writing to the Partner, for whole or part of the services hereto, based on the
        Maximum Retailing Price of the product as fixed by the company on every new order. This
        commission will be subjected to the relevant taxes as applicable. The Company reserves its
        right to revise the rate of commission from time to time and the same shall be intimated to the
        Partner in writing by the Company. (Through any mode verbal or written)
        </Text>


        <Text style={styles.content}>
       B. Basis of Commission
        </Text>
        <Text style={styles.content}>
        The Commission shall apply to all sales orders from customers solicited by Partner. (Customers
        defined as an individual or a company who have bought the product/services from the Partner
        for their own use.) No commissions shall be paid on (i) orders solicited directly by Company
        within the Territory; (ii) orders received from outside the Territory unless otherwise agreed in
        writing by Company. (iii) No commission will be paid to the Partner until 100% payment
        pertaining to the order is received. The company reserves the right to change the commission /
        prices on products as and when required.
        </Text>


        <Text style={styles.content}>
        C.Time of Payment        </Text>
        <Text style={styles.content}>
        The commission on all PAID ORDERS shall be due and payable within ten (10) working
        days after the Partner raises invoice.
        </Text>


        <Text style={styles.content}>
        D. Monthly Statements</Text>
        <Text style={styles.content}>
        The Partner shall submit to the company the monthly statements of commissions due and
        payable to Partner under the terms of this Agreement.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}>Sale of the Services</Text>
        <Text style={styles.content}>
        A. Prices and Terms of Sale</Text>
        <Text style={styles.content}>
        Company shall provide Partner with copies of its current market price and this is subject to
          change and the sole discretion of the same lies with the company, its payment schedules (may
          very month to month), and all Rules and Regulations and other material available for sales
          presentation and customer&apos;s information. Partner shall quote to Customers only those
          authorized prices, payment schedules, and terms and conditions as informed by Company. The
          services will be activated only after receipt of 100% payment pertaining to the order. The
          company will not refund any money in part or in full after payment on order is once received.
        </Text>
      </View>
      </Page>


    <Page size="A4" style={{ padding: 30, backgroundColor: '#FFFFFF'    }}>
    <View style={styles.section}>
    <Text style={styles.content}>
    B. Acceptance</Text>
        <Text style={styles.content}>
        All requests for service obtained by Partner shall be subject to acceptance by Company and all
quotations by Partners shall contain a statement to that effect. Partners shall have no authority
to make any acceptance or commitments to customers. Company specifically reserves the right to reject any request for service or any part thereof for any reason, Company shall inform
Partner of any written acceptances on commissionable applications/orders.

        </Text>
    <Text style={styles.content}>
    C.Collection</Text>
        <Text style={styles.content}>
        Full responsibility for collection of payment from customers rests with Partner. (If found guilty
or at any time it came to notice that documents are uploaded at the time of lead or at any time
in between the process were manipulated or are not OSV verified.)

        </Text>
    <Text style={styles.content}>
    D: Documentation</Text>
        <Text style={styles.content}>
        All documents after disbursal and before disbursal of loan id lie to the PARTNER Agent and his
responsibility is to complete the papers demanded by bank or NBFC or any other institution at
the time of filing the application or after sanction or after disbursal or at the time of pay-out.


        </Text>
    <Text style={styles.content}>
    E: Verification:</Text>
        <Text style={styles.content}>
        The file/lead which is generated by the PARTNER should be genuine and must be best to the
knowledge of PARTNER and all documents like KYC should be originally seen and verified.


        </Text>
    <Text style={styles.content}>
    F: Whistle Blower:</Text>
        <Text style={styles.content}>
        If at any time during the file/lead login or in process he came to know the intention of customer
which is doubtful in any respect he must blow the whistle to company and must inform in
written to the company.
        </Text>
    <Text style={[styles.header, styles.bold]}>Additional Responsibilities of Partner</Text>
    <Text style={styles.content}>
    A. Expense of Doing Business</Text>
        <Text style={styles.content}>
        Partner shall bear the cost and expense of conducting its business in accordance with the
terms of this Agreement. This would include salaries for the staff of the Partner who are
engaged in the business of selling the products of the Company, expenses related to
communications, telecommunication, mailing, conveyance and business entertainment if
required. The company will not entertain any reimbursement on any expense made by the
Partner other than the commissions.

        </Text>
    <Text style={styles.content}>
    B. Promotion of the Products</Text>
        <Text style={styles.content}>
        Partner shall make efforts to promote the sale of and stimulate demand for the Services within
the Territory by direct solicitation. In no event shall Partner make any representation,
guarantee or warranty concerning the Services except as expressly authorized by Company.
The Company will take care of all online promotions on their website and ensure lead
generations. Use of company logo, product logo, any advertising / promotion / marketing
activity conceived originally by the Partner should be first approved in writing by [Company
Name] before being implemented.

        </Text>
    <Text style={styles.content}>
    C.Agents & Customer Service</Text>
        <Text style={styles.content}>
        Partner shall inform and assist customers on Company&apos;s Services, and shall perform such
additional customer services by e-mail, phone and fax, whenever needed, as good salesmanship
requires and as Company may reasonably request.

        </Text>


        <Text style={styles.content}>
        D. Books and Records</Text>
        <Text style={styles.content}>
        Partner shall notify Company of any Customer&apos;s complaints regarding either the Services or
Company and immediately forward to Company the information regarding those complaints.
        </Text>


        <Text style={styles.content}>
        E. Documents Orignal Seen and Verified</Text>
        <Text style={styles.content}>
        Partner shall and will perform duties while seeing all the documents of the customer and must
believe to his knowledge that all documents presented by the customer are showing the true
and fair view. Partner shall originally see and verify all documents presented by the customer,

        </Text>


        </View>
      </Page>
    <Page size="A4" style={{ padding: 30, backgroundColor: '#FFFFFF'    }}>
    <View style={styles.section}>
    
        <Text style={styles.content}>
        if at any point the partner or BCP came to know that documents are manipulated then he/she
        must inform to the company in written format and should take necessary actions to stop the
        lead. The Orignal seen and Verified (OSV) duty is of the partner and BCP and should be
        performed for the good cause and within the business ethics.
        </Text>
        <Text style={[styles.header, styles.bold]}>Additional Obligations of Company</Text>
        <Text style={styles.content}>
        A. Assistance in Promotion</Text>
        <Text style={styles.content}>
        Company shall, at its own expense, promptly provide Partner with marketing and technical
information, training concerning the Services, brochures, instructional material, advertising
literature, and other product data.

        </Text>
        <Text style={styles.content}>
        The portal for file login will be provided by the company and all training part will be take care
        by the company.

        </Text>
    <Text style={styles.content}>
    B. Assistance in Technical Problems</Text>
        <Text style={styles.content}>
        Company shall, at its own expense, assist Partner and customers of the Services in all ways
deemed reasonable by Company in the solution of any problems relating to the Services.

        </Text>
    <Text style={styles.content}>
    C.New Developments</Text>
        <Text style={styles.content}>
        Company shall inform Partner of new Products or Services that are competitive with
Company&apos;s Products Services and other market information and competitive information as
discovered from time to time.
        </Text>
    <Text style={styles.content}>
    F: Whistle Blower:</Text>
        <Text style={styles.content}>
        If at any time during the file/lead login or in process he came to know the intention of customer
which is doubtful in any respect he must blow the whistle to company and must inform in
written to the company.
        </Text>
    <Text style={[styles.header, styles.bold]}>Trademarks and Tradenames</Text>
    <Text style={styles.content}>
    A. Use</Text>
        <Text style={styles.content}>
        During the term of this Agreement, Partner shall have the right to indicate to the public that it
is an authorized Partner of Company&apos;s Services. Nothing herein shall grant Partner any right,
title, or interest in Company&apos;s Trademarks. At no time during or after the term of this
Agreement shall Partner challenge or assist others to challenge Company&apos;s Trademarks or the registration thereof or attempt to register any trademarks, marks or trade names confusingly
similar to those of Company.

        </Text>
        </View>
      </Page>



      <Page size="A4" style={{ padding: 30, backgroundColor: '#FFFFFF'    }}>
    <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}> Non-Compete</Text>
        <Text style={styles.content}>
        For a period of refer page 1 Table after the Partner is no longer in agreement with the
      Company, the Partner will not, directly or indirectly, either as proprietor, stockholder, partner,
      officer, employee or otherwise, distribute, sell, offer to sell, or solicit any orders for the
      purchase or distribution of any products or services which are similar to those distributed, sold
      or provided by the Company.

        </Text>
      </View>
    <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}>Limitation on Liability</Text>
        <Text style={styles.content}>
        . In the event of termination by either party in accordance with any of the provisions of this
      Agreement, neither party shall be liable to the other, because of the termination for
      compensation, reimbursement or damages on account of the loss of prospective profits or
      anticipated sales or on account of expenditures or commitments in connection with the
      business or goodwill of Company or Partner.


        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}>Confidentiality</Text>
        <Text style={styles.content}>
        Partner acknowledges that by reason of its relationship to Company hereunder it will have access to certain information and materials concerning Company&apos;s business plans, customers,
        technology, and products/services that is confidential and of substantial value to Company,
        which value would be impaired if such information were disclosed to third parties. Partner
        agrees that it shall not use in any way for its own account or the account of any third party, nor
        disclose to any third party, any such confidential information revealed to it by the Company.
        Company shall advise Partner whether or not it considers any particular information or
        materials to be confidential. Partner shall not publish any description of the Products/Services
        beyond the description published by Company and without the prior written consent of the
        Company. In the event of termination of this Agreement, there shall be no use or disclosure by
        Partner of any confidential information of Company
        </Text>
      </View>


      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}>Governing Law and Jurisdiction</Text>
        <Text style={styles.content}>
        This Agreement will be governed by and construed in accordance with the laws of Republic of
        India. Each Party irrevocably and unconditionally submits to the exclusive jurisdiction of the
        [High Court]
        </Text>
        
      </View>
      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}>Entire Agreement</Text>
        <Text style={styles.content}>
        This Agreement sets forth the entire agreement and understanding of the parties relating to
      the subject matter herein and supersedes any prior discussions or agreements between them.
      No modification of or amendment to neither this Agreement, nor any waiver of any rights
      under this Agreement to be done unilaterally and it shall be effective unless in writing signed
      by the party to be charged.

        </Text>
      </View>
      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}>Notices</Text>
        <Text style={styles.content}>
        Any notices required or permitted by this Agreement shall be deemed given if sent by certified
        mail, postage prepaid, return receipt requested or by recognized overnight delivery service:
        </Text>
        <Text style={styles.content}>
        Uttar Khatowal Nagaon , Assam , 782124 IN
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}>Non-Assignability and Binding Effect</Text>
        <Text style={styles.content}>
        A mutually agreed consideration for Company&apos;s entering into this Agreement is the reputation,
      business standing, and goodwill already honoured and enjoyed by Company under its present
      ownership, and, accordingly, Partner agrees that its rights and obligations under this
      Agreement may not be transferred or assigned directly or indirectly. Subject to the foregoing,
      this Agreement shall be binding upon and insure to the benefit of the parties hereto, their
      successors and assigns.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}>Severability</Text>
        <Text style={styles.content}>
        If any provision of this Agreement is held to be invalid by a court of competent jurisdiction,
        then the remaining provisions shall nevertheless remain in full force and effect.
        </Text>
      </View>
      </Page>

      

      <Page size="A4" style={{ padding: 30, backgroundColor: '#FFFFFF'    }}>
       <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}> Applicable Law</Text>
        <Text style={styles.content}>
        This agreement is governed by and constructed in accordance with the laws of India.

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

      <View style={styles.section}>
        <Text style={[styles.header, styles.bold]}> Dispute Resolution and Jurisdiction</Text>
        <Text style={styles.content}>
        1. Any dispute, controversy or claims arising out of or relating to this Agreement or the
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
        4. The arbitral procedure shall be conducted in the English language, and any award or
        awards shall be rendered in English. The procedural law of the arbitration shall be
        Indian
        </Text>
        <Text style={styles.content}>
        5. The award of the arbitral tribunal shall be final, conclusive and binding upon the Parties,
        and the provisions of the [Indian] Arbitration and Conciliation Act, 1996 shall

        </Text>
        <Text style={styles.content}>
        6. The rights and obligations of the Parties under, or under, this Clause, including the
        arbitration agreement in this Clause, shall be governed by and be subject to Indian law,
        and the agreement shall be subject to the exclusive jurisdiction of the courts at
        </Text>
      </View>


      

      


    
    </Page>
      <Page size="A4" style={{ padding: 30, backgroundColor: '#FFFFFF'    }}>
      
    <View 
      style={{ 
        marginTop: '10px', 
        textAlign: 'center', 
        padding: 10, 
        backgroundColor: '#f1f1f1' 
      }}
    >
      <Text style={{ fontSize: 12, margin: 5 }}>
        Address: BISWANATH CHARIALI , SONITPUR ASSAM-784176 IN
      </Text>
      <Text style={{ fontSize: 12, margin: 5 }}>
        Email: legal257rgvf@gmail.com
      </Text>
      <Text style={{ fontSize: 12, margin: 5 }}>
        Website: www.legal257.in
      </Text>
      <Text style={{ fontSize: 12, margin: 5 }}>
        Official No. +91 8761873802
      </Text>
    </View>
    <View 
      style={{ 
        margin: 10, 
        padding: 10 
      }}
    >
      <Text style={{ fontSize: 12, margin: 5 }}>
        This Agreement has been executed on the date set forth herein in two (2) copies of
        which the Parties have taken one each.
      </Text>
    </View>
    <View 
      style={{ 
        margin: 10, 
        padding: 10 
      }}
    >
      <Text style={{ fontSize: 12, margin: 5 }}>
        Legal257 ADVISORY PRIVATE LIMITED - {agreementData?.name}
      </Text>
    </View>
    </Page>
  </Document>
);

const AgreementComponent = () =>  {
  const [agreementData, setAgreementData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/cookies'); 
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
                <button onClick={() => window.history.back()} className="text-xl text-red-700 border-black rounded-full ">
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
