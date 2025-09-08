/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function convertirUnidades(unidad, Valor) {
    let metro, pulgada, pie, yarda

    console.log(Valor)
    console.log(isNaN(Valor))

    if (isNaN(Valor)) {
        alert("El valor ingresado no es correcto")
        metro = ""
        pie = ""
        pulgada = ""
        yarda = ""
    }

    else if (unidad == "unid_metro") {
        metro = Valor;
        pulgada = Valor * 39.3701;
        pie = Valor * 3.28084;
        yarda = Valor * 1.09361;
    }
    
    else if (unidad == "unid_pie") {
    pie = Valor;
    metro = Valor * 0.3048;
    pulgada = Valor * 12;
    yarda = Valor * 0.333333;
    }

    else if (unidad == "unid_pulgada") {
        pulgada = Valor;
        metro = Valor * 0.0254;
        pie = Valor * 0.0833333;
        yarda = Valor * 0.0277778;
    }

    else if (unidad == "unid_yarda") {
        yarda = Valor;
        metro = Valor * 0.9144;
        pie = Valor * 3;
        pulgada = Valor * 36;
    }
    
    document.getElementById("metro").value = metro;
    document.getElementById("pie").value = pie;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("yarda").value = yarda;
}


