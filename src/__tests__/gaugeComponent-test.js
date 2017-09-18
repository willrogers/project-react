import {GaugeComponent} from '../GaugeComponent.js';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import {expect} from 'chai';

describe('GaugeComponent', function(){
    var DeepGauge = mount(<GaugeComponent/>);

    it('should call drawNeedle with the supplied epics value' , function(){
        var GaugeNeedleSpy = sinon.spy(DeepGauge.instance(), 'drawNeedle');
        DeepGauge.instance().setState({EPICSValue: 196.45});
        expect(GaugeNeedleSpy.getCall(0).args[0]).to.equal(196.45);
    });

    //it('should ')

});