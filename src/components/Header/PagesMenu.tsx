"use client";

import { useEffect, useId, useRef, useState } from 'react';
import NavigationLink from '../NavigationLink';

export default function PagesMenu() {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLLIElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [open]);

  return (
    <li ref={root} className="relative text-sm pr-4"
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
      onKeyDown={event => {
        if (event.key === 'Escape' && open) {
          event.preventDefault();
          setOpen(false);
          trigger.current?.focus();
        }
      }}>
      <button ref={trigger} type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(value => !value)}>
        Pages <span className="text-gray-500" aria-hidden="true">&#11167;</span>
      </button>
      <ul id={id} hidden={!open} className="absolute bg-white px-4 py-2 z-50 min-w-max shadow-md">
        {['projects', 'team', 'faq'].map(page => (
          <li key={page} className="py-2 text-sm">
            <NavigationLink href={'/' + page} onClick={() => setOpen(false)}>{page === 'faq' ? 'FAQ' : page[0].toUpperCase() + page.slice(1)}</NavigationLink>
          </li>
        ))}
      </ul>
    </li>
  );
}
