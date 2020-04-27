const render = new Renderer()
const apiManager = new apiManager()




// Clicking on Load button.

$('#load').on("click", function() {
            
    
            console.log("Load button was clicked.")
            $.ajax
            let userData = $.get(`https://randomuser.me/api/`);
            userData.done(function(data){
            //let users = []
            //let mainUser = [picture, a first name & last name, the city and state.]
            //let friendsUsers = [first: last:]

            // for (let user of users){

                
            //      // push.data.results[0-6]

            // }
                    
    
            })

})




// Quote generator:

// $('#load').on("click", function() {
//             
//             $.ajax
//             let kaneyQuote = $.get(`https://api.kanye.rest`);
//             kaneyQuote.done(function(){

    
//             })
//     return kaneyQuote;
// })






// Clicking on Display button.

$('#load').on("click", function() {

    console.log("Display button was clicked.")
})








// API Manager - Users data, Kanye quote, Pokemon and about.

let apiManager= function(){

    $('#load').on("click", function() {
            
                $.ajax
                let userData = $.get(`https://randomuser.me/api/`);    
                let kaneyQuote = $.get(`https://api.kanye.rest`);

    })

    //return users, Kanye quote
    //Pokemon and about

}
