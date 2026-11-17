import { test, expect } from '@playwright/test';

test('home explains the offer and has working next steps', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('A clearer plan for your next business decision.');
  await page.getByRole('link', { name: 'Discuss your business needs' }).click();
  await expect(page).toHaveURL(/\/contact-us#contact-form$/);
  await expect(page.getByText('Website demo:')).toBeVisible();
});

test('each plan preserves the selected option in the enquiry preview', async ({ page }) => {
  for (const [index, name] of ['Basic', 'Advanced', 'Pro'].map((name, index) => [index, name] as const)) {
    await page.goto('/price');
    await page.getByRole('link', { name: 'Get Started', exact: true }).nth(index).click();
    await expect(page.getByLabel('Subject', { exact: true })).toHaveValue(`Enquiry about the ${name} plan`);
  }
});

test('contact validates fields and never sends or claims to send a message', async ({ page }) => {
  const submissions: string[] = [];
  page.on('request', request => { if (request.method() === 'POST') submissions.push(request.url()); });
  await page.goto('/contact-us');
  await page.getByRole('button', { name: 'Preview enquiry' }).click();
  await expect(page.getByRole('status')).toHaveCount(0);
  await page.getByLabel('Your name', { exact: true }).fill('Demo Visitor');
  await page.locator('#email').fill('visitor@example.test');
  await page.getByLabel('Subject', { exact: true }).fill('Business management');
  await page.getByLabel('How can we help?').fill('I am previewing the enquiry form.');
  await page.getByRole('button', { name: 'Preview enquiry' }).click();
  await expect(page.getByRole('status')).toContainText('no message was sent');
  await expect(page).toHaveURL(/\/contact-us$/);
  expect(submissions).toEqual([]);
  await page.getByLabel('Subject', { exact: true }).fill('Another preview');
  await expect(page.getByRole('status')).toHaveCount(0);
});

test('newsletter preview validates opt-in and creates no subscription', async ({ page }) => {
  const submissions: string[] = [];
  page.on('request', request => { if (request.method() === 'POST') submissions.push(request.url()); });
  await page.goto('/');
  await page.locator('#newsletter-email').fill('visitor@example.test');
  await page.getByRole('button', { name: 'Preview subscription' }).click();
  await expect(page.getByRole('status')).toHaveCount(0);
  await page.getByRole('checkbox', { name: 'Preview the newsletter opt-in.' }).check();
  await page.getByRole('button', { name: 'Preview subscription' }).click();
  await expect(page.getByRole('status')).toContainText('No subscription was created');
  expect(submissions).toEqual([]);
});

test('insights paginate and all articles and service details have real destinations', async ({ page, request }) => {
  await page.goto('/blog');
  await expect(page.locator('main article')).toHaveCount(2);
  await page.getByRole('link', { name: 'Read more:', exact: false }).first().click();
  await expect(page.locator('main article section')).toHaveCount(3);
  await page.getByRole('link', { name: 'Back to all insights' }).click();
  await page.getByRole('link', { name: 'Next', exact: false }).click();
  await expect(page).toHaveURL(/\/blog\?page=2$/);
  await expect(page.getByRole('link', { name: 'Next', exact: false })).toHaveCount(0);
  await expect(page.getByText('Page 2 of 2')).toBeVisible();
  await page.goto('/our-services');
  const links = await page.getByRole('link', { name: 'Read more about' }).evaluateAll(elements => elements.map(element => element.getAttribute('href')!));
  expect(links).toHaveLength(6);
  for (const href of links) expect((await request.get(href)).status()).toBe(200);
  expect((await request.get('/blog/not-an-article')).status()).toBe(404);
  expect((await request.get('/our-services/not-a-service')).status()).toBe(404);
});

test('mobile navigation marks the current section and closes after navigation', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open navigation menu' }).click();
  const dialog = page.getByRole('dialog', { name: 'Navigation menu' });
  await expect(dialog.getByRole('link', { name: 'Home', exact: true })).toHaveAttribute('aria-current', 'page');
  await dialog.getByRole('link', { name: 'Services', exact: true }).click();
  await expect(dialog).toHaveCount(0);
  await expect(page).toHaveURL(/\/our-services$/);
  await page.goto('/our-services/business-management');
  await page.getByRole('button', { name: 'Open navigation menu' }).click();
  await expect(dialog.getByRole('link', { name: 'Services', exact: true })).toHaveAttribute('aria-current', 'page');
});

test('downloads return a PDF and a ZIP with real file signatures', async ({ page, request }) => {
  await page.goto('/single');
  const pdf = await request.get('/downloads/consultation-guide.pdf');
  expect(pdf.status()).toBe(200);
  expect((await pdf.body()).subarray(0, 8).toString()).toBe('%PDF-1.4');
  const zip = await request.get('/downloads/consultation-resources.zip');
  expect(zip.status()).toBe(200);
  expect((await zip.body()).readUInt32LE(0)).toBe(0x04034b50);
  const downloadEvent = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Preparation guide (PDF)' }).click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe('consultation-guide.pdf');
});

test('home, previews and article list fit mobile and tablet screens', async ({ page }) => {
  for (const width of [320, 375, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ['/', '/contact-us', '/price', '/blog']) {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, `${path} at ${width}px`).toBeLessThanOrEqual(1);
    }
  }
});
