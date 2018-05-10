//       window.location.replace("index.html");
//                    location.href="index.html";
//                    window.location = "http://google.com";
var request_response= "";

$('document').ready(function(){
    var nameregex = /^[a-zA-Z0-9]+$/;
    $.validator.addMethod("validname", function( value, element ) {
        return this.optional( element ) || nameregex.test( value );
    }); 
    var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $.validator.addMethod("validemail", function( value, element ) {
        return this.optional( element ) || eregex.test( value );
    });
    $.validator.addMethod( "lettersonly", function( value, element ) {
	return this.optional( element ) || /^[a-z]+$/i.test( value );
}, "Letters only please" );
    $("#register-form").validate({

        rules:
        {
            name: {
                required: true,
                validname: true,
                minlength: 3,
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
            //            form.submit();         

            var customer_username = document.getElementById("name").value;
            console.log(customer_username);
            var customer_password = document.getElementById("password").value;
            console.log(customer_password);
             var customer_first_name = document.getElementById("first_name").value;
            console.log(customer_first_name);
            var customer_last_name = document.getElementById("last_name").value;
            console.log(customer_last_name);
            var customer_email = document.getElementById("email").value;
            console.log(customer_email);
            var customer_phone = document.getElementById("phone").value;
            console.log(customer_phone);
           
            //            var postData={
            //                "username": username,
            //                "password": userpass
            //            };
            //                        console.log(postData);
            //                        alert(postData.username);
            //                        alert(postData.password);
            
            
            
//            var http = new XMLHttpRequest();
//    var url = 'http://127.0.0.1:5000/register';
//    var method = 'POST';
//
//
//    //      var username = "qwerqwer";
//    //           
//    //            var userpass = "qwerqwer";
//    var data = JSON.stringify({
//        "username": customer_username,
//                    "password": customer_password, 
//                    "first_name": customer_first_name, 
//                    "last_name": customer_last_name, 
//                    "email": customer_email, 
//                    "phone": customer_phone, 
//    });
//
//    http.open(method, url);
//    http.setRequestHeader('Content-Type', 'application/json');
//    http.onreadystatechange = function() {
//        if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
//            console.log('all hgood');
//            //        
////            var token = JSON.parse(http.responseText).access_token;
////           console.log(token);
////            localStorage.setItem('access_token', token);
////            var tok = localStorage.getItem('access_token');
////            console.log(tok);
////            location.href="continue.html";
//            
//            
//        } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
//            console.log('Error!');
////            console.log(JSON.parse(http.responseText));
//        }
//    };
//    http.send(data);
//    
//            
//            
            
            
            
            
            
            
            $.ajax({
                url:"http://127.0.0.1:5000/register",
                type: "POST",
                headers:{
                    contentType: "application/json",
                },
                data:{
                    "username": customer_username,
                    "password": customer_password, 
                    "first_name": customer_first_name, 
                    "last_name": customer_last_name, 
                    "email": customer_email, 
                    "phone": customer_phone, 
                },
                success: function(data){
                    request_response = data.responseJSON.message;
                },
                error: function(data){
                    request_response = data.responseJSON.message;
                },
                complete: function(data){
                    HTMLGeneratorForResponse(request_response);
                }
            })
            
            
            //ajax end
        }
    }); 
})


function HTMLGeneratorForResponse(response){
    var rawTemplate = document.getElementById("response_template").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedHTML = compiledTemplate(response);
    var response_container = document.getElementById("response_container");
    response_container.innerHTML= generatedHTML;
    if(request_response.message === "Account created successfully.")
    {
        response_container.classList.add("positive");
        response_container.classList.remove("hidden");
        setTimeout(function(){
            response_container.classList.remove("positive");
            $(response_container).addClass('hidden');
        }, 3000);
    }else{
        response_container.classList.add("negative");
        response_container.classList.remove("hidden");
        setTimeout(function(){
            response_container.classList.remove("negative");
            $(response_container).addClass('hidden');
        }, 3000);
    }
}
