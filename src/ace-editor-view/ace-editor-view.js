/*
 * ace-editor-view
 * ---------------
 * A view for the ace editor. Used for both
 * inert and active views
 *
 */

var AceEditorView = Marionette.ItemView.extend({
  template: _.template('<%= source %>'),

  // Defaults for the view
  defaults: {
    readOnly: false,
    tabSize: 2,
    softTabs: true,
    highlightActiveLine: false,
    theme: 'tomorrow',
    mode: 'javascript',
    showGutter: false
  },

  // Merge the options
  initialize: function(options) {
    var validOptions = _.keys(this.defaults)
    _.extend(this, this.defaults, _.pick(options, validOptions));
  },

  // Where ace stores its themes
  _getThemePath: function(themeName) {
    return 'ace/theme/'+themeName;
  },

  // Where ace stores modes
  _getModePath: function(modeName) {
    return 'ace/mode/'+modeName;
  },

  // Configure the editor based on our options
  _configureEditor: function() {
    // var themePath = this._getThemePath(this.theme);
    // var modePath  = this._getModePath(this.mode);
    //
    // var session = this.editor.getSession();
    // var renderer = this.editor.renderer;
    //
    // this.editor.setHighlightActiveLine(this.highlightActiveLine);
    // this.editor.getSession().setMode(modePath);
    // this.editor.setTheme(themePath);
    // session.setTabSize(this.tabSize);
    // session.setUseSoftTabs(this.softTabs);
    // renderer.setShowGutter(this.showGutter);
  },

  // Create the editor and configure it
  onRender: function() {
    this.editor = ace.edit(this.el);
    this._configureEditor();
  },

  // Clean up the editor before we close down!
  onBeforeClose: function() {
    this.editor.destroy();
  }
});