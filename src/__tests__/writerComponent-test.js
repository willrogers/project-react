import {WriterComponent} from '../WriterComponent.js';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

describe('WriterComponent' , function(){
    it('User input should be passed on form submission', function(){ 
        
        var WrtComp = mount(<WriterComponent/>);
        var WrtStub = sinon.stub(WrtComp.instance(), "handleSubmit").callsFake(
            function fake(){ return "form submitted"; } );
        const inputEvent = {target: {value:45}, preventDefault:() => {} };

        WrtComp.instance().handleChange(inputEvent);
        WrtComp.instance().handleSubmit(WrtStub);

        expect(WrtComp.instance().state.inputValue).to.equal(45);
    });
});