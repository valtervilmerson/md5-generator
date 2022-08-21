const hash = require("md5")
const config = require("./config.json")

const limit = 50

const password = ""

function md5fier() {
  firstStep = hash(config.value)
  secondStep = hash(password)
  thirdStep = firstStep + secondStep
  fourthStep = hash(thirdStep)
  newPassword = fourthStep.substring(0, limit)
  console.log(newPassword)
}

md5fier()
