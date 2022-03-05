import React, { useState } from 'react'
import Navbar from './main/Navbar'
import Suggest from './main/Suggest'
import Main from './main/Main'
import Footer from './main/Footer'


function MainPage(user) {
  return (
    <>
        <Navbar user={user} />
        <Suggest/>
        <Main/>
        <Footer/>
    </>
  )
}

export default MainPage