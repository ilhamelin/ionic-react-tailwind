import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

import FondoUber from "../img/hero-picture.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Inicio de sesión exitoso, redirige al usuario a la página de inicio
      history.push("/home");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Registro exitoso, redirige al usuario a la página de inicio
      history.push("/home");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  return (
    <div className="bg-cover " style={{ backgroundImage: `url(${FondoUber})` }}>
      <div className="font-font-family-light mx-10  min-h-screen ">
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <div className="text-center font-semibold text-[50px] text-Cian_oscuro drop-shadow-xl my-5">
            Uber Eats
          </div>
          <div className="flex flex-col gap-y-2 w-[250px]">
            <input
              className="bg-Gris_muy_claro px-2 py-2 rounded-lg placeholder:text-Negro placeholder:font-medium"
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-Gris_muy_claro px-2 py-2 rounded-lg placeholder:text-Negro placeholder:font-medium"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center justify-center gap-x-2">
              <div className="bg-Negro rounded-lg">
                <button
                  className="text-Blanco px-5 py-2 w-[100px] font-semibold leading-5"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
              <div className="bg-Negro rounded-lg">
                <button
                  className="text-Blanco px-3 py-2 w-[100px] font-semibold leading-5"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
