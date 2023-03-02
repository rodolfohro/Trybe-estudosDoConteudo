//VARIÁVEIS GLOBAIS
const getCheckBox = document.querySelector("#termos-check");
const getBtn = document.getElementById("btnClick");
const getName = document.querySelector("#nome");
const getLastName = document.querySelector("#sobrenome");
const getEmail = document.querySelector("#email");
const getNotas = document.querySelectorAll('input[name="nota"]:checked');

//FUNÇÕES

const handleclick = () => {
  /*   alert("Você aceitou os termos de uso"); */
  /* console.log(getButton); */
  /*   if (getBtn.disabled === true) {
		getBtn.disabled = false;
  } else {
		getBtn.disabled = true;
  } */

  getBtn.disabled ? (getBtn.disabled = false) : (getBtn.disabled = true);
};

const getInputValues = () => {
  /* console.log(getName.value); */
  const getNameText = getName.value;
  const getLastNameText = getLastName.value;
  const getEmailText = getEmail.value;
  let notaSelecionada;
  for (const getNotasValue of getNotas) {
    if (getNotasValue.checked) {
      notaSelecionada = getNotasValue.value;
    }
  }
  // show the output:
  alert = notaSelecionada
    ? `You selected ${notaSelecionada}`
    : `You haven't selected any size`;

  console.log(getNotas);

  /*   if (getNameText.trim("") === "") {
    return alert("Preencha o campo nome"); //return para não executar o resto do código da função
  }

  if (getLastNameText.trim("") === "") {
    return alert("Preencha o campo Sobrenome");
  }

  if (getEmailText.trim("") === "") {
    return alert("Preencha o campo E-mail");
  }
 */
  if (notaSelecionada > 0) {
    alert("sua nota foi: " + notaSelecionada.value);
    console.log(notaSelecionada.value);
  } /*  else {
    alert("Selecione uma nota");
  } */
};

// CHAMADA DAS FUNCIONALIDADES
window.onload = () => {
  getCheckBox.addEventListener("click", handleclick);
  getBtn.addEventListener("click", getInputValues);
};
