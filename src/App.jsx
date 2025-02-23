import React from "react";
import RenderedView from "./components/Page1/RenderedView";
import RenderedTextView from "./components/Page2/RenderedTextView";
import RenderedLaptopView from "./components/Page3/RenderedLaptopView";
import RenderedCardView from "./components/Page4/RenderedCardView";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <RenderedView />
      <RenderedTextView />
      <RenderedCardView />
      {/* <RenderedLaptopView /> */}
    </div>
  );
};

export default App;
