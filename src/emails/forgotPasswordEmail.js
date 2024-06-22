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

function ForgotPasswordEmail({ username, resetLink }) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Password Reset</title>
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
      <Preview>Password Reset Request from Legal257</Preview>
      <Section style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
        <Row style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
          <Heading as="h2" style={{ color: '#333' }}>Hello {username},</Heading>
          <Text style={{ fontSize: '16px', color: '#555' }}>
            We hope you&apos;re doing well! At Legal257, your security is our priority.
          </Text>
          <Text style={{ fontSize: '16px', color: '#555' }}>
            We received a request to reset your password. Click the button below to reset it:
          </Text>
          <Section style={{ textAlign: 'center', margin: '20px 0' }}>
            <Button
              href={resetLink}
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none',
              }}
            >
              Reset Password
            </Button>
          </Section>
          <Text style={{ fontSize: '16px', color: '#555' }}>
            If you did not request a password reset, please ignore this email or contact our support team if you have any questions.
          </Text>
          <Text style={{ fontSize: '16px', color: '#555' }}>
            Please note that this password reset link is valid for the next 24 hours.
          </Text>
          <Text style={{ fontSize: '16px', color: '#555', marginTop: '20px' }}>
            Thank you for trusting Legal257 with your financial and tax services. We are here to assist you with GST and ITR filing services, as well as competitive loan options tailored to meet your financial needs.
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

export default ForgotPasswordEmail;
