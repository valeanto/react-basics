import React from "react";
import Pricing from "./pricing";

function Welcome() {
  return (
    <>
      <div className="container">
        <section>Navbar</section>
        <section>Landing</section>
        <section>features</section>
        <Pricing />
        <section>footer</section>
      </div>
    </>
  );
}
export default Welcome;
