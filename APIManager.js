class APIManager {
    constructor() {
        this.data = {}
    }
    getUserData() {
        $.ajax({
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            success: function (data) {
               const users = data.results.map(b => ({ name: b.name.first + " " + b.name.last, picture: b.picture.large, location: b.location.city + " " + b.location.state }))
                data.allUsers = users;
                console.log(data.allUsers)
            }
        });
    }
    getQuote() {
        $.ajax({
            url: 'https://api.kanye.rest/',
            dataType: 'json',
            success: function (data) {
                const quote1 = " '" + data.quote + "' " + " - " + "Kanye"
                data.quote = quote1
                console.log(data.quote)
            }
        });
    }
    getAboutMe() {
        $.ajax({
            url: 'https://baconipsum.com/api/?callback=?',
            dataType: 'json',
            success: function (data) {
                const AboutMe = " '" + data + "' "
                data.aboutMe = AboutMe
                console.log(data.aboutMe)
            }
        });
    }
    getPokemon() {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 949 + 1)
                }/`,
            dataType: 'json',
            success: function (data) {
                const Pokemon = { name: data.name, img: data.sprites.back_default };
                data.pokemon = Pokemon;
                console.log(data.pokemon)
            }
        });
    }
    getData = () => this.data
 }
/*const p = new APIManager();
p.getUserData();
p.getQuote();
p.getAboutMe();
p.getPokemon();
p.getData();*/