
class Renderer {

    constructor(){
        //Main User 
        this.mainUserSource = $(`quote-template`).html()
        this.mainUserTemplate = Handlebars.compile(this.mainUserSource)
        //Friends 
        this.friendsSource = $(`quote-template`).html()
        this.friendsTemplate = Handlebars.compile(this.friendsSource)
        //Kanye Quote
        this.quoteSource = $(`quote-template`).html()
        this.quoteTemplate = Handlebars.compile(this.qouteSource)
        //Pokemon 
        // this.pokemonSource = $(`pokemon-template`).html()
        // this.sourceTemplate = Handlebars.compile(this.pokemonSource)

    }
    
    renderQuote(mainUser){
        const newQuote = this.sourceTemplate({quote: kanyeQuote})
        $(`.quote-container`).append(newQuote)
    }

    
    renderQuote(kanyeQuote){
        const newQuote = this.sourceTemplate({quote: kanyeQuote})
        $(`.quote-container`).append(newQuote)
    }


    renderQuote(kanyeQuote){
        const newQuote = this.squoteTemplate({quote: kanyeQuote})
        $(`.quote-container`).append(newQuote)
    }




}