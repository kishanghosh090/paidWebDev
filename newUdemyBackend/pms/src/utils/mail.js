
const emailCreateForVerifyAccount = function (username, verificationUrl) {
    return {
        body: {
            name: username,
            intro: "welcome to kishan's world",
            action: {
                instructions: 'click here to verify',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Confirm your account',
                    link: verificationUrl
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
}

const forgotPasswordEmail = function (username, passwordRestUrl) {
    return {
        body: {
            name: username,
            intro: "do you want to reset the password",
            action: {
                instructions: 'click here to reset password',
                button: {
                    color: '#2f2f2aaa', // Optional action button color
                    text: 'reset pasasword',
                    link: passwordRestUrl
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
}

export {
    emailCreateForVerifyAccount,
    forgotPasswordEmail,

}