import React from "react";
import { ArtPrinc } from "./ArtPrin";
import { ArtSec } from "./ArtSec";
import { ArtTer } from "./ArtTer";
import { Navbar } from "../ComponentsHF/Nav";
import { Foot } from "../ComponentsHF/Footer"
export function AppInfo() {
    return(
        <>
        <ArtPrinc/>
        <ArtSec/>
        <ArtTer/>
        </>
    )
}   