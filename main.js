const render = new Renderer()
const apiManager = new APIManager()


// Clicking on Load button.

$('#load').on("click", function() {
console.log("Load button was clicked.")
    apiManager.getData()
})




// // Clicking on Display button. - 

$('#display').on("click", function() {
console.log("Display button was clicked.")
    render.renderAll(apiManager.data)
})




