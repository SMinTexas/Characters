const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

app.use(express.static("assets"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.render("index", { title: "Awesome Movie Characters", message: "We Love Movies" });
});

const characters = [{
        name: "Darth Vader",
        series: "Star Wars",
        who: `A Dark Lord of the Sith who is the primary focus of the Star Wars 
        Skywalker saga.`,
        image: "/images/darthvader.jpeg",
        appearances: [
            "Star Wars:  Episode III - Revenge of the Sith",
            " Rogue One - A Star Wars Story",
            " Star Wars:  Episode IV - A New Hope",
            " Star Wars:  Episode V - The Empire Strikes Back",
            " Star Wars:  Episode VI - Return of the Jedi"
        ],
        allies: [
            "The Emperor Sheev Palpatine",
            " Stormtroopers",
            " Grand Moff Tarkin"
        ],
        enemies: [
            "Obi-Wan Kenobi",
            " The Rebel Alliance"
        ],
        relatives: [
            "Smii Skywalker",
            " Luke Skywalker",
            " Leia Organa",
            " Kylo Ren"
        ],
        weapon: [
            "The Force",
            " Red-bladed Lightsaber",
            " TIE Advanced X1 Fighter"
        ],
        created: "George Lucas, 1976",
        performed: [
            "David Prowse",
            " James Earl Jones",
            " Hayden Christensen",
            " Spencer Wilding"
        ],
        slug: "darthvader"
    },
    {
        name: "Anakin Skywalker",
        series: "Star Wars",
        who: `When we first meet Anakin Skywalker, he is a 9-year-old slave
        living with his mother, Smii, on the desert planet Tatooine, and will
        soon leave with Jedi Knights Qui-Gon Jenn and Obi-Wan Kenobi to be 
        trained as a Jedi Knight.  This proves to be a devastating decision
        for young Skywalker.`,
        image: "/images/anakinskywalker.jpeg",
        appearances: [
            "Star Wars:  Episode I - The Phantom Menace",
            " Star Wars:  Episode II - Attack of the Clones",
            " Star Wars:  Episode III - Revenge of the Sith"
        ],
        allies: [
            "Qui-Gon Jenn",
            " Yoda",
            " Obi-Wan Kenobi",
            " Clone Troopers"
        ],
        enemies: [
            "Darth Tyranus",
            " Darth Sidious",
            " Trade Federation"
        ],
        relatives: [
            "Smii Skywalker",
            " Luke Skywalker",
            " Leia Organa"
        ],
        weapon: [
            "The Force",
            " Blue-bladed lightsaber",
            " Jedi Starfighter"
        ],
        created: "George Lucas, 1976",
        performed: [
            "Jake Lloyd",
            " Hayden Christensen",
            " Sebastian Shaw"
        ],
        slug: "anakinskywalker"
    },
    {
        name: "Luke Skywalker",
        series: "Star Wars",
        who: `Born at the conclusion of the Clone Wars, Luke Skywalker is hidden
        away from his father by Obi-Wan Kenobi, who watches over him from a 
        distance on the desert planet Tatooine until the time comes for Luke
        to learn his destiny.`,
        image: "/images/lukeskywalker.jpeg",
        appearances: [
            "Star Wars:  Episode III - Revenge of the Sith",
            " Star Wars:  Episode IV - A New Hope",
            " Star Wars:  Episode V - The Empire Strikes Back",
            " Star Wars:  Episode VI - Return of the Jedi",
            " Star Wars:  Episode VII - The Force Awakens",
            " Star Wars:  Episode VIII - The Last Jedi",
            " Star Wars:  Episode IX - The Rise of Skywalker"
        ],
        allies: [
            "Obi-Wan Kenobi",
            " Han Solo",
            " Princess Leia",
            " Yoda",
            " The Rebel Alliance"
        ],
        enemies: [
            "Darth Vader",
            " Boba Fett",
            " Jabba the Hutt",
            " The Empire"
        ],
        relatives: [
            "Anakin Skywalker",
            " Darth Vader",
            " Leia Organa",
            " Kylo Ren"
        ],
        weapon: [
            "The Force",
            " Blue-bladed lightsaber",
            " Incom T-65 X-Wing Starfighter"
        ],
        created: "George Lucas, 1976",
        performed: ["Mark Hamill"],
        slug: "lukeskywalker"
    },
    {
        name: "Han Solo",
        series: "Star Wars",
        who: `A native Correllian, Han received his last name from an Imperial
        officer at an Imperial Navy recruitment center when he was a teen.  Later,
        Han developed a reputation as a smuggler and swindler who would quite
        reluctantly align himself with the Rebel Alliance.`,
        image: "/images/hansolo.jpeg",
        appearances: [
            "Solo:  A Star Wars Story",
            " Star Wars:  Episode IV - A New Hope",
            " Star Wars:  Episode V - The Empire Strikes Back",
            " Star Wars:  Episode VI - Return of the Jedi",
            " Star Wars:  Episode VII - The Force Awakens"
        ],
        allies: [
            "Beckett",
            " Qi'ra",
            " Lando Calrissian",
            " Chewbacca",
            " Luke Skywalker",
            " Obi-Wan Kenobi",
            " Leia Organa"
        ],
        enemies: [
            "Lando Calrissian",
            " Beckett",
            " abba the Hutt",
            " Darth Vader",
            " The Empire",
            " Guavian Death Gang",
            " Kanjiklub",
            " The First Order"
        ],
        relatives: [
            "Leia Organa",
            " Kylo Ren"
        ],
        weapon: [
            "Blaster",
            " Millennium Falcon"
        ],
        created: "George Lucas, 1976",
        performed: [
            "Harrison Ford",
            " Alden Ehrenreich"
        ],
        slug: "hansolo"
    },
    {
        name: "Princess Leia",
        series: "Star Wars",
        who: `Adopted daughter of the Royal Family of the planet Alderaan,
        Leia is a spirited leader of a burgeoning Rebel Alliance as a young
        woman, and then later as a Resistance to the First Order in her waning
        years.`,
        image: "/images/princessleia.jpeg",
        appearances: [
            "Star Wars:  Episode III - Revenge of the Sith",
            " Rogue One:  A Star Wars Story",
            " Star Wars:  Episode IV - A New Hope",
            " Star Wars:  Episode V - The Empire Strikes Back",
            " Star Wars:  Episode VI - Return of the Jedi",
            " Star Wars:  Episode VII - The Force Awakens",
            " Star Wars:  Episode VIII - The Last Jedi",
            " Star Wars:  Episode IX - The Rise of Skywalker"
        ],
        allies: [
            "Luke Skywalker",
            " Han Solo",
            " Chewbacca",
            " Lando Calrissian",
            " The Rebel Alliance",
            " The Resistance"
        ],
        enemies: [
            "Darth Vader",
            " The Empire",
            " The First Order"
        ],
        relatives: [
            "Anakin Skywalker",
            " Padme Amidala",
            " Bail Organa",
            " Luke Skywalker",
            " Han Solo",
            " Kylo Ren"
        ],
        weapon: [
            "Diplomacy",
            " Blaster"
        ],
        created: "George Lucas, 1976",
        performed: [
            "Carrie Fisher"
        ],
        slug: "princessleia"
    },
    {
        name: "Captain America",
        series: "Marvel",
        who: ``,
        image: "/images/captainamerica.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "captainamerica"
    },
    {
        name: "Iron Man",
        series: "Marvel",
        who: ``,
        image: "/images/ironman.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "ironman"
    },
    {
        name: "Thor",
        series: "Marvel",
        who: ``,
        image: "/images/thor.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "thor"
    },
    {
        name: "Thanos",
        series: "Marvel",
        who: ``,
        image: "/images/thanos.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "thanos"
    },
    {
        name: "Indiana Jones",
        series: "Indiana Jones",
        who: ``,
        image: "/images/indianajones.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "indianajones"
    },
    {
        name: "Henry Jones Sr",
        series: "Indiana Jones",
        who: ``,
        image: "/images/henryjones.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "henryjones"
    },
    {
        name: "Sallah",
        series: "Indiana Jones",
        who: ``,
        image: "/images/sallah.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "sallah"
    },
    {
        name: "Marion Ravenwood",
        series: "Indiana Jones",
        who: ``,
        image: "/images/marionravenwood.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "marionravenwood"
    },
    {
        name: "Batman",
        series: "DC",
        who: ``,
        image: "/images/batman.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "batman"
    },
    {
        name: "Superman",
        series: "DC",
        who: ``,
        image: "/images/superman.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "superman"
    },
    {
        name: "Wonder Woman",
        series: "DC",
        who: ``,
        image: "/images/wonderwoman.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "wonderwoman"
    },
    {
        name: "Darkseid",
        series: "DC",
        who: ``,
        image: "/images/darkseid.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "darkseid"
    },
    {
        name: "Frodo Baggins",
        series: "Lord of the Rings",
        who: ``,
        image: "/images/frodobaggins.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "frodobaggins"
    },
    {
        name: "Bilbo Baggins",
        series: "Lord of the Rings",
        who: ``,
        image: "/images/bilbobaggins.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "bilbobaggins"
    },
    {
        name: "Gandalf",
        series: "Lord of the Rings",
        who: ``,
        image: "/images/gandalf.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "gandalf"
    },
    {
        name: "Marty McFly",
        series: "Back to the Future",
        who: ``,
        image: "/images/martymcfly.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "martymcfly"
    },
    {
        name: "Biff Tannen",
        series: "Back to the Future",
        who: ``,
        image: "/images/bifftannen.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "bifftannen"
    },
    {
        name: "Doc Brown",
        series: "Back to the Future",
        who: ``,
        image: "/images/docbrown.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "docbrown"
    },
    {
        name: "James Bond",
        series: "007",
        who: ``,
        image: "/images/jamesbond.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "jamesbond"
    },
    {
        name: "Odd Job",
        series: "007",
        who: ``,
        image: "/images/oddjob.jpeg",
        appearances: [],
        allies: [],
        enemies: [],
        relatives: [],
        weapon: [],
        created: "",
        performed: [],
        slug: "oddjob"
    }
];

app.get("/characters", function(req, res) {
    res.render("characters", { characters: characters });
});

app.get("/characters/:character", function(req, res) {
    let filteredCharacters = characters.filter(character => {
        return character.slug === req.params.character;
    });
    console.log(filteredCharacters);
    if (filteredCharacters.length < 1) {
        res.send("Character not found");
    }
    res.render("character", { character: filteredCharacters[0] });
});

app.get("/about/us", function(req, res) {
    res.render("about", { title: "Movie Characters", message: "We like movies" });
});

app.listen(port, () => {
    console.log(`Port ${port} is running`);
});