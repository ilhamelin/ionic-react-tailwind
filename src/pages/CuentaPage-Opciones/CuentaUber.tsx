import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaCamera } from "react-icons/fa";
import UserPlaceholder from "../../img/Perfil_User.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, storage } from "../../firebase/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Webcam from "react-webcam";
import { BsGoogle } from "react-icons/bs";

const Cuenta: React.FC = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState<any>(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("informacion");
  const [showOptions, setShowOptions] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        console.log("Authenticated user ID:", user.uid);
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

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (user && event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      const imageRef = ref(storage, `profilePictures/${user.uid}`);
      try {
        await uploadBytes(imageRef, selectedImage);
        const imageUrl = await getDownloadURL(imageRef);
        const userDocRef = doc(db, "Usuarios", user.uid);
        await updateDoc(userDocRef, { imagenUrl: imageUrl });
        setUserData((prevData: any) => ({ ...prevData, imagenUrl: imageUrl }));
        console.log("Imagen subida y URL actualizada en Firestore");
      } catch (error) {
        console.error("Error subiendo la imagen:", error);
      }
    }
  };

  const captureImageFromCamera = async () => {
    if (webcamRef.current && user) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const response = await fetch(imageSrc);
        const blob = await response.blob();
        const imageRef = ref(storage, `profilePictures/${user.uid}`);
        try {
          await uploadBytes(imageRef, blob);
          const imageUrl = await getDownloadURL(imageRef);
          const userDocRef = doc(db, "Usuarios", user.uid);
          await updateDoc(userDocRef, { imagenUrl: imageUrl });
          setUserData((prevData: any) => ({
            ...prevData,
            imagenUrl: imageUrl,
          }));
          console.log("Imagen capturada y URL actualizada en Firestore");
          setIsCameraOpen(false);
        } catch (error) {
          console.error("Error subiendo la imagen:", error);
        }
      }
    }
  };

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
                <div className="mt-3 relative">
                  <img
                    className="rounded-full h-full w-[90px] px-1 py-1"
                    src={userData?.imagenUrl || UserPlaceholder}
                    alt="User profile"
                  />
                  <div className="absolute bottom-0 right-[280px] bg-Gris_muy_claro rounded-full p-1 cursor-pointer">
                    <FaCamera onClick={() => setShowOptions(true)} />
                  </div>
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
                <div className="text-[30px] font-semibold w-[250px]">
                  Seguridad
                </div>
                <div className="flex flex-col mt-4">
                  <div className="text-[20px] font-semibold">Acceso</div>
                  <div className="flex flex-col text-[16px] mt-4">
                    Contraseña
                    <span className="text-Gris_paloma text-[15px] font-normal my-0.5">
                      Cambia tu contraseña
                    </span>
                    <div className="relative">
                      <input
                        className="border border-Gris_muy_claro w-full py-2 px-3"
                        type={passwordVisible ? "text" : "password"}
                        defaultValue="********"
                      />
                      <span
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? "Ocultar" : "Mostrar"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col text-[16px] border-b-Gris_muy_claro border-b-2 pb-3 mt-5">
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
                    <div className="flex items-center mt-6">
                      <BsGoogle className="mr-2" />
                      <div>Google</div>
                    </div>
                  </div>
                </div>
                <div className="mb-24"></div>
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
        {showOptions && (
          <div className="fixed inset-0 bg-Negro font-font-family-light bg-opacity-50 flex items-center justify-center  z-50">
            <div className="bg-Blanco rounded-lg   p-4 w-80">
              <div className="text-lg font-semibold mb-4 text-center">
                Selecciona una opción
              </div>
              <div>
                <button
                  className=" w-full bg-blue-500 bg-Gris_muy_claro text-Negro py-2 px-4 rounded-lg mb-2"
                  onClick={() => {
                    setShowOptions(false);
                    setIsCameraOpen(true);
                  }}
                >
                  Usar cámara
                </button>
              </div>
              <div className="my-2 bg-Gris_muy_claro text-Negro text-center py-1 px-4 rounded-lg">
                <label className="w-full  text-white   cursor-pointer mb-2  ">
                  Seleccionar imagen
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      handleImageChange(e);
                      setShowOptions(false);
                    }}
                    className="hidden"
                  />
                </label>
              </div>
              <button
                className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg"
                onClick={() => setShowOptions(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
        {isCameraOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 w-80 flex flex-col items-center">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={300}
                height={300}
              />
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
                onClick={captureImageFromCamera}
              >
                Capturar y subir imagen
              </button>
              <button
                className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg mt-2"
                onClick={() => setIsCameraOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </IonContent>
    </>
  );
};

export default Cuenta;
