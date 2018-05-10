$('document').ready(function(){
    // name validation
    var alphanumeric = /^[a-zA-Z0-9]+$/;

    var postal_code_regex= /[0-9]{2}-[0-9]{3}/;
    var phone_number_regex= /^[0-9\-\ \+]*$/;
    $.validator.addMethod("alphanumeric", function( value, element ) {
        return this.optional( element ) || alphanumeric.test( value );
    }); 
    // valid email pattern
    var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $.validator.addMethod("validemail", function( value, element ) {
        return this.optional( element ) || eregex.test( value );
    });
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-z]+$/i.test( value );
    });

    $.validator.addMethod("validpostalcode", function( value, element ) {
        return this.optional( element ) || postal_code_regex.test( value );
    }); 
    $.validator.addMethod("validphonenumber", function( value, element ) {
        return this.optional( element ) || phone_number_regex.test( value );
    }); 
       $.validator.addMethod( "validstreet", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]{5}[a-zA-z0-9\/\-\.\ ]*$/.test( value );
    });


    $("#branch_creation_form").validate({

        rules:
        {
            branch_creation_name: {
                required: true,
                alphanumeric: true,
                minlength: 3,

            },
            branch_creation_country:{
                required: true,
                lettersonly: true,
                minlength: 3
            },
            branch_creation_city:{
                required: true,
                lettersonly: true,
                minlength: 3
            },
            branch_creation_postal_code: {
                required: true,
                validpostalcode: true

            },
            branch_creation_street:{
                //               alphanumeric: true,
                required:true,
                validstreet:true

            },
            branch_creation_email: {
                required: true,
                validemail: true
            },
            branch_creation_phone: {
                validphonenumber:true,
                required:true,
                minlength: 11,
                maxlength: 15
            },
        },
        messages:
        {
            branch_creation_name: {
                required: "Enter branch name",
                alphanumeric: "Branch name must contain only alphanumeric characters",
                minlength: "Branch name is too short"

            },
            branch_creation_country:{
                lettersonly: "Non letter characters are not allowed",
                required: "Please enter country",
                minlength: "Country name is too short"
            },
            branch_creation_city:{
                lettersonly: "Non letter characters are not allowed",
                required: "Please enter city",
                minlength: "City name is too short"
            },
            branch_creation_postal_code: {
                required: "Please enter postal code",
                validpostalcode: "Please enter valid postal code"
            },

               branch_creation_street:{
       required: "Please enter street",
                validstreet: "Need at least 5 alphanumeric and no other symbols than ' ' / . -"
            },
            branch_creation_email:{
                required: "Please enter an e-mail address",
                validemail: "Please enter a valid e-mail address"

            }, 
            branch_creation_phone:{
                required: "Please enter a phone number",
                validphonenumber: "Please Enter a Valid Phone Number ex: 123-456-789",
                minlength: "Phone number is too short",
                maxlength: "Phone number is too long"
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
    })})


