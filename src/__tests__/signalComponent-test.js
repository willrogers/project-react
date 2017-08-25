//import SignalComponent from '../SignalComponent.js';
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('SignalComponent' , function() {


    it('takes no props', function() {
        var sigComp = new SignalComponent({});
        expect(Object.keys(sigComp.props).length).to.equal(0);
    });

     it('should have a receiveUpdate function', function(){
        var sigComp = new SignalComponent({});
        expect(sigComp.receiveUpdate).to.be.a('function');

     });

    it('Should contain the signal state', function(){
        var sigComp = new SignalComponent({});
        expect(sigComp.state.signal).to.exist;
    });

    it('Should be able to receive a response and update state accordingly', function(){
        var wrapper = shallow(<SignalComponent/>);
        wrapper.instance().receiveUpdate(4);
        expect(wrapper.instance().state.signal).to.equal(4);
    });

});
