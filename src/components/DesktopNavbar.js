import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact'
import { Link} from 'gatsby'
import LanguageSelector from "./functionLangEn"
import headerStyles from '../styles/header.module.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

export default class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }


  render() {
    const bgPink = {backgroundColor: '#fff'}
    return(
      <div className={headerStyles.header}>

          <header>
            <MDBNavbar style={bgPink} light expand="md">
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                      <Link className={headerStyles.menuItem} to="/">Home</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav>
                        <span className={headerStyles.menuItemDrop}>Partner</span>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="/partner">Mitgliedsfirmen und Institute</MDBDropdownItem>
                        <MDBDropdownItem href="/verbaende">Mitgliedschaft in Verbände</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle  nav >
                      <span className={headerStyles.menuItemDrop}>Projekte</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem href="/projekte">Laufende Projekte</MDBDropdownItem>
                    <MDBDropdownItem href="/AbgeschlosseneProjekte">Abgeschlossene Projekte</MDBDropdownItem>
                    <MDBDropdownItem href="/seedFunding">AMAP Seed Funding Pool</MDBDropdownItem>
                    <MDBDropdownItem href="/kooperationsideen">Kooperationsideen</MDBDropdownItem>
                    <MDBDropdownItem href="/initiativeRequests">Geförderte Projekte mit Teilnahme von AMAP-Konsortien</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav >
                      <span  className={headerStyles.menuItemDrop}>News/Aktuelles</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem href="/aktuelles/CoronaCrisis">Zukünftige Kolloquien</MDBDropdownItem>
                    <MDBDropdownItem href="/BisherigeKolloq">Bisherige Kolloquien</MDBDropdownItem>
                    <MDBDropdownItem href="/forschung">Publikationen</MDBDropdownItem>
                    <MDBDropdownItem href="/newsroom">Pressespiegel</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link className={headerStyles.menuItem} to="/contact">Kontakt</Link>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <LanguageSelector location={this.props.location}/>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
      </div>
    );
  }
}
