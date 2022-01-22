// Function to print out Goodbye for names that do not start with "j" or "J"

(function(window) {
    var byeSpeaker = new Object();
    var speakWord = "Goodbye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name + "!");
    };
    window.byeSpeaker = byeSpeaker;
})(window);