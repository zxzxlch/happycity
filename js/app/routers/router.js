var Workspace = Backbone.Router.extend({

  routes: {
    "": "root"   // #/
  },

  root: function () {
    alert('Root route initiated');
  }

});