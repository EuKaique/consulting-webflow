"use client";

import { useFormPreview } from '@/components/useFormPreview';

export default function NewsletterForm() {
  const { submit, result, clearResult } = useFormPreview('Preview complete. No subscription was created and your email was not saved.');
  return (
    <form onSubmit={submit} onChange={clearResult} className="newsletter-form" aria-describedby="newsletter-preview-note">
      <p id="newsletter-preview-note" className="text-xs leading-relaxed mb-3">Demo only. No subscription is created and no email is sent.</p>
      <label htmlFor="newsletter-email" className="block text-sm">Email address</label>
      <div className="flex gap-2 mt-2">
        <input id="newsletter-email" name="email" type="email" autoComplete="email" maxLength={254} required className="px-2 py-2 text-sm text-black" />
        <button type="submit" className="btn-footer">Preview subscription</button>
      </div>
      <label className="flex items-start gap-2 mt-3 text-xs leading-relaxed">
        <input name="consent" type="checkbox" required className="mt-1" />
        <span>Preview the newsletter opt-in.</span>
      </label>
      {result && <p className="mt-3 text-sm leading-relaxed" role="status">{result}</p>}
    </form>
  );
}
