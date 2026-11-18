import { test, expect } from '@playwright/test';

test('FAQ buttons support keyboard expansion and identify their panels', async ({ page }) => {
  await page.goto('/faq');
  const buttons = page.locator('main button[aria-controls], .box-content button[aria-controls]');
  await expect(buttons).toHaveCount(3);
  for (const button of await buttons.all()) {
    const id = await button.getAttribute('aria-controls');
    const panel = page.locator(`[id="${id}"]`);
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await expect(panel).toBeHidden();
    await button.focus();
    await page.keyboard.press('Enter');
    await expect(button).toBeFocused();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(panel).toBeVisible();
    await expect(panel).toHaveAttribute('aria-labelledby', (await button.getAttribute('id'))!);
    await page.keyboard.press('Space');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await expect(panel).toBeHidden();
  }
});

test('Pages disclosure supports click, keyboard, Escape and leaving the submenu', async ({ page }) => {
  await page.goto('/');
  const trigger = page.getByRole('button', { name: 'Pages', exact: true });
  await trigger.click();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Projects', exact: true }).first()).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(trigger).toBeFocused();
  await page.keyboard.press('Space');
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'FAQ', exact: true }).first()).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await trigger.focus();
  await page.keyboard.press('Enter');
  await page.getByRole('link', { name: 'Team', exact: true }).first().click();
  await expect(page).toHaveURL(/\/team$/);
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
});

test('form fields have accessible labels and visible keyboard focus', async ({ page }) => {
  await page.goto('/contact-us');
  for (const name of ['Your name', 'Email address', 'Phone number (optional)', 'Subject', 'How can we help?']) {
    const input = page.locator('#contact-form').getByLabel(name, { exact: true });
    await input.focus();
    const style = await input.evaluate(element => {
      const computed = getComputedStyle(element);
      return { width: parseFloat(computed.outlineWidth), style: computed.outlineStyle };
    });
    expect(style.width).toBeGreaterThanOrEqual(2);
    expect(style.style).toBe('solid');
  }
  await expect(page.locator('footer').getByLabel('Email address', { exact: true })).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Preview the newsletter opt-in.' })).toBeVisible();
});

test('mobile dialog hides background content, traps focus and restores the trigger', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const trigger = page.getByRole('button', { name: 'Open navigation menu' });
  await trigger.focus();
  await page.keyboard.press('Enter');
  const dialog = page.getByRole('dialog', { name: 'Navigation menu' });
  await expect(dialog).toBeVisible();
  await expect(page.locator('#site-content')).toHaveAttribute('aria-hidden', 'true');
  for (let i = 0; i < 15; i++) {
    await page.keyboard.press('Tab');
    expect(await dialog.evaluate(element => element.contains(document.activeElement))).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#site-content')).not.toHaveAttribute('aria-hidden', 'true');
});

test('presentation offers a readable alternative without uncaptioned media or autoplay', async ({ page }) => {
  await page.goto('/about-us');
  const trigger = page.getByRole('button', { name: 'Open presentation' });
  await trigger.focus();
  await page.keyboard.press('Enter');
  const dialog = page.getByRole('dialog', { name: 'A clearer plan for your next business decision' });
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('ol li')).toHaveCount(3);
  await expect(dialog.locator('video, audio')).toHaveCount(0);
  await expect(page.locator('#site-content')).toHaveAttribute('aria-hidden', 'true');
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
});
