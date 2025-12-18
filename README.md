# farmatodo
# 1. Prueba Técnica – Ingeniero de Automatización

## Descripción
Prueba de integración realizada con Playwright y TypeScript contra la API pública PokéAPI.
El objetivo es obtener la cadena de evolución del Pokémon Squirtle, extraer los nombres
y pesos de cada evolución y ordenarlos alfabéticamente sin utilizar métodos nativos
de ordenamiento.

## Tecnologías
- Playwright 1.57.0
- TypeScript 5.9.3
- Node.js 20.x

## Ejecucion de los test
npx playwright test --project=pokeapi

## Ver reporte HTML
npx playwright show-report
