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
        name: "Steven Rogers - Captain America",
        series: "Marvel",
        who: `A result of a World War II experiment to create an army of Super
        Soldiers by the United States Army, Steven Rogers takes the fight to 
        the Nazis and Hydra.`,
        image: "/images/captainamerica.jpeg",
        appearances: [
            "Captain America:  The First Avenger",
            " The Avengers",
            " Captain America:  The Winter Soldier",
            " Avengers:  Age of Ultron",
            " Captain America:  Civil War",
            " Avengers Infinity War",
            " Avengers Endgame"
        ],
        allies: [
            "Bucky Barnes",
            " Tony Stark",
            " Thor",
            " Natasha Romanov",
            " Clint Barton",
            " Bruce Banner",
            " Winter Soldier",
            " T'Challa",
            " Sam Wilson",
            " Nick Fury",
            " Maria Hill"
        ],
        enemies: [
            "Red Skull",
            " Winter Soldier",
            " Tony Stark",
            " Alexander Pierce",
            " Thaddeus Ross",
            " Thanos"
        ],
        relatives: [
            "Iron Man",
            " Black Widow",
            " Hulk",
            " Thor",
            " Hawkeye",
            " Falcon",
            " Winter Soldier",
            " Agent 13"
        ],
        weapon: [
            "Super strength",
            " Patriotism",
            " Vibranium shield"
        ],
        created: "Joe Simon, 1940",
        performed: [
            "Chris Evans"
        ],
        slug: "captainamerica"
    },
    {
        name: "Tony Stark - Iron Man",
        series: "Marvel",
        who: `Heir to a multi-billion dollar arms manufacturer, Tony Stark is a
        genius, a graduate of MIT, and a flamboyent playboy who's life is 
        transformed after a trip to the Middle East to demonstrate his latest
        arms project.`,
        image: "/images/ironman.jpeg",
        appearances: [
            "Iron Man",
            " The Incredible Hulk",
            " Iron Man 2",
            " The Avengers",
            " Iron Man 3",
            " Avengers:  Age of Ultron",
            " Captain America: Civil War",
            " Spider-Man Homecoming",
            " Avengers Infinity War",
            " Avengers Endgame"
        ],
        allies: [
            "James Rhodes",
            " Captain America",
            " Thor",
            " Black Widow",
            " Hulk",
            " Hawkeye",
            " Nick Fury",
            " Maria Hill",
            " Phil Coulson"
        ],
        enemies: [
            " Obadiah Stane",
            " Ivan Vanko",
            " Justin Hammer",
            " Aldrich Killian",
            " Trevor Slattery",
            " Loki",
            " Ultron",
            " Thanos"
        ],
        relatives: [
            "Howard Stark",
            " Maria Stark",
            " Pepper Potts",
            " Morgan Stark"
        ],
        weapon: [
            "Intelligence",
            " Money",
            " ARC Reactor Technology",
            " AI Technology",
            " Nanotechnology"
        ],
        created: "Stan Lee",
        performed: [
            "Robert Downey, Jr"
        ],
        slug: "ironman"
    },
    {
        name: "Thor",
        series: "Marvel",
        who: `A Norse God-like figure`,
        image: "/images/thor.jpeg",
        appearances: [
            "Thor",
            " The Avengers",
            " Thor:  The Dark World",
            " Avengers:  Age of Ultron",
            " Thor: Ragnorak",
            " Avengers Infinity War",
            " Avengers Endgame"
        ],
        allies: [
            "Captain America",
            " Iron Man",
            " Hulk",
            " Black Widow",
            " Hawkeye",
            " Rocket Raccoon",
            " Groot",
            " Erik Selvig",
            " Jane Foster",
            " Darcy Lewis",
            " Heimdall",
            " Volstagg",
            " Hogun",
            " Fandral",
            " Sif"
        ],
        enemies: [
            "Loki",
            " Dark Elves",
            " Hela",
            " Thanos"
        ],
        relatives: [
            "Odin",
            " Frigga"
        ],
        weapon: [
            "Mjolnir",
            " Stormbreaker"
        ],
        created: "Stan Lee, 1962",
        performed: [
            "Chris Hemsworth"
        ],
        slug: "thor"
    },
    {
        name: "Thanos",
        series: "Marvel",
        who: `A Titan with grandiose ideas of saving life by killing half of life.`,
        image: "/images/thanos.jpeg",
        appearances: [
            "The Avengers",
            " Guardians of the Galaxy",
            " Avengers: Age of Ultron",
            " Avengers Infinity War",
            " Avengers Endgame"
        ],
        allies: [
            "Ebony Maw",
            " Cull Obsidian",
            " Proxima Midnight",
            " Corvus Glaive"
        ],
        enemies: [
            "The Avengers",
            " The Guardians of the Galaxy"
        ],
        relatives: [
            "Gamora",
            " Nebula"
        ],
        weapon: [
            "Strength",
            " Will power",
            " Infinity Gauntlet"
        ],
        created: "Stan Lee",
        performed: [
            "Josh Brolin"
        ],
        slug: "thanos"
    },
    {
        name: "Indiana Jones",
        series: "Indiana Jones",
        who: `An archaelogist who moonlights as a college professor.`,
        image: "/images/indianajones.jpeg",
        appearances: [
            "Raiders of the Lost Ark",
            " Indiana Jones and the Temple of Doom",
            " Indiana Jones and the Last Crusade",
            " Indiana Jones and the Kingdom of the Crystal Skull"
        ],
        allies: [
            "Sallah",
            " Short Round",
            " Willie Scott",
            " Marcus Brody"
        ],
        enemies: [
            "Rene Belloq",
            " Mola Ram"
        ],
        relatives: [
            "Henry Jones, Sr.",
            " Marian Ravenwood"
        ],
        weapon: [
            "Bullwhip",
            " Revolver"
        ],
        created: "George Lucas, 1977",
        performed: [
            "Harrison Ford",
            " River Phoenix"
        ],
        slug: "indianajones"
    },
    {
        name: "Henry Jones Sr",
        series: "Indiana Jones",
        who: `Indiana Jones' dad.`,
        image: "/images/henryjones.jpeg",
        appearances: [
            "Indiana Jones and the Last Crusade"
        ],
        allies: [
            "Marcus Brody"
        ],
        enemies: [
            "Nazis"
        ],
        relatives: [
            "Henry Jones, Jr."
        ],
        weapon: [
            "Umbrella"
        ],
        created: "George Lucas, 1988",
        performed: [
            "Sean Connery"
        ],
        slug: "henryjones"
    },
    {
        name: "Sallah",
        series: "Indiana Jones",
        who: `Indiana Jones' Egyptian friend`,
        image: "/images/sallah.jpeg",
        appearances: [
            "Raiders of the Lost Ark",
            " Indiana Jones and the Last Crusade"
        ],
        allies: [
            "Indiana Jones"
        ],
        enemies: [
            "Nazis"
        ],
        relatives: [
            "Marcus Brody"
        ],
        weapon: [
            "His fists"
        ],
        created: "George Lucas 1977",
        performed: [
            "John Rhyes Davies"
        ],
        slug: "sallah"
    },
    {
        name: "Marion Ravenwood",
        series: "Indiana Jones",
        who: `Indiana Jones' estranged girlfriend who later becomes his wife.`,
        image: "/images/marionravenwood.jpeg",
        appearances: [
            "Raiders of the Lost Ark",
            " Indiana Jones and the Kingdom of the Crystal Skull"
        ],
        allies: [
            "Indiana Jones"
        ],
        enemies: [
            "Nazis",
            "Rene Belloq",
            "Russians"
        ],
        relatives: [
            "Henry Jones, Jr.",
            "Mutt"
        ],
        weapon: [
            "Her fists",
            " Whiskey"
        ],
        created: "George Lucas, 1977",
        performed: [
            "Karen Allen"
        ],
        slug: "marionravenwood"
    },
    {
        name: "Batman",
        series: "DC",
        who: `The Dark Knight`,
        image: "/images/batman.jpeg",
        appearances: [
            "Batman",
            " Batman Returns",
            " Batman Forever",
            " Batman and Robin",
            " Batman Begins",
            " The Dark Knight",
            " The Dark Knight Rises",
            " Batman Versus Superman:  Dawn of Justice",
            " Justice League"
        ],
        allies: [
            "Superman",
            " Wonder Woman"
        ],
        enemies: [
            "The Joker",
            " The Riddler",
            " The Penguin",
            " Two-Face",
            " Scarecrow",
            " Mr. Freeze",
            " Poison Ivy",
            " Catwoman",
            " Bane"
        ],
        relatives: [
            "Thomas Wayne",
            " Martha Wayne"
        ],
        weapon: [
            "Wealth",
            " Martial Arts"
        ],
        created: "Bob Kane",
        performed: [
            "Michael Keaton",
            " Val Kilmer",
            " George Clonney",
            " Christian Bale",
            " Ben Affleck"
        ],
        slug: "batman"
    },
    {
        name: "Superman",
        series: "DC",
        who: `The last son of the planet Krypton.`,
        image: "/images/superman.jpeg",
        appearances: [
            "Superman:  The Movie",
            " Superman II",
            " Superman III",
            " Superman IV:  The Quest for Peace",
            " Superman Returns",
            " Man of Steel",
            " Batman Versus Superman:  Dawn of Justice",
            " Justice League"
        ],
        allies: [
            "Jimmy Olsen",
            " Batman"
        ],
        enemies: [
            "Lex Luthor",
            " General Zod",
            " Zhora",
            " Non",
            " Brainiac",
            " Doomsday",
            " Darkseid"
        ],
        relatives: [
            "Pa Kent",
            " Martha Kent",
            " Jor-El"
        ],
        weapon: [
            "Super strength",
            " Super speed",
            " Super vision",
            " Super hearing"
        ],
        created: "Joel Shuster, 1938",
        performed: [
            "Christopher Reeve",
            " Brandon Routh",
            " Henry Cavill"
        ],
        slug: "superman"
    },
    {
        name: "Wonder Woman",
        series: "DC",
        who: `Amazonian princess.`,
        image: "/images/wonderwoman.jpeg",
        appearances: [
            "Batman Versus Superman:  Dawn of Justice",
            " Wonder Woman",
            " Justice League"
        ],
        allies: [
            "Batman",
            " Superman",
            " Aquaman"
        ],
        enemies: [
            "Doomsday"
        ],
        relatives: [
            "Amazonian Queen"
        ],
        weapon: [
            "Lasso of Truth",
            " Super strength",
            " Super speed",
            " Shield",
            " Sword"
        ],
        created: "DC Comics",
        performed: [
            "Gal Gadot"
        ],
        slug: "wonderwoman"
    },
    {
        name: "Darkseid",
        series: "DC",
        who: `A madman from the planet Apokalypse.`,
        image: "/images/darkseid.jpeg",
        appearances: [
            "None",
            " Hinted at in Batman Versus Superman: Dawn of Justice"
        ],
        allies: [
            "None"
        ],
        enemies: [
            "Superman"
        ],
        relatives: [
            "None"
        ],
        weapon: [
            "Too many to list here"
        ],
        created: "DC Comics",
        performed: [
            "None"
        ],
        slug: "darkseid"
    },
    {
        name: "Frodo Baggins",
        series: "Lord of the Rings",
        who: `A Hobbit from the Shire`,
        image: "/images/frodobaggins.jpeg",
        appearances: [
            "The Lord of the Rings:  The Fellowship of the Ring",
            " The Lord of the Rings:  The Two Towers",
            " The Lord of the Rings:  The Return of the King",
            " The Hobbit:  An Unexpected Journey"
        ],
        allies: [
            "Samwise Gamgee",
            " Gandalf"
        ],
        enemies: [
            "Sauron",
            " Saroman",
            " Black Riders"
        ],
        relatives: [
            "Bilbo Baggins"
        ],
        weapon: [
            "Elven dagger"
        ],
        created: "J. R. R. Tolkien, 1937",
        performed: [
            "Elijah Wood"
        ],
        slug: "frodobaggins"
    },
    {
        name: "Bilbo Baggins",
        series: "Lord of the Rings",
        who: `A Hobbit from the Shire`,
        image: "/images/bilbobaggins.jpeg",
        appearances: [
            "The Lord of the Rings:  The Fellowship of the Ring",
            " The Lord of the Rings:  The Return of the King",
            " The Hobbit:  An Unexpected Journey",
            " The Hobbit:  The Desolation of Smaug",
            " The Hobbit:  Battle of Five Armies"
        ],
        allies: [
            "Dwarfs"
        ],
        enemies: [
            "Gollum"
        ],
        relatives: [
            "Frodo Baggins"
        ],
        weapon: [
            "Elvish dagger"
        ],
        created: "J. R. R. Tolkien, 1937",
        performed: [
            "Ian Holm",
            " Martin Freeman"
        ],
        slug: "bilbobaggins"
    },
    {
        name: "Gandalf",
        series: "Lord of the Rings",
        who: `A wizard`,
        image: "/images/gandalf.jpeg",
        appearances: [
            "The Lord of the Rings:  The Fellowship of the Ring",
            " The Lord of the Rings:  The Two Towers",
            " The Lord of the Rings:  The Return of the King",
            " The Hobbit:  An Unexpected Journey",
            " The Hobbit:  The Desolation of Smaug",
            " The Hobbit:  Battle of Five Armies"
        ],
        allies: [
            "Hobbits",
            " Elves",
            " Dwarfs"
        ],
        enemies: [
            "Saroman",
            " Sauran"
        ],
        relatives: [
            "None"
        ],
        weapon: [
            "Staff"
        ],
        created: "J. R. R. Tolkien, 1937",
        performed: [
            "Ian McKellan"
        ],
        slug: "gandalf"
    },
    {
        name: "Marty McFly",
        series: "Back to the Future",
        who: `A slacker with aspirations of hitting it big in rock and roll`,
        image: "/images/martymcfly.jpeg",
        appearances: [
            "Back to the Future",
            " Back to the Future Part II",
            " Back to the Future Part III"
        ],
        allies: [
            "Doc Brown"
        ],
        enemies: [
            "Biff Tannen"
        ],
        relatives: [
            "George McFly",
            "Lorraine McFly"
        ],
        weapon: [
            "Sarcasm"
        ],
        created: "Robert Zemeckis, 1985",
        performed: [
            "Michael J. Fox"
        ],
        slug: "martymcfly"
    },
    {
        name: "Biff Tannen",
        series: "Back to the Future",
        who: `A 1950s bully`,
        image: "/images/bifftannen.jpeg",
        appearances: [
            "Back to the Future",
            " Back to the Future Part II",
            " Back to the Future Part III"
        ],
        allies: [
            "None"
        ],
        enemies: [
            "Marty McFly"
        ],
        relatives: [
            "Mad Dog Tannen"
        ],
        weapon: [
            "53 Chevy"
        ],
        created: "Robert Zemeckis, 1985",
        performed: [
            "Thomas F. Wilson"
        ],
        slug: "bifftannen"
    },
    {
        name: "Doc Brown",
        series: "Back to the Future",
        who: `A zany millionaire inventory`,
        image: "/images/docbrown.jpeg",
        appearances: [
            "Back to the Future",
            " Back to the Future Part II",
            " Back to the Future Part III"
        ],
        allies: [
            "Marty McFly"
        ],
        enemies: [
            "Mad Dog Tannen"
        ],
        relatives: [
            "Clara",
            "Jules",
            "Verne"
        ],
        weapon: [
            "Scientific genius"
        ],
        created: "Robert Zemeckis, 1985",
        performed: [
            "Christopher Lloyd"
        ],
        slug: "docbrown"
    },
    {
        name: "James Bond",
        series: "007",
        who: `A British secret agent of MI-6`,
        image: "/images/jamesbond.jpeg",
        appearances: [
            "Dr. No",
            " From Russia With Love",
            " Goldfinger",
            " Thunderball",
            " Casino Royale",
            " You Only Live Twice",
            " On Her Majesty's Secret Service",
            " Diamonds Are Forever",
            " Live and Let Die",
            " The Man With The Golden Gun",
            " The Spy Who Loved Me",
            " Moonraker",
            " For Your Eyes Only",
            " Octopussy",
            " Never Say Never Again",
            " A View To A Kill",
            " The Living Daylights",
            " Licence To Kill",
            " Goldeneye",
            " Tomorrow Never Dies",
            " The World Is Not Enough",
            " Die Another Day",
            " Casino Royale",
            " Quantum of Solace",
            " Skyfall",
            " Spectre",
            " No Time To Die"
        ],
        allies: [
            "Lots of women",
            " Felix Leiter"
        ],
        enemies: [
            "A bunch of madmen"
        ],
        relatives: [
            "None"
        ],
        weapon: [
            "Walther PPK",
            " Various gadgets supplied by the Q branch"
        ],
        created: "Ian Fleming",
        performed: [
            "Sean Connery",
            " David Niven",
            " George Lazenby",
            " Roger Moore",
            " Timothy Dalton",
            " Pierce Brosnan",
            " Daniel Craig"
        ],
        slug: "jamesbond"
    },
    {
        name: "Odd Job",
        series: "007",
        who: `A Japanese body guard.`,
        image: "/images/oddjob.jpeg",
        appearances: [
            "Goldfinger"
        ],
        allies: [
            "None"
        ],
        enemies: [
            "James Bond"
        ],
        relatives: [
            "None"
        ],
        weapon: [
            "Sumo Wrestling",
            " Top Hat"
        ],
        created: "Ian Fleming",
        performed: [
            "Harold Sakata"
        ],
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