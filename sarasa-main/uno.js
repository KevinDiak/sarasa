/* Se necesita llevar la gestión de una veterinaria.
 Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad*/
function mostrar() {
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let mascotaMasJoven;
  let porcentajeAves;
  let masCantidadMascotas;
  /////////////
  let mascotaMasJovenContador = 0;
  let acumEdadReptil = 0;
  let contAves = 0; 
  let contReptil = 0;
  let contMamifero = 0;
  let totalMascotas = 0;
  ///////////
  let f1 = 1;


  do {
      nombre = prompt("ingrese nombre: ");
      while (!(nombre.length >= 3 && nombre.length <= 8)) {
          nombre = prompt("error || nombre fuera de rango ingrese nombre: ");
      }

      tipo = prompt("ingrese tipo: mamifero || ave || reptil ");
      while (!(tipo == "mamifero" || tipo == "ave" || tipo == "reptil")) {
          nombre = prompt("error ||ingrese tipo: mamifero || ave || reptil ");
      }

      if (tipo == "reptil") {
          sangre = prompt("ingrese sangre (fria): ");
          while (!(sangre == "fria")) {
              sangre = prompt("error ||ingrese sangre (fria): ");
          }
      } else {
          sangre = "calida";
      }

      edad = parseInt(prompt("ingrese edad: "));
      while (!(edad > 0)) {
          edad = parseInt(prompt("error al ingresar edad||ingrese edad: "));
      }
      sexo = prompt("ingrese sexo hembra o macho segun corresponda(macho)m  || (hembra)h: ");
      while (!(sexo == "h" || sexo == "m")) {
          sexo = prompt("error || ingrese sexo hembra o macho segun corresponda(macho)m  || (hembra)h: ");
      }

      //a- Promedio de edad de los reptiles<br />

      switch (tipo) {
          case "reptil":
              acumEdadReptil = acumEdadReptil + edad;
              contReptil++;
              break;

          case "ave":
              contAves++;
              break;

          case "mamifero":
              contMamifero++;
              break;
      }
      totalMascotas++;
      
      if (f1 || edad < mascotaMasJovenContador) {
          mascotaMasJovenContador = edad;
          f1 =0;
      }

      if (contAves > contMamifero && contAves > contReptil) {
          masCantidadMascotas = "d)el mayor tipo de mascotas es del tipo : aves";
      } else if (contMamifero >= contAves && contMamifero > contReptil) {
          masCantidadMascotas = "d)el mayor tipo de mascotas es del tipo : mamifero";
      } else {
          masCantidadMascotas = "d)el mayor tipo de mascotas es del tipo : reptil";
      }
      seguir = prompt("¿quiere ingresar otro animal?(s)o(n): ");
  } while (seguir == "s");


  porcentajeAves = contAves * 100 / totalMascotas;

  mascotaMasJoven = "la mascota mas joven tiene" + mascotaMasJovenContador + " , es del tipo " + tipo + " y de sexo " + sexo;
  totalReptil = acumEdadReptil / contReptil;




  document.write("a) el promedio de edad para los reptiles es de: " + totalReptil + "<br>");
  document.write("b) " + mascotaMasJoven + "<br>");
  document.write("c)  el porcentaje de aves respecto al total ingresado es del:%" + porcentajeAves + "<br>");
  document.write(masCantidadMascotas + "<br>");



}