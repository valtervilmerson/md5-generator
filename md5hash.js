const config = require("./config.json")

const element = document.getElementById("run")
element.addEventListener("click", md5fier())

const limit = 50
const password = ""

function md5fier() {
  firstStep = hash(config.value ?? "seed")
  secondStep = hash(password)
  thirdStep = firstStep + secondStep
  fourthStep = hash(thirdStep)
  newPassword = fourthStep.substring(0, limit)
  console.log(newPassword)
}
