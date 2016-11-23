import Ember from 'ember';

export default Ember.Controller.extend({
  leftSideBarOpen: false,
  actions: {
    togglesideNav() {
      this.toggleProperty('leftSideBarOpen');
    }
  }
});
