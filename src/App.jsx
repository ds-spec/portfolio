import React from "react";
import RenderedView from "./components/Page1/RenderedView";
import RenderedTextView from "./components/Page2/RenderedTextView";
import RenderedLaptopView from "./components/Page3/RenderedLaptopView";
import RenderedCardView from "./components/Page4/RenderedCardView";
import RenderedTransparentView from "./components/Page5/RenderedTransparentView";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <RenderedView />
      <RenderedTextView />
      <RenderedCardView />
      <RenderedTransparentView />
      {/* <RenderedLaptopView /> */}
    </div>
  );
};

export default App;
