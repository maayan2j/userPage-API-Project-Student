class Renderer {

    rendererUser(mainuser) {
        
        $(".user-container").empty()
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({mainuser});
        $(".user-container").append(newHTML);
        console.log(newHTML)
    }

    rendererFriends(friends) {
        
        $(".friends-container").empty()
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({friends: friends});
        $(".friends-container").append(newHTML);
        console.log(newHTML)
    }

    rendererQuote(quote) {
        console.log(quote)
        $(".quote-container").empty()
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        // let quote = this.data.quote
        //{quote} ==>>>>> {quote: quote} ===>>> {quote: "bla bla"}
        let newHTML = template({quote}); // {quote: "bla bla"}
        $(".quote-container").append(newHTML);
        //console.log(newHTML)
    }
    // rendererPokemon() {
    //     $(".pokemon-container").empty()
    //     const source = $('#pokemon-template').html();
    //     const template = Handlebars.compile(source);
    //     let pokemon = this.data.pokemon
    //     let newHTML = template(pokemon);
    //     $(".pokemon-container").append(newHTML);
    //     console.log(newHTML)
    // }
    // rendereraboutMe() {
    //     $(".meat-text").empty()
    //     const source = $('#aboutMe-template').html();
    //     const template = Handlebars.compile(source);
    //     let pokemon = this.data.aboutMe
    //     let newHTML = template(pokemon);
    //     $(".meat-text").append(newHTML);
    //     console.log(newHTML)
    // }
    renderAll(data){
        this.rendererQuote(data.quote)
        this.rendererUser(data.mainuser)
        this.rendererFriends(data.friends)

    }
}
