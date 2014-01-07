Package.describe({
  summary: "MIDI.js, an api to create piano sound, packaged for Meteor"
});

Package.on_use(function (api){
  var files = [
    '/MIDI.js/js/MIDI/AudioDetect.js',
    '/MIDI.js/js/MIDI/LoadPlugin.js',
    '/MIDI.js/js/MIDI/Plugin.js',
    '/MIDI.js/js/MIDI/Player.js',
    '/MIDI.js/js/Window/DOMLoader.XMLHttp.js',
    '/MIDI.js/js/Window/DOMLoader.script.js',
    '/MIDI.js/inc/Base64.js',
    '/MIDI.js/inc/base64binary.js',
  ]
  for (var i = 0; i < files.length; i++) {
    api.add_files('lib'+files[i], 'client');
  }

  if (typeof api.export !== 'undefined') {
    api.export(['MIDI'], 'client');
  }
});