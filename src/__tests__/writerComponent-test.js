import {WriterComponent} from '../WriterComponent.js';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

describe('WriterComponent' , function(){

    var DeepWriter = mount(<WriterComponent/>);

    it('User input should be passed on form submission', function(){

        var WrtStub = sinon.stub(DeepWriter.instance(), 'handleSubmit').callsFake(
            function fake(){ return 'form submitted'; } );
        const inputEvent = {target: {value:45}, preventDefault:() => {} };
        DeepWriter.instance().handleChange(inputEvent);
        DeepWriter.instance().handleSubmit(WrtStub);
        expect(DeepWriter.instance().state.inputValue).to.equal(45);
    });
});