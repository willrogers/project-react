import SignalComponent from '../SignalComponent.js';
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


});
