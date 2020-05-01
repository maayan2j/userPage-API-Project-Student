//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}

    }

     
        //Loads main user data
        getMainUser(){
                console.log('getMainUser - is running')
                $.ajax({
                    method: "GET",
                    url: `https://randomuser.me/api/?results=0`,
                    success:(mainuser)=>{
                        const mainuser1 = mainuser.results
                        this.data["mainuser"] = mainuser1;
                    },
                    error: function(xhr, text, error){
                        console.log(text)
                    }
                }); 

        }

        //Loads friends data
        getFriends(){
            console.log('getFriends - is running')
            $.ajax({
                method: "GET",
                url: `https://randomuser.me/api/?results=7`,
                success:(friends)=>{
                    const friends1 = friends.results
                    this.data["friends"] = friends1;
                    console.log(this.data.friends)
                },
                error: function(xhr, text, error){
                    console.log(text)
                }
            });
        }

        
        // Loads kanye quote data
        getQuote(){
            console.log('getQuote - is running')
            $.ajax({
                method: "GET",
                url: `https://api.kanye.rest`,
                success:(quote)=>{
                    const quote1 = quote.quote 
                    //console.log(quote1)
                    this.data["quote"] = quote1;
                },
                error: function(xhr, text, error){
                    console.log(text)
                }
            });
            
        }

        


        
        // Loads pokemon data
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
            // });


        // // }
        getData(){

            this.getFriends()
            this.getQuote()
            this.getMainUser()
            //this.data.newpokemon = getPokemon()
       
            
        }
      

}
// const apiInvoke = new APIManager()
// //apiInvoke.getMainUser()
// apiInvoke.getQuote()
// apiInvoke.getData()



