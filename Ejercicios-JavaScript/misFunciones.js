/**
 * Convierte unidades ingresadas por el usuario
 * @method convertirUnidades
 * @param {string} unidad - La unidad ingresasa: metro, pie, pulgada, yarda
 * @param {number} Valor - El valor numerico ingresado por el usuario (puede ser con coma)
 */

let convertirUnidades = (unidad, Valor) => {
    let metro, pulgada, pie, yarda

    console.log(Valor)
    console.log(isNaN(Valor))

    if(String(Valor).includes(",")){
        Valor = Valor.replace(",",".")
    }

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
    
    document.getElementById("metro").value = Number(metro).toFixed(2);
    document.getElementById("pie").value = Math.round(pie*100)/100;
    document.getElementById("pulgada").value = Number(pulgada).toFixed(2);
    document.getElementById("yarda").value = Math.round(yarda*100)/100;
}

/**
 * @method convertirGR
 * @param {number} id 
 * @param {number} valor 
 */

let convertirGR = (id, valor) => {
    let cantRadianes, cantGrados;

    if(id == "grados"){
        cantGrados = valor;
        cantRadianes = cantGrados * (Math.PI / 180);
        document.getElementById("radianes").value = cantRadianes;
    }else {
        cantRadianes = valor;
        cantGrados = cantRadianes * (180 / Math.PI);
        document.getElementById("grados").value = cantGrados;
    }
}

let sumar = () => {
    let sum1 = document.getElementById("nums1").value;
    let sum2 = document.getElementById("nums2").value;

    if(isNaN(sum1) || isNaN(sum2)){
        alert("Los valores ingresados no son correctos");
    }else{
    document.getElementById("totalS").value = Number(sum1) + Number(sum2);
    }
}

let restar = () => {
    let res1 = document.getElementById("numr1").value;
    let res2 = document.getElementById("numr2").value;
    if(isNaN(res1) || isNaN(res2)){
        alert("Los valores ingresados no son correctos");
    }else{
    document.getElementById("totalR").value = Number(res1) - Number(res2);
    }
}

let multiplicar = () => {
    let mul1 = document.getElementById("numm1").value;
    let mul2 = document.getElementById("numm2").value;
    if(isNaN(mul1) || isNaN(mul2)){
        alert("Los valores ingresados no son correctos");
    }else{
    document.getElementById("totalM").value = Number(mul1) * Number(mul2);
    }
}

let dividir = () => {
    let div1 = document.getElementById("numd1").value;
    let div2 = document.getElementById("numd2").value;
    if(isNaN(div1) || isNaN(div2)){
        alert("Los valores ingresados no son correctos");
    }else{
    document.getElementById("totalD").value = Number(div1) / Number(div2);
    }
}