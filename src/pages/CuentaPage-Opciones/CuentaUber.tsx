import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";

import { FaArrowLeft } from "react-icons/fa6";
import { FaUserAlt, FaLock, FaShieldAlt } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import UserPlaceholder from "../../img/Perfil_User.png";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";

const Cuenta: React.FC = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState<any>(null);
  const [passwordVisible, setPasswordVisible] = useState(false); // Estado para controlar la visibilidad de la contraseña
  const [activeTab, setActiveTab] = useState("informacion");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        console.log("Authenticated user ID:", user.uid); // Verifica el UID del usuario
        const userDocRef = doc(db, "Usuarios", user.uid);
        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.log("No user data found!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <>
      <IonHeader class="shadow-none">
        <IonToolbar>
          <div className="flex items-center mt-2 mb-2">
            <button
              className="mx-5 rounded-full bg-opacity-50 active:bg-Gris_muy_claro"
              onClick={() => window.history.back()}
            >
              <FaArrowLeft className="text-Negro text-[20px]" />
            </button>
            <div>
              <IonTitle className="font-font-family-light text-[20px]">
                Cuenta Uber
              </IonTitle>
            </div>
          </div>
          <div className="x:pt-1 pt-1">
            <label className="relative inline-flex cursor-pointer select-none items-center w-full">
              <span
                onClick={() => handleTabChange("informacion")}
                className={`flex items-center space-x-[6px] py-1 px-[17px] text-[12px] w-[150px] font-medium h-full font-font-family-light justify-center text-center cursor-pointer transition duration-300 ${
                  activeTab === "informacion"
                    ? "text-Negro border-b-[3px] border-Negro"
                    : "text-body-color"
                }`}
              >
                Información de la cuenta
              </span>
              <span
                onClick={() => handleTabChange("seguridad")}
                className={`flex items-center space-x-[6px] py-[11px] px-[17px] text-[12px] w-[150px] h-full font-medium font-font-family-light justify-center text-center cursor-pointer transition duration-300 ${
                  activeTab === "seguridad"
                    ? "text-Negro border-b-[3px] border-Negro"
                    : "text-body-color"
                }`}
              >
                Seguridad
              </span>
              <span
                onClick={() => handleTabChange("proteccion")}
                className={`flex items-center space-x-[6px] py-1 px-[17px] text-[12px] w-[150px] font-medium h-full font-font-family-light justify-center text-center cursor-pointer transition duration-300 ${
                  activeTab === "proteccion"
                    ? "text-Negro border-b-[3px] border-Negro"
                    : "text-body-color"
                }`}
              >
                Protección de datos
              </span>
            </label>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="relative w-full h-full">
          <div
            className={`absolute top-0 left-0 w-full transition-transform duration-500 ${
              activeTab === "informacion" ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {activeTab === "informacion" && (
              <div className="flex flex-col mx-4 mt-4 font-font-family-light">
                <div className="text-[30px] font-semibold w-[280px]">
                  Informacion de la Cuenta
                </div>
                <div className="mt-3">
                  <img
                    className="rounded-full h-full w-[90px] px-1 py-1"
                    src={user?.photoURL || UserPlaceholder}
                    alt="User profile"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <div className="text-[20px] font-semibold">
                    Informacion basica
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-col text-[17px] font-normal border-b-Gris_muy_claro border-b-2 pb-3">
                      Nombre
                      <span>
                        <div className="text-[15px] font-light">
                          {userData ? userData.name : "Cargando..."}
                        </div>
                      </span>
                    </div>
                    <div className="flex flex-col text-[17px] font-normal border-b-Gris_muy_claro border-b-2 pb-3 mt-3">
                      Numero de Telefono
                      <span>
                        <div className="text-[15px] font-light">
                          {userData ? userData.phoneNumber : "Cargando..."}
                        </div>
                      </span>
                    </div>
                    <div className="flex flex-col text-[17px] font-normal border-b-Gris_muy_claro border-b-2 pb-3 mt-3">
                      Correo electrónico
                      <span>
                        <div className="text-[15px] font-light">
                          {userData ? userData.email : "Cargando..."}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`absolute top-0 left-0 w-full transition-transform duration-500 ${
              activeTab === "seguridad" ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {activeTab === "seguridad" && (
              <div className="flex flex-col mx-4 mt-4 font-font-family-light ">
                <div>
                  <div className="text-[30px] font-semibold w-[280px]">
                    Seguridad
                  </div>
                  <div className="mt-8 text-[20px] font-medium">
                    Iniciar sesion en Uber
                  </div>
                  <div className="flex flex-col my-5 text-[16px] border-b-Gris_muy_claro border-b-2 pb-3">
                    Contraseña
                    <span className="text-[15px] font-medium my-1">
                      {passwordVisible ? "password" : "••••••••••"}
                      <button
                        className="ml-2 text-Gris_paloma"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? "Ocultar" : "Mostrar"}
                      </button>
                    </span>
                    <span className="text-Gris_paloma text-[15px] font-normal leading-7">
                      Ultima modificacion
                    </span>
                  </div>
                  <div className="flex flex-col text-[16px] border-b-Gris_muy_claro border-b-2 pb-3">
                    Claves de acceso
                    <span className="text-Gris_paloma text-[15px] font-normal my-0.5">
                      Las claves de acceso son mas faciles y
                    </span>
                    <span className="text-Gris_paloma text-[15px] font-normal">
                      seguras que las contraseñas
                    </span>
                  </div>
                  <div className="flex flex-col text-[16px] border-b-Gris_muy_claro border-b-2 pb-3 mt-5">
                    App de autenticacion
                    <span className="text-Gris_paloma text-[15px] font-normal my-0.5">
                      Configura la app de autentificacion para
                    </span>
                    <span className="text-Gris_paloma text-[15px] font-normal">
                      agregar un nivel de seguridad adicional
                    </span>
                  </div>
                  <div className="flex flex-col text-[16px] border-b-Gris_muy_claro border-b-2 pb-3 mt-5">
                    Verificacion en dos pasos
                    <span className="text-Gris_paloma text-[15px] font-normal my-0.5">
                      Mejora la seguridad de tu cuenta con la
                    </span>
                    <span className="text-Gris_paloma text-[15px] font-normal">
                      verificacion en dos pasos
                    </span>
                  </div>
                  <div className="flex flex-col text-[25px] mt-8">
                    Apps sociales conectadas
                    <span className="text-[14px] text-Gris_paloma font-light mt-2">
                      permitiste que estas apps sociales inicien sesion en tu
                      cuenta uber
                    </span>
                    <div className="fle mt-6">
                      <BsGoogle />
                      <div>Google</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className={`absolute top-0 left-0 w-full transition-transform duration-500 ${
              activeTab === "proteccion" ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {activeTab === "proteccion" && (
              <div className="flex flex-col mx-4 mt-4 ">
                <div className="text-[30px]  font-semibold w-[300px]">
                  Proteccion de datos
                </div>
                <div className="flex flex-col mt-5">
                  <div className="text-[20px] font-semibold">Privacidad</div>
                  <div className="flex flex-col mt-4 text-[16px] font-semibold">
                    Centro de privacidad
                    <span className="text-[15px] font-light my-0.5">
                      Controla tu privacidad y conoce como
                    </span>
                    <span className="text-[15px] font-light">
                      la protegemos.
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex flex-col mt-4 text-[20px] font-semibold">
                    Apps de terceros con acceso a la cuenta
                    <span className="text-[15px] font-light my-0.5">
                      Una vez que permites el acceso a las apps de terceros,
                    </span>
                    <span className="text-[15px] font-light">
                      las veras aqui.
                      <span className="font-semibold underline underline-offset-2 mx-1">
                        Conoce mas
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default Cuenta;
