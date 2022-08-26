import styled from "styled-components";

//Main Navbar Container
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  position: absolute;
  background-color: #21142b;
  box-shadow: 0px 4px 20px 1px #110619;
`;

//This container holds the logo
export const LogoContainer = styled.div``;

//This container holds the links

export const LinkContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  flex-gap: 10px;
`;

//This container holds the Call to Action Button (Launch App)
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

//The button itself

export const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 41px;
  color: #ffffff;
  width: 150px;
  height: 60px;
  padding: 10px 20px;
  inner-border: 4px;
  background-color: #21142b;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, #9b4ada, #4b0355) 3;
  box-sizing: border-box;
  button::after {
    border-radius: 30px;
  }
`;

//Styling for the individual links.
export const NavLink = styled.h4`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 41px;
  color: #fff;
  margin-left: 20px;
  margin-right: 20px;
`;
export const Text = styled.h4`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 41px;
  color: #fff;
`;
