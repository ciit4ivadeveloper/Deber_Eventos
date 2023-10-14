function guardar() {

    let codigo_ = document.getElementById('codigo').value
    let nombre_ = document.getElementById('nombre').value
    let valor_ = document.getElementById('valor').value

    let data = { codigo:codigo_, nombre:nombre_, valor:valor_ }

    return new Promise((resolve, reject) => {
        const request_options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Indicar que se envían datos JSON
            },
            body: JSON.stringify(data) // Convertir los datos a JSON
        };

        fetch('/producto', request_options)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`));
    })
}

function guardar_producto() {
    guardar()
        .then( (response) => {
            alert('Registro exitoso.')
        } )
        .catch( (error) => {
            alert('Error al ingresar.')
        } )
}

function listar_empresa() {
    var comboBox = document.getElementById("empresa");

    const request_options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' // Indicar que se envían datos JSON
        },
        body: JSON.stringify(data) // Convertir los datos a JSON
    }; 

    // Realizar una solicitud GET al servicio (supongamos que utiliza fetch)
    fetch('/empresa')
        .then(response => response.json())
        .then(data => {
            // Iterar a través de los datos del servicio y agregar opciones al combo box
            data.forEach(empresa => {
                var option = document.createElement("option");
                option.value = empresa.ruc; // El valor que se enviará al servidor
                option.text = empresa.nombre; // El texto que se mostrará al usuario
                comboBox.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
}
 
function cargarEnTabla() {
    var combo = document.getElementById("empresa");
  var tabla = document.getElementById("tablaEmpresas");
  var selectedOption = combo.options[combo.selectedIndex];

  if (selectedOption.value !== "0") {
    var id = selectedOption.value;
    var nombre = selectedOption.text;

    var newRow = tabla.insertRow(tabla.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = id;
    cell2.innerHTML = nombre;

    combo.selectedIndex = 0; // Restablece la selección del combo
  } else {
    alert("Selecciona un registro válido del combo antes de cargarlo en la tabla.");
  }
}
 