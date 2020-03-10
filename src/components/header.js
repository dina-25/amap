import React from 'react'
import { Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class Header extends React.Component {
    constructor(props){
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false,
        dropdownOpen1: false
      };
    }

    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen,
        dropdownOpen1: !this.state.dropdownOpen1
      });
    }

render() {
  return(
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.menu}>
          <li className={headerStyles.navBar}>
            <Link className={headerStyles.menuItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
          </li>
          <li className={headerStyles.navBar}>
            <Link className={headerStyles.menuItem} activeClassName={headerStyles.activeNavItem} to="/partner">Partner</Link>
          </li>
          <li className={headerStyles.navBar}>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={() => {this.setState({dropdownOpen: !this.state.dropdownOpen});}}>
            <DropdownToggle className={headerStyles.menuItem} activeClassName={headerStyles.activeNavItem} tag="span" color="white">
              Projekte
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/projekte">Laufende projekte</DropdownItem>
            <DropdownItem href="/AbgeschlosseneProjekte">Abgeschlossene Projekte</DropdownItem>
            <DropdownItem href="/kooperationsideen">Kooperationsideen</DropdownItem>
            <DropdownItem href="/initiativeRequests">Geförderte Projekte mit Teilnahme von AMAP-Konsortien</DropdownItem>
          </DropdownMenu>
          </Dropdown>
          </li>
          <li className={headerStyles.navBar}>
            <Link className={headerStyles.menuItem} activeClassName={headerStyles.activeNavItem} to="/termine">Termine</Link>
          </li>
          <li className={headerStyles.navBar}>
          <Dropdown isOpen={this.state.dropdownOpen1} toggle={() => {this.setState({dropdownOpen1: !this.state.dropdownOpen1});}}>
            <DropdownToggle className={headerStyles.menuItem} activeClassName={headerStyles.activeNavItem} tag="span" color="white">
              Newsroom
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/newsroom">News/Aktuelles</DropdownItem>
            <DropdownItem href="/BisherigeKolloq">AMAP-Kolloquium</DropdownItem>
            <DropdownItem href="/forschung">Forschung</DropdownItem>
            <DropdownItem href="/newsroom">Pressespiegel</DropdownItem>
          </DropdownMenu>
          </Dropdown>
          </li>
          <li className={headerStyles.navBar}>
            <Link className={headerStyles.menuItem} activeClassName={headerStyles.activeNavItem} to="/contact">Kontakt</Link>
          </li>
          <ul className={headerStyles.menu2}>
          <form className={headerStyles.searchStyling} class="form-inline my-2 my-lg-0">
            <input className={headerStyles.inputSearchStyling} class="form-control ml-auto mr-sm-2" type="search" placeholder="Search" />
            <button className={headerStyles.btnSearchStyling} class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
          <li>
            <Link className={headerStyles.menuRight}>DE</Link>
            <i> | </i>
          </li>
          <li>
            <Link className={headerStyles.menuRightEN}>EN</Link>
          </li>
        </ul>
       </ul>
      </nav>
    </header>
  )
}
}
