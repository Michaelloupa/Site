import React from "react";
import { CustomButton } from "../Navbar/NavbarStyles";
import { Description, Future, HeroButtons, HeroRegContainer, 
    HeroTextContainer, LandingContainer, New, RegisterContainer, 
    RegisterText, Browse, PurpleMesh, BlueMesh } from "./LandingStyles";


export function LandingPage(){
    return(
        <LandingContainer>

            {/* The Register Section! */}
        <PurpleMesh></PurpleMesh>
        
        <HeroRegContainer>
            <RegisterContainer>
                <New>New</New>
                <RegisterText>Levereging the power of the blockchain to build the future of web 3.0.</RegisterText>
            </RegisterContainer>
        </HeroRegContainer>
            {/* Hero Section Introductory Text!! */}
            <BlueMesh></BlueMesh>
        <HeroTextContainer>
            <Future> Building Smart Solutions  <br></br>
            for your business
            </Future>
            
            <Description>Our team of software developers create custom software products for SMEs, <br></br>
            Enterprises,N.G.O and funded start-ups. We create applications for the web, mobile and the blockchain.<br></br>
            We use an array of tech stacks to develop creative, fast and scalable applications for pc, web and mobile.<br></br>
            We redefine our valauble clients’ plans and ideas into deployable digital solutions and services.<br></br>
<br></br>

</Description>
            
        </HeroTextContainer>

        <HeroButtons>
            <CustomButton>Start</CustomButton>
            <Browse>Browse Features</Browse>
        </HeroButtons>
        


            

        </LandingContainer>
        
    )
}