const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const cidadeInput = document.getElementById("cidade");
const emailInput = document.getElementById("email");
const tbody = document.getElementById("tbody");
const botaoAlterações = document.getElementById("submit2");
const tabela = document.getElementById("table");
const auxArr = [nomeInput, idadeInput, cidadeInput, emailInput];

let contador = 0;
let aux;
let row = '';

// Verifica se já existem informações na tabela armazenadas no Local Storage
const armazenado = JSON.parse(localStorage.getItem("tabela"));
if (armazenado) {
  for (let i = 0; i < armazenado.length; i++) {
    addRow(tbody, armazenado[i][0], armazenado[i][1], armazenado[i][2], armazenado[i][3]);
  }
}

document.getElementById("submit").addEventListener("click", function () {
  const nome = nomeInput.value;
  const idade = idadeInput.value;
  const cidade = cidadeInput.value;
  const email = emailInput.value;

  const i = addRow(tbody, nome, idade, cidade, email);
  const row = tbody.rows[i];

  const tabelaArr = [];
  for (let i = 0; i < tbody.rows.length; i++) {
    const linhaArr = [];
    const linha = tbody.rows[i];
    for (let j = 0; j < linha.cells.length; j++) {
      linhaArr.push(linha.cells[j].textContent);
    }
    tabelaArr.push(linhaArr);

    localStorage.setItem("tabela", JSON.stringify(tabelaArr));
  }

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

    const tabelaArr = [];
    for (let i = 0; i < tbody.rows.length; i++) {
      const linhaArr = [];
      const linha = tbody.rows[i];
      for (let j = 0; j < linha.cells.length; j++) {
        linhaArr.push(linha.cells[j].textContent);
      }
      tabelaArr.push(linhaArr);
    }
    localStorage.setItem("tabela", JSON.stringify(tabelaArr));

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

botaoAlterações.addEventListener('click', function() {
  saveData();
});

function saveData() {
  const data = [];
  const rows = tbody.rows;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const nome = row.cells[0].textContent;
    const idade = row.cells[1].textContent;
    const cidade = row.cells[2].textContent;
    const email = row.cells[3].textContent;
    const rowData = {
      nome,
      idade,
      cidade,
      email,
    };
    data.push(rowData);
  }
  localStorage.setItem('tableData', JSON.stringify(data));
}

