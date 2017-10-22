var uppercase = "HELLO"
var lowercase = "hello"


function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log("HELLO")
}

function logWhisper(string) {
  console.log("hello")
}

function sayHiToGrandma(string){
  if ("hello" === string){
    console.log("I can't hear you")
}
 else if ("HELLO" === string) {
    console.log("YES INDEED")
}
  else {
    console.log("I love you, too")
  }

  }