$('document').ready(function(){
    // name validation
    var alphanumeric = /^[a-zA-Z0-9]+$/;

    var postal_code_regex= /[0-9]{2}-[0-9]{3}/;
    var phone_number_regex= /^[0-9\-\ \+]*$/;
    $.validator.addMethod("alphanumeric", function( value, element ) {
        return this.optional( element ) || alphanumeric.test( value );
    }); 
    // valid email pattern
    var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $.validator.addMethod("validemail", function( value, element ) {
        return this.optional( element ) || eregex.test( value );
    });
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-z]+$/i.test( value );
    }, "Letters only please" );

    $.validator.addMethod("validpostalcode", function( value, element ) {
        return this.optional( element ) || postal_code_regex.test( value );
    }); 
    $.validator.addMethod("validphonenumber", function( value, element ) {
        return this.optional( element ) || phone_number_regex.test( value );
    }); 
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]+$/i.test( value );
    });
       $.validator.addMethod( "validstreet", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]{5}[a-zA-z0-9\/\-\.\ ]*$/.test( value );
    });



    $("#user_creation_form").validate({

        rules:
        {
            user_creation_name: {
                required: true,
                alphanumeric: true,
                minlength: 3,
                //                alphanumeric: true
            },
            user_creation_password: {
                required: true,
                minlength: 8,
                maxlength: 15
            },
            user_creation_cpassword: {
                required: true,
                equalTo: '#user_creation_password'
            },
            user_creation_first_name:{
                required: true,
                lettersonly: true,
                minlength: 3
            },
            user_creation_last_name:{
                required: true,
                lettersonly: true,
                minlength: 3
            },

            user_creation_country:{
                required: true,
                lettersonly: true,
                minlength: 3
            },
            user_creation_city:{
                required: true,
                lettersonly: true,
                minlength: 3
            },
            user_creation_postal_code: {
                required: true,
                validpostalcode: true

            },
            user_creation_street:{
                required:true,
                validstreet: true,
                minlength: 5
            },
            user_creation_email: {
                required: true,
                validemail: true
            },
            user_creation_phone: {
                validphonenumber:true,
                required:true,
                minlength: 11,
                maxlength: 15
            },
            user_creation_branch_id:{
                required: true,
                number:true
            },
            user_creation_position_id:{
            required: true,
                number:true
        },
        user_creation_salary:{
        required: true,
                number:true
    }
        

        },
        messages:
        {
            user_creation_name: {
                required: "Please Enter User Name",
                alphanumeric: "Username must contain only alphanumeric characters",
                minlength: "Your Username is Too Short"
            },
                        user_creation_password:{
                required: "Please Enter Password",
                minlength: "Password needs to have at least 8 characters"
            },
            user_creation_cpassword:{
                required: "Please Retype your Password",
                equalTo: "Password Did not Match !"
            },
            user_creation_first_name:{
                lettersonly: "Non letter characters are not allowed",
                required: "Please Enter Your Name",
                minlength: "Your First Name is Too Short"
            },
            user_creation_last_name:{
                lettersonly: "Non letter characters are not allowed",
                required: "Please Enter Your Last Name",
                minlength: "Your Last Name is Too Short"
            },
                
             user_creation_country:{
                lettersonly: "Non letter characters are not allowed",
                required: "Please enter country",
                minlength: "Country name is too short"
            },
            user_creation_city:{
                lettersonly: "Non letter characters are not allowed",
                required: "Please enter city",
                minlength: "City name is too short"
            },
            user_creation_postal_code: {
                required: "Please enter postal code",
                validpostalcode: "Please enter valid postal code"
            },

            user_creation_street:{
                required: "Please enter street",
                validstreet: "Need at least 5 alphanumeric and no other symbols than ' ' / . -"

            },
            user_creation_email:{
                required: "Please enter an e-mail address",
                validemail: "Please enter a valid e-mail address"

            }, 
            user_creation_phone:{
                required: "Please enter a phone number",
                validphonenumber: "Please Enter a Valid Phone Number ex: 123-456-789",
                minlength: "Phone number is too short",
                maxlength: "Phone number is too long"
            },
         user_creation_password:{
                required: "Please Enter Password",
                minlength: "Password needs to have at least 8 characters"
            },
            user_creation_cpassword:{
                required: "Please Retype your Password",
                equalTo: "Password Did not Match !"
            },
            user_creation_branch_id:{
                number:"Only numbers are allowed",
                required: "Please enter branch id number"
            
        },
            user_creation_position_id:{
            required:"Please enter position id number",
            number: "Only numbers are allowed",
        },
            user_creation_salary:{
                number: "Please enter numerical value",
                required: "Come on, give a guy some money"
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
    })})


