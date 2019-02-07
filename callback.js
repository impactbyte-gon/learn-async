const logName = (name, callback) => {
  console.log(`My name is ${name}`)
  callback()
}

const logAge = () => {
  console.log(`My age is ${name}`)
}

const insertCustomName = () => {
  const name = 'Haidar'
  logName(name, logAge => {
    const age = 25
    logAge(age)
  })
}

insertCustomName()
