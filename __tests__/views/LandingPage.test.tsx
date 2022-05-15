import React from 'react';
import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import LandingPage from '../../src/views/landingPage/LandingPage'
describe('Test that landing page renders',()=>{
    let  shallowWrapper :ShallowWrapper;
        beforeEach(() => {
          shallowWrapper = shallow(<LandingPage />);
        });

it('It Renders a header tag',()=>{
    expect(shallowWrapper.find('h1').html()).toContain('Welcome to IOMOTO Home Page');
})
})
