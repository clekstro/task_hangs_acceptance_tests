import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    this.get('infiniteTask').perform();
  },

  infiniteTask: task(function * () {
    while (true) {
      yield timeout(1000);
      console.log('doing something forever');
    }
  })
});
