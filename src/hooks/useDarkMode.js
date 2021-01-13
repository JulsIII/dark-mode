import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValues)=> {
    const [values, setValues] = useLocalStorage("dark", initialValues);
  
    const handleChanges = e => {
      setValues({
        ...values,
        // [e.target.name]: e.target.value
      });
    };
  
    return([values, handleChanges]);
  };

  export default useDarkMode;