import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Projekte
      </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Aktuelle projekte</DropdownItem>
      <DropdownItem>Abgeschlossene</DropdownItem>
      <DropdownItem>Link 3</DropdownItem>
    </DropdownMenu>
    </Dropdown>
  );
}

export default Example
