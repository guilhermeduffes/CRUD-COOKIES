document.getElementById("submit").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cidade = document.getElementById("cidade").value;
    const email = document.getElementById("email").value;
    const tbody = document.getElementById("tbody");
    const att = `
      <tr>
        <td>${nome}</td>
        <td>${idade}</td>
        <td>${cidade}</td>
        <td>${email}</td>
      </tr>
    `;
    tbody.innerHTML += att;
  });