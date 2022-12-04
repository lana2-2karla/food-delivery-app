const authEmail = (email) => {
  const validateEmail = /\S+@\S+\.\S+/
  validateEmail.test(email)
  return validateEmail.test(email)
}

const authPassword = (password) => {
  const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
  validatePassword.test(password)
  return validatePassword.test(password)
}

export {
  authEmail,
  authPassword
}
