Package.describe({
  summary: "MIDI.js, an api to create piano sound, packaged for Meteor"
});

Package.on_use(function(api) {
  api.add_files([
    'lib/MIDI.js/js/MIDI/AudioDetect.js',
    'lib/MIDI.js/js/MIDI/LoadPlugin.js',
    'lib/MIDI.js/js/MIDI/Plugin.js',
    'lib/MIDI.js/js/MIDI/Player.js',
    'lib/MIDI.js/js/Window/DOMLoader.XMLHttp.js',
    'lib/MIDI.js/js/Window/DOMLoader.script.js',
    'lib/MIDI.js/inc/Base64.js',
    'lib/MIDI.js/inc/base64binary.js',
    'lib/MIDI.js/soundfont/acoustic_grand_piano-ogg.jss',
    'lib/MIDI.js/soundfont/acoustic_grand_piano-mp3.jss',
  ], 'client');

  if (typeof api.export !== 'undefined') {
    api.export(['MIDI'], 'client');
  }
});

Package.on_test(function(api) {
  api.use(["midi-js", "tinytest", "test-helpers"]);
  api.add_files("tests/noteOn.js", 'client');
})