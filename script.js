const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const cidadeInput = document.getElementById("cidade");
const emailInput = document.getElementById("email");
const tbody = document.getElementById("tbody");
const botaoAlterações = document.getElementById("submit2");
const cepInput = document.getElementById('cidade');
const auxArr = [nomeInput, idadeInput, cidadeInput, emailInput];

let contador = 0;
let aux;
let row = '';

document.getElementById("submit").addEventListener("click", function () {
  const nome = nomeInput.value;
  const idade = idadeInput.value;
  const cidade = cidadeInput.value;
  const email = emailInput.value;

  const i = addRow(tbody, nome, idade, cidade, email);
  const row = tbody.rows[i];


  nomeInput.value = ""
  idadeInput.value = ""
  cidadeInput.value = ""
  emailInput.value = ""

  botaoAlterações.style.display = "none";
});

function addRow(tbody, nome, idade, cidade, email) {
  const row = document.createElement("tr");
  const nomeCell = createTableCell(nome, `nome${contador}`);
  const idadeCell = createTableCell(idade, `idade${contador}`);
  const cidadeCell = createTableCell(cidade, `cidade${contador}`);
  const emailCell = createTableCell(email, `email${contador}`);
  row.appendChild(nomeCell);
  row.appendChild(idadeCell);
  row.appendChild(cidadeCell);
  row.appendChild(emailCell);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remover";
  removeButton.setAttribute('data-id', contador);
  removeButton.addEventListener("click", function (e) {
    const row = e.target.closest('tr');
    row.remove();
  });
  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.setAttribute('data-id', contador);
  editButton.addEventListener("click", function (e) {
    const i = e.target.getAttribute('data-id');
    editRow(i, e);
  });

  const cell = document.createElement("td");
  cell.appendChild(editButton);
  row.appendChild(cell);

  const cell2 = document.createElement("td");
  cell2.appendChild(removeButton);
  row.appendChild(cell2);

  tbody.appendChild(row);
  return contador++;
}

function createTableCell(value, id) {
  const cell = document.createElement("td");
  cell.textContent = value;
  cell.setAttribute('id', id);
  return cell;
}


function editRow(i, e) {
  const row = tbody.rows[i];
  if (row) {
    nomeInput.value = row.cells[0].textContent;
    idadeInput.value = row.cells[1].textContent;
    cidadeInput.value = row.cells[2].textContent;
    emailInput.value = row.cells[3].textContent;
    aux = e.target.parentNode.parentNode.children;
  }

  botaoAlterações.style.display = "block";

}


function vasco() { // ALTERAR AQUI
  for (let i = 0; i < 4; i++) {
    let variavel = document.querySelector(`#${aux[i].id}`);
    console.log(variavel)
    variavel.textContent = auxArr[i].value;
  }

  nomeInput.value = ""
  idadeInput.value = ""
  cidadeInput.value = ""
  emailInput.value = ""

  botaoAlterações.style.display = "none";


}

function deleteRow(e) {
  aux = e.target.parentNode.parentNode;
  aux.remove();
}