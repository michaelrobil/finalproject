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
 let newStyle = {
     margin: '5px 30px',
     color: 'white'
 }
function Links() {

    return (
        <React.Fragment>
            <Collapse>
                <List>
                    <Item>
                        <Link style={newStyle} to="/" className="nav-link">
                            One
                        </Link>
                    </Item>
                    <Item>
                        <Link style={newStyle} to="/" className="nav-link">
                            Two
                        </Link>
                    </Item>
                    <Item>
                        <Link style={newStyle} to="/" className="nav-link">
                            Three
                        </Link>
                    </Item>
                    <Item>
                        <Link style={newStyle} to="/" className="nav-link">
                            Four
                        </Link>
                    </Item>
                    <Item>
                        <Link style={newStyle} to="/" className="nav-link">
                            Five
                        </Link>
                    </Item>
                    <Item>
                        <Link style={newStyle} to="/" className="nav-link">
                            Six
                        </Link>
                    </Item>
                    <Item>
                        <Link style={newStyle} to="/" className="nav-link">
                            Seven
                        </Link>
                    </Item>

                </List>
            </Collapse>
        </React.Fragment>
    )
}

export default Links;

