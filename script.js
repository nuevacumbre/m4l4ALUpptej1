// ⭐ FUNCIÓN PRINCIPAL DEL EJERCICIO (Lección 4)
function calcularPrecioConIVA(monto, descuento) {
    let montoConDescuento = monto - (monto * descuento / 100);
    let precioFinal = montoConDescuento * 1.19;  // IVA 19%
    return precioFinal;
}

// Función para manejar el botón
function calcularPrecio() {
    const monto = parseFloat(document.getElementById('monto').value);
    const descuento = parseFloat(document.getElementById('descuento').value);
    const resultadoDiv = document.getElementById('resultado');
    const precioFinalSpan = document.getElementById('precioFinal').firstChild;
    const detalleDiv = document.getElementById('detalleCalculo');

    // Validaciones
    if (isNaN(monto) || isNaN(descuento) || monto <= 0) {
        alert('❌ Ingresa monto válido (> 0)');
        return;
    }
    if (descuento < 0 || descuento > 100) {
        alert('❌ Descuento entre 0% y 100%');
        return;
    }

    // ⭐ CALCULAR (llama a la función principal)
    const montoConDescuento = monto - (monto * descuento / 100);  // ← FIXED
    const precioFinal = calcularPrecioConIVA(monto, descuento);

    // Mostrar precio final
    precioFinalSpan.textContent = precioFinal.toLocaleString('es-CL');

    // ⭐ DETALLE CORREGIDO
    detalleDiv.innerHTML = `
        📊 <strong>Monto original:</strong> $${monto.toLocaleString('es-CL')}<br>
        ➖ <strong>Descuento (${descuento}%):</strong> -$${(monto * descuento / 100).toLocaleString('es-CL')}<br>
        📈 <strong>IVA (19%):</strong> +$${(montoConDescuento * 0.19).toLocaleString('es-CL')}<br>
        🎯 <strong>Precio final:</strong> $${precioFinal.toLocaleString('es-CL')}
    `;

    resultadoDiv.style.display = 'block';
    resultadoDiv.scrollIntoView({ behavior: 'smooth' });
}

// Enter en inputs
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') calcularPrecio();
});