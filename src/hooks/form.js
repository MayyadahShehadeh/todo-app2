import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
    // console.log('handle submit value::' , values);

  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    // console.log('handlechange value::' , values);
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
