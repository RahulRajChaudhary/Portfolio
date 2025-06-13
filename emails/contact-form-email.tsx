import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactFormEmailProps {
  senderEmail: string;
  message: string;
}

export default function ContactFormEmail({ 
  senderEmail, 
  message 
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={section}>
            <Text style={heading}>
              New Contact Form Submission
            </Text>
            <Text style={paragraph}>
              <strong>From:</strong> {senderEmail}
            </Text>
            <Text style={paragraph}>
              <strong>Message:</strong>
            </Text>
            <Text style={messageText}>
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: '#f9fafb',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const section = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '40px',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
};

const heading = {
  fontSize: '24px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#1f2937',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.4',
  color: '#4b5563',
  margin: '16px 0',
};

const messageText = {
  ...paragraph,
  padding: '16px',
  backgroundColor: '#f3f4f6',
  borderRadius: '4px',
};