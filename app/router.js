import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('homepage', { path: '/' });
  this.route('talks/add', { path: 'talks/add' });
  this.route('talks', { path: 'talks/:talks_id' });
  this.route('user');
  this.route('login');
});

export default Router;
