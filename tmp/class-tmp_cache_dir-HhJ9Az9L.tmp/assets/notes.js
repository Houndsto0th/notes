define('notes/adapters/application', ['exports', 'ember-data', '../config/environment'], function (exports, DS, ENV) {

  'use strict';

  exports['default'] = DS['default'].ActiveModelAdapter.extend({
    host: ENV['default'].adapterURL
  });

});
define('notes/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', './config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('notes/components/local-note', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: "article",
    classNames: ["note"],

    actions: {
      deleteNote: function (note) {
        this.sendAction("deleteNote", note);
      }
    }
  });

});
define('notes/controllers/notes', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].ArrayController.extend({

    isAddingNewNote: false,

    noteHasContent: (function () {
      return this.get("noteCopy") && this.get("noteCopy").trim();
    }).property("noteCopy"),

    actions: {
      newNote: function () {
        var body = this.get("noteCopy");
        var title = this.get("noteTitle");
        if (body) {
          var note = this.store.createRecord("note", { body: body, title: title });
          this.set("noteCopy", "");
          note.save();
          this.set("isAddingNewNote", false);
        }
      },
      deleteNote: function (note) {
        note.destroyRecord();
      }
    }
  });

});
define('notes/initializers/export-application-global', ['exports', 'ember', '../config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('notes/models/note', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    body: DS['default'].attr("string"),
    title: DS['default'].attr("string")
  });

});
define('notes/router', ['exports', 'ember', './config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route("notes", { path: "/" });
  });

  exports['default'] = Router;

});
define('notes/routes/notes', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function () {
      return this.store.find("note");
    }
  });

});
define('notes/templates/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    data.buffer.push("\n");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('notes/templates/components/local-note', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression;


    data.buffer.push("<div class=\"col-sm-3\">\n  <div class=\"savedNote\">\n      <h3>");
    stack1 = helpers._triageMustache.call(depth0, "note.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</h3>\n      <p>\n      ");
    stack1 = helpers._triageMustache.call(depth0, "note.body", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n      </p>\n  <section class=\"note-actions\">\n    <a href=\"#\" class= \"delete btn x\" ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteNote", "note", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
    data.buffer.push(">\n      <span>\n        <span class=\"s1\"></span>\n        <span class=\"s2\"></span>\n        <span class=\"s3\"></span>\n      </span>\n    </a>\n  </section>\n    </div>\n  </div>\n</div>\n\n");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('notes/templates/notes', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
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

});
define('notes/tests/adapters/application.jshint', function () {

  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function() { 
    ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('notes/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('notes/tests/components/local-note.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/local-note.js should pass jshint', function() { 
    ok(true, 'components/local-note.js should pass jshint.'); 
  });

});
define('notes/tests/controllers/notes.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/notes.js should pass jshint', function() { 
    ok(true, 'controllers/notes.js should pass jshint.'); 
  });

});
define('notes/tests/helpers/resolver', ['exports', 'ember/resolver', '../../config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('notes/tests/helpers/start-app', ['exports', 'ember', '../../app', '../../router', '../../config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';

  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
  exports['default'] = startApp;

});
define('notes/tests/models/note.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/note.js should pass jshint', function() { 
    ok(true, 'models/note.js should pass jshint.'); 
  });

});
define('notes/tests/notes/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - notes/tests/helpers');
  test('notes/tests/helpers/resolver.js should pass jshint', function() { 
    ok(true, 'notes/tests/helpers/resolver.js should pass jshint.'); 
  });

});
define('notes/tests/notes/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - notes/tests/helpers');
  test('notes/tests/helpers/start-app.js should pass jshint', function() { 
    ok(true, 'notes/tests/helpers/start-app.js should pass jshint.'); 
  });

});
define('notes/tests/notes/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - notes/tests');
  test('notes/tests/test-helper.js should pass jshint', function() { 
    ok(true, 'notes/tests/test-helper.js should pass jshint.'); 
  });

});
define('notes/tests/notes/tests/unit/adapters/application-test.jshint', function () {

  'use strict';

  module('JSHint - notes/tests/unit/adapters');
  test('notes/tests/unit/adapters/application-test.js should pass jshint', function() { 
    ok(true, 'notes/tests/unit/adapters/application-test.js should pass jshint.'); 
  });

});
define('notes/tests/notes/tests/unit/components/local-note-test.jshint', function () {

  'use strict';

  module('JSHint - notes/tests/unit/components');
  test('notes/tests/unit/components/local-note-test.js should pass jshint', function() { 
    ok(true, 'notes/tests/unit/components/local-note-test.js should pass jshint.'); 
  });

});
define('notes/tests/notes/tests/unit/routes/notes-test.jshint', function () {

  'use strict';

  module('JSHint - notes/tests/unit/routes');
  test('notes/tests/unit/routes/notes-test.js should pass jshint', function() { 
    ok(true, 'notes/tests/unit/routes/notes-test.js should pass jshint.'); 
  });

});
define('notes/tests/notes/tests/unit/views/notes-test.jshint', function () {

  'use strict';

  module('JSHint - notes/tests/unit/views');
  test('notes/tests/unit/views/notes-test.js should pass jshint', function() { 
    ok(true, 'notes/tests/unit/views/notes-test.js should pass jshint.'); 
  });

});
define('notes/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('notes/tests/routes/notes.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/notes.js should pass jshint', function() { 
    ok(true, 'routes/notes.js should pass jshint.'); 
  });

});
define('notes/tests/test-helper', ['./helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

	document.write("<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>");

	QUnit.config.urlConfig.push({ id: "nocontainer", label: "Hide container" });
	var containerVisibility = QUnit.urlParams.nocontainer ? "hidden" : "visible";
	document.getElementById("ember-testing-container").style.visibility = containerVisibility;

});
define('notes/tests/unit/adapters/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("adapter:application", "ApplicationAdapter", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var adapter = this.subject();
    ok(adapter);
  });
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']

});
define('notes/tests/unit/components/local-note-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("local-note", "LocalNoteComponent", {});

  ember_qunit.test("it renders", function () {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, "preRender");

    // appends the component to the page
    this.append();
    equal(component._state, "inDOM");
  });
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('notes/tests/unit/routes/notes-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:notes", "NotesRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('notes/tests/unit/views/notes-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("view:notes", "NotesView");

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var view = this.subject();
    ok(view);
  });

});
define('notes/tests/views/notes.jshint', function () {

  'use strict';

  module('JSHint - views');
  test('views/notes.js should pass jshint', function() { 
    ok(true, 'views/notes.js should pass jshint.'); 
  });

});
define('notes/views/notes', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].View.extend({});

});
/* jshint ignore:start */

define('notes/config/environment', ['ember'], function(Ember) {
  var prefix = 'notes';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("notes/tests/test-helper");
} else {
  require("notes/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=notes.map