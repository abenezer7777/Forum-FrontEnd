// import React, { useContext } from "react";
// import "./Header1.css";
// import logo from "../Images/evangadi-logo-home.png";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
// function Header1({ logout }) {
//   const [userData, setUserData] = useContext(UserContext);
//   const navigate = useNavigate();

//   const goToSignIn = (e) => {
//     e.preventDefault();
//     if (userData.user) {
//       logout();
//     }
//     navigate("/login");
//   };
//   return (
//     <div className="header">
//       <div className="header__container">
//         <Link to="/" className="header__image">
//           <img src={logo} alt="Evangadi logo" />
//         </Link>
//         <div className="rightSide">
//           <a className="" href="">
//             Home
//           </a>
//           <a className="" href="">
//             How it Works
//           </a>
//           <div className="rightSide__button">
//             <button className="btn" onClick={goToSignIn}>
//               {userData.user ? "LogOut" : "SIGN IN"}
//             </button>
//           </div>
//         </div>
//         <button className="ic">☰</button>
//       </div>
//     </div>
//   );
// }

// export default Header1;
// import React, { useContext } from "react";
// import "./Header1.css";
// import logo from "../Images/evangadi-logo-home.png";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// function BasicExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;
