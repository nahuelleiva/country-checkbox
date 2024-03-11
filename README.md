# Examen de Ingreso React: Full Stack Senior React - 0workers

Test corto de habilidades de React

## Checkbox de países

En este ejercicio se debe mostrar una lista de checkboxes.

Requisitos:
- Se deben poder seleccionar individualmente los países
- Se deben seleccionar y deseleccionar todos cuando se presiona el checkbox “Select
All”
- Si esta marcado “Select All”, y por ende todos los otros checkbox también, y se
deselecciona uno de los países, “Select All” debe ser deseleccionado.
- Si se seleccionan todos los países y no “Select All”, “Select All” debe ser
seleccionado automáticamente.

Se debe utilizar TypeScript y el template de create-react-app (o Vite de ser posible). El código debe estar subido a un repositorio público de Github.

## Lógica de la app
Manteniendo un solo estado en la app podemos determinar si se seleccionaron todos los países o solo algunos

- A partir de una lista inicial con datos cargados (`countries`), mantenemos una lista secundaria (`selectedCountries`) con los países que son seleccionados (a través de `setSelectedCountries` actualizamos el estado de la lista `selectedCountries`).
- Para determinar si se han seleccionado todos los países o no, comparamos la cantidad de objetos en la lista de `countries` y los países seleccionados en la lista `selectedCountries`. 
- Si la cantidad de objetos entre `countries` y `selectedCountries` coincide, entonces podemos determinar que han sido seleccionados todos los países.

## Herramientas
Typescript, React + Vite, desplegado en Vercel