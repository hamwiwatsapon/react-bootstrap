import { Navbar, Nav, NavLink, NavItem } from 'react-bootstrap';
import styles from "./styles.module.css"

const TopNav = () => {
  return (
    <Navbar className="justify-content-between p-4">
      <Nav className={styles.logobox}>
        <NavItem className={styles.logo}>T</NavItem>
        <NavItem className={styles.title}>Trafalgar</NavItem>
      </Nav>
      <Nav activeKey="/">
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="link-1">Find a doctor</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="link-2">Apps</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="link-3">Testimonials</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="link-4">About us</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default TopNav