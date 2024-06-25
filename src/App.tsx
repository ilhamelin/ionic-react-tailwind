import { Redirect, Route, useLocation } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";

import { IoHomeSharp } from "react-icons/io5";
import { FaAppleWhole } from "react-icons/fa6";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

import HomePage from "./pages/HomePage";
import SuperPage from "./pages/SuperPage";
import ExplorarPage from "./pages/ExplorarPage";
import CarritoPage from "./pages/CarritoPage";
import CuentaPage from "./pages/CuentaPage";
import MapaPage from "./pages/MapaPage";
import PromocionesPage from "./pages/PromocionesPage";
import Vista_Productos from "./pages/Vista_Locales/El_Señor_De_Los_Bajones/Vista_Productos";
import Vista_Productos_M from "./pages/Vista_Locales/Mc_Donald's/Vista_Productos_M";
import Vista_Productos_L from "./pages/Vista_Locales/Little_Caesars_Pizza/Vista_Productos_L";
import Vista_Producto_S from "./pages/Vista_Locales/Subway/Vista_Producto_S";
import Vista_Producto_BK from "./pages/Vista_Locales/Burger_King/Vista_Producto_BK";
import Vista_Producto_KFC from "./pages/Vista_Locales/KFC/Vista_Producto_KFC";
import Billetera from "./pages/CuentaPage-Opciones/PagoPage";
import Favoritos from "./pages/CuentaPage-Opciones/Favoritos";
import Pedidos from "./pages/CuentaPage-Opciones/Pedidos";
import ConfiguracionCuenta from "./pages/CuentaPage-Opciones/ConfiguracionCuenta";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cuenta from "./pages/CuentaPage-Opciones/CuentaUber";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/tailwind.css";

import React, { useEffect, useState } from "react";
import { FavoritesProvider } from "./Context/FavoritesContext";
import { InterruptorProvider } from "./Context/InterruptorContext";
import PagoPage from "./pages/CuentaPage-Opciones/PagoPage";
import LayoutAdmin from "./layouts/LayoutAdmin";
import { auth } from "./firebase/firebase-config";
import { CarritoProvider } from "./Context/CarritoContext";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <MainContent />
      </IonReactRouter>
    </IonApp>
  );
};

const MainContent: React.FC = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
      setLoading(false); // Finaliza la carga una vez que se verifica el estado de autenticación
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const hiddenTabBarRoutes = [
    "/login",
    "/register",
    "/configuracionCuenta",
    "/splash",
  ];
  const currentPath = location.pathname.toLowerCase();
  const shouldHideTabBar = hiddenTabBarRoutes.includes(currentPath);

  if (loading) {
    return <div>Loading...</div>; // Muestra un indicador de carga mientras se verifica la autenticación
  }

  return (
    <InterruptorProvider>
      <CarritoProvider>
        <FavoritesProvider>
          {isAuthenticated ? (
            <IonTabs>
              <IonRouterOutlet>
                <Route
                  path="/auth"
                  render={() => <LayoutAdmin />}
                  exact={true}
                />
                <Route path="/home" render={() => <HomePage />} exact={true} />
                <Route
                  path="/super"
                  render={() => <SuperPage />}
                  exact={true}
                />
                <Route
                  path="/explorar"
                  render={() => <ExplorarPage />}
                  exact={true}
                />
                <Route
                  path="/carrito"
                  render={() => <CarritoPage />}
                  exact={true}
                />
                <Route
                  path="/cuenta"
                  render={() => <CuentaPage />}
                  exact={true}
                />
                <Route path="/mapa" render={() => <MapaPage />} exact={true} />
                <Route
                  path="/billetera"
                  render={() => <PagoPage />}
                  exact={true}
                />
                <Route
                  path="/promociones"
                  component={PromocionesPage}
                  exact={true}
                />
                <Route
                  path="/vistaProducto_Bajon"
                  component={Vista_Productos}
                  exact={true}
                />
                <Route
                  path="/vistaProducto_McDonals"
                  component={Vista_Productos_M}
                  exact={true}
                />
                <Route
                  path="/vistaProducto_Little_Pizza"
                  component={Vista_Productos_L}
                  exact={true}
                />
                <Route
                  path="/vistaProducto_Subway"
                  component={Vista_Producto_S}
                  exact={true}
                />
                <Route
                  path="/vistaProducto_Burger_King"
                  component={Vista_Producto_BK}
                  exact={true}
                />
                <Route
                  path="/vistaProducto_KFC"
                  component={Vista_Producto_KFC}
                  exact={true}
                />
                <Route path="/billetera" component={Billetera} exact={true} />
                <Route path="/favoritos" component={Favoritos} exact={true} />
                <Route path="/pedidos" component={Pedidos} exact={true} />
                <Route
                  path="/configuracionCuenta"
                  component={ConfiguracionCuenta}
                  exact={true}
                />
                <Route path="/cuentaUber" component={Cuenta} exact={true} />
                <Route exact path="/" render={() => <Redirect to="/home" />} />
              </IonRouterOutlet>

              <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                  <IoHomeSharp className="g:text-[20px] x:text-[25px]" />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="super" href="/super">
                  <FaAppleWhole className="g:text-[20px] x:text-[25px]" />
                  <IonLabel>Super</IonLabel>
                </IonTabButton>
                <IonTabButton tab="explorar" href="/explorar">
                  <FaSearch className="g:text-[20px] x:text-[25px]" />
                  <IonLabel>Explorar</IonLabel>
                </IonTabButton>
                <IonTabButton tab="carrito" href="/carrito">
                  <FaShoppingCart className="g:text-[20px] x:text-[25px]" />
                  <IonLabel>Carrito</IonLabel>
                </IonTabButton>
                <IonTabButton tab="cuenta" href="/cuenta">
                  <FaUser className="g:text-[20px] x:text-[25px]" />
                  <IonLabel>Cuenta</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          ) : (
            <IonRouterOutlet>
              <Route path="/login" component={Login} exact={true} />
              <Route path="/register" component={Register} exact={true} />
              <Route exact path="/" render={() => <Redirect to="/login" />} />
            </IonRouterOutlet>
          )}
        </FavoritesProvider>
      </CarritoProvider>
    </InterruptorProvider>
  );
};

export default App;
