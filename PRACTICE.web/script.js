$(document),ready(function)({
    const date = new Date();
    const hour = date.gatHours();
    let message = "";
    if(hour >12){
        message = "Good Morning "
    }
    if(hour >12){
        message = "Good Afternoon";
    }
    if(hour >17){
        message = "Good Everning";
    }
    console.log('#headingText').emty().append(message + "From Phak");
})

