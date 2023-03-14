import React from "react";
import logo from "./logo.svg";
import { MyComponent } from "./components/MyComponent";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen font-sans flex-column">
      <MyComponent text="Hello world" />
    </div>
  );
}

export default App;
