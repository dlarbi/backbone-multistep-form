define(function() {
  var Multistep_Form_View = Backbone.View.extend({
    inputs: null,
    formSteps: null,
    breadcrumbs: null,

    events: {
      'change input' : 'updateModelFromInput',
      'change select' : 'updateModelFromInput',
      'click .next': 'nextStep',
      'click .prev': 'prevStep',
      'click #submit': 'submitForm',
      'click .crumb': 'followCrumb'
    },

    initialize: function() {
      this.inputs = this.$el.find('input, select, textarea');
      this.formSteps = this.$el.find('.form-step');
      this.breadcrumbs = this.$el.find('.breadcrumbs').length ? true : false;
      this.decorateInputs();
      this.buildModelFromForm();
      this.buildBreadcrumbs();
      this.model.bind('change', this.render, this);
      this.render();
    },

    buildModelFromForm: function() {
      var inputName;
      for(var i = 0, N = this.inputs.length; i < N; i++) {
        inputName = this.inputs[i].name;
        if(this.model.get(inputName) == undefined) {
          this.model.set(inputName, null);
        }
      }
    },

    buildBreadcrumbs: function() {
      if(this.breadcrumbs) {
        for(var i = 1, N = this.formSteps.length; i <= N; i++) {
          $('.breadcrumbs').append('<div class="crumb" data-crumb="'+i+'">'+ i +'</div>')
        }
      }
    },

    decorateInputs: function() {
      var group;
      for(var i = 0, N = this.inputs.length; i < N; i++) {
        group = $(this.inputs[i]).closest('.form-step').attr('data-step');
        $(this.inputs[i]).attr('data-parsley-group', group);
      }
    },

    render: function() {
      for(var key in this.model.attributes) {
        if(typeof $('*[name="'+key+'"').val() != "undefined") {
          if(!$('*[name="'+key+'"').val().length) {
            $('*[name="'+key+'"').val(this.model.attributes[key]);
          }
        }
      }
      $('.form-step').hide();
      $('[data-step="'+this.model.get('currentStep')+'"').show();
      console.log(this.model)
    },

    updateModelFromInput: function(e) {
      var input = e.target;
      if(input.type === 'radio' || input.type === 'checkbox')
        this.model.set(input.name, $('input[name="'+input.name+'"]:checked').val());
      else
        this.model.set(input.name, input.value);
    },

    nextStep: function() {
      this.goToStep(this.model.get('currentStep') + 1);
    },

    prevStep: function() {
      this.goToStep(this.model.get('currentStep') - 1);
    },

    followCrumb: function(e) {
      var clickedCrumb = $(e.target);
      var step = clickedCrumb.attr('data-crumb');
      for(var i = 1; i <= step; i++) {
        if(!this.$el.parsley().validate(i)) {
          this.model.set('currentStep', i);
          return false;
        }
      }
      this.goToStep(step);
    },

    goToStep: function(i) {
      if(this.$el.parsley().validate(this.model.get('currentStep'))) this.model.set('currentStep', i);
    },

    submitForm: function(e) {
      e.preventDefault();
    }
  });

  return Multistep_Form_View;
})
