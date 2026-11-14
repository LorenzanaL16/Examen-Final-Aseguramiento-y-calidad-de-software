# Reporte de pruebas - Buggy Cars Rating

## Datos de ejecucion

- **Fecha:** 2026-11-14
- **Sitio:** https://buggy.justtestit.org/
- **Herramienta:** Playwright 1.65.1 con Chromium
- **Tipo:** 3 casos automatizados y 2 casos manuales
- **Resultado automatizado:** 3 casos aprobados.
- **Resultado manual:** pendiente de ejecucion en navegador.

La ejecucion de `npm test` valida unicamente los tres casos automatizados. Los casos manuales PM-001 y PM-002 estan documentados en el Excel, con pasos y resultados esperados; aun falta ejecutarlos manualmente y adjuntar sus evidencias.

## Casos ejecutados

| ID | Tipo | Caso | Resultado |
|---|---|---|---|
| CP-001 | Automatizado | Verificar titulo y accesos a marca, modelo y listado en la pagina principal. | Aprobado |
| CP-002 | Automatizado | Verificar encabezados y contenido del listado general. | Aprobado |
| CP-003 | Automatizado | Verificar detalle de Lamborghini y enlace al modelo Diablo. | Aprobado |
| PM-001 | Manual | Verificar que el enlace del logo desde el detalle de marca regrese al inicio. | Pendiente; existe un defecto registrado (BUG-001). |
| PM-002 | Manual | Verificar que el enlace de Twitter dirija al sitio oficial. | Pendiente; existe un defecto registrado (BUG-002). |

## Defectos registrados

### BUG-001 - Enlace de regreso incorrecto

- **Severidad:** Media
- **Ubicacion:** detalle de marca, barra superior.
- **Pasos:** abrir el detalle de Lamborghini y revisar el enlace `Buggy Rating`.
- **Resultado actual:** el enlace apunta a `/broken`; al navegar directamente a esa ruta, el navegador reporto `ERR_NAME_NOT_RESOLVED`.
- **Resultado esperado:** regresar a la pagina principal (`/`).

### BUG-002 - Enlace de Twitter incorrecto

- **Severidad:** Baja
- **Ubicacion:** pie de pagina de `/overall`.
- **Pasos:** abrir el listado general y revisar el enlace `Twitter`.
- **Resultado actual:** dirige a `https://www.twitter-broken.com/`.
- **Resultado esperado:** dirigir al sitio oficial de Twitter.

## Evidencia y ejecucion

- **Casos y capturas en Excel:** [`entregables/Casos_de_prueba_Buggy_Cars_Rating.xlsx`](./entregables/Casos_de_prueba_Buggy_Cars_Rating.xlsx)
- **Reportes Word:** [`entregables/Reporte_error_BUG-001.docx`](./entregables/Reporte_error_BUG-001.docx), [`entregables/Reporte_error_BUG-002.docx`](./entregables/Reporte_error_BUG-002.docx)
- **Capturas de los casos automatizados:** [`evidencias/capturas/`](./evidencias/capturas/)
- **Pruebas automatizadas:** [`tests/buggy.spec.ts`](./tests/buggy.spec.ts)
- **Configuracion:** [`playwright.config.ts`](./playwright.config.ts)
- **Reporte navegable y capturas:** [`playwright-report/index.html`](./playwright-report/index.html)
- **Comando para repetir:** `npm test`

La revision se mantuvo en flujos publicos. Los casos manuales requieren ejecucion en navegador y registro de evidencia por quien los realice. No se crearon cuentas, no se inicio sesion y no se enviaron votos ni comentarios. Los datos de votos/comentarios visibles en la pagina son contenido existente del sitio.
