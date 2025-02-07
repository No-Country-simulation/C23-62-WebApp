import React from 'react'


import { Grid } from "../ui/components/Grid";
import { HeaderInicio } from "../ui/components/HeaderInicio";
import NavInicio from '../ui/components/NavInicio';
import { Pluss } from "../ui/components/Pluss";
import { Footer } from "../ui/components/Footer";

export default function Inicio() {
    return (
        <div>
            <NavInicio/>
            <HeaderInicio />
            
            <Grid />
            <Pluss />
            <Footer />
        </div>
    )
}
