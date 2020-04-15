
    var name = $("#name").val()
    var email = $("#email").val()
    var message = $("#message").val()


    $("#submitForm").on("click", function(event){
        event.preventDefault()
        console.log(name, email, message)


    });




