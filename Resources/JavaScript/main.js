if(localStorage.getItem('access_token') !== null){
    HTMLGeneratorForLoggedUser("logged_user_template", "log_buttons_container")
}
    function HTMLGeneratorForLoggedUser(template, container){
//        console.log(data);
//        console.log(id);
        
        var rawTemplate = document.getElementById(template).innerHTML;
//        console.log(rawTemplate);
        var compiledTemplate = Handlebars.compile(rawTemplate);
//        console.log(compiledTemplate);
        var generatedHTML = compiledTemplate();
//        console.log(generatedHTML);
        var container = document.getElementById(container);
//        console.log(container);
        container.innerHTML= generatedHTML;
    }
