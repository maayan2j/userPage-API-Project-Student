class Renderer {
    constructor(getApi) {
        this.data = getApi
    }
    rendererUser() {
        $(".user-container").empty()
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        let user = this.data.allUsers[0]
        let newHTML = template(user);
        $(".user-container").append(newHTML);
        console.log(newHTML)
    }
    rendererFriends() {
        $(".friends").empty()
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        let friends = this.data.allUsers
        let newHTML = template(friends);
        $(".friends").append(newHTML);
        console.log(newHTML)
    }
    rendererQuote() {
        $(".quote-container").empty()
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source);
        let quote = this.data.quote
        let newHTML = template(quote);
        $(".quote-container").append(newHTML);
        console.log(newHTML)
    }
    rendererPokemon() {
        $(".pokemon-container").empty()
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source);
        let pokemon = this.data.pokemon
        let newHTML = template(pokemon);
        $(".pokemon-container").append(newHTML);
        console.log(newHTML)
    }
    rendereraboutMe() {
        $(".meat-text").empty()
        const source = $('#aboutMe-template').html();
        const template = Handlebars.compile(source);
        let pokemon = this.data.aboutMe
        let newHTML = template(pokemon);
        $(".meat-text").append(newHTML);
        console.log(newHTML)
    }
}
