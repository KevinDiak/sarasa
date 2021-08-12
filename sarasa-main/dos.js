/**
 Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
 */

function mostrar() {

  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let promedioalumno;
  let promedio;
  let edad;
  ///////////////
  let nombreMasJoven;
  let edadAlumnaMasJoven = 0;
  /////
  let porcQuimica;
  let porcFisica;
  let porcSisitemas;
  let acumQuimica = 0;
  let acumFisica = 0;
  let acumSistemas = 0;
  let mejorPromedio;
  ///////
  let NombreAlumnoMasMaterias;
  let estudianteMasMaterias = 0;
  let edadAlumnoMasMaterias;
  //////

  /////
  let nombreMejorPromedio;
  let mayorPromedioFisica;
  let f1 = 1;
  let f2 =1;
  let f3 =1;



  for (let vueltas = 0; vueltas < 500; vueltas++) {

    nombre = prompt("ingrese el nmbre del alumno a ingresar").toLocaleLowerCase();

    carrera = prompt("ingrese carrera:Quimica || Fisica ||Sistemas").toLowerCase();
    while (!(carrera == "quimica" || carrera == "fisica" || carrera == "sistemas")) {
      carrera = prompt("error || ingrese carrera:Quimica || Fisica ||Sistemas ").toLowerCase();
    }

    sexo = prompt("ingresar sexo: masculino || femenino || nobinario").toLowerCase();
    while (!(sexo == "masculino" || sexo == "femenino" || sexo == "nobinario")) {
      sexo = prompt("error || ingresar sexo: masculino || femenino || nobinario").toLowerCase();
    }

    cantidadMaterias = parseInt(prompt("ingrese cantidad de Materias entre 1 y 5: "));
    while (!(cantidadMaterias > 0 && cantidadMaterias < 6)) {
      cantidadMaterias = parseInt(prompt("error || ingrese cantidad de Materias entre 1 y 5:  "));
    }

    promedioalumno = parseInt(prompt("ingrese promedio del alumno "));
    while (!(promedioalumno > 0 && promedioalumno < 11)) {
      promedioalumno = parseInt(prompt("error ||ingrese promedio del alumno"));
    }

    edad = parseInt(prompt("ingrese edad: "));
    while (!(edad > 0)) {
      edad = parseInt(prompt("error al ingresar edad||ingrese edad: "));
    }

    switch (carrera) {
      case "quimica":
        acumQuimica++;
        break;

      case "fisica":
        acumFisica++;
        if (f1 || promedio > mayorPromedioFisica) {
          mayorPromedioFisica = promedio;
          nombreMejorPromedio = nombre;
          f1 =0;
        }
        break;

      case "sistemas":
        acumSistemas++;
        break;
    }
    if (f2 || sexo == "femenino" && edad < edadAlumnaMasJoven) {
      edadAlumnaMasJoven = edad;
      nombreMasJoven = nombre;
      f2 =0;
    }

    if (carrera != "quimica" &&(f3 || cantidadMaterias > estudianteMasMaterias)) {
      estudianteMasMaterias = cantidadMaterias;
      edadAlumnoMasMaterias = edad;
      NombreAlumnoMasMaterias = nombre;
      f3 = 0;
    }

  }

  porcQuimica = acumQuimica * 100 / 500;
  porcSisitemas = acumSistemas * 100 / 500;
  porcFisica = acumFisica * 100 / 500;


  document.write("a) El nombre del mejor promedio de fisica es  " + nombreMejorPromedio + "<br>");
  document.write("b) el n ombre de la alumna mas joven es " + nombreMasJoven + "<br>");
  document.write("c)  el porcentaje de alumnos en quimica es de %" + porcQuimica.toFixed(2) + " el de sistemas %" + porcSisitemas.toFixed(2) + " y el de fisica es de %" + porcFisica.toFixed(2) + "<br>");
  document.write("d) el nombre del alumno mas joven es " + NombreAlumnoMasMaterias + " y tiene " + edadAlumnoMasMaterias + "<br>");

}
