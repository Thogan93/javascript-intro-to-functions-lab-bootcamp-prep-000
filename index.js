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
    return "I can\'t hear you"
  }
  else if (uppercase === string) {
    return 'YES INDEED!'
  }
}
