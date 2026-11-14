import { expect, test } from '@playwright/test';

test('CP-001: la pagina principal presenta accesos a make, model y listado', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Buggy Cars Rating');
  await expect(page.getByRole('heading', { name: 'Buggy Cars Rating' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Lamborghini' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Diablo', exact: true })).toBeVisible();
  await expect(page.locator('a[href="/overall"]')).toBeVisible();
});

test('CP-002: el listado general presenta columnas y modelos', async ({ page }) => {
  await page.goto('/overall');

  const table = page.locator('main table');
  await expect(table).toBeVisible();
  for (const column of ['Make', 'Model', 'Rank', 'Votes', 'Engine']) {
    await expect(table.getByRole('columnheader', { name: column })).toBeVisible();
  }
  await expect(table.locator('tbody tr')).not.toHaveCount(0);
});

test('CP-003: el detalle de marca muestra modelos asociados', async ({ page }) => {
  await page.goto('/make/ckl2phsabijs71623vk0');

  await expect(page.getByRole('heading', { name: 'Lamborghini' })).toBeVisible({ timeout: 20000 });
  await expect(page.getByRole('link', { name: 'Diablo', exact: true })).toBeVisible();
});
