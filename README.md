meteor-midi-js
==============

A meteor package to use MIDI.js, an api to create piano sound.

To add the in your meteor app, run this in the terminal

```
mrt add midi-js
```

To play some piano sound, call

```
MIDI.noteOn(0, 50, 60);
```

to play note 50 (middle C) with velocity 60 at channel 0.

For more functionalities, check out [the MIDI.js docs](https://github.com/mudcube/MIDI.js)

## Loading
To see if the MIDI.noteOn is loaded, you just need to check if `Session.get('midiNoteOn')` is true, because we load the plugin using

```
MIDI.loadPlugin({
  soundfontUrl: "/packages/midi-js/lib/MIDI.js/soundfont/",
  instrument: "acoustic_grand_piano",
  callback: function() {
    Session.set('midiNoteOn', true);
  },
});
```


