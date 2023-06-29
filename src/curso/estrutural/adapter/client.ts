import isEmail from 'validator/lib/isEmail'
import { EmailValidatorProtocol } from './validator/email-validator-protocol';
import { EmailValidatorAdapter } from './validator/email-validator-class.adapter';
import { emailValidatorFnAdapter } from './validator/email-validator-function.adapter';

const email = 'jeanvdsroque@gmail.com';

function validaEmail(email: string): void {
    // if (emailValidator.isEmail(email)) {
    //     console.log('Email é valido');
    // } else {
    //     console.log('Email é invalido');
    // };

    if (emailValidatorFnAdapter(email)) {
        console.log('Email é valido');
    } else {
        console.log('Email é invalido');
    }
}

// validaEmail(new EmailValidatorAdapter(), email);

validaEmail(email);