import {EPICSComponent} from '../EPICSComponent.js';
// import DivComponent from '../DivComponent.js';
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('EPICSComponent' , function() {
     it('should have a receiveUpdate function', function(){
        var EPComp = new EPICSComponent({});
        expect(EPComp.receiveUpdate).to.be.a('function');

     });

    it('Should start with a null EPICSValue state', function(){
        var EPComp = new EPICSComponent({});
        expect(EPComp.state.EPICSValue).to.be.null;
    });

    it('Should be able to receive a response and update state accordingly', function(){
        var EPComp = shallow(<EPICSComponent/>);
        EPComp.receiveUpdate(4);
        expect(EPComp.state.EPICSValue).to.equal(4);
    });
});

// describe('DivComponent' , function(){
//     it('Should be able to receive a response and update state accordingly', function(){
//         // var wrapper = shallow(<DivComponent/>);
//         // wrapper.instance().receiveUpdate(4);
//         // expect(wrapper.instance().state.EPICSValue).to.equal(4);
//     });

// });
