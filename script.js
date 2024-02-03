
let horas = [];


function crearEspacio(nombre, hora, contenedor) {
    this.nombre = nombre;
    this.hora = hora;
    this.contenedor = contenedor;
}

let primeraCita = new crearEspacio('ocho', 8, 'contenedorCitasUno');
let segundaCita = new crearEspacio('nueve', 9, 'contenedorCitasDos');
let terceraCita = new crearEspacio('diez', 10, 'contenedorCitasTres');
let cuartaCita = new crearEspacio('once', 11, 'contenedorCitasCuatro');
let quintaCita = new crearEspacio('doce', 12, 'contenedorCitasCinco');
let sextaCita = new crearEspacio('una', 1, 'contenedorCitasSeis');
let septimaCita = new crearEspacio('dos', 2, 'contenedorCitasSiete');
let octavaCita = new crearEspacio('tres', 3, 'contenedorCitasOcho');
let novenaCita = new crearEspacio('cuatro', 4, 'contenedorCitasNueve');
let decimaCita = new crearEspacio('cinco', 5, 'contenedorCitasDiez');
let onceCita = new crearEspacio('seis', 6, 'contenedorCitasOnce');
let doceCita = new crearEspacio('siete', 7, 'contenedorCitasDoce');
let treceCita = new crearEspacio('eigth', 8, 'contenedorCitasTrece');

horas.push(primeraCita, segundaCita, terceraCita, cuartaCita, quintaCita, sextaCita, septimaCita, octavaCita, novenaCita, decimaCita, onceCita, doceCita, treceCita);

function crearAgenda() {
    horas.forEach(element => {
        citas.innerHTML += `        
        <div class="primera cita">
            <div class="hora" style="font-size: 35px;">${element.hora}</div>
            
            <div class="contenedor">
            <label for="${element.nombre}" class='label'>
            <div class="contenedordos">
            <input type="radio" name="citas" id="${element.nombre}" value="agregar" style="display:none ;">
        </div>
        <div class="${element.contenedor}" style="    width: 1500%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 35px;">
        </div>
            </label>
                
            </div>
        </div> 
        `;

    });
    let label = document.querySelectorAll('label')
    label.forEach(element => { element.addEventListener('click', alertas); })
}

let formulario = document.querySelector('formulario');
let form = document.querySelector('.form');
let cerrar = document.querySelector('.cerrar');
let nombre = document.querySelector('.nombre');
let nombresi = "citas";
let todosLosInput = document.querySelectorAll('input[type="radio"][name="' + nombresi + '"]');
let select = document.getElementById('select');
let subir = document.querySelector('.subir');
let agregar = document.querySelector('.agregar');
let borrar = document.querySelector('.borrar');
let citas = document.querySelector('.citas');

agregar.addEventListener('click', function () { aparecer(form); });
cerrar.addEventListener('click', function () { close(form), nocheck() });
subir.addEventListener('click', prevenir, crearCita, nocheck);
borrar.addEventListener('click', delet);


function alertas() {
    let ochoin = document.getElementById('ocho');
    let nuevein = document.getElementById('nueve');
    let diezin = document.getElementById('diez');
    let oncein = document.getElementById('once');
    let docein = document.getElementById('doce');
    let unoin = document.getElementById('una');
    let dosin = document.getElementById('dos');
    let tresin = document.getElementById('tres');
    let cuatroin = document.getElementById('cuatro');
    let cincoin = document.getElementById('cinco');
    let seisin = document.getElementById('seis');
    let sietein = document.getElementById('siete');
    let eigthin = document.getElementById('eigth');
    if (ochoin.checked) {
        alert('seleccionaste el ocho');

    } else if (nuevein.checked) {
        alert('seleccionaste el nueve')
    } else if (diezin.checked) {
        alert('seleccionaste el diez')
    } else if (oncein.checked) {
        alert('seleccionaste el once')
    } else if (docein.checked) {
        alert('seleccionaste el doce')
    }
    else if (unoin.checked) {
        alert('seleccionaste el una')
    }
    else if (dosin.checked) {
        alert('seleccionaste el dos')
    }
    else if (tresin.checked) {
        alert('seleccionaste el tres')
    }
    else if (cuatroin.checked) {
        alert('seleccionaste el cuatro')
    }
    else if (cincoin.checked) {
        alert('seleccionaste el cinco')
    }
    else if (seisin.checked) {
        alert('seleccionaste el seis')
    }
    else if (sietein.checked) {
        alert('seleccionaste el siete   ');
    }
    else if (eigthin.checked) {
        alert('seleccionaste el ocho')
    }
}

