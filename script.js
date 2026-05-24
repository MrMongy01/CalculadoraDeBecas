function calcular(){

    let promedio = parseFloat(document.getElementById("promedio").value);

    let colegiatura = parseFloat(document.getElementById("colegiatura").value);

    let meses = parseInt(document.getElementById("meses").value);

    let resultado = document.getElementById("resultado");

    let beca = 0;

    // CALCULAR BECA

    if(promedio >= 95){
        beca = 1.0;
    }
    else if(promedio >= 90){
        beca = 0.80;
    }
    else if(promedio >= 86){
        beca = 0.60;
    }

    // SI TIENE BECA

    if(beca > 0){

        let descuento = colegiatura * beca;

        let total = colegiatura - descuento;

        resultado.innerHTML = `
            <h2>Beca otorgada</h2>

            <p><strong>Porcentaje de beca:</strong> ${beca * 100}%</p>

            <p><strong>Descuento:</strong> $${descuento.toFixed(2)}</p>

            <p><strong>Total a pagar:</strong> $${total.toFixed(2)}</p>
        `;
    }

    // SI NO TIENE BECA

    else{

        let interes = colegiatura * 0.10;

        let totalConInteres = colegiatura + interes;

        let pagoMensual = totalConInteres / meses;

        resultado.innerHTML = `
            <h2>Opciones de financiamiento</h2>

            <p><strong>Total sin interés:</strong> $${colegiatura.toFixed(2)}</p>

            <p><strong>Total con interés:</strong> $${totalConInteres.toFixed(2)}</p>

            <p><strong>Pago mensual:</strong> $${pagoMensual.toFixed(2)}</p>
        `;
    }
}
