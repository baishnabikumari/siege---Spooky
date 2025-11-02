(function (global) {
    const DATA_URL = 'data/sentences.json';
    let _sentences = [];

    async function loadData() {
        try {
            const res = await fetch(DATA_URL, {cache: "no-store"});
            if (!res.ok) throw new Error('fetch failed');
            const json = await res.json();
            _sentences = json.levels || [];
        } catch (e) {
            console.warm('data.js: failed to load sentences.json, using fallback',e);
            _sentences = [
                //fallback
                {id:1, text:"Start typing... (fallback sentence)."},
                {id:2, text:"Fallback sentence 2."}
            ];
        }
    }

    //get sentence
    function getSentence(level) {
        if (!_sentences.length) return "...";
        const idx = Math.max(0, Math.min(_sentences.length - 1, level - 1));
        return _sentences[idx].text;
    }

    //expose
    global.TTD_DATA = {
        loadData,
        getSentence,
        _internal: () => _sentences
    };
})(window);