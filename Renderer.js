
// class Renderer {

//     constructor(){
//         //Main User 
//         this.mainUserSource = $(`#user-template`).html()
//         this.mainUserTemplate = Handlebars.compile(this.mainUserSource)
//         //Friends 
//         this.friendsSource = $(`#friends-template`).html()
//         this.friendsTemplate = Handlebars.compile(this.friendsSource)
//         //Kanye Quote
//         this.quoteSource = $(`#quote-template`).html()
//         this.quoteTemplate = Handlebars.compile(this.qouteSource)
//         //Pokemon 
//         // this.pokemonSource = $(`pokemon-template`).html()
//         // this.sourceTemplate = Handlebars.compile(this.pokemonSource)

//     }
    
//     renderQuote(mainUser){
//         const newMainUser = this.mainUserTemplate(mainUser)
//         $(`.user-container`).append(newMainUser)
//     }

    
//     renderQuote(Friends){
//         const newFriends = this.friendsTemplate(Friends)
//         $(`.friends-container`).append(newFriends)
//     }


//     renderQuote(kanyeQuote){
//         const newQuote = this.squoteTemplate({quote: kanyeQuote})
//         $(`.quote-container`).append(newQuote)
//     }

//     // renderPokemon(Pokemon){
//     //     const newPokemon = this.pokemonTemplate({Pokemon})
//     //     $(`.pokemon-container`).append(newPokemon)


// }