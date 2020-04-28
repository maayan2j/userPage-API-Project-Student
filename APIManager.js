//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}

        }

        getMainUser(){
                console.log('getMainUser - is running')
                $.ajax({
                    method: "GET",
                    url: `https://randomuser.me/api/?results=1`,
                    success:function(mainuser){
                        const mainuser1 = mainuser.results[0].name.first
                        console.log(mainuser1)
                    },
                    error: function(xhr, text, error){
                        console.log(text)
                    }
                })

        }

        getFriends(){
            console.log('getFriends - is running')
            $.ajax({
                method: "GET",
                url: `https://randomuser.me/api/?results=7`,
                success:function(mainuser){
                    const mainuser1 = mainuser.results[0].name.first
                    console.log(mainuser1)
                },
                error: function(xhr, text, error){
                    console.log(text)
                }
            })
        }

        getQuote(){
            console.log('getQuote - is running')
            $.ajax({
                method: "GET",
                url: `https://api.kanye.rest`,
                success:function(quote){
                    const quote1 = quote.quote 
                    console.log(quote1)
                },
                error: function(xhr, text, error){
                    console.log(text)
                }
            })

        }

        // getPokemon(){
            // $.ajax({
            //     method: "GET",
            //     url: `https://api.kanye.rest`,
            //     success:function(pokemon){
            //         const pokemon1 = pokemon 
            //         console.log(pokemon1)
            //     },
            //     error: function(xhr, text, error){
            //         console.log(text)
            //     }
            // })


        // }


}
const apiMainUser = new APIManager()
apiMainUser.getMainUser()

const apiFriends = new APIManager()
apiFriends.getFriends()

const apiQuote = new APIManager()
apiQuote.getQuote()

// const apiPokemon = new APIManager()
// apiPokemon.getPokemon()