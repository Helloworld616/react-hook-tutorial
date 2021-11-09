import React, { useState, Fragment } from 'react';

const PhoneInfo = (props) => {
  const { name, phone } = props.info;
  const [form, setForm] = useState({
    editing: false,
    name: name,
    phone: phone,
  });
  const { editing } = form;
  const style = {
    border: '1px solid black',
    padding: '8px',
    margin: '8px',
  }

  const handleChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm)
  }

  const handleRemove = () => {
    const { info, onRemove } = props;
    onRemove(info.id);
  }

  const handleToggleEdit = () => {
    // console.log(form)

    const { info, onUpdate } = props;

    if (form.editing) {
      onUpdate(info.id, {
        name: form.name,
        phone: form.phone,
      });
    } else {
      const nextForm = {
        ...form,
        name: info.name,
        phone: info.phone,
      };

      setForm(nextForm);
    }

    setForm({
      ...form,
      editing: !form.editing,
    })

  }

  return (
    <div style={style}>
      {
        editing ? ( 
          <Fragment>
            <div>
              <input
                name="name"
                onChange={handleChange}
                value={form.name}
              />
            </div>
            <div>
              <input 
                name="phone"
                onChange={handleChange}
                value={form.phone}
              />
            </div>
          </Fragment> 
        ) : (
          <Fragment>
            <div><b>{name}</b></div>
            <div>{phone}</div>
          </Fragment>
        )
      }
      <button onClick={handleRemove}>삭제</button>
      <button onClick={handleToggleEdit}>
        { editing ? '적용' : '수정' }
      </button>
    </div>
  );
};

export default PhoneInfo;