const button = document.querySelector('button'),
    select = document.querySelector('select'),
    textarea = document.querySelector('textarea');
let synth = speechSynthesis;

function voices() {
    for (let voice of synth.getVoices()) {
        let selected = voice.name === "Google US English" ? 'selected': "";
            let option = `<option value='${voice.name}'${selected}>${voice.name} (${voice.lang})</option>`
        select.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);
function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()){
        if(voice.name===select.value){
            utterance.voice=voice;
        }
    }
    synth.speak(utterance);
}
button.addEventListener('click', (e) => {
    e.preventDefault();
    if (textarea.value !== '') {
        if(!synth.speaking){
        textToSpeech(textarea.value);
    }
}
});