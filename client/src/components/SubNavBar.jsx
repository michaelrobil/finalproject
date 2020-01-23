
import React, { Component } from 'react'
import styled from 'styled-components'
import SubLinks from './SubLinks'


const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-light',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {
    render() {
        return (
            <Nav style={{backgroundColor: "gray"}}>
                <SubLinks />
            </Nav>
        )
    }
}

export default NavBar
