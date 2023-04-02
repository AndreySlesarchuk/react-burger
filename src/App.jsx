import {Catalog} from "./components/Catalog/Catalog"
import {Header} from "./components/Header/Header"
import {Navigation} from "./components/Navigation/Navigation"
import {Provider} from "react-redux";
import {store} from "./store/index.js";
import {ModalDelivery} from "./components/ModalDelivery/ModalDelivery.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import {Analytics} from "@vercel/analytics/react";

export const App = () => {

    return (
        <Provider store={store}>
            <Header/>
            <main>
                <Navigation/>
                <Catalog/>
            </main>
            <Footer />
            <ModalDelivery />
            <Analytics />
        </Provider>
    )
}


