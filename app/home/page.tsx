import React from "react";
import Signup from "../screens/Signup";
import Brokerage from "../screens/Brokerage";
import Track from "../screens/Track";
import Automate from "../screens/Automate";
import Reports from "../screens/Reports";

const page = () => {
  return (
    <div>
      <Signup />
      <Brokerage />
      <Track />
      <Automate />
      <Reports />
    </div>
  );
};

export default page;
