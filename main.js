const render = new Renderer()
const apiManager = new apiManager()




// Clicking on Load button.

$('#load').on("click", function() {
console.log("Load button was clicked.")

    apiManager.getMainUser()
    apiManager.getFriends()
    apiManager.getQuote()
})




// Clicking on Display button.

$('#load').on("click", function() {
console.log("Display button was clicked.")

    const mainuser = apiManager.data.quote
    render.renderQuote(mainuser)
    const friends = apiManager.data.quote
    render.renderQuote(friends)
    const quote = apiManager.data.quote
    render.renderQuote(quote)

})




