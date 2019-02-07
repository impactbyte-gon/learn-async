const isHappy = true

const getPhone = new Promise((resolve, reject) => {
  if (isHappy === true) {
    const phone = {
      brand: 'iPhone',
      color: 'white'
    }
    console.log(phone)
    resolve(phone)
  } else {
    const reason = new Error('I am not happy')
    reject(reason)
  }
})

const showPhone = phone => {
  const message = `I have a new ${phone.color} ${phone.brand} phone.`
  return Promise.resolve(message)
}

// call our promise
getPhone
  .then(showPhone)
  .then(fulfilled => console.log(fulfilled))
  .catch(error => console.log(error.message))
