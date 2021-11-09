import React, { useState, useRef } from 'react';

const PhoneForm = (props) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
  });
  const { name, phone } = form;
  const input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onCreate(form);

    setForm({
      name: '',
      phone: '',
    });

    input.current.focus();
  }

  const handleChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="이름"
        onChange={handleChange}
        value={name}
        ref={input}
      />
      <input
        name="phone"
        placeholder="전화번호"
        onChange={handleChange}
        value={phone}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default PhoneForm;