import React from "react";
import { Navbar } from '../ComponentsHF/Nav'
import { Foot } from '../ComponentsHF/Footer'
import { Banner } from "./Inf";
import { ContInf } from "./contInf";


export function IndexP() {
    return(
        <>
        <Banner/>
        <ContInf/>
        </>
    )
}