var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["nama"] = document.getElementById("nama").value;
    formData["timMenang"] = document.getElementById("timMenang").value;
    formData["skorHome"] = document.getElementById("skorAway").value;
    formData["skorAway"] = document.getElementById("skorAway").value;
    formData["motm"] = document.getElementById("motm").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		  cell1.innerHTML = data.nama;
    cell2 = newRow.insertCell(1);
		  cell2.innerHTML = data.timMenang;
    cell3 = newRow.insertCell(2);
		  cell3.innerHTML = data.skorHome;
    cell4 = newRow.insertCell(3);
		  cell4.innerHTML = data.skorAway;
    cell5 = newRow.insertCell(4);
      cell5.innerHTML = data.motm;
    cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick="onDelete(this)">Hapus Prediksi</button>`;
}


//Delete the data
function onDelete(td) {
    if (confirm('Hapus Prediksi?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("nama").value = '';
    document.getElementById("timMenang").value = '';
    document.getElementById("skorHome").value = '';
    document.getElementById("skorAway").value = '';
    document.getElementById("motm").value = '';
    selectedRow = null;
}
