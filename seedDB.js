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
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "barbershop",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Beauty",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Beauty",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Beauty",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Beauty",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Beauty",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Beauty",
                    "description": "",
                    "city": "",
                    "state": ""
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
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Tattoo",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Tattoo",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Tattoo",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Tattoo",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Tattoo",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Nails",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Nails",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Nails",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Nails",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Nails",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Nails",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Piercings",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Piercings",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Piercings",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Piercings",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Piercings",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Piercings",
                    "description": "",
                    "city": "",
                    "state": ""
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
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Photography",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Photography",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Photography",
                    "description": "",
                    "city": "",
                    "state": ""
            }
        },
        {
            "username":"genericUsername",
            "email": "Email@email.com",
            "password": "Password123",
            "joinDate": "07/13/1850",
            "Company": true,
            "profile": {
                    "profilePicture": "",
                    "companyName": "",
                    "catagory": "Photography",
                    "description": "",
                    "city": "",
                    "state": ""
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
