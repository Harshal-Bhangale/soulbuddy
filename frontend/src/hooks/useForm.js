import { useState } from 'react';

export default function useForm(initial) {
  const [values, setValues] = useState(initial);
  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const reset = () => setValues(initial);
  return { values, onChange, reset, setValues };
}
