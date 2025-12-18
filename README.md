# Farmatodo
# 1. Prueba Técnica – Ingeniero de Automatización

## 1.1 Pruebas de Integración
## Descripción
Prueba de integración realizada con Playwright y TypeScript contra la API pública PokéAPI.
El objetivo es obtener la cadena de evolución del Pokémon Squirtle, extraer los nombres
y pesos de cada evolución y ordenarlos alfabéticamente sin utilizar métodos nativos
de ordenamiento. 

## Ejecucion de los test Api
npx playwright test --project=pokeapi

## 1.2 Prueba E2E
## Descripción
Prueba E2E desarrollada con Playwright y TypeScript para validar un flujo completo de compra, 
que incluye autenticación del usuario, selección del producto Sauce Labs Fleece Jacket, 
captura y validación de su nombre y precio en el carrito, y finalización del proceso hasta 
la confirmación de la orden

## Ejecucion de los test E2E
npx playwright test

## Tecnologías
- Playwright 1.57.0
- TypeScript 5.9.3
- Node.js 20.x

## Ver reporte HTML general
npx playwright show-report
