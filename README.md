# Project React #

**A simple webpage that showcases some basic features of react: Primarily, the ability to update specific elements of a webpage.**

## Installation: ##

 Note: This project requires NPM version 3.10.10 and Node version 6.11.0

1. Ensure that your current directory is ./project_react/
2. Enter the command: 'npm install'
3. Enter the command: 'npm run compile'
4. Enter the command: 'npm start'
5. Navigate to 'http://localhost:3000' in your browser


## Features: ##

A very simple webpage that shows a Synchrotron pv in real time. Written in Javascript/React, communicating with a python server.



##Testing##

Below is a description of the different testing utilities used and (my understanding of) their prurpose.


###Karma###
--Test Runner

This is the top level of abstraction of the testing suite. Karma takes all of the tests that have been written using the components below, and runs them in a variety of browsers.


###Mocha###
--Testing Framework

Mocha is the testing framework that provides the syntax for writing JavaScript tests, providing the top level structure of a test file. It uses functions such as before/beforeEach and after/afterEach as hooks for set-up and tear-down. The describe method is used as a test-suite, and the the it is used as a test case. i.e describe(some component){ it(should do something like this){ test code goes in here } }

###Chai###
--Assertion Library

Chai is used inside the functions of the Testing framework. Functions such as .expect, .equal, .exist are used to anaylse the behaviour, input and output of parts of aspects of the application. I believe this to be more concerened with internal data stores and states of objects.

###Enzyme###
--Assertion Library

Another assertion library, like Chai, except with a more UI-centric focus. Developed speifically for React, it is used to test React-Components and allows for the testing and analysis of the VirtualDOM and rendered output of the application.






