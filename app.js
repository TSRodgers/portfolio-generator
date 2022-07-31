const fs = require('fs');

const generatePage = require('./page-template.js')

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfoli complete! Checkout index.html to the output!')
});