import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValues)=> {
    const [values, setValues] = useLocalStorage("dark", initialValues);
  
    const handleChanges = e => {
      setValues(
        !values
      );
    };
  
    return([values, handleChanges]);
  };

  export default useDarkMode;