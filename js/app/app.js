$(function(){
  new Workspace();
  Backbone.history.start({pushState: true});

  new AppView();
});