$('document').ready(function(){
    // name validation
    var alphanumeric = /^[a-zA-Z0-9]+$/;
    var alphanumeric_with_dash = /^[a-zA-Z0-9/-]+$/;

    var postal_code_regex= /[0-9]{2}-[0-9]{3}/;
    var phone_number_regex= /^[0-9\-\ \+]*$/;
    $.validator.addMethod("alphanumeric", function( value, element ) {
        return this.optional( element ) || alphanumeric.test( value );
    }); 
        $.validator.addMethod("alphanumericwithdash", function( value, element ) {
        return this.optional( element ) || alphanumeric_with_dash.test( value );
    }); 
    // valid email pattern
    var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $.validator.addMethod("validemail", function( value, element ) {
        return this.optional( element ) || eregex.test( value );
    });
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-z]+$/i.test( value );
    }, "Letters only please" );

    $.validator.addMethod("validpostalcode", function( value, element ) {
        return this.optional( element ) || postal_code_regex.test( value );
    }); 
    $.validator.addMethod("validphonenumber", function( value, element ) {
        return this.optional( element ) || phone_number_regex.test( value );
    }); 
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]+$/i.test( value );
    });
       $.validator.addMethod( "validstreet", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]{5}[a-zA-z0-9\/\-\.\ ]*$/.test( value );
    });



    $("#car_creation_form").validate({

        rules:
        {
            car_creation_name: {
                required: true,
                alphanumericwithdash: true,
                minlength: 3,
                //                alphanumeric: true
            },
            car_creation_price:{
                number: true,
                required: true
            },
            car_creation_year:{
                number: true,
                required: true,
                minlength: 4,
                maxlength: 4
            },
            car_creation_car_type: {
                required: true,
                lettersonly: true,
                minlength: 3
            },
            car_creation_vendor:{
                required:true,
                lettersonly: true,
                  minlength: 3
            },
           car_creation_model:{
                required:true,
            },
            car_creation_colour:{
                required:true,
                lettersonly: true,
                  minlength: 3
            },
            car_creation_seats:{
                required:true,
                number: true,
            },
            car_creation_transmission:{
                required:true,
                alphanumeric: true
            },
            car_creation_drive:{
                required:true,
                alphanumeric: true
            },
            car_creation_fuel:{
                required:true,
                lettersonly: true
            },
            car_creation_engine_power:{
                required:true,
                alphanumeric: true
            },
            car_creation_branch_id:{
                required: true,
                number:true
            },
            car_creation_branch_name:{
                required:true,
                lettersonly: true,
                           minlength: 3
            },

        },
        messages:
        {
            car_creation_name: {
                required: "Please enter car name",
                alphanumericwithdash: "Only alphanumeric characters and '-' are allowed",
                minlength: "Name is too short",
            },
            car_creation_price:{
                number: "Input needs to be a number",
                required: "Please enter the price"
            },
            car_creation_year:{
                number: "Input needs to be a number",
                required: "Please enter a year",
                minlength: "Year needs to be 4 characters long",
                maxlength: "Year needs to be 4 characters long"
            },
            car_creation_car_type: {
                required: "Please enter car type",
                lettersonly: "Only letters are allowed",
                minlength: "Type is too short",
            },
            car_creation_vendor:{
                required:"Please enter vendor",
                lettersonly: "Only letters are allowed",
                minlength: "Vendor name is too short",
            },
           car_creation_model:{
                required:"Please enter model",
            },
            car_creation_colour:{
                required:"Please enter a colour",
                lettersonly: "Only letters are allowed",
                minlength: "Color name is too short",
            },
            car_creation_seats:{
                required:"Please enter the number of seats",
                number: "Input needs to be a number",
            },
            car_creation_transmission:{
                required:"Please input type of transmission",
                alphanumeric: "Only alphanumeric characters are allowed"
            },
            car_creation_drive:{
                required:"Please input type of drive",
                alphanumeric: "Only alphanumeric characters are allowed"
            },
            car_creation_fuel:{
                required:"Please enter fuel type",
                lettersonly: "Only letters are allowed"
            },
            car_creation_engine_power:{
                required:"Please enter engine power value",
                alphanumeric: "Only alphanumeric characters are allowed"
            },
            car_creation_branch_id:{
                required: "Please enter branch id",
                number:"Branch id needs to be a number"
            },
            car_creation_branch_name:{
                required:"Please enter branch name",
                lettersonly: "Only letters are allowed",
                minlength: "Branch name is too short"
            },

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
    })})


