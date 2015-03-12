define(function() {
  var Multistep_Form_Model = Backbone.Model.extend({
    defaults: {
      currentStep: 1
    }
  });
  return Multistep_Form_Model;
})
