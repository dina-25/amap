import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact'
import { Link} from 'gatsby'
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
                      <Link className={headerStyles.menuItem} to="/indexEN">Home</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <span className={headerStyles.menuItemDrop}>Partner</span>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="/partnerEN">Companies and Institutes</MDBDropdownItem>
                        <MDBDropdownItem href="/verbaendeEN">Associations</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle  nav caret>
                      <span className={headerStyles.menuItemDrop}>Projects</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem href="/projekteEN">Current Projects</MDBDropdownItem>
                    <MDBDropdownItem href="/AbgeschlosseneProjekteEN">Finished Projects</MDBDropdownItem>
                    <MDBDropdownItem href="/kooperationsideenEN">Cooperation Ideas</MDBDropdownItem>
                    <MDBDropdownItem href="/initiativeRequestsEN">Funded projects with participation of AMAP consortia</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span  className={headerStyles.menuItemDrop}>Newsroom</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                    <MDBDropdownItem href="/termineEN">Upcoming Colloquia</MDBDropdownItem>
                    <MDBDropdownItem href="/BisherigeKolloqEN">AMAP-Colloquium</MDBDropdownItem>
                    <MDBDropdownItem href="/forschung">Publications</MDBDropdownItem>
                    <MDBDropdownItem href="/newsroom">Press</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link className={headerStyles.menuItem} to="/contactEN">Contact</Link>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <Link className={headerStyles.menuItem} to="/index"><i class="de flag"></i></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link className={headerStyles.menuItem} to="/indexEN"><i class="uk flag"></i></Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
      </div>
    );
  }
}
