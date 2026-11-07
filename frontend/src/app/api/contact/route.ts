import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = (body.fullName || body.name || '').trim();
    const { company, email, cc, phone, service, message } = body;

    // 1. Validation
    if (!fullName || typeof fullName !== 'string') {
      return NextResponse.json({ success: false, error: 'Full name is required.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json({ success: false, error: 'Email address is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ success: false, error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ success: false, error: 'Message content is required.' }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY || process.env.NEXT_PUBLIC_BREVO_API_KEY || '';
    const primaryAdmin = 'moltivaysolutions@gmail.com';
    // Must be the verified Brevo sender identity
    const verifiedBrevoSender = 'ahmedghulam622@gmail.com';

    const escapeHtml = (val: unknown) =>
      String(val || '').replace(/[&<>"']/g, (c) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[c] || c));

    // 2. Prepare Recipients (Strictly moltivaysolutions@gmail.com)
    const toRecipients: Array<{ email: string; name: string }> = [
      { email: primaryAdmin, name: 'Moltivay Solutions Admin' },
    ];

    const ccRecipients: Array<{ email: string }> = [];
    if (cc && typeof cc === 'string' && emailRegex.test(cc.trim())) {
      ccRecipients.push({ email: cc.trim() });
    }

    // 3. Admin Notification Email Payload
    const emailPayload: Record<string, any> = {
      sender: {
        name: 'Moltivay Solutions Portal',
        email: verifiedBrevoSender,
      },
      to: toRecipients,
      replyTo: {
        email: email.trim(),
        name: fullName,
      },
      subject: `[New Inquiry] ${service || 'Software Project'} - ${fullName}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fb; color: #0a1628; margin: 0; padding: 24px; }
              .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); border: 1px solid #e2e8f0; }
              .header { background: linear-gradient(135deg, #030a16 0%, #091b38 100%); color: #ffffff; padding: 32px 28px; text-align: center; }
              .header h2 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
              .header p { margin: 8px 0 0; color: #38bdf8; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; }
              .content { padding: 32px 28px; }
              .field-row { margin-bottom: 20px; border-bottom: 1px solid #f1f5f9; padding-bottom: 14px; }
              .field-row:last-child { border-bottom: none; }
              .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; font-weight: 700; margin-bottom: 4px; }
              .value { font-size: 15px; color: #0f172a; font-weight: 600; }
              .message-box { background: #f8fafc; border-left: 4px solid #2563eb; padding: 18px; border-radius: 0 10px 10px 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #1e293b; }
              .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Moltivay Solutions</h2>
                <p>New Client Project Inquiry</p>
              </div>
              <div class="content">
                <div class="field-row">
                  <div class="label">Full Name</div>
                  <div class="value">${escapeHtml(fullName)}</div>
                </div>
                <div class="field-row">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(email)}</a></div>
                </div>
                ${company ? `
                <div class="field-row">
                  <div class="label">Company / Organization</div>
                  <div class="value">${escapeHtml(company)}</div>
                </div>` : ''}
                ${phone ? `
                <div class="field-row">
                  <div class="label">Phone / WhatsApp</div>
                  <div class="value">${escapeHtml(phone)}</div>
                </div>` : ''}
                <div class="field-row">
                  <div class="label">Service of Interest</div>
                  <div class="value" style="color: #2563eb;">${escapeHtml(service || 'Full Stack Development')}</div>
                </div>
                ${cc ? `
                <div class="field-row">
                  <div class="label">Cc / Secondary Email</div>
                  <div class="value">${escapeHtml(cc)}</div>
                </div>` : ''}
                <div class="field-row">
                  <div class="label">Project Details & Requirements</div>
                  <div class="message-box">${escapeHtml(message)}</div>
                </div>
              </div>
              <div class="footer">
                Delivered automatically via Moltivay Solutions Web Gateway to CEO Engr. Ghulam Ahmed.
              </div>
            </div>
          </body>
        </html>
      `,
    };

    if (ccRecipients.length > 0) {
      emailPayload.cc = ccRecipients;
    }

    // 4. Dispatch Email to Admin via Brevo API
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!brevoResponse.ok) {
      const errText = await brevoResponse.text();
      console.error('[Brevo Error]', brevoResponse.status, errText);
      return NextResponse.json(
        { success: false, error: 'Email service temporary failure. Please contact moltivaysolutions@gmail.com directly.' },
        { status: 502 }
      );
    }

    const data = await brevoResponse.json();

    // 5. Client Auto-Acknowledgment Email
    try {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({
          sender: {
            name: 'Moltivay Solutions',
            email: verifiedBrevoSender,
          },
          to: [{ email: email.trim(), name: fullName.trim() }],
          subject: 'We received your inquiry - Moltivay Solutions',
          htmlContent: `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 580px; margin: 0 auto; padding: 24px; color: #0a1628;">
              <h2 style="color: #030a16; margin-bottom: 8px;">Thank you for contacting Moltivay Solutions, ${escapeHtml(fullName)}.</h2>
              <p style="color: #475569; font-size: 15px; line-height: 1.6;">
                We have received your project details regarding <strong>${escapeHtml(service || 'your inquiry')}</strong>.
                Our executive engineering team will review your specifications and reply with a scoping proposal within one business day.
              </p>
              <div style="margin: 24px 0; padding: 16px; background-color: #f1f5f9; border-radius: 8px; font-size: 14px;">
                <strong>Moltivay Solutions Direct Helpdesk:</strong><br />
                Email: <a href="mailto:moltivaysolutions@gmail.com" style="color: #2563eb;">moltivaysolutions@gmail.com</a><br />
                Direct Desk: +92 323 5678381<br />
                Campus: Abid Majeed Road, Near Bake Point Bakery, Rawalpindi, Pakistan
              </div>
              <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
                © ${new Date().getFullYear()} Moltivay Solutions. All rights reserved.
              </p>
            </div>
          `,
        }),
      });
    } catch (ackErr) {
      console.warn('[Auto-reply failed silently]', ackErr);
    }

    return NextResponse.json({ success: true, messageId: data?.messageId });
  } catch (error: any) {
    console.error('[API Contact Error]', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
