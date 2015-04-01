import Ember from 'ember';

export default Ember.Service.extend({
  user: null,
  attemptedTransition: null,
  
  isLoggedIn: function() {
    return !!this.get('user');
  }.property('user'),

  logIn (user) {
    this.set('user', user);
  }
});
