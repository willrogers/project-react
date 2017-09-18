import {InputComponent} from '../InputComponent.js';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

describe('InputComponent' , function(){
    var ShallowInput = shallow(<InputComponent/>);

    it('Should render an input', function(){
        expect(ShallowInput.type()).to.equal('input');
    });

    it('Should be created with no value', function(){
        expect(ShallowInput.html()).to.equal('<input value="" style="width:50px;" readonly=""/>');

    });

    it('Should update the contents of an input', function(){
        ShallowInput.instance().receiveUpdate('bar');
        expect(ShallowInput.html()).to.equal('<input value="bar" style="width:50px;" readonly=""/>');
    });

});