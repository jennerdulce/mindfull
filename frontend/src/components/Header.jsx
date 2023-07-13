import React, { useEffect, useState } from 'react'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'


function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    const [isCollapsed, setIsCollapsed] = useState(true)

    const handleClick = () => {
        setIsCollapsed(true)
    }
    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed)
    }

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

    return (
        <>
            <Navbar
                sticky='top'
                className={isCollapsed ? 'nav-color' : 'navbar-container active'}
            >
                <NavbarBrand href="/" className="mr-auto" >
                    <h3 id='bm-title'>Bright Mind</h3>
                </NavbarBrand>
                <div className="mr-2" onClick={() => toggleNavbar()}>
                    {isCollapsed ? <GiHamburgerMenu className='icons' /> : <AiOutlineCloseCircle className='icons' />}
                </div>
                <Collapse isOpen={!isCollapsed} navbar>
                    <Nav navbar>
                        <NavItem className='nav-links' onClick={() => handleClick()}>
                            <NavLink to="/" className='nav-link-text'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem className='nav-links' onClick={() => handleClick()}>
                            <NavLink to="/aboutus" className='nav-link-text'>
                                About Us
                            </NavLink>
                        </NavItem>
                        {user &&
                            <NavItem className='nav-links' onClick={() => handleClick()}>
                                <NavLink to="/dashboard" className='nav-link-text'>
                                    My Account
                                </NavLink>
                            </NavItem>
                        }
                        {user &&
                            <NavItem className='nav-links' onClick={() => handleClick()}>
                                <NavLink to="/myjournal" className='nav-link-text'>
                                    My Journal
                                </NavLink>
                            </NavItem>
                        }
                        {user &&
                            <NavItem className='nav-links' onClick={() => handleClick()}>
                                <NavLink to="/newpost" className='nav-link-text'>
                                    Add New Entry
                                </NavLink>
                            </NavItem>
                        }
                        <NavItem className='nav-links' onClick={() => handleClick()}>
                            <NavLink to="/services" className='nav-link-text'>
                                Services
                            </NavLink>
                        </NavItem>
                        {/* {user &&
                            <NavItem className='nav-links' onClick={() => handleClick()}>
                                <a href={sign_out_route} className='nav-link-text'>Logout</a>
                            </NavItem>
                        } */}
                        {user &&
                            <NavItem className='nav-links' onClick={() => onLogout()}>
                                <button className='nav-link-text'>Logout</button>
                            </NavItem>
                        }
                        {!user &&
                            <NavItem className='nav-links' onClick={() => handleClick()}>
                                <a href={'/login'} className='nav-link-text'>Sign In</a>
                            </NavItem>
                        }
                        {!user &&
                            <NavItem className='nav-links' onClick={() => handleClick()}>
                                <a href={'/register'} className='nav-link-text'>Register</a>
                            </NavItem>
                        }
                    </Nav>
                </Collapse>
            </Navbar>

        </>
    )
}

export default Header