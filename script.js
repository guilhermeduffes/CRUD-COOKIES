const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const cidadeInput = document.getElementById("cidade");
const emailInput = document.getElementById("email");
const tbody = document.getElementById("tbody");

let contador = 0;

document.getElementById("submit").addEventListener("click", function() {
  const nome = nomeInput.value;
  const idade = idadeInput.value;
  const cidade = cidadeInput.value;
  const email = emailInput.value;

  const i = addRow(tbody, nome, idade, cidade, email);
  const row = tbody.rows[i];
  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.addEventListener("click", function() {
    editRow(i);
    console.log('oi')
  });
  const cell = document.createElement("td");
  cell.appendChild(editButton);
  row.appendChild(cell);

  nomeInput.value = ""
  idadeInput.value = ""
  cidadeInput.value = ""
  emailInput.value = ""
});

function addRow(tbody, nome, idade, cidade, email) {
  const row = document.createElement("tr");
  const nomeCell = document.createElement("td");
  nomeCell.textContent = nome;
  const idadeCell = document.createElement("td");
  idadeCell.textContent = idade;
  const cidadeCell = document.createElement("td");
  cidadeCell.textContent = cidade;
  const emailCell = document.createElement("td");
  emailCell.textContent = email;
  row.appendChild(nomeCell);
  row.appendChild(idadeCell);
  row.appendChild(cidadeCell);
  row.appendChild(emailCell);
  tbody.appendChild(row);
  return contador++;
}

function editRow(i) {
  const row = tbody.rows[i];
  nomeInput.value = row.cells[0].textContent;
  idadeInput.value = row.cells[1].textContent;
  cidadeInput.value = row.cells[2].textContent;
  emailInput.value = row.cells[3].textContent;
  console.log('OI2')
}
