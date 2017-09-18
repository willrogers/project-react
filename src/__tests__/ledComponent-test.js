import {LEDComponent} from '../LEDComponent.js';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

describe('LEDComponent' , function(){

    it('should render a canvas', function(){
        var LED = shallow(<LEDComponent/>);
        expect(LED.type()).to.equal('canvas');
    });

    it('should draw a coloured circle based on input value', function(){});
        
        //3 is outside of the 0-2 bounds and returns a pink error circle
        var LEDComp = mount(<LEDComponent/>);
        var LEDSpy = sinon.spy(LEDComp.instance(), "drawCircle");
        LEDComp.instance().setState({EPICSValue: '3'});
        expect(LEDSpy.calledOnce).to.equal(true);
        expect(LEDSpy.getCall(0).args[0]).to.equal('#FF00CB');

        // Some useful examples to use for the other tests.
        // -------------------------------------------------
        // var LEDComp = mount(<LEDComponent/>);
        // var LEDSpy = sinon.spy(LEDComp.instance(), "drawCircle");
        // console.log("------------------------------------");
        // console.log("State updated with 3");
        // LEDComp.instance().setState({EPICSValue: '3'});
        // expect(LEDSpy.calledOnce).to.equal(true);
        // expect(LEDSpy.getCall(0).args[0]).to.equal('#FF00CB');
        // console.log("EpicsValue is now: "+LEDSpy.firstCall.thisValue.state.EPICSValue);
        // console.log("------------------------------------");
        // console.log("State updated with 0");
        // LEDComp.instance().setState({EPICSValue: '0'});
        // expect(LEDSpy.calledTwice).to.equal(true);
        // expect(LEDComp.instance().drawCircle.getCall(1).args[0]).to.equal('#FF0000');
        // console.log("EpicsValue is now: "+LEDSpy.secondCall.thisValue.state.EPICSValue);
        // console.log("------------------------------------");
        // console.log("LEDSpy is called "+ LEDSpy.callCount +" times");
        // console.log("LEDComp is called "+ LEDComp.instance().drawCircle.callCount +" times");
        // console.log("------------------------------------");
        // console.log("Arguments passed to drawCircle in order:")
        // console.log(LEDSpy.getCall(0).args);
        // console.log(LEDSpy.getCall(1).args);
            
    it('', function(){});

});