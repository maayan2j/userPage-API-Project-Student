const render = new Renderer()
const apiManager = new APIManager()


// Clicking on Load button.

$('#load').on("click", function() {
console.log("Load button was clicked.")

    // apiManager.getMainUser()
    // apiManager.getFriends()
    apiManager.getData()
    //console.log(apiManager.data)
})




// // Clicking on Display button.

$('#display').on("click", function() {
console.log("Display button was clicked.")
    render.renderAll(apiManager.data)
    // // const mainuser = apiManager.data.mainuser
    // // render.renderMainUser(mainuser)
    // // const friends = apiManager.data.friends
    // // render.renderFriends(friends)
    // const quote = apiManager.data.quote
    // console.log(quote)
    // render.renderQuote(quote)

})




