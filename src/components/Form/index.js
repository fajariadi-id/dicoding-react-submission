import React, { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import moment from "moment";

const Form = ({ data, setData }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputLength, setInputLength] = useState(0);
  const [inputDescription, setInputDescription] = useState("");

  const [reloadForm, setReloadForm] = useState(0);

  const handleInputLength = (value) => {
    if (value.length > 50) return;

    setInputLength(value.length);
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      id: +new Date(),
      title: inputValue,
      body: inputDescription,
      createdAt: moment().format(),
      archived: false,
    };

    setData([...data, body]);
    clearForm();
  };

  const clearForm = () => {
    setReloadForm(reloadForm + 1);
    setInputDescription("");
  };

  return (
    <section>
      <h2 className="title">buat catatan</h2>

      <article className="add-note">
        <span>jumlah karakter: {inputLength}/50</span>

        <form onSubmit={handleSubmit}>
          <TextInput
            reloadKey={reloadForm}
            inputValue={handleInputLength}
            placeholder="masukkan judul disini..."
          />

          <textarea
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
            placeholder="masukkan deskripsi disini..."
            autoComplete="off"
            required
          ></textarea>

          <Button btnFor="submit" title="buat" />
        </form>
      </article>
    </section>
  );
};

export default Form;
