import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { Button } from 'react-bootstrap';

import ModalContainer from "../src/containers/ModalContainer";

 
describe('<ModalContainer />', function () {

 
  it('ModalContainer has buttons', function () {
    const wrapper = mount(<ModalContainer />);
    expect(wrapper.find('Button').exists()).to.equal(true);
  });
});