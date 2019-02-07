const value = 100

async function myAsyncFunction() {
  if (value) {
    return value
  } else {
    return new Error('Value variable is undefined')
  }
}

myAsyncFunction()
  .then(value => value + 20) // 120
  .then(value => value * 2) // 240
  .then(value => console.log(value))
  .catch(error => console.log(error.message))
