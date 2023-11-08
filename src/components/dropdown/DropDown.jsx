import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function DropDownCntc() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Encuentrame!
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          href="https://www.linkedin.com/in/hernannicolasvarela/"
          target="_blank"
        >
          linkedin
        </Dropdown.Item>
        <Dropdown.Item
          href="https://github.com/hernan-varela/hernan-varela"
          target="_blank"
        >
          github
        </Dropdown.Item>
        <Dropdown.Item href="https://wa.me/+5401133077417" target="_blank">
          wathsapp
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownCntc;
