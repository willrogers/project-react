import {LEDComponent} from '../LEDComponent.js';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

describe('LEDComponent' , function(){

    var DeepLED = mount(<LEDComponent/>);
    var ShallowLED = shallow(<LEDComponent/>);

    it('should render a canvas', function(){
        expect(ShallowLED.type()).to.equal('canvas');
    });

    it('should draw a coloured circle based on input value', function(){});

    var LEDSpy = sinon.spy(DeepLED.instance(), 'drawCircle');
    DeepLED.instance().setState({EPICSValue: '3'});
    expect(LEDSpy.calledOnce).to.equal(true);
    expect(LEDSpy.getCall(0).args[0]).to.equal('#FF00CB');

    it('', function(){});

});