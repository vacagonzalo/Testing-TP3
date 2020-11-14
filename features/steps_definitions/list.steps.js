const chai = require('chai');
const cucumber = require('@cucumber/cucumber');

const assert = chai.assert;

const Before = cucumber.Before;
const Given = cucumber.Given;
const Then = cucumber.Then;
const When = cucumber.When;

const List = require('../../src/list');

let context = {};

Given('an empy list', () => {
    context.list = new List();
});

Given('a list with the following element(s)', (dataTable) => {
    context.list = new List();
    let elements = dataTable.rows();
    elements.forEach((element) => {
        context.list.create(element);
    });
});

When('the following element(s) is/are added', (dataTable) => {
    let elements = dataTable.rows();
    elements.forEach((element) => {
        context.list.create(element);
    });
});

When('the following invalid element(s) is/are added', function (dataTable) {
    let elements = dataTable.rows();
    elements.forEach((element) => {
        let key = parseInt(element[0]);
        let value = element[1];
        let invalid = [key, value];
        context.list.create(invalid);
    });
});

When('the key {} is consulted', (key) => {
    context.read = context.list.read(key);
});

When('the value in key {} is updated to {}', (key, value) => {
    context.list.update(key, value);
    context.read = context.list.read(key);
});

When('the element with key {} is deleted', (key) => {
    context.list.delete(key);
});

Then('the value {} is readed', (value) => {
    if (value == 'null') {
        assert.equal(context.read, null);
    } else {
        assert.equal(context.read, value);
    }
});

Then('there is/are {int} element(s) in the list', (amount) => {
    assert.equal(context.list.amount(), amount);
});

Then('a sorted list is generated', (dataTable) => {
    let sortedKeys = dataTable.rows();
    let sortedTableKeys = [];
    sortedKeys.forEach((key) => {
        sortedTableKeys.push(key[0])
    });
    let sortedListKeys = context.list.sortedKeys();
    assert.deepEqual(sortedListKeys, sortedTableKeys);
});