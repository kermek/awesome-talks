import Ember from 'ember';

export default Ember.Component.extend({
  username: null,

  onLogin: null,

  actions: {
    login (username) {
      console.log(username);

      this.sendAction(this.get('onLogin'), username);
    }
  }
});
