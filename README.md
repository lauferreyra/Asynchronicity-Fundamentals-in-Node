# Asynchronicity Fundamentals in Node.js – Proyecto TypeScript

Este proyecto contiene las **actividades practicas de Asynchronicity Fundamentals in Node.js** pedidas en el enunciado.  
Implementada en **TypeScript**.

---

## Instalacion
Clona el repositorio:
```bash
git clone https://github.com/lauferreyra/Asynchronicity-Fundamentals-in-Node.git
cd Asynchronicity-Fundamentals-in-Node
 ``` 

## Instalar y ejecutar
```bash
npm install
npm run dev
```
---

## Evaluacion Teorica
## 1. Arquitectura del Event Loop

Node.js utiliza un modelo basado en un único hilo principal que ejecuta el código. 
Cuando se encuentran tareas que pueden tardar más tiempo, como leer archivos o hacer solicitudes externas, 
estas se delegan al sistema interno para que no bloqueen la ejecución del programa.

El Event Loop administra qué tareas se ejecutan y en qué momento. 
Las funciones que deben esperar (por ejemplo, lecturas de archivos) se colocan en una cola, 
y cuando el motor de Node está listo, las vuelve a tomar y continúa con su ejecución.

En resumen, el Event Loop permite que Node.js maneje muchas tareas al mismo tiempo sin necesidad de usar múltiples hilos visibles para el desarrollador.

---

## 2. Patrones de control de flujo: Callback Hell, Promesas y Async/Await

El uso de callbacks puede llevar a un problema conocido como “Callback Hell”, 
que ocurre cuando las funciones comienzan a anidarse una dentro de otra, dificultando la lectura y el mantenimiento del código.

Para resolver esa situación aparecieron las Promesas, que permiten estructurar el código de forma más clara, 
evitando la anidación excesiva y separando mejor los casos de éxito y error.

Luego, Async/Await simplificó aún más el manejo de código asincrónico. 
Con esta sintaxis, el código luce más ordenado y fácil de seguir, parecido a un programa tradicional.

---

## 3. Ciclo de vida de una Promesa

Una Promesa pasa por tres etapas:

- **Pendiente (pending):** la operación aún no terminó.
- **Cumplida (fulfilled):** se obtuvo un resultado exitoso.
- **Rechazada (rejected):** ocurrió un error.

Si una promesa falla y no se maneja ese error, aparece lo que se llama “rechazo no manejado”. 
Esto puede causar comportamientos inesperados o incluso detener el programa, 
por eso siempre es importante manejar los errores correctamente.

---

## 4. Comparación entre async/await y .then()

Ambos sirven para trabajar con Promesas, pero ofrecen estilos distintos:

- **then():** permite encadenar operaciones, pero puede resultar menos claro cuando se realizan varias tareas seguidas.
- **async/await:** hace que el código se lea de forma más sencilla, evitando concatenaciones y mejorando la legibilidad.

En ambos casos se pueden manejar errores, ya sea con `.catch()` o con `try/catch`.

---

## 5. Modelo I/O: CPU-bound vs I/O-bound

Las tareas de tipo I/O, como leer archivos o hacer consultas externas, 
funcionan muy bien en Node.js porque no bloquean el hilo principal.

En cambio, las tareas muy pesadas de cálculo (CPU-bound) pueden detener el flujo del programa, 
ya que Node dedica todo el hilo principal a procesarlas. 
Esto puede generar lentitud en el sistema, por lo que este tipo de trabajos suelen delegarse a otros procesos.

---