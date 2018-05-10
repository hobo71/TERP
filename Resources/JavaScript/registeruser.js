//       window.location.replace("index.html");
//                    location.href="index.html";
//                    window.location = "http://google.com";
var request_response= "";
$('document').ready(function(){
    // name validation
    var nameregex = /^[a-zA-Z ]+$/;
    $.validator.addMethod("validname", function( value, element ) {
        return this.optional( element ) || nameregex.test( value );
    }); 
    // valid email pattern
    var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $.validator.addMethod("validemail", function( value, element ) {
        return this.optional( element ) || eregex.test( value );
    });
    $("#register-form").validate({

                rules:
                {
                    name: {
                        required: true,
                        validname: true,
                        minlength: 3
                    },
//                    email: {
//                        required: true,
//                        validemail: true
//                    },
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
                validname: "Name must contain only alphanumeric characters and space",
                minlength: "Your Name is Too Short"
            },
//            email: {
//                required: "Please Enter Email Address",
//                validemail: "Enter Valid Email Address"
//            },
            password:{
                required: "Please Enter Password",
                minlength: "Password at least have 8 characters"
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

        var username = document.getElementById("name").value;
//            console.log(username);
        var userpass = document.getElementById("password").value;
//            console.log(password);
        var user_first_name = document.getElementById("first_name").value;
//            console.log(user_first_name);
        var user_last_name = document.getElementById("last_name").value;
//             console.log(user_last_name);
        var user_country = document.getElementById("country").value;
//             console.log(user_country);
        var user_postal_code = document.getElementById("postal_code").value;
//             console.log(user_postal_code);
        var user_city = document.getElementById("city").value;
//            console.log(user_city);
        var user_street = document.getElementById("street").value;
//             console.log(user_street);
        var user_email = document.getElementById("email").value;
//             console.log(user_email);
        var user_phone = document.getElementById("phone").value;
//             console.log(user_phone);
        var user_branch_id = document.getElementById("branch_id").value;
//             console.log(user_branch_id);
        var user_position_id = document.getElementById("position_id").value;
//             console.log(user_position_id);
        var user_salary = document.getElementById("salary").value;
//             console.log(user_salary);
            

                    var postData={
                        	"username": username,
                            "password": userpass,
                            "first_name": user_first_name,
                            "last_name": user_last_name,
                            "country": user_country,
                            "city": user_city,
                            "postal_code": user_postal_code,
                            "street": user_street,
                            "email": user_email,
                            "phone": user_phone,
                            "branch_id": user_branch_id,
                            "position_id": user_position_id,
                            "salary": user_salary
                    };
//            console.log(postData);
        //                        console.log(postData);
        //                        alert(postData.username);
        //                        alert(postData.password);
        $.ajax({
                url:"http://127.0.0.1:5000/register-user",
                type: "POST",
                headers:{
                    contentType: "application/json",
                },
                data:postData,
                success: function(data){
//                    alert('success');
//                    request_response = data.message;

                },
                error: function(data){
//                    alert(data.responseJSON.message);
//                    request_response = data.responseJSON.message;
//                    alert('error');

                },
                complete: function(data){
//                    console.log(request_response);
//                    printAnswer(request_response);
//                    HTMLGeneratorForResponse(request_response);
////console.log(data);
                     }
//                    //                           window.location.replace("index.html");
//                    //                    location.href="index.html";
//                    //                    window.location = "http://google.com";
                            })//ajax end
        }
    }); 
    })

//function HTMLGeneratorForResponse(response){
//    var rawTemplate = document.getElementById("response_template").innerHTML;
//    console.log(rawTemplate);
//    var compiledTemplate = Handlebars.compile(rawTemplate);
//    console.log(compiledTemplate);
//    var generatedHTML = compiledTemplate(response);
//    console.log(generatedHTML);
//    var response_container = document.getElementById("response_container");
//    console.log(response_container);
//    response_container.innerHTML= generatedHTML;
//     if(request_response === "Account created successfully."){
//
//         response_container.classList.add("positive");
//         response_container.classList.remove("hidden");
//         setTimeout(function(){
//             response_container.classList.remove("positive");
//           $(response_container).addClass('hidden');
//           }, 3000);
//        
//}else{
//       response_container.classList.add("negative");
//     response_container.classList.remove("hidden");
//     setTimeout(function(){
//         response_container.classList.remove("negative");
//           $(response_container).addClass('hidden');
//           }, 3000);
//    }
//}
