import { Provider } from "react-redux";
import store, { persistor } from "../redux/store";
import AppNavigation from "./AppNavigation";
import { PersistGate } from "redux-persist/integration/react";

function ProviderNavigation() {
  
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigation />
            </PersistGate>
        </Provider>
    )
}

export default ProviderNavigation;