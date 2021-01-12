import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact'
import { Link} from 'gatsby'
import LanguageSelector from './functionLang'
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
                      <Link className={headerStyles.menuItem} to="/en/">Home</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav >
                        <span className={headerStyles.menuItemDrop}>Partner</span>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="/en/partner">Companies and Institutes</MDBDropdownItem>
                        <MDBDropdownItem href="/en/verbaende">Associations</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle  nav >
                      <span className={headerStyles.menuItemDrop}>Projects</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem href="/en/projekte">Current Projects</MDBDropdownItem>
                    <MDBDropdownItem href="/en/AbgeschlosseneProjekte">Finished Projects</MDBDropdownItem>
                    <MDBDropdownItem href="/en/seedFunding">AMAP Seed Funding Pool</MDBDropdownItem>
                    <MDBDropdownItem href="/en/kooperationsideen">Cooperation Ideas</MDBDropdownItem>
                    <MDBDropdownItem href="/en/initiativeRequests">Funded projects with participation of AMAP consortia</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav >
                      <span  className={headerStyles.menuItemDrop}>Newsroom</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem href="/en/aktuelles/CoronaCrisis">Upcoming Colloquia</MDBDropdownItem>
                    <MDBDropdownItem href="/en/BisherigeKolloq">Previous Colloquia</MDBDropdownItem>
                    <MDBDropdownItem href="/en/forschung">Publications</MDBDropdownItem>
                    <MDBDropdownItem href="/en/newsroom">Press</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link className={headerStyles.menuItem} to="/en/contact">Contact</Link>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>

                    <LanguageSelector location={this.props.location} />

                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
      </div>
    );
  }
}
