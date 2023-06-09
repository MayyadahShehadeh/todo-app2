import React from 'react'
import { Button, Navbar, Alignment } from "@blueprintjs/core";

export default function header() {
    return (
        <div>
            <Navbar style={{ position: 'fixed', top: '0' }}>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Blueprint</Navbar.Heading>
                    <Navbar.Divider />
                    <Button className="bp4-minimal" icon="home" text="Home" />
                    <Button className="bp4-minimal" icon="document" text="Files" />
                </Navbar.Group>
            </Navbar>


        </div>
    )
}
