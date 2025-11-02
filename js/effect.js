(function(global){
    const SOUND_PATH = 'assets/sound/';
    const sound = {
        type1: SOUND_PATH + 'type-1.mp3',
        type2: SOUND_PATH + 'type-2.mp3',
        error1: SOUND_PATH + 'error-1.mp3',
        whisper1: SOUND_PATH + 'wishper-1.mp3',
        static1: SOUND_PATH + 'static1.mp3',
        blackout: SOUND_PATH + 'blackout.mp3'
    };

    //preloader audio objects
    const _audio = {};
    let soundEnabled = true;

    function preloadAudio() {
        Object.keys(sound).forEach(key => {
            try {
                const a = new Audio(sound[key]);
                a.preload = 'auto';
                a.volume = (key === 'blackout') ? 0.35 : 0.18;
                _audio[key] = a;
            } catch (e) {
                console.warm('effects: audio preload failed for', key, e);
            }
        });
    }
})