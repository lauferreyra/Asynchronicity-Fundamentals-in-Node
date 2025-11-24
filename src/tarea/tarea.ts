import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";

const file1Path = path.join(__dirname, "inputs", "input1.txt");
const file2Path = path.join(__dirname, "inputs", "input2.txt");
const file3Path = path.join(__dirname, "inputs", "input3.txt");

// ==========================================
// EJERCICIO 1: Callbacks
// ==========================================
export function leerArchivosCallback(): void {
  console.log("--- Iniciando Callbacks ---");

  fs.readFile(file1Path, "utf8", (err, data1) => {
    if (err) return console.error("Error al leer input1:", err);

    fs.readFile(file2Path, "utf8", (err, data2) => {
      if (err) return console.error("Error al leer input2:", err);

      fs.readFile(file3Path, "utf8", (err, data3) => {
        if (err) return console.error("Error al leer input3:", err);

        console.log(data1 + data2 + data3);
      });
    });
  });
}

// ==========================================
// EJERCICIO 2: Promises
// ==========================================
export function leerArchivosPromesas(): void {
  console.log("--- Iniciando Promesas ---");

  fsPromises
    .readFile(file1Path, "utf8")
    .then((data1) =>
      fsPromises.readFile(file2Path, "utf8").then((data2) => data1 + data2)
    )
    .then((partial) =>
      fsPromises.readFile(file3Path, "utf8").then((data3) => partial + data3)
    )
    .then((result) => console.log(result))
    .catch((err) => console.error("Error leyendo archivos:", err));
}

// ==========================================
// EJERCICIO 3: Async/Await
// ==========================================
export async function leerArchivosAsync(): Promise<void> {
  console.log("--- Iniciando Async/Await ---");

  try {
    const data1 = await fsPromises.readFile(file1Path, "utf8");
    const data2 = await fsPromises.readFile(file2Path, "utf8");
    const data3 = await fsPromises.readFile(file3Path, "utf8");

    console.log(data1 + data2 + data3);
  } catch (err) {
    console.error("Error leyendo archivos:", err);
  }
}

// ==========================================
// EJERCICIO 4: Promise.all
// ==========================================
export async function leerArchivosParalelo(): Promise<void> {
  console.log("--- Iniciando Promise.all ---");

  try {
    const results = await Promise.all([
      fsPromises.readFile(file1Path, "utf8"),
      fsPromises.readFile(file2Path, "utf8"),
      fsPromises.readFile(file3Path, "utf8"),
    ]);

    console.log(results.join(""));
  } catch (err) {
    console.error("Error leyendo archivos:", err);
  }
}

// Descomenta la función que quieras probar:
leerArchivosCallback();
leerArchivosPromesas();
leerArchivosAsync();
leerArchivosParalelo();

