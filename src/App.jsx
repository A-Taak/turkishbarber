import './App.css';
import Layout from './layout/Layout';
import React, {useEffect} from "react";

function App() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/script.js";
    document.body.appendChild(script);

    const onScriptLoad = () => {
      console.log('What are you looking for?');
    };

    script.addEventListener('load', onScriptLoad);

    window.onload = () => {
      document.body.appendChild(script);
    };

    return () => {
      script.removeEventListener('load', onScriptLoad);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout />
  );
}

export default App
