import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useAuth from '../../Context/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
    return (
      <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      sticky="top"
      className="bg-dark">

      <Container>
          <Navbar.Brand
              as={Link} to="/"
              className="ml-md-5 navs-brand "
              style={{ color: "#9a8746" }}>
              Tourist <strong>Plaza</strong>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end pr-5">
              <Nav className="navs" navbarScroll>
                  {/* <Nav.Link as={Link} to="/" className="mr-md-5" style={{ color: "#9a8746" }} active>Home</Nav.Link> */}
                  <Nav.Link
                      as={Link}
                      to="/services"
                      className="mr-md-5" style={{ color: "#9a8746" }} active>
                      Services
                  </Nav.Link>
                  
                  <Nav.Link
                      as={Link}
                      to="/blogs"
                      className="mr-md-5" style={{ color: "#9a8746" }} active>
                      Blog
                    </Nav.Link>

                    {!user.displayName ? < Nav.Link
                      as={Link}
                      to="/login"
                      style={{ color: "#9a8746" }}
                      className="mr-md-5" active>
                      Login
                    </Nav.Link>
                      :
                      <>
                      <Nav.Link
                       as={Link}
                       to="/myorder"
                       style={{ color: "#9a8746" }}
                       className="mr-md-5" active>
                       Myorder
                        </Nav.Link>

                            <Nav.Link
                              as={Link}
                              to="/Allorder"
                              style={{ color: "#9a8746" }}
                              className="mr-md-5" active>
                              Manage Order
                          </Nav.Link>

                          <Nav.Link
                              as={Link}
                              to="/addservice"
                              style={{ color: "#9a8746" }}
                              className="mr-md-5" active>
                              Add Service
                          </Nav.Link>

                          <Nav.Link
                              as={Link}
                              to=""
                              className="mr-md-5"
                              style={{ color: "#9a8746" }}
                              onClick={logOut} active>
                              Logout
                              <small>({user.displayName})</small>
                          </Nav.Link>

                      </>
                  }
              </Nav>
          </Navbar.Collapse>
      </Container>
  </Navbar >
//         <div>
//             <Navbar>
//   <Container className='header'>
//     <Navbar.Brand href="#home"><h1><strong>Tourist Plaza</strong></h1></Navbar.Brand>
//     <Navbar.Toggle />
//     <Navbar.Collapse className="justify-content-end ">

//     <Nav className="me-auto">
//       <Nav.Link href="#home"><h4>Home</h4></Nav.Link>
//       <Nav.Link href="#features"><h4>Services</h4></Nav.Link>
//       <Nav.Link href="#pricing"><h4>Contract Us</h4></Nav.Link>
//     </Nav>

//       <Navbar.Text>
//         Signed in as: <a href="#login">Mark Otto</a>
//       </Navbar.Text>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
//         </div>
    );
};

export default Header;