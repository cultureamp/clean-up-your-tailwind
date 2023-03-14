import React from "react";
import logo from "./logo.svg";
import { MyComponent } from "./components/MyComponent";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-500 flex-column">
      <MyComponent />
    </div>
  );
}

export default App;
