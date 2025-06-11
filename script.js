function verificarCertificado() {
    const codigoInput = document.getElementById('codigoInput');
    const codigoIngresado = codigoInput.value.trim().toUpperCase(); // Convierte el input a mayúsculas
    const resultadoDiv = document.getElementById('resultado');

    // --- INICIO DE DEPURACIÓN (puedes eliminar estas líneas una vez que funcione) ---
    console.log("--- Inicio de Verificación ---");
    console.log("1. Valor en el campo de entrada ANTES de .trim().toUpperCase():", codigoInput.value);
    console.log("2. Código ingresado (después de .trim().toUpperCase()):", codigoIngresado);
    console.log("3. Longitud del código ingresado:", codigoIngresado.length);
    // --- FIN DE DEPURACIÓN ---

    // --- CONFIGURA AQUÍ LA INFORMACIÓN DE TUS CERTIFICADOS ---
    const certificadosRegistrados = [
        {
            codigo: "1C45F390-04BE-11EB-8641-0791ABBA7B5E", // <-- ¡DEBE ESTAR EN MAYÚSCULAS!
            nombre: "Wilson Edilberto Barrios Gonzalez",
            curso: "Capacitación sobre Riesgos Operacionales 2020",
            institucion: "Banco Sudameris",
            fechaEmision: "2 de Octubre de 2020",
            linkDescarga: "mis_certificados/riesgos_operacionales.pdf" // <-- Ruta relativa a tu PDF
        },
        {
            codigo: "FB460B40-B030-11EA-81DD-E9AF2E0396B0", // <-- ¡DEBE ESTAR EN MAYÚSCULAS!
            nombre: "Wilson Edilberto Barrios Gonzalez",
            curso: "Prevención de Lavado de dinero 2020",
            institucion: "Banco Sudameris",
            fechaEmision: "16 de Junio de 2020",
            linkDescarga: "mis_certificados/prevencion_lavado_dinero.pdf" // <-- Ruta relativa a tu PDF
        }
        // Si tienes más certificados, añádelos aquí con el mismo formato,
        // asegurándote de que el 'codigo' esté en MAYÚSCULAS.
    ];
    // --- FIN DE LA CONFIGURACIÓN ---

    let certificadoEncontrado = null;

    // Buscamos si el código ingresado coincide con alguno de nuestros certificados registrados
    for (let i = 0; i < certificadosRegistrados.length; i++) {
        // --- INICIO DE DEPURACIÓN (puedes eliminar estas líneas una vez que funcione) ---
        console.log(`4. Comparando: "${codigoIngresado}" (input) con "${certificadosRegistrados[i].codigo}" (registrado)`);
        console.log(`5. Longitud del código registrado: ${certificadosRegistrados[i].codigo.length}`);
        console.log(`6. ¿Son exactamente iguales? ${codigoIngresado === certificadosRegistrados[i].codigo}`);
        // --- FIN DE DEPURACIÓN ---

        if (codigoIngresado === certificadosRegistrados[i].codigo) {
            certificadoEncontrado = certificadosRegistrados[i];
            break; // Salimos del bucle una vez que encontramos una coincidencia
        }
    }

    if (certificadoEncontrado) {
        // Si se encontró el certificado, generamos el HTML con el enlace de descarga
        resultadoDiv.innerHTML = `
            <div class="valid-message">
                ✅ Certificado Válido y Auténtico
            </div>
            <p>El certificado con código <strong>${certificadoEncontrado.codigo}</strong> ha sido emitido a:</p>
            <p><strong>${certificadoEncontrado.nombre}</strong></p>
            <p>Por: <strong>${certificadoEncontrado.institucion}</strong></p>
            <p>Fecha de Emisión: <strong>${certificadoEncontrado.fechaEmision}</strong></p>
            <p>Este certificado confirma la finalización exitosa del curso de <strong>${certificadoEncontrado.curso}</strong>.</p>
            
            <div class="download-section">
                <a href="${certificadoEncontrado.linkDescarga}" download class="download-button">
                    Descargar Certificado
                </a>
            </div>
        `;
        resultadoDiv.style.backgroundColor = '#d4edda'; // Fondo verde claro
        resultadoDiv.style.borderColor = '#28a745';
        resultadoDiv.style.border = '1px solid';
    } else {
        // Si no se encontró el certificado
        resultadoDiv.innerHTML = `
            <div class="invalid-message">
                ❌ Código de Certificado No Encontrado o Inválido
            </div>
            <p>Por favor, verifique el código ingresado e intente de nuevo.</p>
            <p>Si cree que hay un error, contacte al emisor del certificado.</p>
        `;
        resultadoDiv.style.backgroundColor = '#f8d7da'; // Fondo rojo claro
        resultadoDiv.style.borderColor = '#dc3545';
        resultadoDiv.style.border = '1px solid';
    }
    console.log("--- Fin de Verificación ---"); // <-- Fin de depuración
}