import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      { id:11, title: 'Ember in Action'},
      { id:12,  title: 'React in Action'},
      { id:13,  title: 'Angular in Action'}
    ];
  }
});
