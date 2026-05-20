export async function sendEmail({ to, subject, text }) {
  return {
    id: `email_${Date.now()}`,
    to,
    subject,
    preview: text.slice(0, 80),
    delivered: true
  };
}
