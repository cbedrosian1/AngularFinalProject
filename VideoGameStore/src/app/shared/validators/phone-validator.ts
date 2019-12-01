import { ValidationErrors, AbstractControl } from '@angular/forms';

export class PhoneValidator {
    static phoneShouldBeValid(control: AbstractControl): ValidationErrors | null {
        const regex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i;
        const valid = regex.test(control.value);
        return valid ? null : { invalidPhone: true };
    }
}