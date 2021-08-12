/*Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas) */

function mostrar() {
  let tipo;
  let origen;
  let precio;
  let jugueteMasVendido;
  ///
  let contRompecabezas = 0;
  let contPelota = 0;
  let contMuñeca = 0;
  ////
  let totalJImpVendidos = 0;
  let rompecabezasMasVarato = 0;
  let recaudacionTotal = 0;
  let ivaDelTotal;
  ///
  let acumPrecioJuguetesImportados = 0;
  ///
  let b;
  let f1 =1;

  do {

    tipo = prompt("ingrese tipo de juguete: rompecabezas || muñeca || pelota ").toLowerCase();
    while (!(tipo == "rompecabezas" || tipo == "muñeca" || tipo == "pelota")) {
      nombre = prompt("error ||ingrese tipo de juguete: rompecabezas || muñeca || pelota").toLowerCase();
    }

    origen = prompt("ingrese origen nacional o importado segun corresponda: ");
    while (!(origen == "nacional" || origen == "importado")) {
      origen = prompt("error || ingrese origen nacional o importado segun corresponda: ");
    }

    precio = parseInt(prompt("ingrese precio entre 1000 y 5000: $"));
    while (!(precio >= 1000 && precio <= 5000)) {
      precio = parseInt(prompt("error al ingresar precio||ingrese precio entre 1000 y 5000:$ "));
    }

    switch (tipo) {
      case "rompecabezas":
        contRompecabezas++;
        break;

      case "muñeca":
        contMuñeca++;
        break;

      case "pelota":
        contPelota++;
        break;
    }
    ////b
    if (origen = "importado") {
      acumPrecioJuguetesImportados = acumPrecioJuguetesImportados + precio;
      totalJImpVendidos++;
    }
    
    /////c
    recaudacionTotal = recaudacionTotal + precio;
    /////d
    if ( tipo == "rompecabezas" && origen == "nacional" ) {
     if (f1 ||  pecio < rompecabezasMasVarato) {
       rompecabezasMasVarato = precio;
       f1 =0;
     }
    }
    
    
    seguir = prompt("¿quiere ingresar otro juguete?(s)o(n): ");
  } while (seguir == "s");


  ///a
  if (contRompecabezas > contPelota || contRompecabezas > contMuñeca) {
    jugueteMasVendido = "a)el tipo de juguete mas vendido fue el rompecabezas";
  } else if (contPelota >= contRompecabezas || contPelota > contMuñeca) {
    jugueteMasVendido = "a)el tipo de juguete mas vendido fue  la pelota";
  } else {
    jugueteMasVendido = "a)el tipo de juguete mas vendido fue  la muñeca";
  }

  /////b
  if (totalJImpVendidos > 0) {
  b = totalJImpVendidos / acumPrecioJuguetesImportados;
  document.write("b) el promedio de precio de juguetes importados fue de $" + b + "<br>");
  }else{
    document.write("no hubo importados vendidos <br>");
  }


  ivaDelTotal = recaudacionTotal * 0.21;
//a
  document.write(jugueteMasVendido + "<br>");
//c
  document.write(" c)el total de las ventas fue la suma de $" + recaudacionTotal + "<br>");
  //d
  if (f1) {
    document.write("no hubo ingreso de rompecabezas nacionales <br>");
  }else{
    document.write(" d)el precio del rompecabezas nacional mas varato es de $" + rompecabezasMasVarato + "<br>");
  }
  //e
  document.write(" e)la persepcion  del iva del total de las ventas fue de $" + ivaDelTotal + "<br>");




}
