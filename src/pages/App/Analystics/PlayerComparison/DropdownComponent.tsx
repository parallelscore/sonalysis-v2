import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownProps } from './type';
import './index.scss';

const DropdownComponent = ({ title, category, size }: DropdownProps) => {
  return (
    <div className="dropdown-wrapper">
      <Dropdown>
        <Dropdown.Toggle>
          {' '}
          <div className="margin-right">{title}</div>
          {size === 'large' && (
            <span className="margin-right mt-4">{category} </span>
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;
