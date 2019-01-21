
import * as React from "react";
import * as DOM from "react-dom";
import { NavLink, Link } from "react-router-dom";
import {Button, Container, Menu, Visibility, Segment, Image, Divider} from 'semantic-ui-react'

const src = 'https://tk7.tekken.com/assets/images/header/logo.png'

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {

    return (
      <div>
          <Segment
            inverted
            textAlign="center"
            className="fadeNav"
            style={{minHeight: 70, padding: '1em 0em'}}
            vertical
          >
            <Menu fixed="top" size="large" inverted>
              <Container>
                <Menu.Item as={NavLink} exact to="/" position="left">
                  Home
                </Menu.Item>
                <Menu.Item as={NavLink} exact to="#">
                  <Image src={src} size='small' />
                </Menu.Item>
                <Menu.Item position="right">
                  Info
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
      </div>

      );
  }
}

export default Navbar;
