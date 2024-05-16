document.addEventListener("DOMContentLoaded", function () {
    console.log('Loaded');
    window.addEventListener('keydown', function (e) {
        // Listen to Keydown Event
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

        if(!audio){
            return; // Stops from returning a null value back
        }

        audio.currentTime = 0; // Rewind the timer to 0; Allowing us to hit the same key again.
        audio.play(); // Play the audio Element
    });


    window.addEventListener('click', function (e) {
  
        const key = e.target.parentElement.dataset.key; // Extract DataKey Value;
        if(key == undefined) return; // Makes sure nothing is returned;

        const audio = document.querySelector(`audio[data-key="${key}"]`);
        audio.currentTime = 0; // Rewind the timer to 0; Allowing us to hit the same key again.
        audio.play();
    });

});
