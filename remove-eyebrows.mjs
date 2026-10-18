import { readFileSync, writeFileSync } from 'fs';

function removeEyebrows(filePath) {
  let c = readFileSync(filePath, 'utf8');
  // Remove lines containing <span className="eyebrow">...</span>
  c = c.replace(/[ \t]*<span className="eyebrow">[^<]*<\/span>\r?\n/g, '');
  writeFileSync(filePath, c, 'utf8');
  console.log(`cleaned: ${filePath}`);
}

// le-groupe.tsx
removeEyebrows('src/routes/le-groupe.tsx');

// cgu.tsx
removeEyebrows('src/routes/cgu.tsx');

// politique-de-confidentialite.tsx
removeEyebrows('src/routes/politique-de-confidentialite.tsx');

// contact.tsx - some eyebrows are before headings, some are labels with icons
{
  let c = readFileSync('src/routes/contact.tsx', 'utf8');
  // Remove the simple eyebrows before headings
  c = c.replace(/[ \t]*<span className="eyebrow">[^<]*<\/span>\r?\n/g, '');
  // For the two with flex layout (icon labels), change class to contact-label
  c = c.replace(/className="eyebrow flex items-center gap-1"/g, 'className="contact-label flex items-center gap-1"');
  writeFileSync('src/routes/contact.tsx', c, 'utf8');
  console.log('cleaned: contact.tsx');
}

// site.tsx - remove eyebrow from ContactBand
{
  let c = readFileSync('src/components/site.tsx', 'utf8');
  c = c.replace(/[ \t]*<span className="eyebrow[^"]*">\r?\n[^<]*<\/span>\r?\n/g, '');
  c = c.replace(/[ \t]*<span className="eyebrow[^"]*">[^<]*<\/span>\r?\n/g, '');
  writeFileSync('src/components/site.tsx', c, 'utf8');
  console.log('cleaned: site.tsx');
}

// nos-services.tsx - has multiline eyebrow at end
{
  let c = readFileSync('src/routes/nos-services.tsx', 'utf8');
  c = c.replace(/[ \t]*<span className="eyebrow">[^<]*<\/span>\r?\n/g, '');
  // Multiline eyebrow with style prop
  c = c.replace(/[ \t]*<span className="eyebrow" style=\{\{ color: "var\(--accent\)" \}\}>\r?\n[^<]*<\/span>\r?\n/g, '');
  writeFileSync('src/routes/nos-services.tsx', c, 'utf8');
  console.log('cleaned: nos-services.tsx');
}
