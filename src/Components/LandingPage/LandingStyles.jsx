import styled from "styled-components";

//THE LANDING PAGE MAIN CONTAINER STYLING

export const LandingContainer = styled.div`
padding-top : 236px;
width : 100%;
height : 100%;
display : flex;
align-items : center;;
justify-content : center;
flex-direction : column;
`;

//MESH GRADIENT CIRCLES

export const PurpleMesh = styled.div`
width: 365px;
height: 460px;
background: #B505CC;
filter: blur(300px);
position: absolute;
margin-left : -1200px;
margin-top : -200px;

`;

export const BlueMesh = styled.div`
width: 365px;
height: 460px;
background: #29679E;
filter: blur(250px);
position: absolute;
margin-left : 1200px;
margin-top : 400px;

`;


//The new User Call to action bar.

export const RegisterContainer = styled.div`
    width : 700px;
    height : 80px;
    background-color : #21142B;
    box-shadow: 0px 0px 15px 10px #660D72, inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 35px;
    border-width ; 0px;    
    display : flex;
    align-items : center;
    justify-content : space-around;

`;

// "New Button Styling"

export const New = styled.button`

width : 100px;
height : 56px;
background-color : #36164E;
border
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
border-width : 0px;
font-family: 'Space Grotesk';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 31px;
color: #FFFFFF;
`;

//The register text..

export const RegisterText = styled.h5`
font-family: 'Space Grotesk';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 28px;
color: #FFFFFF;

`;

export const Future = styled.h3`

font-family: 'Space Grotesk';
font-style: normal;
font-weight: 700;
font-size: 72px;
line-height: 75px;
color: #FFFFFF;
text-align: left;


`;

//Hero text container one

export const HeroRegContainer = styled.div`
background-color : #21142B;

`;

export const HeroTextContainer = styled.div`

display : flex;
flex-direction : column;
text-align : left;
margin-left : -450px;

`;

//Hero Description Tex!

export const Description = styled.h6`
font-family: 'Space Grotesk';
font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 33px;
color: #FFFFFF;
text-align: left;
margin-top : -1em;

`;
//Hero Buttons

export const HeroButtons = styled.div`

display: flex;
flex-direction : row;
align-contents : center;
margin-left : -870px;

`;

//Browse Features Button

export const Browse = styled.button`
border : 0px;
width: 300px;
height: 60px;
background: #36164E;
border-radius: 50px;
font-family: 'Space Grotesk';
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 41px;
color: #FFFFFF;
margin-left : 40px;
`;


//