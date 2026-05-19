const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_CONTACT_BASE_ID || process.env.AIRTABLE_BASE_ID;
const AIRTABLE_CONTACT_TABLE = process.env.AIRTABLE_CONTACT_TABLE || 'Contact Messages';
export const runtime = 'nodejs';

function sanitize(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request) {
  try {
    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
      return Response.json({ error: 'Airtable is not configured on the server.' }, { status: 500 });
    }

    const formData = await request.formData();
    const fullName = sanitize(formData.get('fullName'));
    const email = sanitize(formData.get('email'));
    const subject = sanitize(formData.get('subject'));
    const message = sanitize(formData.get('message'));

    if (!fullName || !email || !subject || !message) {
      return Response.json({ error: 'Please fill all required fields.' }, { status: 400 });
    }

    const res = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_CONTACT_TABLE)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            'Full Name': fullName,
            Email: email,
            Subject: subject,
            Message: message,
            'Submitted At': new Date().toISOString(),
          },
        }),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      return Response.json(
        { error: data?.error?.message || 'Failed to save message.' },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: data.id });
  } catch (err) {
    return Response.json({ error: err.message || 'Internal server error.' }, { status: 500 });
  }
}
