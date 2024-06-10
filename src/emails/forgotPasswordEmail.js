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
        <Preview>Password reset request</Preview>
        <Section>
          <Row>
            <Heading as="h2">Hello {username},</Heading>
          </Row>
          <Row>
            <Text>
              We received a request to reset your password. Click the button below to reset it:
            </Text>
          </Row>
          <Row>
            <Button
              href={resetLink}
              style={{ color: '#61dafb' }}
            >
              Reset Password
            </Button>
          </Row>
          <Row>
            <Text>
              If you did not request a password reset, please ignore this email or contact support if you have questions.
            </Text>
          </Row>
          <Row>
            <Text>
              This password reset link is valid for the next 24 hours.
            </Text>
          </Row>
        </Section>
      </Html>
    );
  }
  
  export default ForgotPasswordEmail;
  