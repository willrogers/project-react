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

    it('Should be created with no value', function(){
        var InpComp = shallow(<InputComponent/>);
        expect(InpComp.html()).to.equal('<input readonly=""/>');

    });

    it('Should update the contents of an input', function(){
        var InpComp = shallow(<InputComponent/>);
        InpComp.instance().receiveUpdate('bar');
        //The ' readonly="" ' here is a slight deviation from the code,
        //due to transpilation from ES6 to older standards
        expect(InpComp.html()).to.equal('<input value="bar" readonly=""/>');
    });

});