$('document').ready(function(){
    // name validation
    var nameregex = /^[a-zA-Z0-9]+$/;
    $.validator.addMethod("validname", function( value, element ) {
        return this.optional( element ) || nameregex.test( value );
    }); 
    // valid email pattern
    var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $.validator.addMethod("validemail", function( value, element ) {
        return this.optional( element ) || eregex.test( value );
    });
    $.validator.addMethod( "lettersonly", function( value, element ) {
	return this.optional( element ) || /^[a-z]+$/i.test( value );
}, "Letters only please" );
    $("#branch_creation_form").validate({

        rules:
        {
            name: {
                required: true,
                validname: true,
                minlength: 3,
//                alphanumeric: true
            },
            first_name:{
                required: true,
                lettersonly: true,
                minlength: 3
            },
            last_name:{
                required: true,
                lettersonly: true,
                minlength: 3
            },
            email: {
                required: true,
                validemail: true
                
            },
            phone:{
                number:true,
                required:true,
                minlength: 9,
                maxlength: 11
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 15
            },
            cpassword: {
                required: true,
                equalTo: '#password'
            },
        },
        messages:
        {
            name: {
                required: "Please Enter User Name",
                validname: "Username must contain only alphanumeric characters",
                minlength: "Your Username is Too Short"
            },
            first_name:{
                lettersonly: "Non letter characters are not allowed",
                    required: "Please Enter Your Name",
                   minlength: "Your First Name is Too Short"
            },
            last_name:{
                lettersonly: "Non letter characters are not allowed",
                    required: "Please Enter Your Last Name",
                   minlength: "Your Last Name is Too Short"
            },
            email: {
                required: "Please Enter Email Address",
                validemail: "Enter a Valid Email Address"
            },
            phone:{
                required: "Please Enter Your Phone Number",
                number: "Please Enter a Valid Phone Number ex: 123456789",
                minlength: "Your phone number is too short",
                maxlength: "Your phone number is too long"
            },
            password:{
                required: "Please Enter Password",
                minlength: "Password needs to have at least 8 characters"
            },
            cpassword:{
                required: "Please Retype your Password",
                equalTo: "Password Did not Match !"
            }
        },
        errorPlacement : function(error, element) {
            $(element).closest('.form-group').find('.help-block').html(error.html());
        },
        highlight : function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
            $(element).closest('.form-group').find('.help-block').html('');
        },

        submitHandler: function(form) {

        }
    }); 
})