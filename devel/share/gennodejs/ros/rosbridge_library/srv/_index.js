
"use strict";

let SendBytes = require('./SendBytes.js')
let TestNestedService = require('./TestNestedService.js')
let TestEmpty = require('./TestEmpty.js')
let TestRequestOnly = require('./TestRequestOnly.js')
let TestResponseOnly = require('./TestResponseOnly.js')
let TestMultipleResponseFields = require('./TestMultipleResponseFields.js')
let TestMultipleRequestFields = require('./TestMultipleRequestFields.js')
let AddTwoInts = require('./AddTwoInts.js')
let TestArrayRequest = require('./TestArrayRequest.js')
let TestRequestAndResponse = require('./TestRequestAndResponse.js')

module.exports = {
  SendBytes: SendBytes,
  TestNestedService: TestNestedService,
  TestEmpty: TestEmpty,
  TestRequestOnly: TestRequestOnly,
  TestResponseOnly: TestResponseOnly,
  TestMultipleResponseFields: TestMultipleResponseFields,
  TestMultipleRequestFields: TestMultipleRequestFields,
  AddTwoInts: AddTwoInts,
  TestArrayRequest: TestArrayRequest,
  TestRequestAndResponse: TestRequestAndResponse,
};
