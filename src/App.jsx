import { React, useState, useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utlits/api";

function App() {
  useEffect(() => {
    appTesting();
  }, []);

  const appTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div>App</div>
    </>
  );
}

export default App;
