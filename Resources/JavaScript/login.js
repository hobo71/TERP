function userLogin(){
    
    var username = document.getElementById("name").value;
    var userpass = document.getElementById("password").value;
//    console.log(username);
//    console.log(userpass);
    
    var http = new XMLHttpRequest();
    var url = 'http://127.0.0.1:5000/auth';
    var method = 'POST';


    //      var username = "qwerqwer";
    //           
    //            var userpass = "qwerqwer";
    var data = JSON.stringify({
        "username": username,
        "password": userpass
    });

    http.open(method, url);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onreadystatechange = function() {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            //        
            var token = JSON.parse(http.responseText).access_token;
//           console.log(token);
            
            localStorage.setItem('access_token', token);
            var tok = localStorage.getItem('access_token');
//            console.log(tok);
            location.href="continue.html";
            
            
            
        } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
            console.log('Error!');
//            console.log(JSON.parse(http.responseText));
            HTMLGeneratorForResponse(JSON.parse(http.responseText).description);
//            console.log(JSON.parse(http.responseText));
        }
    };
    http.send(data);
    
    
}
function HTMLGeneratorForResponse(response){
    var rawTemplate = document.getElementById("response_template").innerHTML;
    console.log(rawTemplate);
    var compiledTemplate = Handlebars.compile(rawTemplate);
    console.log(compiledTemplate);
    var generatedHTML = compiledTemplate(response);
    console.log(generatedHTML);
    var response_container = document.getElementById("response_container");
    console.log(response_container);
    response_container.innerHTML= generatedHTML;
    if(request_response === "Account created successfully."){

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



//wojtek pure js request
//var http = new XMLHttpRequest();
//var url = 'http://127.0.0.1:5000/auth';
//var method = 'POST';
//
//var data = JSON.stringify({
//    "username": "nowjs",
//    "password": "cust"
//});
//
//http.open(method, url);
//http.setRequestHeader('Content-Type', 'application/json');
//http.onreadystatechange = function() {
//    if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
////         console.log(JSON.parse(http.responseText).data[0].id);
//        console.log(JSON.parse(http.responseText));
//    } else if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//        console.log('Error!');
//        console.log(JSON.parse(http.responseText));
//    }
//};
//http.send(data);
