import React, { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputLength, setInputLength] = useState(0);
  const [inputDescription, setInputDescription] = useState("");

  const handleInputLength = (value) => {
    if (value.length > 50) return;

    setInputLength(value.length);
    setInputValue(value);
  };

  return (
    <section>
      <h2 className="title">buat catatan</h2>

      <article className="add-note">
        <span>jumlah karakter: {inputLength}/50</span>
        <TextInput
          inputValue={handleInputLength}
          placeholder="masukkan judul disini..."
        />

        <textarea
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
          placeholder="masukkan deskripsi disini..."
          autoComplete="off"
        ></textarea>

        <Button btnFor="submit" title="buat" />
      </article>
    </section>
  );
};

export default Form;
