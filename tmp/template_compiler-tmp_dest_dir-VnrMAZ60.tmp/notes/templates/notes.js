import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['local-note'] || (depth0 && depth0['local-note']),options={hash:{
    'note': ("note"),
    'deleteNote': ("deleteNote")
  },hashTypes:{'note': "ID",'deleteNote': "STRING"},hashContexts:{'note': depth0,'deleteNote': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "local-note", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n  <div class=\"newNote\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Enter a Title"),
    'value': ("noteTitle")
  },hashTypes:{'type': "ID",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'placeholder': ("Add a note!"),
    'value': ("noteCopy")
  },hashTypes:{'placeholder': "STRING",'value': "ID"},hashContexts:{'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n  <div class=\"buttonContain\">\n    <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn noteHasContent:plus:menu")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "newNote", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n      <span>\n        <span class=\"s1\"></span>\n        <span class=\"s2\"></span>\n        <span class=\"s3\"></span>\n      </span>\n    </a>\n  </div>\n  </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  ");
  stack1 = helpers.each.call(depth0, "note", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});
