import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownProps } from './type';
import './index.scss';

const DropdownComponent = ({ title, category, size, items, select }: DropdownProps) => {
  return (
    <div className="dropdown-wrapper">
      <Dropdown onClick={select}>
        <Dropdown.Toggle>
          {' '}
          {/* <div className="margin-right">{title}</div> */}
          <div className="paragraph-text">{title}</div>
          {size === 'large' && (
            <span className="margin-right mt-4">{category} </span>
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {items?.map(item => (<Dropdown.Item eventKey={item} key={item} href="#/action-1">{item}</Dropdown.Item>))}
          {(!items || !items.length) && <Dropdown.Item href="#/action-1">Action</Dropdown.Item>}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;
