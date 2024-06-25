import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import { getDoc, doc, setDoc } from "firebase/firestore";
import FondoUber from "../img/hero-picture.png";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const user = result.user;
          if (user) {
            const userDoc = await getDoc(doc(db, "Usuarios", user.uid));
            if (!userDoc.exists()) {
              await setDoc(doc(db, "Usuarios", user.uid), {
                email: user.email,
                name: user.displayName || "",
                phoneNumber: user.phoneNumber || "",
              });
            }
            history.push("/home");
          }
        }
      } catch (error) {
        console.error("Error al obtener el resultado de redirección:", error);
      }
    };

    checkRedirectResult();
  }, [history]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      history.push("/home");
    } catch (error) {
      setErrorMessage("Correo electrónico o contraseña incorrectos.");
      console.error("Error al iniciar sesión:", error);
      setTimeout(() => setErrorMessage(""), 4000);
    }
  };

  const handleRegister = () => {
    history.push("/register");
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      setErrorMessage("Error al iniciar sesión con Google.");
      console.error("Error al iniciar sesión con Google:", error);
      setTimeout(() => setErrorMessage(""), 4000);
    }
  };

  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${FondoUber})` }}>
      <div className="font-font-family-light mx-10 min-h-screen">
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
            <div className="relative">
              <input
                className="bg-Gris_muy_claro px-2 py-2 rounded-lg placeholder:text-Negro placeholder:font-medium w-full"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-2"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errorMessage && (
              <div className="bg-Rojo_suave py-1 px-2 rounded-md">
                <div className="text-Blanco text-[11px] font-semibold">
                  {errorMessage}
                </div>
              </div>
            )}
            <div className="flex flex-col items-center gap-y-2">
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
              <div className="bg-Blanco rounded-lg">
                <button
                  className="flex items-center justify-center px-3 py-2 w-[250px] font-semibold leading-5"
                  onClick={handleGoogleSignIn}
                >
                  <FcGoogle className="mr-2 text-[25px]" />
                  Sign in with Google
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
