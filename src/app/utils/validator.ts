/**
 * Created by alex on 3/9/17.
 */
export function validateFull(field: string, fieldName: string) {

    var errorMsg : string;
    var patt = new RegExp(/^[a-zA-Z\s]+$/);


    if (!field || !field.length ) {
        errorMsg =  fieldName + " must be a non-empty!";
    }

    if (!patt.test(name)) {
        errorMsg = fieldName + " must be a literal!";
    }
    return errorMsg;
}

export function validateNonEmpty(field: string, fieldName: string) {

    var errorMsg : string;

    if (!field || !field.length ) {
        errorMsg =  fieldName + " must be a non-empty!";
    }

    return errorMsg;
}