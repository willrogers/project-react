import {EPICSComponent} from '../EPICSComponent.js';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

describe('EPICSComponent' , function() {

    var ShallowEpics = shallow(<EPICSComponent/>);
    var DeepEpics = mount(<EPICSComponent/>);

    it('should have a receiveUpdate function', function(){
        expect(ShallowEpics.instance().receiveUpdate).to.be.a('function');

    });

    it('Should start with a null EPICSValue state', function(){
        expect(ShallowEpics.instance().state.EPICSValue).to.be.null;
    });

    it('Should be able to receive a response and update state accordingly', function(){
        ShallowEpics.instance().receiveUpdate(4);
        expect(ShallowEpics.instance().state.EPICSValue).to.equal(4);
    });
});
