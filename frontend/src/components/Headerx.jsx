// import React, { Component } from 'react'
// import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
// import { NavLink } from 'react-router-dom'
// import { GiHamburgerMenu } from 'react-icons/gi'
// import { AiOutlineCloseCircle } from 'react-icons/ai'


// export default class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true
//     }
//   }
//   handleClick = () => {
//     this.setState({ collapsed: true })
//   }

//   toggleNavbar() {
//     this.setState({
//       collapsed: !this.state.collapsed
//     })
//   }

//   render() {
//     const {
//       logged_in,
//       current_user,
//       new_user_route,
//       sign_in_route,
//       sign_out_route
//     } = this.props
//     console.log("logged_in:", logged_in)
//     console.log("current_user:", current_user)

//     return (
//       <>
//         <Navbar
//           sticky='top'
//           className={this.state.collapsed ? 'nav-color' : 'navbar-container active'}
//         >
//           <NavbarBrand href="/" className="mr-auto" >
//             <h3 id='bm-title'>Bright Mind</h3>
//           </NavbarBrand>
//           <div className="mr-2" onClick={this.toggleNavbar}>
//             {this.state.collapsed ? <GiHamburgerMenu className='icons' /> : <AiOutlineCloseCircle className='icons' />}
//           </div>
//           <Collapse isOpen={!this.state.collapsed} navbar>
//             <Nav navbar>
//               <NavItem className='nav-links' onClick={this.handleClick}>
//                 <NavLink to="/" className='nav-link-text'>
//                   Home
//                 </NavLink>
//               </NavItem>
//               <NavItem className='nav-links' onClick={this.handleClick}>
//                 <NavLink to="/aboutus" className='nav-link-text'>
//                   About Us
//                 </NavLink>
//               </NavItem>
//               {logged_in &&
//                 <NavItem className='nav-links' onClick={this.handleClick}>
//                   <NavLink to="/myaccount" className='nav-link-text'>
//                     My Account
//                   </NavLink>
//                 </NavItem>
//               }
//               {logged_in &&
//                 <NavItem className='nav-links' onClick={this.handleClick}>
//                   <NavLink to="/postindex" className='nav-link-text'>
//                     My Journal
//                   </NavLink>
//                 </NavItem>
//               }
//               {logged_in &&
//                 <NavItem className='nav-links' onClick={this.handleClick}>
//                   <NavLink to="/postnew" className='nav-link-text'>
//                     Add New Entry
//                   </NavLink>
//                 </NavItem>
//               }
//               <NavItem className='nav-links' onClick={this.handleClick}>
//                 <NavLink to="/services" className='nav-link-text'>
//                   Services
//                 </NavLink>
//               </NavItem>
//               {logged_in &&
//                 <NavItem className='nav-links' onClick={this.handleClick}>
//                   <a href={sign_out_route} className='nav-link-text'>Sign Out</a>
//                 </NavItem>
//               }
//               {!logged_in &&
//                 <NavItem className='nav-links' onClick={this.handleClick}>
//                   <a href={sign_in_route} className='nav-link-text'>Sign In</a>
//                 </NavItem>
//               }
//               {!logged_in &&
//                 <NavItem className='nav-links' onClick={this.handleClick}>
//                   <a href={new_user_route} className='nav-link-text'>Sign Up</a>
//                 </NavItem>
//               }
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </>
//     )
//   }
// }
