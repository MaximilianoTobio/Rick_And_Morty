export const validate = (userData) => {
    const errors = {
        email: "",
        password: "",
    };
  
    if (!userData.email) {
      errors.email = "El campo de correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = "Debes ingresar un correo electrónico válido";
    } else if (userData.email.length > 35) {
      errors.email = "El correo electrónico debe tener menos de 35 caracteres";
    }
  
   if (!/.{8,10}/.test(userData.password)) {
      errors.password = "La contraseña debe tener entre 8 y 10 caracteres";
    }else  if (!/.*\d+.*/.test(userData.password)) {
        errors.password = "La contraseña debe incluir al menos un número";
    } 
  
    return errors;
};