$('document').ready(function(){
    // name validation
    var alphanumeric = /^[a-zA-Z0-9]+$/;

    var postal_code_regex= /[0-9]{2}-[0-9]{3}/;
    var phone_number_regex= /^[0-9\-\ \+]*$/;
        var alphanumeric_with_dash = /^[a-zA-Z0-9/-]+$/;

    $.validator.addMethod("alphanumeric", function( value, element ) {
        return this.optional( element ) || alphanumeric.test( value );
    }); 
           $.validator.addMethod("alphanumericwithdash", function( value, element ) {
        return this.optional( element ) || alphanumeric_with_dash.test( value );
    }); 
    // valid email pattern
    var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $.validator.addMethod("validemail", function( value, element ) {
        return this.optional( element ) || eregex.test( value );
    });
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-z]+$/i.test( value );
    });

    $.validator.addMethod("validpostalcode", function( value, element ) {
        return this.optional( element ) || postal_code_regex.test( value );
    }); 
    $.validator.addMethod("validphonenumber", function( value, element ) {
        return this.optional( element ) || phone_number_regex.test( value );
    }); 
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]+$/i.test( value );
    });
       $.validator.addMethod( "validstreet", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]{5}[a-zA-z0-9\/\-\.\ ]*$/.test( value );
    });



    $("#item_creation_form").validate({

        rules:
        {
            item_creation_name: {
                required: true,
                alphanumericwithdash: true,
                minlength: 3,
                
            },
            item_creation_price:{
                number: true,
                required: true
            },
            item_creation_year:{
                number: true,
                required: true,
                minlength: 4,
                maxlength: 4
            },
            item_creation_item_type: {
                required: true,
                lettersonly: true,
                minlength: 3
            },
            item_creation_vendor:{
                required:true,
                lettersonly: true,
                  minlength: 3
            },
           item_creation_model:{
                required:true,
            },
            
            item_creation_branch_id:{
                required: true,
                number:true
            },
            item_creation_branch_name:{
                required:true,
                lettersonly: true,
                           minlength: 3
            },

        },
        messages:
        {
    item_creation_name: {
                required: "Please enter item name",
                alphanumericwithdash: "Only alphanumeric characters and '-' are allowed",
                minlength: "Name is too short",
                //                alphanumeric: true
            },
            item_creation_price:{
                number: "Input needs to be a number",
                required: "Please enter the price"
            },
            item_creation_year:{
                number: "Input needs to be a number",
                required: "Please enter a year",
                minlength: "Year needs to be 4 characters long",
                maxlength: "Year needs to be 4 characters long"
            },
            item_creation_car_type: {
                required: "Please enter car type",
                lettersonly: "Only letters are allowed",
                minlength: "Type is too short",
            },
            item_creation_vendor:{
                required:"Please enter vendor",
                lettersonly: "Only letters are allowed",
                minlength: "Vendor name is too short",
            },
           item_creation_model:{
                required:"Please enter model",
            },
           
            item_creation_branch_id:{
                required: "Please enter branch id",
                number:"Branch id needs to be a number"
            },
            item_creation_branch_name:{
                required:"Please enter branch name",
                lettersonly: "Only letters are allowed",
                minlength: "Branch name is too short"
            },

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
    })})



/////UPDATES
$('document').ready(function(){
    // name validation
    var alphanumeric = /^[a-zA-Z0-9]+$/;

    var postal_code_regex= /[0-9]{2}-[0-9]{3}/;
    var phone_number_regex= /^[0-9\-\ \+]*$/;
    $.validator.addMethod("alphanumeric", function( value, element ) {
        return this.optional( element ) || alphanumeric.test( value );
    }); 
    // valid email pattern
    var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $.validator.addMethod("validemail", function( value, element ) {
        return this.optional( element ) || eregex.test( value );
    });
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-z]+$/i.test( value );
    });

    $.validator.addMethod("validpostalcode", function( value, element ) {
        return this.optional( element ) || postal_code_regex.test( value );
    }); 
    $.validator.addMethod("validphonenumber", function( value, element ) {
        return this.optional( element ) || phone_number_regex.test( value );
    }); 
       $.validator.addMethod( "validstreet", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]{5}[a-zA-z0-9\/\-\.\ ]*$/.test( value );
    });


    $("#branch_update_form").validate({

        rules:
        {
           branch_update_name: {
                required: true,
                alphanumeric: true,
                minlength: 3,

            },
            branch_update_country:{
                required: true,
                lettersonly: true,
                minlength: 3
            },
            branch_update_city:{
                required: true,
                lettersonly: true,
                minlength: 3
            },
            branch_update_postal_code: {
                required: true,
                validpostalcode: true

            },
            branch_update_street:{
                //               alphanumeric: true,
                required:true,
                validstreet:true

            },
            branch_update_email: {
                required: true,
                validemail: true
            },
            branch_update_phone: {
                validphonenumber:true,
                required:true,
                minlength: 11,
                maxlength: 15
            },
        },
        messages:
        {
            branch_update_name: {
                required: "Enter branch name",
                alphanumeric: "Branch name must contain only alphanumeric characters",
                minlength: "Branch name is too short"

            },
            branch_update_country:{
                lettersonly: "Non letter characters are not allowed",
                required: "Please enter country",
                minlength: "Country name is too short"
            },
            branch_update_city:{
                lettersonly: "Non letter characters are not allowed",
                required: "Please enter city",
                minlength: "City name is too short"
            },
            branch_update_postal_code: {
                required: "Please enter postal code",
                validpostalcode: "Please enter valid postal code"
            },

               branch_update_street:{
       required: "Please enter street",
                validstreet: "Need at least 5 alphanumeric and no other symbols than ' ' / . -"
            },
            branch_update_email:{
                required: "Please enter an e-mail address",
                validemail: "Please enter a valid e-mail address"

            }, 
           branch_update_phone:{
                required: "Please enter a phone number",
                validphonenumber: "Please Enter a Valid Phone Number ex: 123-456-789",
                minlength: "Phone number is too short",
                maxlength: "Phone number is too long"
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
    })})


