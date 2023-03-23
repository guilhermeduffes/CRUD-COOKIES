const addressInput = document.querySelector("#addressInput");
const cityInput = document.querySelector("#cityInput");

cepInput.addEventListener("change", () => {
  const cep = cepInput.value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      addressInput.value = data.logradouro;
      cityInput.value = data.localidade;
    });
});