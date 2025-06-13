'use server'

import React from 'react';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get('senderEmail') as string;
  const message = formData.get('message') as string;

  if (!senderEmail || !message) {
    return {
      error: "Email and message are required"
    };
  }

  console.log('Sending email:', { senderEmail, message });

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'rrajchaudhary.hajipur@gmail.com',
      subject: 'New message from portfolio contact form',
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        senderEmail,
        message
      })
    });

    console.log('Email sent successfully:', { senderEmail, message });

    return { error: null };
  } catch (error) {
    return {
      error: (error as Error).message || 'Failed to send email'
    };
  }
}