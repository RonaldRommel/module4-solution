(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(x of names){
  if(x.charAt(0)=='j'||x.charAt(0)=='J'){
    byeSpeaker.speak(x);
  }
  else{
    helloSpeaker.speak(x);
  }
}
})();

