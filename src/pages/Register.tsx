import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { addUserToFirestore } from "../firebase/firebase-functions";
import { FcGoogle } from "react-icons/fc";

const Register: React.FC = () => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const user = userCredential.user;

      // Agregar usuario a la colección Usuarios
      await addUserToFirestore({
        email: user.email || "",
        name: userData.name,
        phoneNumber: userData.phoneNumber,
        address: userData.address,
        userId: user.uid,
        imagenUrl: ""
      });

      // Registro exitoso, redirige al usuario a la página de inicio
      history.push("/home");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        // Agregar usuario a la colección Usuarios
        await addUserToFirestore({
          email: user.email || "",
          name: user.displayName || "",
          phoneNumber: "",
          address: "",
          userId: user.uid,
          imagenUrl: ""
        });

        // Inicio de sesión exitoso, redirige al usuario a la página de inicio
        history.push("/home");
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <>
      <div>
        <div className="mx-10 my-10">
          <div className="font-font-family-light ">
            <div className="text-center font-semibold text-[50px] text-Cian_oscuro drop-shadow-xl my-5">
              Uber Eats
            </div>
            <div>
              <div className="text-[16px] font-semibold leading-7">Correo</div>
              <input
                className="bg-Gris_muy_claro px-2 py-2 mb-2 rounded-lg w-[310px] placeholder:text-Negro placeholder:font-medium placeholder:text-[15px] text-[15px]"
                type="email"
                name="email"
                placeholder="Correo"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div className="text-[16px] font-semibold leading-7">Nombre</div>
              <input
                className="bg-Gris_muy_claro px-2 py-2 mb-2 rounded-lg w-[310px] placeholder:text-Negro placeholder:font-medium placeholder:text-[15px] text-[15px]"
                type="text"
                name="name"
                placeholder="Nombre"
                value={userData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div className="text-[16px] font-semibold leading-7">
                Contraseña
              </div>
              <input
                className="bg-Gris_muy_claro px-2 py-2 mb-2 rounded-lg w-[310px] placeholder:text-Negro placeholder:font-medium placeholder:text-[15px] text-[15px]"
                type="password"
                name="password"
                placeholder="Contraseña"
                value={userData.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div className="text-[16px] font-semibold leading-7">
                Numero de Telefono
              </div>
              <input
                className="bg-Gris_muy_claro px-2 py-2 mb-2 rounded-lg w-[310px] placeholder:text-Negro placeholder:font-medium placeholder:text-[15px] text-[15px]"
                type="text"
                name="phoneNumber"
                placeholder="Número de teléfono"
                value={userData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div className="text-[16px] font-semibold leading-7">
                Direccion
              </div>
              <input
                className="bg-Gris_muy_claro px-2 py-2 mb-2 rounded-lg w-[310px] placeholder:text-Negro placeholder:font-medium placeholder:text-[15px] text-[15px]"
                type="text"
                name="address"
                placeholder="Número de teléfono"
                value={userData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2 mt-2">
            <div className="flex items-center justify-center gap-x-2">
              <div className="bg-Negro rounded-lg">
                <button
                  className="text-Blanco px-5 py-2 w-[120px] font-semibold leading-5"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
              <div className="bg-Negro rounded-lg">
                <button
                  className="text-Blanco px-3 py-2 w-[120px] font-semibold leading-5"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </div>
            <div className=" bg-Gris_muy_claro rounded-lg">
              <button
                className="flex items-center justify-center px-3 py-2 w-[250px]  font-semibold leading-5"
                onClick={handleGoogleSignIn}
              >
                <FcGoogle className="mr-2 text-[25px]" />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
