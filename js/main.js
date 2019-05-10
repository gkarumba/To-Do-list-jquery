class Tasks {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    };
};id="div1"
id="1"
var number = 1;
var arrays = [];
$(document).ready(function (){
    $("form").submit(function (event){
        event.preventDefault();
        var inputTitle = $("#title").val();
        var inputDescription = $("#description").val();
        var newTasks = new Tasks(inputTitle,inputDescription);
        $(".output").append("<div class='display' id='div"+ number +"'><p class='title'>"+ newTasks.title +"</p><p class='description'> "+ newTasks.description +"</p><input type='checkbox' id='complete'><br><button class='del' id="+ number +">Delete</button></div>");
        $("#title").val("");
        $("#description").val("");
        arrays.push(number);
        number++;
        console.log(arrays);
        arrays.forEach(function(array){
            $("#"+array).click(function(){
                $("div#div"+array).hide();
            });
        });

    });
});