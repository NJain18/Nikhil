// Function to print out Hello for names that do not start with "j" or "J"

(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name + "!");
    };
    window.helloSpeaker = helloSpeaker;
})(window);