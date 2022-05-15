import React from 'react';
import {
    mount,
    shallow,
    ShallowWrapper
} from 'enzyme';
import App from '../src/App'
import LandingPage from '../src/views/landingPage/LandingPage';
import { LoaderOptionsPlugin } from 'webpack';


describe('Test that landing page renders',()=>{
    jest.mock('react', () => {
        const React = jest.requireActual('react');
        React.Suspense = (children:React.ReactNode):React.ReactNode => children;
        return React;
    });
    let  shallowWrapper :ShallowWrapper;
        beforeEach(() => {
          shallowWrapper = shallow(<App />);
        });

it('It Renders a header tag', async()=>{
    expect(shallowWrapper.containsMatchingElement( <LandingPage />)).toEqual(false)
})
})
