const validator = new JustValidate('#form')
validator.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'ERROR! Please, enter your name'
    },
    {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Your name must have at least 3 letters in your name'
    },
])
validator.addField('#phone', [
    {
        rule: 'required',
        errorMessage: 'ERROR! Please enter your phone number'
    },
    {
        rule: 'minLength',
        value: 9,
        errorMessage: 'You must have at least 9 numbers in ur phone number'
    },
]);
