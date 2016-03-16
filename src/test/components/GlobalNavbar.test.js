import React from 'react';
import ReactDOMServer from 'react-dom/server'
import TestUtils, { createRenderer } from 'react-addons-test-utils';
import chai, { expect } from 'chai'
import jsxChai from 'jsx-chai';
import GlobalNavbar from '../../main/components/GlobalNavbar'
import { Navbar } from 'react-bootstrap'

chai.use(jsxChai)

describe('GlobalNavbar', () => {

  it('should render as expected', () => {

    //given
    const renderer = createRenderer();


    //when
    renderer.render(<GlobalNavbar />);
    const actual = renderer.getRenderOutput();
    var markup = ReactDOMServer.renderToStaticMarkup(<GlobalNavbar/>);


    //then
    expect(markup).to.include('React Starter');
    expect(markup).to.include('Login');
    expect(markup).to.include('Register');
    expect(actual.props.inverse).to.be.true
    expect(actual.props.fixedTop).to.be.true
  });
})


