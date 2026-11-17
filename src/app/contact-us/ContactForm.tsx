"use client";

import { useFormPreview } from '@/components/useFormPreview';

export default function ContactForm({ initialSubject = '' }: { initialSubject?: string }) {
  const { submit, result, clearResult } = useFormPreview('Preview complete. Your fields are valid, but no message was sent.');
  return (
    <form id="contact-form" onSubmit={submit} onChange={clearResult} aria-describedby="contact-preview-note">
      <p id="contact-preview-note" className="mb-5 rounded border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-950">Website demo: this form lets you preview an enquiry. It does not send or save your details.</p>
      <div className="contact-fields">
        <label htmlFor="name">Your name
          <input className="textfield" type="text" name="name" id="name" autoComplete="name" maxLength={120} required />
        </label>
        <label htmlFor="email">Email address
          <input className="textfield" type="email" name="email" id="email" autoComplete="email" maxLength={254} required />
        </label>
        <label htmlFor="phone">Phone number (optional)
          <input className="textfield" type="tel" name="phone" id="phone" autoComplete="tel" maxLength={40} />
        </label>
        <label htmlFor="subject">Subject
          <input className="textfield" type="text" name="subject" id="subject" defaultValue={initialSubject} maxLength={200} required />
        </label>
      </div>
      <label htmlFor="message">How can we help?
        <textarea name="message" id="message" rows={6} maxLength={5000} required />
      </label>
      <button className="btn mt-4" type="submit">Preview enquiry</button>
      {result && <p className="mt-4 text-indigo-950" role="status">{result}</p>}
    </form>
  );
}
