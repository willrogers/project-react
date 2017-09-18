import {DivComponent} from '../DivComponent.js';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

describe('DivComponent' , function(){

    var ShallowDiv = shallow(<DivComponent/>);

    it('Should render a div', function(){
        expect(ShallowDiv.type()).to.equal('div');
    });

    it('Should update the contents of a div', function(){
        ShallowDiv.instance().receiveUpdate('foo');
        expect(ShallowDiv.html()).to.equal('<div> foo </div>');
    });

});
