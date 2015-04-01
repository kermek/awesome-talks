import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'awesome-talks/tests/helpers/start-app';

var application;

module('Acceptance: TalksNavigation', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /talks-navigation', function(assert) {
  visit('/');

  andThen(function() {
    // assert.equal(currentPath(), 'talks-navigation');
    assert.equal(find('.talks-list .talks-badge').length, 3);
    assert.equal(find('.talks-list .talks-badge:eq(0)').text().trim(), 'Ember in Action');
  });

  click('.talks-list .talks-badge:eq(0) a');
  andThen(function() {
    assert.equal(find('.talks-title').text().trim(), 'Ember in Action');
  });
});
