function first() {
  // Simulate a code delay
  setTimeout(function() {
    console.log('FIRST')
  }, 1000)
}

function second() {
  console.log('SECOND')
}

first()
second()
