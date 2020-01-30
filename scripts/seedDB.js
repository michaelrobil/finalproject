const mongoose = require("mongoose");
const db = require("../models");
// const accountsSeed = require("../fakePeople.json");
// const apptsSeed = require("../appts.json");
// const postsSeed = require("../userPosts.json")

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/servproject");
 const accountsSeed = [
  {
    email: "Pasteryman@totallyrealemail.com",
    password: "Iamtherealgingerbreadman",
    companyName: "Bread Head",
    companyCategory: "salon",
    companyDescription: "I will put yeast in your hair",
    companyCity: "Loaf Town",
    companyState: "TN"
},    {
  email: "SleepyBoy@hotemail.com",
  password: "469205",
  companyCategory: "barbershop",
  companyName: "Clips and Snips",
  companyDescription: "Very soft and sweet boy",
  companyCity: "Middletown",
  companyState: "GA"
},
{
  email: "Email123@email.com",
  password: "Password123",
  companyImageURL: "https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg",
  companyCategory: "beauty",
  companyName: "Beauty Inc",
  companyDescription: "High end beauty salon",
  companyCity: "Hollywood",
  companyState: "CA"
},
{
  email: "Ieatchildren@tastychildren.com",
  password: "123456",
  companyImageURL: "https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg",
  companyCategory: "tattoo",
  companyName: "Dink it & Ink it",
  companyDescription: "Dink Donk",
  companyCity: "Miami",
  companyState: "FL"
},
{
  email: "one@tastychildren.com",
  password: "123456",
  companyImageURL: "https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg",
  companyCategory: "tattoo",
  companyName: "one",
  companyDescription: "Dink Donk",
  companyCity: "Miami",
  companyState: "FL"
},




 ]
 const apptsSeed =[{
  fullName: "John Wick",
  apptTime: "Morning: 8am - 12pm",
}]
 const postsSeed =[
  {
    accountID: "testID",
    postImageCaption: "this is a sample caption",
    postImageURL: "https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg"
},

 ]
db.Accounts.remove({})
  .then(() => db.Accounts.collection.insertMany(accountsSeed))
  .then(data => {
    console.log(data.result.n + " account records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Appointments.remove({})
  .then(() => db.Appointments.collection.insertMany(apptsSeed))
  .then(data => {
    console.log(data.result.n + " appointment records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.UserPosts.remove({})
  .then(() => db.UserPosts.collection.insertMany(postsSeed))
  .then(data => {
    console.log(data.result.n + " user post records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
