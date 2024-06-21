import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from '@react-email/components';

function OTPEmail({ username, otp }) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Your OTP Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Your OTP Code from Legal257</Preview>
      <Section style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
        <Row style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
          <Heading as="h2" style={{ color: '#333' }}>Hello {username},</Heading>
          <Text style={{ fontSize: '16px', color: '#555' }}>
            At Legal257, we are committed to providing top-notch financial and tax services to our valued clients.
          </Text>
          <Text style={{ fontSize: '16px', color: '#555' }}>
            To continue enjoying our services, please use the OTP code below to verify your account.
          </Text>
          <Text style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
            Your OTP code is: <strong>{otp}</strong>
          </Text>
          <Text style={{ fontSize: '16px', color: '#555' }}>
            If you did not request this code, please ignore this email. For any concerns, feel free to contact our support team.
          </Text>
          <Section style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button
              href="https://www.legal257.in/contact"
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none',
              }}
            >
              Contact Support
            </Button>
          </Section>
          <Text style={{ fontSize: '16px', color: '#555', marginTop: '20px' }}>
            Thank you for choosing Legal257. We are here to assist you with GST and ITR filing services, as well as competitive loan options tailored to meet your financial needs.
          </Text>
          <Text style={{ fontSize: '16px', color: '#555' }}>
            Best regards,
            <br />
            The Legal257 Team
          </Text>
        </Row>
      </Section>
    </Html>
  );
}

export default OTPEmail;
