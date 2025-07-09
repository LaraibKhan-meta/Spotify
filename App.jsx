import { useEffect } from "react";
import ProviderNavigation from "./Navigation/ProviderNavigation";


function App()
{
     useEffect(() => {
    const init = async () => {
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
  
  return  <ProviderNavigation/>
}

export default App;