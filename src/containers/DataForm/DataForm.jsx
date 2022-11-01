import React from "react";
import "./DataForm.css";
import TextInput from "../../components/TextInput/TextInput";

function DatForm() {
  const inputsList = ["Nome", "Email", "Telefone", "CPF", "País", "Cidade"];
  return (
    <form className="data-form">
      <h1>Dados pessoais</h1>
      {inputsList.map((inputName, index) => (
        <TextInput name={inputName} key={index} />
      ))}
    </form>
  );
}

export default DatForm;