function aparecer(variable) {
    variable.style.display = 'flex';
}

function close(variable) { variable.style.display = 'none'; }

function nocheck() { todosLosInput.forEach(function (radio) { radio.checked = false; }) }

function prevenir(e) {
    e.preventDefault();
    crearCita();
}

function crearCita() {

    let ochoin = document.getElementById('ocho');
    let nuevein = document.getElementById('nueve');
    let diezin = document.getElementById('diez');
    let oncein = document.getElementById('once');
    let docein = document.getElementById('doce');
    let unoin = document.getElementById('una');
    let dosin = document.getElementById('dos');
    let tresin = document.getElementById('tres');
    let cuatroin = document.getElementById('cuatro');
    let cincoin = document.getElementById('cinco');
    let seisin = document.getElementById('seis');
    let sietein = document.getElementById('siete');
    let eigthin = document.getElementById('eigth');

    let contenedorCitasUno = document.querySelector('.contenedorCitasUno');
    let contenedorCitasDos = document.querySelector('.contenedorCitasDos');
    let contenedorCitasTres = document.querySelector('.contenedorCitasTres');
    let contenedorCitasCuatro = document.querySelector('.contenedorCitasCuatro');
    let contenedorCitasCinco = document.querySelector('.contenedorCitasCinco');
    let contenedorCitasSeis = document.querySelector('.contenedorCitasSeis');
    let contenedorCitasSiete = document.querySelector('.contenedorCitasSiete');
    let contenedorCitasOcho = document.querySelector('.contenedorCitasOcho');
    let contenedorCitasNueve = document.querySelector('.contenedorCitasNueve');
    let contenedorCitasDiez = document.querySelector('.contenedorCitasDiez');
    let contenedorCitasOnce = document.querySelector('.contenedorCitasOnce');
    let contenedorCitasDoce = document.querySelector('.contenedorCitasDoce');
    let contenedorCitasTrece = document.querySelector('.contenedorCitasTrece');

    let label = document.getElementById('label')

    if (ochoin.checked) {
        contenedorCitasUno.innerHTML += `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;

        ochoin.checked = false;

    } else if (nuevein.checked) {
        contenedorCitasDos.innerHTML = `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;
        nuevein.checked = false;
    } else if (diezin.checked) {
        contenedorCitasTres.innerHTML = `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;
        diezin.checked = false;
    } else if (oncein.checked) {
        contenedorCitasCuatro.innerHTML = `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;
        oncein.checked = false;
    } else if (docein.checked) {
        contenedorCitasCinco.innerHTML = `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;
        docein.checked = false;
    }
    else if (unoin.checked) {
        contenedorCitasSeis.innerHTML = `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;
        unoin.checked = false;
    }
    else if (dosin.checked) {
        contenedorCitasSiete.innerHTML = `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;
        dosin.checked = false;
    }
    else if (tresin.checked) {
        contenedorCitasOcho.innerHTML = `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;
        tresin.checked = false;
    }
    else if (cuatroin.checked) {
        contenedorCitasNueve.innerHTML = `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;
        cuatroin.checked = false;
    }
    else if (cincoin.checked) {
        contenedorCitasDiez.innerHTML = `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;
        cincoin.checked = false;
    }
    else if (seisin.checked) {
        contenedorCitasOnce.innerHTML = `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;
        seisin.checked = false;
    }
    else if (sietein.checked) {
        contenedorCitasDoce.innerHTML = `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;
        sietein.checked = false;
    }
    else if (eigthin.checked) {
        contenedorCitasTrece.innerHTML = `
        <p>Nombre: ${nombre.value}</p>
        <p>Servivio: ${select.value}</p>`;
        eigthin.checked = false;
    }
    close(form);
    limpiar();
    nocheck();
}

