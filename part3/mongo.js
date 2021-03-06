const mongoose = require('mongoose')

// eslint-disable-next-line no-undef
if ( process.argv.length<3 ) {
  console.log('give password as argument')
  // eslint-disable-next-line no-undef
  process.exit(1)
}

// eslint-disable-next-line no-undef
const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.uiklm.mongodb.net/persons?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  // eslint-disable-next-line no-undef
  name: process.argv[3],
  // eslint-disable-next-line no-undef
  number: process.argv[4],
})


// eslint-disable-next-line no-unused-vars
person.save().then(response => {
  // eslint-disable-next-line semi
  console.log('person saved!');
  // eslint-disable-next-line semi
  mongoose.connection.close();
})


Person.find({}).then(result => {
  result.forEach(person => {
    console.log(person)
  })
  mongoose.connection.close()
})