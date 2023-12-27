const bcrypt = require("bcryptjs")
const hash_password = (password) => {
    const salt = "$2a$10$sXSC6S0VzrkNP47Hzyttfu"
    const hashedPassword = bcrypt.hashSync(password, salt)
    return hashedPassword
}

const verify_password = (enteredPassword, hashedPassword) => {
    // Compare entered password with hashed password
    return bcrypt.compareSync(enteredPassword, hashedPassword);
};

module.exports = { hash_password, verify_password }