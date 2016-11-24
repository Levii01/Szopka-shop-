import Ember from 'ember';

export default Ember.Controller.extend({
  leftSideBarOpen: false,
//   filteredProducts: Ember.computed('serchTerm' function() {
//   let pattern = new RegExp('\\b'+this.get('serchTerm'));
//   return this.get('model').filter(product => product.name.match(pattern));
// }),
  actions: {
    togglesideNav() {
      this.toggleProperty('leftSideBarOpen');
    }
  }
});
