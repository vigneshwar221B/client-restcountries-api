import React from 'react'
import {Navbar} from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                RESTCOUNTRIESAPI VIA GRROOM
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <a href="https://restcountries.eu/" target="_blank" rel="noopener noreferrer">Docs</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

