/**
 * Brevo (Sendinblue) Transactional Email Service
 * Sends notification emails using Brevo's REST API v3
 */

export const sendContactNotification = async ({ name, email, subject, message }) => {
  const apiKey = process.env.BREVO_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL || 'ahmedghulam622@gmail.com';

  if (!apiKey || apiKey.includes('xxxxxxxx') || apiKey.trim() === '') {
    console.warn(
      '[Brevo Service] BREVO_API_KEY is not configured or using placeholder. In development mode, email dispatch is simulated.'
    );
    return {
      success: false,
      simulated: true,
      message: 'Simulated email dispatch - configure BREVO_API_KEY in .env for production sending.',
    };
  }

  const endpoint = 'https://api.brevo.com/v3/smtp/email';
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);

  const emailPayload = {
    sender: {
      name: 'Moltivay Solutions',
      email: process.env.SENDER_EMAIL || 'ahmedghulam622@gmail.com',
    },
    to: [
      {
        email: adminEmail,
        name: 'Engr. Ghulam Ahmed',
      },
    ],
    replyTo: {
      email: email,
      name: name,
    },
    subject: `New Inquiry: ${subject || 'Project Request'}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fb; color: #1a1a2e; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0; }
            .header { background: #0A1628; color: #ffffff; padding: 28px; text-align: center; }
            .header h2 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 6px 0 0; color: #0066FF; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
            .content { padding: 32px 28px; }
            .field-row { margin-bottom: 20px; border-bottom: 1px solid #f1f5f9; padding-bottom: 16px; }
            .field-row:last-child { border-bottom: none; }
            .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px; color: #64748b; font-weight: 600; margin-bottom: 6px; }
            .value { font-size: 16px; color: #0A1628; font-weight: 500; }
            .message-box { background: #f8fafc; border-left: 4px solid #0066FF; padding: 16px; border-radius: 0 8px 8px 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap; }
            .footer { background: #f8fafc; padding: 18px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Moltivay Solutions</h2>
              <p>New Contact Form Submission</p>
            </div>
            <div class="content">
              <div class="field-row">
                <div class="label">Client Name</div>
                <div class="value">${escapeHtml(name)}</div>
              </div>
              <div class="field-row">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #0066FF; text-decoration: none;">${escapeHtml(email)}</a></div>
              </div>
              <div class="field-row">
                <div class="label">Subject</div>
                <div class="value">${escapeHtml(subject || 'General Inquiry')}</div>
              </div>
              <div class="field-row">
                <div class="label">Client Message</div>
                <div class="message-box">${escapeHtml(message)}</div>
              </div>
            </div>
            <div class="footer">
              This message was sent via the Moltivay Solutions contact form for CEO Engr. Ghulam Ahmed.
            </div>
          </div>
        </body>
      </html>
    `,
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('[Brevo Service] API request failed:', response.status, errorBody);
    throw new Error(`Brevo API responded with status ${response.status}: ${errorBody}`);
  }

  const result = await response.json();
  console.log('[Brevo Service] Email sent successfully. Message ID:', result?.messageId);
  return { success: true, messageId: result?.messageId };
};
