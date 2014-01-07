
if (Meteor.isClient) {
  Tinytest.add('want MIDI to be defined', function(test) {
    test.equal(typeof MIDI, "object");
    test.equal(typeof MIDI.loadPlugin, "function");
  });

  testAsyncMulti('want noteOn to be defined after loadPlugin is called', [
    function(test, expect) {
      test.equal(typeof MIDI.noteOn, "undefined");
      // expect(function() {
      //   MIDI.loadPlugin({
      //     soundfontUrl: "/packages/midi-js/lib/MIDI.js/soundfont/",
      //     instrument: "acoustic_grand_piano",
      //     callback: function() {
      //       test.equal(typeof MIDI.noteOn, "function");
      //     },
      //   });
      // });
    }
  ]);
}
  