import React, { useState } from "react";
import { validate } from "./validation";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [hasErrors, setHasErrors] = useState(false); // Agregar estado para verificar si hay errores y utilizarlo para desabilitar el boton de submit
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  
    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
    
    setHasErrors(Object.values(errors).some((error) => error !== "")); // Verificar si hay errores
    
    if (!errors[event.target.name]) {
      event.target.classList.add(style.validInput);
    } else {
      event.target.classList.remove(style.validInput);
    }
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
      <form onSubmit={handleSumbit} className={style.form}>
        <label htmlFor="email">EMAIL</label>
        <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleOnChange}
        className={`${errors.email ? style.inputError : ""} ${!errors.email && userData.email ? style.validInput : ""}`}
        />

        {errors.email && <p className={style.p}>{errors.email}</p>}
        
        <label htmlFor="password">PASSWORD</label>
        <div className={style.passwordContainer}>
        <input
        type={showPassword ? "text" : "password"}
        name="password"
        value={userData.password}
        onChange={handleOnChange}
        className={`${errors.password ? style.inputError : ""} ${!errors.password && userData.password ? style.validInput : ""}`}
        />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <span role="img" aria-label="ocultar">
                👁️
              </span>
            ) : (
              <span role="img" aria-label="mostrar">
                👁️‍🗨️
              </span>
            )}
          </button>
        </div>
        {errors.password && <p className={style.p}>{errors.password}</p>}
       
        <button disabled={hasErrors} className={style.send}>SUBMIT</button>
      </form>
  );
};

export default Form;

