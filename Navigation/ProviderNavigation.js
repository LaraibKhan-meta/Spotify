import { Provider } from "react-redux";
import store from "../redux/store";
import AppNavigation from "./AppNavigation";

function ProviderNavigation() {
  
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    )
}

export default ProviderNavigation;