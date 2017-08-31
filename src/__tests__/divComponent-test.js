import {DivComponent} from '../DivComponent.js';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

describe('DivComponent' , function(){
    it('Should render a div', function(){
        var DivComp = shallow(<DivComponent/>);
        expect(DivComp.type()).to.equal('div');
    });
});