function limpiar() {
    nombre.value = '';
    select.value = 'default';
}
function delet() {
    let ochoin = document.getElementById('ocho');
    let nuevein = document.getElementById('nueve');
    let diezin = document.getElementById('diez');
    let oncein = document.getElementById('once');
    let docein = document.getElementById('doce');
    let unoin = document.getElementById('una');
    let dosin = document.getElementById('dos');
    let tresin = document.getElementById('tres');
    let cuatroin = document.getElementById('cuatro');
    let cincoin = document.getElementById('cinco');
    let seisin = document.getElementById('seis');
    let sietein = document.getElementById('siete');
    let eigthin = document.getElementById('eigth');


    let contenedorCitasUno = document.querySelector('.contenedorCitasUno');
    let contenedorCitasDos = document.querySelector('.contenedorCitasDos');
    let contenedorCitasTres = document.querySelector('.contenedorCitasTres');
    let contenedorCitasCuatro = document.querySelector('.contenedorCitasCuatro');
    let contenedorCitasCinco = document.querySelector('.contenedorCitasCinco');
    let contenedorCitasSeis = document.querySelector('.contenedorCitasSeis');
    let contenedorCitasSiete = document.querySelector('.contenedorCitasSiete');
    let contenedorCitasOcho = document.querySelector('.contenedorCitasOcho');
    let contenedorCitasNueve = document.querySelector('.contenedorCitasNueve');
    let contenedorCitasDiez = document.querySelector('.contenedorCitasDiez');
    let contenedorCitasOnce = document.querySelector('.contenedorCitasOnce');
    let contenedorCitasDoce = document.querySelector('.contenedorCitasDoce');
    let contenedorCitasTrece = document.querySelector('.contenedorCitasTrece');

    let label = document.getElementById('label')

    if (ochoin.checked) {
        contenedorCitasUno.innerHTML = '';
        ochoin.checked = false;
    } else if (nuevein.checked) {
        contenedorCitasDos.innerHTML = '';
        nuevein.checked = false;
    } else if (diezin.checked) {
        contenedorCitasTres.innerHTML = '';
        diezin.checked = false;
    } else if (oncein.checked) {
        contenedorCitasCuatro.innerHTML = '';
        oncein.checked = false;
    } else if (docein.checked) {
        contenedorCitasCinco.innerHTML = '';
        docein.checked = false;
    }
    else if (unoin.checked) {
        contenedorCitasSeis.innerHTML = '';
        unoin.checked = false;
    }
    else if (dosin.checked) {
        contenedorCitasSiete.innerHTML = '';
        dosin.checked = false;
    }
    else if (tresin.checked) {
        contenedorCitasOcho.innerHTML = '';
        tresin.checked = false;
    }
    else if (cuatroin.checked) {
        contenedorCitasNueve.innerHTML = '';
        cuatroin.checked = false;
    }
    else if (cincoin.checked) {
        contenedorCitasDiez.innerHTML = '';
        cincoin.checked = false;
    }
    else if (seisin.checked) {
        contenedorCitasOnce.innerHTML = '';
        seisin.checked = false;
    }
    else if (sietein.checked) {
        contenedorCitasDoce.innerHTML = '';
        sietein.checked = false;
    }
    else if (eigthin.checked) {
        contenedorCitasTrece.innerHTML = '';
        eigthin.checked = false;
    }
}
crearAgenda();


























