# Revision de Buggy Cars Rating con Playwright

Suite de pruebas funcionales exploratorias sobre https://buggy.justtestit.org/.

## Requisitos

- Node.js y npm
- Chromium de Playwright

## Preparacion y ejecucion

```powershell
npm ci
npx playwright install chromium
npm test
```

Para cambiar el sitio bajo prueba, definir `BASE_URL` antes de ejecutar. Por ejemplo:

```powershell
$env:BASE_URL = "https://buggy.justtestit.org"
npm test
```

El reporte HTML se guarda en `playwright-report/` y se abre con `npm run report`. Capturas y trazas de las pruebas fallidas se guardan en `test-results/`.

La suite automatizada contiene exactamente tres casos: CP-001 a CP-003. Los casos manuales PM-001 y PM-002 verifican los destinos del logo y del enlace de Twitter; deben ejecutarse en navegador y registrar su resultado en el Excel. No se crean usuarios ni se envian votos.

## Evidencias en Excel y Word

Ejecuta `npm run evidence` para guardar capturas actualizadas de los tres casos automatizados en `evidencias/capturas/`. El archivo `evidencias.json` conserva las URL observadas por Playwright. La evidencia de los dos casos manuales debe adjuntarse despues de ejecutarlos. Los documentos de entrega se guardan en la carpeta `entregables/`.

## Enlace de entrega

Carpeta de Drive: https://drive.google.com/drive/folders/1yVNTxGqeRFrN9ac5v4HHfd8M0Ob0Kf1Q
