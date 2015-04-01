import Ember from 'ember';

export default Ember.Component.extend({
  username: null,

  actions: {
    login (username) {
      console.log(username);
      this.sendAction('onLogin', username);
    }
  }
});
