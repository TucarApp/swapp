import { useEffect, useState } from "react";

import Meta from "./Meta";
import NavBar from "../components/Navbar";
import Footer from '../components/Footer'


export default function Layout({ children, title, dark, navbar }) {




  return (
    <>
      <Meta title={title} />

      <NavBar dark={dark} />
      <main>{children}</main>
      <div>
      <Footer />
      </div>
      
     
    </>
  );
}
