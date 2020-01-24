const mongoose = require("mongoose");
const db = require("../models");
//const fakeuser = require("./json/Fakepeople");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const productsSeed = [ {
    "users": [
        {
            "username":"ToasterStroodle",
            "email": "Pasteryman@totallyrealemail.com",
            "password": "Iamtherealgingerbreadman",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Bread Head",
                    "catagory": "Salon",
                    "description": "I will put yeast in your hair",
                    "city": "Loaf Town",
                    "state": "AK"
            }
        },
        {
            "username":"MrMcdingi",
            "email": "RelatedToHoudini@Kleptomancer.com",
            "password": "ItsJustMagic",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Magic Clips",
                    "catagory": "Salon",
                    "description": "Very good with hair dyes",
                    "city": "New York",
                    "state": "NY"
            }
        },
        {
            "username":"MunsterMash",
            "email": "Freebird@wingz.com",
            "password": "ItwasaGravyardSmoosh",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Spooky Dos",
                    "catagory": "Salon",
                    "description": "Specializes in emo/goth",
                    "city": "Cleaver Town",
                    "state": "FL"
            }
        },
        {
            "username":"KateWhite",
            "email": "KateW@realemail.real",
            "password": "LegoLad2008",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Kate White's Salon",
                    "catagory": "Salon",
                    "description": "We cut hair, cheap and high quality.",
                    "city": "Nowhere",
                    "state": "CA"
            }
        },
        {
            "username":"LogitecMouse",
            "email": "Clicker@juuuuuunnnebug.com",
            "password": "Letsgopikachuyeehaw",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Trackpad clip pad",
                    "catagory": "Salon",
                    "description": "I will cut your hair with mouse and trackpad themed scissors and razors",
                    "city": "Knox",
                    "state": "TN"
            }
        },
        {
            "username":"KidzClips",
            "email": "KidzClips@KidzClips.com",
            "password": "KidzClips123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "KidzClips",
                    "catagory": "Salon",
                    "description": "We clip Kidz",
                    "city": "KidzClips",
                    "state": "AL"
            }
        },
        {
            "username":"K1TX3LL",
            "email": "SleepyBoy@hotemail.com",
            "password": "46920",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Clips and Snips",
                    "catagory": "barbershop",
                    "description": "Very soft and sweet boy",
                    "city": "Where I want to be",
                    "state": "IA"
            }
        },
        {
            "username":"Longloadingtime",
            "email": "takesforever@loadingemail.com",
            "password": "P1a1s1s1w1o1r1d",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "We won't finish",
                    "catagory": "barbershop",
                    "description": "Requires multiple trips",
                    "city": "Loopa",
                    "state": "AZ"
            }
        },
        {
            "username":"Pokebowl",
            "email": "fishdish@wish.com",
            "password": "Idreamoffish",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "PokeBowl",
                    "catagory": "barbershop",
                    "description": "We just cut your hair this isn't a real poke bowl place stOP CALLING US",
                    "city": "a land",
                    "state": "KY"
            }
        },
        {
            "username":"Imveryhungryrightnow",
            "email": "Ireallywantsomethingtoeat@Ididntgettohaveanythingforlunch.com",
            "password": "IwastobusytalkingtoxanbutthatsfinebecauseIdrathertothatthaneat",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "I'm still hungry though",
                    "catagory": "barbershop",
                    "description": "Gonna figure it out later",
                    "city": "Give me food",
                    "state": "CA"
            }
        },
        {
            "username":"Username",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Generic company",
                    "catagory": "barbershop",
                    "description": "Just a company",
                    "city": "town",
                    "state": "NY"
            }
        },
        {
            "username":"Momomomo",
            "email": "Peachtea@anemail.com",
            "password": "cryalldayandnoonewillknow(:",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Peach Clips",
                    "catagory": "barbershop",
                    "description": "Great clips",
                    "city": "Kalzone",
                    "state": "NY"
            }
        },
        {
            "username":"skateboardhoomanlegit",
            "email": "skraterboi@cyal8rboi.com",
            "password": "hewasntgoodenough4he",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "skrateboy",
                    "catagory": "Beauty",
                    "description": "i am real hooman",
                    "city": "hooman land",
                    "state": "AZ"
            }
        },
        {
            "username":"MrCrab",
            "email": "CrabLegs@Butter.com",
            "password": "Clawz4life",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Mr Snips Makeup",
                    "catagory": "Beauty",
                    "description": "You think it's hard for you to apply makeup?",
                    "city": "claaaarrwwwsss",
                    "state": "CA"
            }
        },
        {
            "username":"connortheandroid",
            "email": "doAndroidsDream@OfElectricSheep.com",
            "password": "notheydont",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "i like dogs",
                    "catagory": "Beauty",
                    "description": "get a makeup for dogs",
                    "city": "hank's house",
                    "state": "TN"
            }
        },
        {
            "username":"QuickQuestion",
            "email": "WhycantIrenderThisIfStatement@Hoveroverthe.com",
            "password": "probablytorouteitintoafunction",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Usually do",
                    "catagory": "Beauty",
                    "description": "I don't think I've done a conditional like that",
                    "city": "you actually not",
                    "state": "IA"
            }
        },
        {
            "username":"Soda",
            "email": "Fizzy@Pop.com",
            "password": "Bubblebubble",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Bubble Beauty",
                    "catagory": "Beauty",
                    "description": "Soda is a valid beauty product",
                    "city": "Nashville",
                    "state": "TN"
            }
        },
        {
            "username":"Libbytong",
            "email": "klaaaaaaa@eeeeeeemail.com",
            "password": "kalvinhhh",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "ligaments",
                    "catagory": "Beauty",
                    "description": "no the name doesn't mean anything we promise",
                    "city": "a place",
                    "state": "NY"
            }
        },
        {
            "username":"SquishSquishCult",
            "email": "Ieatchildren@tastychildren.com",
            "password": "tits",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Dink it & Ink it",
                    "catagory": "Tattoo",
                    "description": "Dink Donk",
                    "city": "Somewhere",
                    "state": "PA"
            }
        },
        {
            "username":"Birdnews",
            "email": "reportmail@havemail.com",
            "password": "birdsaregods",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Bird",
                    "catagory": "Tattoo",
                    "description": "Bird but italics",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"Grandma",
            "email": "Grandma@Grandma.com",
            "password": "Grandma",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Delete",
                    "catagory": "Tattoo",
                    "description": "How to delete account",
                    "city": "???",
                    "state": "AZ"
            }
        },
        {
            "username":"Bigscreen",
            "email": "BigscreenTattoo@anemail.com",
            "password": "BestTattooArtist",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "The only Legit Tattoo Place",
                    "catagory": "Tattoo",
                    "description": "The best tattoo place in the world",
                    "city": "Ripside",
                    "state": "NY"
            }
        },
        {
            "username":"Tattooartistnumber89",
            "email": "number89@realemail.com",
            "password": "passtattoo",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Okayish Tattoos",
                    "catagory": "Tattoo",
                    "description": "Kinda alright I guess",
                    "city": "Unsure",
                    "state": "FL"
            }
        },
        {
            "username":"Snake",
            "email": "Hissssss@reptile.com",
            "password": "Hisssssssssss",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Hissss",
                    "catagory": "Tattoo",
                    "description": "HISSSSSSSSSSSSSSS",
                    "city": "Hiss",
                    "state": "CA"
            }
        },
        {
            "username":"van",
            "email": "motervehicle@verypoor.com",
            "password": "savecash",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "vans are best car",
                    "catagory": "Nails",
                    "description": "we do your nails in my van. only 5 bucks",
                    "city": "Legoland",
                    "state": "NY"
            }
        },
        {
            "username":"COUNTRYROADS",
            "email": "TAKEMEHOME@TOTHEPLACE.com",
            "password": "IBELONG",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "West Virginia",
                    "catagory": "Nails",
                    "description": "MOUNTAIN MAMA",
                    "city": "TAKE ME HOME",
                    "state": "OR"
            }
        },
        {
            "username":"Alein",
            "email": "Theycomefromouterspace@Imeanwe.com",
            "password": "RealAlien",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Alein",
                    "catagory": "Nails",
                    "description": "Yes I know it's mispelt",
                    "city": "What",
                    "state": "CA"
            }
        },
        {
            "username":"Katty",
            "email": "ALittleBitKatty@memail.com",
            "password": "123Password",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Katty's Nails",
                    "catagory": "Nails",
                    "description": "hehehehe we do nails very pretty tee hee",
                    "city": "Townson",
                    "state": "FL"
            }
        },
        {
            "username":"Catglove",
            "email": "Madebycats@Forcats.com",
            "password": "Fromcats",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Pawfect Claws",
                    "catagory": "Nails",
                    "description": "more cat puns here",
                    "city": "meow",
                    "state": "AZ"
            }
        },
        {
            "username":"Chair",
            "email": "WithLegs@WithWheels.com",
            "password": "AllFourOnTheGround",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "ChairLand",
                    "catagory": "Nails",
                    "description": "Sit in a chair",
                    "city": "Brighton",
                    "state": "IA"
            }
        },
        {
            "username":"BabbuBunni",
            "email": "Smol@fluffy.com",
            "password": "BunBuns",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Rabbit ears",
                    "catagory": "Piercings",
                    "description": "long for lots of piercings",
                    "city": "rabbittown",
                    "state": "AZ"
            }
        },
        {
            "username":"Jamie",
            "email": "MagicTorch@amail.com",
            "password": "wordsworth",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Bright Piercings",
                    "catagory": "Piercings",
                    "description": "We do piercings",
                    "city": "Labo",
                    "state": "TN"
            }
        },
        {
            "username":"LazyLarry",
            "email": "LL@Larry.com",
            "password": "LarryLazy",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Larry's Lazy Peircings",
                    "catagory": "Piercings",
                    "description": "don't pay no mind to my eye",
                    "city": "Nowhere",
                    "state": "TN"
            }
        },
        {
            "username":"Eggy",
            "email": "Eggmail@chicken.com",
            "password": "PasstheYolk",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Shell Breaker",
                    "catagory": "Piercings",
                    "description": "Needles sharp enough to go through eggshells(with or without breaking them)",
                    "city": "eggsville",
                    "state": "NY"
            }
        },
        {
            "username":"Pen",
            "email": "PenApple@ApplePen.com",
            "password": "Pineapple",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Pineapple Piercings",
                    "catagory": "Piercings",
                    "description": "Is that real Pineapple?",
                    "city": "Apple",
                    "state": "CA"
            }
        },
        {
            "username":"David",
            "email": "David@ail.com",
            "password": "DavidPassword",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "David Jewlery",
                    "catagory": "Piercings",
                    "description": "Get an ear ring",
                    "city": "Jamesville",
                    "state": "FL"
            }
        },
        {
            "username":"Megaronii",
            "email": "Number1DekuFan@googlemail.com",
            "password": "GiveMeSeafoam",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Snap & Smile",
                    "catagory": "Photography",
                    "description": "That sounds like a you problem",
                    "city": "Wouldn't you like to know?",
                    "state": "IA"
            }
        },
        {
            "username":"Crocodile",
            "email": "Crocoman@leemail.com",
            "password": "Grass",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Lets Go",
                    "catagory": "Photography",
                    "description": "Zoo pictures",
                    "city": "Zoo",
                    "state": "CA"
            }
        },
        {
            "username":"Bluebird",
            "email": "Bluejay@kmart.com",
            "password": "lapell",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Action Snips",
                    "catagory": "Photography",
                    "description": "Skydiving photos",
                    "city": "New York",
                    "state": "NY"
            }
        },
        {
            "username":"Denki",
            "email": "Kaminari@Denki.com",
            "password": "Deeeennnnkkkkiiii",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Electricity",
                    "catagory": "Photography",
                    "description": "Why am I taking photos?",
                    "city": "Karen",
                    "state": "AZ"
            }
        },
        {
            "username":"Toast",
            "email": "loafingaround@oppmail.com",
            "password": "YeastYeet",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Toasty pics",
                    "catagory": "Photography",
                    "description": "Fresh out of the oven",
                    "city": "whiton",
                    "state": "IA"
            }
        },
        {
            "username":"A1EKTR1K",
            "email": "IwontCheckThisEver@gmail.com",
            "password": "sohowaboutthatthen",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "Give me your money",
                    "catagory": "Photography",
                    "description": "Kinda alright at taking pictures ig",
                    "city": "Constant Pain",
                    "state": "TN"
            }
        }
        
    ]
} ];

db.Product.remove({})
  .then(() => db.Product.collection.insertMany(productsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
