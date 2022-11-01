import React from "react";
import SelectInput from "../../components/SelectInput/SelectInput";
import "./DestinyForm.css";

function DestinyForm() {
  return (
    <form className="destiny-form">
      <h1>Destino de interesse</h1>
      <SelectInput name={"País"}>
        <option value={"País"}>País</option>
      </SelectInput>
      <SelectInput name={"Cidade"}>
        <option value={"Cidade"}>Cidade</option>
      </SelectInput>
    </form>
  );
}

export default DestinyForm;
