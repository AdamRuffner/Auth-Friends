import React, { useState } from "react";


const initialValues = {
  name: "",
  age: "",
  email: "",
};

export default function FriendForm(props) {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(values);
    setValues(initialValues);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={onChange}
      />
      <label htmlFor="age">Age:</label>
      <input
        type="text"
        id="age"
        name="age"
        value={values.age}
        onChange={onChange}
      />
      <label htmlFor="email">email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={onChange}
      />
      <button>Make a new friend</button>
    </form>
  );
}
