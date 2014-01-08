meteor-midi-js
==============

MIDI.js is an api to create piano sound.

To install it in your meteor app, run this in the terminal

```
mrt add midi-js
```

To play some piano sound, first load it by calling

```
      MIDI.loadPlugin({
        soundfontUrl: "/packages/midi-js/lib/MIDI.js/soundfont/",
        instrument: "acoustic_grand_piano",
        callback: function() {
          console.log('MIDI.noteOn is defined')
       },
      });
```

and then call

```
MIDI.noteOn(0, 50, 60);
```

to play note 50 (middle C) with velocity 60 at channel 0.

For more functionalities, check out MIDI.js [https://github.com/mudcube/MIDI.js]
