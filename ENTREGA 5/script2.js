const Papa = require('papaparse');
const fs = require('fs');

// Especifica la ubicación de tu archivo CSV
const filePath = '/Users/margaritabernales/Desktop/OA.csv';  // Aquí defines la ruta de tu archivo CSV (relativa o absoluta)

// Leer el archivo CSV desde el sistema de archivos
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Usar PapaParse para analizar el CSV
    Papa.parse(data, {
        header: true,  // Asumir que el CSV tiene encabezados
        skipEmptyLines: true, // Ignorar líneas vacías
        complete: (results) => {
            console.log('Datos procesados:', results.data); // Mostrar los datos
        }
    });
});