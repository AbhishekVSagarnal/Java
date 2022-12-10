/*
Capturing phase, Bubbling phase, Target phase
div -> p -> ul -> li
*/
function init() {
    // false by default (bubbling)
    // Will be called first - true for capturing phase
    document.querySelector("#div").addEventListener("click", handler,
   true);
    document.querySelector("#ul").addEventListener("click", handler,
   true);
    
    // target - true or false
    document.querySelector("#li").addEventListener("click", handler,
   true);
    // called in the end - false for bubbling
    document.querySelector("#div").addEventListener("click", handler,
   false);
    document.querySelector("#ul").addEventListener("click", handler,
   false);
    // target - true or false
    document.querySelector("#li").addEventListener("click", handler,
   false);
   }
   function handler(event) {
    // event.eventPhase -> 0, 1 or 2
    console.log(event.eventPhase + ' ' + event.target.id + ' ' +
   event.currentTarget.id);
    // event.stopPropagation();
    // event.cancelBubble = true;
   }