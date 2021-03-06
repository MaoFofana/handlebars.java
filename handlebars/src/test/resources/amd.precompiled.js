define('input.hbs', ['handlebars'], function(Handlebars) {
  var template = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
      return "Hi "
          + container.escapeExpression(container.lambda(depth0, depth0))
          + "!";
    },"useData":true});
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['input'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['input'] = template;
  return template;
});
