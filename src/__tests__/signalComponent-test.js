import SignalComponent from '../SignalComponent.js'
var expect = require('chai').expect


describe('The SignalComponent div' , function () {
    it('takes no props', function () {
        var s = new SignalComponent({})
        expect(Object.keys(s.props).length).to.equal(0)
    })
})
