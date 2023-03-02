//VARIÁVEIS GLOBAIS
const getCheckBox = document.querySelector("#termos-check");
const getBtn = document.getElementById("btnClick");
const getName = document.querySelector("#nome");
const getLastName = document.querySelector("#sobrenome");
const getEmail = document.querySelector("#email");

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

  if (getNameText.trim("") === "") {
    return alert("Preencha o campo nome"); //return para não executar o resto do código da função
  }

  if (getLastNameText.trim("") === "") {
    return alert("Preencha o campo Sobrenome");
  }

  if (getEmailText.trim("") === "") {
    return alert("Preencha o campo E-mail");
  }
};

// CHAMADA DAS FUNCIONALIDADES
window.onload = () => {
  getCheckBox.addEventListener("click", handleclick);
  getBtn.addEventListener("click", getInputValues);
};
