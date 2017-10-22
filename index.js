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

  if (lowercase.toLowerCase() === string) {
    console.log("I cant hear you")
  }
  else if (uppercase === string) {
    console.log("YES INDEED")
  }
}