$('document').ready(function(){
    // name validation
    var alphanumeric = /^[a-zA-Z0-9]+$/;

    var postal_code_regex= /[0-9]{2}-[0-9]{3}/;
    var phone_number_regex= /^[0-9\-\ \+]*$/;
    $.validator.addMethod("alphanumeric", function( value, element ) {
        return this.optional( element ) || alphanumeric.test( value );
    }); 
    // valid email pattern
    var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $.validator.addMethod("validemail", function( value, element ) {
        return this.optional( element ) || eregex.test( value );
    });
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-z]+$/i.test( value );
    }, "Letters only please" );

    $.validator.addMethod("validpostalcode", function( value, element ) {
        return this.optional( element ) || postal_code_regex.test( value );
    }); 
    $.validator.addMethod("validphonenumber", function( value, element ) {
        return this.optional( element ) || phone_number_regex.test( value );
    }); 
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]+$/i.test( value );
    });
       $.validator.addMethod( "validstreet", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]{5}[a-zA-z0-9\/\-\.\ ]*$/.test( value );
    });



    $("#user_update_form").validate({

        rules:
        {
            user_update_name: {
                required: true,
                alphanumeric: true,
                minlength: 3,
                //                alphanumeric: true
            },
            user_update_password: {
                required: true,
                minlength: 8,
                maxlength: 15
            },
            user_update_cpassword: {
                required: true,
                equalTo: '#user_creation_password'
            },
            user_update_first_name:{
                required: true,
                lettersonly: true,
                minlength: 3
            },
            user_update_last_name:{
                required: true,
                lettersonly: true,
                minlength: 3
            },

            user_update_country:{
                required: true,
                lettersonly: true,
                minlength: 3
            },
            user_update_city:{
                required: true,
                lettersonly: true,
                minlength: 3
            },
            user_update_postal_code: {
                required: true,
                validpostalcode: true

            },
            user_update_street:{
                required:true,
                validstreet: true,
                minlength: 5
            },
            user_update_email: {
                required: true,
                validemail: true
            },
            user_update_phone: {
                validphonenumber:true,
                required:true,
                minlength: 11,
                maxlength: 15
            },
            user_update_branch_id:{
                required: true,
                number:true
            },
            user_update_position_id:{
            required: true,
                number:true
        },
        user_update_salary:{
        required: true,
                number:true
    }
        

        },
        messages:
        {
            user_update_name: {
                required: "Please Enter User Name",
                alphanumeric: "Username must contain only alphanumeric characters",
                minlength: "Your Username is Too Short"
            },
                        user_creation_password:{
                required: "Please Enter Password",
                minlength: "Password needs to have at least 8 characters"
            },
            user_update_cpassword:{
                required: "Please Retype your Password",
                equalTo: "Password Did not Match !"
            },
            user_update_first_name:{
                lettersonly: "Non letter characters are not allowed",
                required: "Please Enter Your Name",
                minlength: "Your First Name is Too Short"
            },
            user_update_last_name:{
                lettersonly: "Non letter characters are not allowed",
                required: "Please Enter Your Last Name",
                minlength: "Your Last Name is Too Short"
            },
                
             user_update_country:{
                lettersonly: "Non letter characters are not allowed",
                required: "Please enter country",
                minlength: "Country name is too short"
            },
            user_update_city:{
                lettersonly: "Non letter characters are not allowed",
                required: "Please enter city",
                minlength: "City name is too short"
            },
            user_update_postal_code: {
                required: "Please enter postal code",
                validpostalcode: "Please enter valid postal code"
            },

            user_update_street:{
                required: "Please enter street",
                validstreet: "Need at least 5 alphanumeric and no other symbols than ' ' / . -"

            },
            user_update_email:{
                required: "Please enter an e-mail address",
                validemail: "Please enter a valid e-mail address"

            }, 
            user_update_phone:{
                required: "Please enter a phone number",
                validphonenumber: "Please Enter a Valid Phone Number ex: 123-456-789",
                minlength: "Phone number is too short",
                maxlength: "Phone number is too long"
            },
         user_update_password:{
                required: "Please Enter Password",
                minlength: "Password needs to have at least 8 characters"
            },
            user_update_cpassword:{
                required: "Please Retype your Password",
                equalTo: "Password Did not Match !"
            },
            user_update_branch_id:{
                number:"Only numbers are allowed",
                required: "Please enter branch id number"
            
        },
            user_update_position_id:{
            required:"Please enter position id number",
            number: "Only numbers are allowed",
        },
            user_update_salary:{
                number: "Please enter numerical value",
                required: "Come on, give a guy some money"
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
    })})

