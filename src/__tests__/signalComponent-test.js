import SignalComponent from '../SignalComponent.js';
import {expect} from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

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
        var sigComp = new SignalComponent({});
        ReactTestUtils.renderIntoDocument(sigComp)
        sigComp.receiveUpdate(4);
        expect(sigComp.render).to.equal(<div> 4 </div>);

    });

});
