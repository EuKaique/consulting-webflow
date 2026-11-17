"use client";

import { FormEvent, useState } from 'react';

export function useFormPreview(message: string) {
  const [result, setResult] = useState<string | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(message);
  }

  return { submit, result, clearResult: () => setResult(null) };
}
