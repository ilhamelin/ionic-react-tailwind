import { Redirect, Route } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import HomePage from "./pages/HomePage";
import SuperPage from "./pages/SuperPage";
import ExplorarPage from "./pages/ExplorarPage";
import CarritoPage from "./pages/CarritoPage";
import CuentaPage from "./pages/CuentaPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import "./theme/tailwind.css";

import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";

import { IoHomeSharp } from "react-icons/io5";
import { FaAppleWhole } from "react-icons/fa6";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" render={() => <HomePage />} exact={true} />
          <Route path="/super" render={() => <SuperPage />} exact={true} />
          <Route
            path="/explorar"
            render={() => <ExplorarPage />}
            exact={true}
          />
          <Route path="/carrito" render={() => <CarritoPage />} exact={true} />
          <Route path="/cuenta" render={() => <CuentaPage />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IoHomeSharp className="g:text-[20px] x:text-[25px]" />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="super" href="/super">
            <FaAppleWhole className="g:text-[20px] x:text-[25px] " />
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
    </IonReactRouter>
  </IonApp>
);

export default App;
