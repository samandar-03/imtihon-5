import { useAuth } from "./hooks/useAuth";
import { PrivateApp } from "./private-app";
import { PublikApp } from "./publik-app";

  function App() {
    const[token] = useAuth()
    if (token) {
      return <PrivateApp />
    }
  return <PublikApp /> 
}

export default App;
