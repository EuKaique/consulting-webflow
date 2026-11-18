import { mkdirSync, writeFileSync } from 'node:fs';

// Small, dependency-free, reproducible demo resources. No client information.
const lines = [
  'WHITECOLLAR / CONSULTATION PREPARATION GUIDE', '',
  'A practical checklist for an introductory conversation.',
  'Demonstration resource - not a contract or a service proposal.', '',
  '1. Describe the problem',
  'Write down one decision or operational challenge you want to discuss.',
  'Include an example of what happens today and who it affects.', '',
  '2. Define the outcome',
  'Describe what a useful result would look like for your team.',
  'Note any deadlines, dependencies or constraints.', '',
  '3. Gather existing information',
  'Bring the process notes, plans or reports you already use.',
  'Identify missing information without sharing confidential data.', '',
  '4. Identify the people involved',
  'List who owns the process and who can approve the next step.', '',
  '5. Prepare your questions',
  'Ask about scope, deliverables, timing and responsibilities.',
  'Agree on a written summary and a date for the next conversation.', '',
  'Use this guide as a discussion aid. No results are guaranteed.',
];
const text = lines.join('\n') + '\n';
const escape = value => value.replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');
const stream = `BT /F1 11 Tf 50 790 Td 18 TL\n${lines.map(line => `(${escape(line)}) Tj T*`).join('\n')}\nET`;
const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
];
let pdf = '%PDF-1.4\n';
const offsets = [0];
objects.forEach((object, index) => { offsets.push(Buffer.byteLength(pdf)); pdf += `${index + 1} 0 obj\n${object}\nendobj\n`; });
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 6\n0000000000 65535 f \n${offsets.slice(1).map(offset => `${String(offset).padStart(10, '0')} 00000 n \n`).join('')}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
const guide = Buffer.from(pdf);

function crc32(data) {
  let crc = 0xffffffff;
  for (const byte of data) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
}
const local = [], central = [];
let offset = 0;
for (const [filename, data] of [['consultation-guide.pdf', guide], ['preparation-checklist.txt', Buffer.from(text)]]) {
  const name = Buffer.from(filename), crc = crc32(data);
  const header = Buffer.alloc(30);
  header.writeUInt32LE(0x04034b50, 0); header.writeUInt16LE(20, 4);
  header.writeUInt16LE(33, 12); // 1980-01-01
  header.writeUInt32LE(crc, 14); header.writeUInt32LE(data.length, 18); header.writeUInt32LE(data.length, 22); header.writeUInt16LE(name.length, 26);
  local.push(header, name, data);
  const record = Buffer.alloc(46);
  record.writeUInt32LE(0x02014b50, 0); record.writeUInt16LE(20, 4); record.writeUInt16LE(20, 6);
  record.writeUInt16LE(33, 14); record.writeUInt32LE(crc, 16); record.writeUInt32LE(data.length, 20); record.writeUInt32LE(data.length, 24); record.writeUInt16LE(name.length, 28); record.writeUInt32LE(offset, 42);
  central.push(record, name);
  offset += header.length + name.length + data.length;
}
const directory = Buffer.concat(central), end = Buffer.alloc(22);
end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(2, 8); end.writeUInt16LE(2, 10); end.writeUInt32LE(directory.length, 12); end.writeUInt32LE(offset, 16);
mkdirSync('public/downloads', { recursive: true });
writeFileSync('public/downloads/consultation-guide.pdf', guide);
writeFileSync('public/downloads/consultation-resources.zip', Buffer.concat([...local, directory, end]));
console.log('Generated consultation PDF and ZIP resources.');
