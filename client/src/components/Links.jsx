import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

function Links() {

    return (
        <React.Fragment>
            <h1 className="navbar-brand">Serv</h1>
            <Collapse>
                <List>
                    <Item>
                        <Link style={{ color: "green" }} to="/" className="nav-link">
                            Home
                        </Link>

                        <Link style={{ color: "green" }} to="/signup" className="nav-link">
                            Sign Up
                        </Link>
                    </Item>
                </List>
            </Collapse>
        </React.Fragment>
    )
}

export default Links;

