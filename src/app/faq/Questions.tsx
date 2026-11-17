"use client";

import { useId, useState } from 'react';

const questions = [
  { question: 'How does our pricing work?', answer: 'Compare the options on the plans page, then select a plan to preview an enquiry. This demonstration does not take payments or book services.' },
  { question: 'Do you offer volume or loyalty discounts?', answer: 'Discounts are not configured in this demonstration. Use the enquiry preview to describe the scope and the questions you would ask about a proposal.' },
  { question: 'What types of companies do you work with?', answer: 'The example services cover business management, operational planning and team coordination. Explore the service pages to understand each approach and preview an enquiry.' },
];

export default function Questions() {
  const id = useId();
  const [expanded, setExpanded] = useState<number[]>([]);
  return (
    <div className="box-content">
      {questions.map((item, index) => {
        const open = expanded.includes(index);
        const triggerId = id + '-question-' + index;
        const panelId = id + '-answer-' + index;
        return (
          <div key={item.question} className="border mb-4">
            <h3>
              <button type="button" id={triggerId} aria-expanded={open} aria-controls={panelId}
                className="flex items-center justify-between w-full text-left gap-3 px-4 py-4 font-semibold"
                onClick={() => setExpanded(current => open ? current.filter(value => value !== index) : [...current, index])}>
                {item.question}<span aria-hidden="true">{open ? '-' : '+'}</span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={triggerId} hidden={!open}>
              <p className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