$('document').ready(function(){
    // name validation
    var alphanumeric = /^[a-zA-Z0-9]+$/;
    var alphanumeric_with_dash = /^[a-zA-Z0-9/-]+$/;

    var postal_code_regex= /[0-9]{2}-[0-9]{3}/;
    var phone_number_regex= /^[0-9\-\ \+]*$/;
    $.validator.addMethod("alphanumeric", function( value, element ) {
        return this.optional( element ) || alphanumeric.test( value );
    }); 
        $.validator.addMethod("alphanumericwithdash", function( value, element ) {
        return this.optional( element ) || alphanumeric_with_dash.test( value );
    }); 
    // valid email pattern
    var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $.validator.addMethod("validemail", function( value, element ) {
        return this.optional( element ) || eregex.test( value );
    });
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-z]+$/i.test( value );
    }, "Letters only please" );

    $.validator.addMethod("validpostalcode", function( value, element ) {
        return this.optional( element ) || postal_code_regex.test( value );
    }); 
    $.validator.addMethod("validphonenumber", function( value, element ) {
        return this.optional( element ) || phone_number_regex.test( value );
    }); 
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]+$/i.test( value );
    });
       $.validator.addMethod( "validstreet", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]{5}[a-zA-z0-9\/\-\.\ ]*$/.test( value );
    });



    $("#car_update_form").validate({

        rules:
        {
            car_update_name: {
                required: true,
                alphanumericwithdash: true,
                minlength: 3,
                //                alphanumeric: true
            },
            car_update_price:{
                number: true,
                required: true
            },
            car_update_year:{
                number: true,
                required: true,
                minlength: 4,
                maxlength: 4
            },
            car_update_car_type: {
                required: true,
                lettersonly: true,
                minlength: 3
            },
            car_update_vendor:{
                required:true,
                lettersonly: true,
                  minlength: 3
            },
           car_update_model:{
                required:true,
            },
            car_update_colour:{
                required:true,
                lettersonly: true,
                  minlength: 3
            },
            car_update_seats:{
                required:true,
                number: true,
            },
            car_update_transmission:{
                required:true,
                alphanumeric: true
            },
            car_update_drive:{
                required:true,
                alphanumeric: true
            },
            car_update_fuel:{
                required:true,
                lettersonly: true
            },
            car_update_engine_power:{
                required:true,
                alphanumeric: true
            },
            car_update_branch_id:{
                required: true,
                number:true
            },
            car_update_branch_name:{
                required:true,
                lettersonly: true,
                           minlength: 3
            },

        },
        messages:
        {
            car_update_name: {
                required: "Please enter car name",
                alphanumericwithdash: "Only alphanumeric characters and '-' are allowed",
                minlength: "Name is too short",
            },
            car_update_price:{
                number: "Input needs to be a number",
                required: "Please enter the price"
            },
            car_update_year:{
                number: "Input needs to be a number",
                required: "Please enter a year",
                minlength: "Year needs to be 4 characters long",
                maxlength: "Year needs to be 4 characters long"
            },
            car_update_car_type: {
                required: "Please enter car type",
                lettersonly: "Only letters are allowed",
                minlength: "Type is too short",
            },
            car_update_vendor:{
                required:"Please enter vendor",
                lettersonly: "Only letters are allowed",
                minlength: "Vendor name is too short",
            },
           car_update_model:{
                required:"Please enter model",
            },
           car_update_colour:{
                required:"Please enter a colour",
                lettersonly: "Only letters are allowed",
                minlength: "Color name is too short",
            },
            car_update_seats:{
                required:"Please enter the number of seats",
                number: "Input needs to be a number",
            },
            car_update_transmission:{
                required:"Please input type of transmission",
                alphanumeric: "Only alphanumeric characters are allowed"
            },
            car_update_drive:{
                required:"Please input type of drive",
                alphanumeric: "Only alphanumeric characters are allowed"
            },
            car_update_fuel:{
                required:"Please enter fuel type",
                lettersonly: "Only letters are allowed"
            },
            car_update_engine_power:{
                required:"Please enter engine power value",
                alphanumeric: "Only alphanumeric characters are allowed"
            },
            car_update_branch_id:{
                required: "Please enter branch id",
                number:"Branch id needs to be a number"
            },
            car_update_branch_name:{
                required:"Please enter branch name",
                lettersonly: "Only letters are allowed",
                minlength: "Branch name is too short"
            },

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
    })})


