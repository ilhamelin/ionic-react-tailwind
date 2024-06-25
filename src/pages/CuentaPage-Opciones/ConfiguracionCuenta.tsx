import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { FaArrowLeft } from "react-icons/fa6";
import { LiaHomeSolid } from "react-icons/lia";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import UserPlaceholder from "../../img/Perfil_User.png";

const ConfiguracionCuenta: React.FC = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState<any>(null);
  const history = useHistory();

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      history.push("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleEditar = () => {
    history.push("/cuentaUber");
  };

  return (
    <>
      <IonHeader className="shadow-none">
        <IonToolbar>
          <button className="px-5 pt-5" onClick={() => window.history.back()}>
            <FaArrowLeft className="text-Negro text-[15px]" />
          </button>
          <IonTitle className="text-Negro font-font-family-light font-medium text-[30px]">
            Configuracion
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="flex flex-col justify-center items-center mt-4 pb-6 border-b-2 border-b-Gris_muy_claro">
          <img
            className="rounded-full h-full w-[90px]"
            src={user?.photoURL || UserPlaceholder}
            alt="User profile"
          />
          <div className="font-font-family-light leading-6 py-2">
            {userData ? userData.name : "Cargando..."}
          </div>
          <button onClick={handleEditar} className="text-Cian_oscuro font-font-family-light font-medium text-[15px]">
            EDITA LA CUENTA
          </button>
        </div>
        <div className="pt-4 pl-4 border-b-2 pb-6 border-b-Gris_muy_claro">
          <div className="font-font-family-light">Ubicaciones guardadas</div>
          <div className="flex flex-col mt-6">
            <div className="flex items-center">
              <LiaHomeSolid className="text-[23px]" />
              <div className="flex flex-col font-font-family-light leading-6 ml-4">
                <div className="text-[17px] font-normal">Casa</div>
                <div className="text-[12px]">
                  Agrega la direccion de tu casa
                </div>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <PiSuitcaseSimpleDuotone className="text-[23px]" />
              <div className="flex flex-col font-font-family-light leading-6 ml-4">
                <div className="text-[17px] font-normal">Trabajo</div>
                <div className="text-[12px]">
                  Agrega la direccion de tu trabajo
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="pt-4 pl-4 font-font-family-light text-[18px] text-Rojo_suave font-semibold"
        >
          Cerrar sesion
        </button>
      </IonContent>
    </>
  );
};

export default ConfiguracionCuenta;
