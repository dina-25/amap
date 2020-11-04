import React from 'react'
import { Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
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
      <nav className={headerStyles.nav}>
      <div>
      </div>
      <div class={headerStyles.toolBarNavigationItems}>
        <ul className={headerStyles.menu}>
          <li className={headerStyles.navBar}>
            <Link className={headerStyles.menuItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
          </li>
          <li className={headerStyles.navBar}>
            <Dropdown isOpen={this.state.dropdownOpen2} toggle={() => {this.setState({dropdownOpen2: !this.state.dropdownOpen2});}}>
              <DropdownToggle className={headerStyles.menuItem} activeClassName={headerStyles.activeNavItem} tag="span" color="white">
                Partner
              </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="/partner">Mitgliedsfirmen und Institute</DropdownItem>
              <DropdownItem href="/verbaende">Mitgliedschaft in Verbände</DropdownItem>
            </DropdownMenu>
            </Dropdown>
          </li>
          <li className={headerStyles.navBar}>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={() => {this.setState({dropdownOpen: !this.state.dropdownOpen});}}>
            <DropdownToggle className={headerStyles.menuItem} activeClassName={headerStyles.activeNavItem} tag="span" color="white">
              Projekte
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/projekte">Laufende Projekte</DropdownItem>
            <DropdownItem href="/AbgeschlosseneProjekteDE">Abgeschlossene Projekte</DropdownItem>
            <DropdownItem href="/kooperationsideen">Kooperationsideen</DropdownItem>
            <DropdownItem href="/initiativeRequests">Geförderte Projekte mit Teilnahme von AMAP-Konsortien</DropdownItem>
          </DropdownMenu>
          </Dropdown>
          </li>
          <li className={headerStyles.navBar}>
          <Dropdown isOpen={this.state.dropdownOpen1} toggle={() => {this.setState({dropdownOpen1: !this.state.dropdownOpen1});}}>
            <DropdownToggle className={headerStyles.menuItem} activeClassName={headerStyles.activeNavItem} tag="span" color="white">
              News/Aktuelles
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/termine">Zukunftige Termine</DropdownItem>
            <DropdownItem href="/BisherigeKolloq">Bisherige Kolloquien</DropdownItem>
            <DropdownItem href="/forschung">Publikationen</DropdownItem>
            <DropdownItem href="/newsroom">Pressespiegel</DropdownItem>
          </DropdownMenu>
          </Dropdown>
          </li>
          <li className={headerStyles.navBar}>
            <Link className={headerStyles.menuItem} activeClassName={headerStyles.activeNavItem} to="/contact">Kontakt</Link>
          </li>
          <ul className={headerStyles.menu2}>
          <form className={headerStyles.searchStyling} class="input-group">
            <input className={headerStyles.inputSearchStyling} class="form-control" type="search" placeholder="Search" />
            <span class="input-group-text blue darken-2" id="basic-text1"><i class="fas fa-search text-white"
        aria-hidden="true"></i></span>
          </form>
          <li>
            <Link className={headerStyles.menuRight} to="/"><i class="de flag"></i></Link>
          </li>
          <li>
            <Link className={headerStyles.menuRightEN} to="/indexEN"><i class="uk flag"></i></Link>
          </li>
        </ul>
       </ul>
       </div>
      </nav>
    </header>
  )
}
}
