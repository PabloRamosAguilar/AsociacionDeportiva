
let fecha = new Date();
document.getElementById("dia").innerHTML = fecha.getDate();
document.getElementById("mes").innerHTML = fecha.toLocaleString('es-ES', { month: 'long' });
document.getElementById("ano").innerHTML = fecha.getFullYear();


function bienvenidaEmergente() {
    setTimeout(() => { paginaEmergente(); }, 10000);
    function paginaEmergente() {
        var miVentana = window.open("", "ventanaNueva", "toolbar=no, location=no, directories=no," +
            "status=no,menubar=no,scrollbars=yes,resizable=no");
        miVentana.document.write("<p>Bienvenido a la pagina</p>");
        miVentana.document.write("<button onclick='window.close()'>Cerrar</button>");
    }
}

function avisoWindow() {

    var miVentano = window.open("", "ventanaNueva", "toolbar=no, location=no, directories=no," +
        "status=no,menubar=no,scrollbars=yes,resizable=no");
    miVentano.document.write("<p>Usamos cookies y demás para recolectar datos</p>");
    miVentano.document.write("<button onclick='window.close()'>Cerrar</button>");
}
let regex = new RegExp("^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$");
let contraseña = prompt("Escribe una contraseña entre 8-16 caracteres, con una letra mayuscula y minuscula, con un numero y alguno de los siguientes caracteres: -,_,@,#,$,%,&amp");
if (regex.test(contraseña)) {
    alert("Contraseña Incorrecta");
} else {
    alert("Contraseña Correcta");
}

