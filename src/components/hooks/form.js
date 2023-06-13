
import { useState } from 'react';
// import superagent from 'superagent';
// import cookie from "react-cookies";

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = async(event) => {
    if (event) event.preventDefault();
    callback(values);

    // const token = cookie.load("token");
    // let response = await superagent.post("http://localhost:3003/api/v2/todo").set('authorization', `Bearer ${token}`).send(values);
    // console.log('handle submit value::' , response);

  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    console.log('handlechange value::' , values);
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
