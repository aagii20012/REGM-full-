import React, { useState } from "react";
import Navbar from "./main/navbar";
import Suggest from "./main/suggest";
import Main from "./main/main";
import Footer from "./main/footer";

function mainPage(user) {
  return (
    <>
      <Navbar user={user} />
      <Suggest />
      <Main />
      <Footer />
    </>
  );
}

export default mainPage;
