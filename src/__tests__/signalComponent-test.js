import React from 'react'
import {shallow, mount, render} from 'enzyme'
import SignalComponent from './signalComponent'
var expect = require('chai').expect


describe('the Signal Component div ' , function () {
    it('takes no props', function () {
        expect(Object.keys(SignalComponent.props()).length).toBe(0)
    })
})
