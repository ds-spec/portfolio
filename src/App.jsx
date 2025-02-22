import React from "react";
import RenderedView from "./components/Page1/RenderedView";
import RenderedTextView from "./components/Page2/RenderedTextView";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <RenderedView />
      <RenderedTextView />
    </div>
  );
};

export default App;