$('document').ready(function(){
    // name validation
    var alphanumeric = /^[a-zA-Z0-9]+$/;

    var postal_code_regex= /[0-9]{2}-[0-9]{3}/;
    var phone_number_regex= /^[0-9\-\ \+]*$/;
        var alphanumeric_with_dash = /^[a-zA-Z0-9/-]+$/;

    $.validator.addMethod("alphanumeric", function( value, element ) {
        return this.optional( element ) || alphanumeric.test( value );
    }); 
           $.validator.addMethod("alphanumericwithdash", function( value, element ) {
        return this.optional( element ) || alphanumeric_with_dash.test( value );
    }); 
    // valid email pattern
    var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $.validator.addMethod("validemail", function( value, element ) {
        return this.optional( element ) || eregex.test( value );
    });
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-z]+$/i.test( value );
    });

    $.validator.addMethod("validpostalcode", function( value, element ) {
        return this.optional( element ) || postal_code_regex.test( value );
    }); 
    $.validator.addMethod("validphonenumber", function( value, element ) {
        return this.optional( element ) || phone_number_regex.test( value );
    }); 
    $.validator.addMethod( "lettersonly", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]+$/i.test( value );
    });
       $.validator.addMethod( "validstreet", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z]{5}[a-zA-z0-9\/\-\.\ ]*$/.test( value );
    });



    $("#item_update_form").validate({

        rules:
        {
            item_update_name: {
                required: true,
                alphanumericwithdash: true,
                minlength: 3,
                
            },
            item_update_price:{
                number: true,
                required: true
            },
            item_update_year:{
                number: true,
                required: true,
                minlength: 4,
                maxlength: 4
            },
            item_update_item_type: {
                required: true,
                lettersonly: true,
                minlength: 3
            },
            item_update_vendor:{
                required:true,
                lettersonly: true,
                  minlength: 3
            },
           item_update_model:{
                required:true,
            },
            
            item_update_branch_id:{
                required: true,
                number:true
            },
            item_update_branch_name:{
                required:true,
                lettersonly: true,
                           minlength: 3
            },

        },
        messages:
        {
    item_update_name: {
                required: "Please enter item name",
                alphanumericwithdash: "Only alphanumeric characters and '-' are allowed",
                minlength: "Name is too short",
                //                alphanumeric: true
            },
            item_update_price:{
                number: "Input needs to be a number",
                required: "Please enter the price"
            },
            item_update_year:{
                number: "Input needs to be a number",
                required: "Please enter a year",
                minlength: "Year needs to be 4 characters long",
                maxlength: "Year needs to be 4 characters long"
            },
            item_update_car_type: {
                required: "Please enter car type",
                lettersonly: "Only letters are allowed",
                minlength: "Type is too short",
            },
            item_update_vendor:{
                required:"Please enter vendor",
                lettersonly: "Only letters are allowed",
                minlength: "Vendor name is too short",
            },
           item_update_model:{
                required:"Please enter model",
            },
           
            item_update_branch_id:{
                required: "Please enter branch id",
                number:"Branch id needs to be a number"
            },
            item_update_branch_name:{
                required:"Please enter branch name",
                lettersonly: "Only letters are allowed",
                minlength: "Branch name is too short"
            },

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
    });

})
