const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('@playwright/test');

const baseURL = process.env.BASE_URL ?? 'https://buggy.justtestit.org';
const outputDir = path.resolve('evidencias', 'capturas');

async function main() {
  await fs.mkdir(outputDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
  const evidence = [];

  async function capture(id, name, url, prepare, actual = {}) {
    await page.goto(new URL(url, baseURL).toString(), { waitUntil: 'networkidle' });
    await prepare();
    const details = typeof actual === 'function' ? await actual() : actual;
    const file = `${id}-${name}.png`;
    await page.screenshot({
      path: path.join(outputDir, file),
    });
    evidence.push({
      id,
      file,
      url: page.url(),
      capturedAt: new Date().toISOString(),
      ...details,
    });
  }

  try {
    await capture('CP-001', 'inicio', '/', async () => {
      await page.getByRole('link', { name: 'Lamborghini' }).waitFor();
    });

    await capture('CP-002', 'listado-general', '/overall', async () => {
      await page.locator('main table tbody tr').first().waitFor();
    });

    await capture('CP-003', 'detalle-marca', '/make/ckl2phsabijs71623vk0', async () => {
      await page.getByRole('heading', { name: 'Lamborghini' }).waitFor();
    });

    await fs.writeFile(
      path.join(outputDir, 'evidencias.json'),
      `${JSON.stringify(evidence, null, 2)}\n`,
      'utf8',
    );
    console.log(`Saved ${evidence.length} automated test screenshots to ${outputDir}`);
    for (const item of evidence) {
      console.log(`${item.id}: ${item.file}${item.observedHref ? ` (${item.observedHref})` : ''}`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error('Could not capture browser evidence:', error);
  process.exitCode = 1;
});
