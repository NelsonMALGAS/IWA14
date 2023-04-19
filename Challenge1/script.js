

const firstName = 'John';
const age = 35;
const hobbyName = 'coding';
const emoji='\u{1F60D}'

/**
 *  function called "logTwice". It takes one parameter, which is named "twice".
 *  When this function is called, it will log the value of the "twice" parameter
 *  to the console 2 times
 * @param {parameter} twice 
 */
const logTwice = (twice) => {   
  console.log(twice)
  console.log(twice)
}

function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobbyName}${emoji}!`)
}

hobby()