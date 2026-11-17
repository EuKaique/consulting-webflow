"use client";

import { useId } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';
import './style.css';

export default function Presentation({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const titleId = useId();
  const descriptionId = useId();
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} appElement={typeof document === 'undefined' ? undefined : document.getElementById('site-content') || undefined}
      aria={{ labelledby: titleId, describedby: descriptionId, modal: true }} className="presentation-modal" overlayClassName="presentation-overlay">
      <button type="button" onClick={onClose} className="presentation-close" aria-label="Close presentation">Close</button>
      <h2 id={titleId}>A clearer plan for your next business decision</h2>
      <p id={descriptionId}>A text presentation of the WhiteCollar demonstration. The original video is not played because verified captions are not available.</p>
      <ol>
        <li><h3>Understand the situation</h3><p>Start with one decision or operational challenge. Identify who is involved and what a useful outcome would look like.</p></li>
        <li><h3>Explore the approach</h3><p>Review the example services, from business management to team coordination, and compare the plans.</p></li>
        <li><h3>Preview the next step</h3><p>Select a service or plan to open an enquiry preview. The forms in this demonstration do not send or save your details.</p></li>
      </ol>
      <Link href="/our-services" onClick={onClose}>Explore services</Link>
    </Modal>
  );
}
