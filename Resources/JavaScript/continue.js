//console.log(localStorage.getItem('access_token'));

var role = "";
var http = new XMLHttpRequest();
    var url = 'http://127.0.0.1:5000/continue';
    var method = 'GET';

    http.open(method, url);
    http.setRequestHeader('Authorization', 'JWT ' + localStorage.getItem('access_token'));
    http.onreadystatechange = function() {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            console.log(JSON.parse(http.responseText).role);
            role = JSON.parse(http.responseText).role;
            
            if (role === "it specialist" || role === "customer service"){
                role = "user"
            }
            var dashboard_link = role + '-dashboard.html'
            location.href=dashboard_link;
            
   
        } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
            console.log('Error!');
            console.log(JSON.parse(http.responseText));
            location.href='login.html';
        }
    };
    http.send();
    