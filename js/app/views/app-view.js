var AppView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    
  }

});
