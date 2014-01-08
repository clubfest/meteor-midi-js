MIDI.loadPlugin({
  soundfontUrl: "/packages/midi-js/lib/MIDI.js/soundfont/",
  instrument: "acoustic_grand_piano",
  callback: function() {
    Session.set('midiNoteOn', true);
  },
});
