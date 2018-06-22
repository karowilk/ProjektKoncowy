

/*INSPIRACJE*/





/*KONTAKT*/

$(document).ready(function () {
    $('#test').bootstrapValidator({

        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'Email jest wymagany.'
                    },
                    emailAddress: {
                        message: 'Email nie jest poprawny.'
                    }
                }
            },
            Imie: {
                validators: {
                    notEmpty: {
                        message: 'Twoje imie jest wymagane'
                    },
                    stringLength: {
                        min: 3,
                        message: 'Twoje imie musi zawierać conajmniej 3 literki'
                    }
                }
            },
            Nazwisko: {
                validators: {
                    notEmpty: {
                        message: 'Twoje nazwisko jest wymagane'
                    },
                    stringLength: {
                        min: 3,
                        message: 'Twoje nazwisko musi zawierać conajmniej 3 literki'
                    }
                }
            },
        }
    });


    $('#test').on('status.field.bv', function (e, data) {
        formIsValid = true;
        $('.form-group', $(this)).each(function () {
            formIsValid = formIsValid && $(this).hasClass('has-success');
        });

        if (formIsValid) {
            $('.submit-button', $(this)).attr('disabled', false);
        } else {
            $('.submit-button', $(this)).attr('disabled', true);
        }
    });

});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
