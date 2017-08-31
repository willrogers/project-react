import {InputComponent} from '../InputComponent.js';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

describe('InputComponent' , function(){
    it('Should render an input', function(){
        var InpComp = shallow(<InputComponent/>);
        expect(InpComp.type()).to.equal('input');
    });

    it('Should update the contents of an input', function(){
        var InpComp = shallow(<InputComponent/>);
        InpComp.instance().receiveUpdate('bar');
        expect(InpComp.html()).to.equal('<input value="bar" readonly=""/>');
    });

    // it('Should be read-only', function(){

    // });

});