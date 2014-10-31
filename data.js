myApp.factory('Users', function(){
	var users = [
	  {
	    "_id": "54528fdee3cf7e90f0d455d1",
	    "name": "Claudette Rocha",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 21,
	    "email": "claudetterocha@dymi.com",
	    "phone": "(934) 566-3980",
	    "location": "Macdona, American Samoa"
	  },
	  {
	    "_id": "54528fdea6fa71cd812c883c",
	    "name": "Jimmie Stewart",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 19,
	    "email": "jimmiestewart@dymi.com",
	    "phone": "(962) 412-3007",
	    "location": "Chautauqua, Nevada"
	  },
	  {
	    "_id": "54528fde2b15628c02ab413e",
	    "name": "Ellison Charles",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 22,
	    "email": "ellisoncharles@dymi.com",
	    "phone": "(992) 421-3181",
	    "location": "Reinerton, Montana"
	  },
	  {
	    "_id": "54528fde08beb74b059117e9",
	    "name": "Carmella Boyd",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 23,
	    "email": "carmellaboyd@dymi.com",
	    "phone": "(947) 472-3408",
	    "location": "Finzel, Arkansas"
	  },
	  {
	    "_id": "54528fde6efa11a163fab9e5",
	    "name": "Stokes Mcintyre",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 22,
	    "email": "stokesmcintyre@dymi.com",
	    "phone": "(983) 461-3961",
	    "location": "Blende, Colorado"
	  },
	  {
	    "_id": "54528fde23ee26ba9e94ae2f",
	    "name": "Sears Morse",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 30,
	    "email": "searsmorse@dymi.com",
	    "phone": "(821) 438-2189",
	    "location": "Lacomb, Michigan"
	  },
	  {
	    "_id": "54528fde8ebc866bd1e00487",
	    "name": "Leigh Cooke",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 28,
	    "email": "leighcooke@dymi.com",
	    "phone": "(971) 465-3020",
	    "location": "Chemung, West Virginia"
	  },
	  {
	    "_id": "54528fde4b163a89edf02b5f",
	    "name": "Williamson Page",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 28,
	    "email": "williamsonpage@dymi.com",
	    "phone": "(851) 485-2537",
	    "location": "Bagtown, Alabama"
	  },
	  {
	    "_id": "54528fde76a8bf696edb8475",
	    "name": "Lilly Schmidt",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 30,
	    "email": "lillyschmidt@dymi.com",
	    "phone": "(922) 580-3298",
	    "location": "Fairfield, Alaska"
	  },
	  {
	    "_id": "54528fde4bec50718d4112b0",
	    "name": "Barrera Farrell",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 26,
	    "email": "barrerafarrell@dymi.com",
	    "phone": "(935) 518-3301",
	    "location": "Grahamtown, Minnesota"
	  },
	  {
	    "_id": "54528fde7f16714949666ab5",
	    "name": "Burris Sexton",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 15,
	    "email": "burrissexton@dymi.com",
	    "phone": "(816) 580-2073",
	    "location": "Allentown, Kansas"
	  },
	  {
	    "_id": "54528fde86c19fb7dfda9fed",
	    "name": "Hart Frederick",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 25,
	    "email": "hartfrederick@dymi.com",
	    "phone": "(961) 567-2974",
	    "location": "Jackpot, Puerto Rico"
	  },
	  {
	    "_id": "54528fdea9ccd7de20acef53",
	    "name": "Kate Clemons",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 29,
	    "email": "kateclemons@dymi.com",
	    "phone": "(946) 535-2629",
	    "location": "Cobbtown, Indiana"
	  },
	  {
	    "_id": "54528fde51dc1b08ead1d4df",
	    "name": "Lynn Greene",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 21,
	    "email": "lynngreene@dymi.com",
	    "phone": "(982) 576-3601",
	    "location": "Bartonsville, Idaho"
	  },
	  {
	    "_id": "54528fdee178e32021dfb582",
	    "name": "Sharon Terrell",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 23,
	    "email": "sharonterrell@dymi.com",
	    "phone": "(824) 558-3051",
	    "location": "Rushford, Maine"
	  },
	  {
	    "_id": "54528fde3b66afeb62533ec3",
	    "name": "Welch Battle",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 27,
	    "email": "welchbattle@dymi.com",
	    "phone": "(862) 430-2871",
	    "location": "Riceville, Arizona"
	  },
	  {
	    "_id": "54528fde9764bbb15261a29a",
	    "name": "Edna West",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 23,
	    "email": "ednawest@dymi.com",
	    "phone": "(838) 433-2617",
	    "location": "Oneida, Tennessee"
	  },
	  {
	    "_id": "54528fdec00f1bfc441a4479",
	    "name": "Nadia Peters",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 22,
	    "email": "nadiapeters@dymi.com",
	    "phone": "(884) 566-3406",
	    "location": "Epworth, New Jersey"
	  },
	  {
	    "_id": "54528fde15681e7ba20d467f",
	    "name": "Minerva Mccoy",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 21,
	    "email": "minervamccoy@dymi.com",
	    "phone": "(922) 578-3009",
	    "location": "Leroy, Kentucky"
	  },
	  {
	    "_id": "54528fde52a08d9c9addd355",
	    "name": "Bethany Hicks",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 23,
	    "email": "bethanyhicks@dymi.com",
	    "phone": "(920) 537-3452",
	    "location": "Bentonville, Hawaii"
	  },
	  {
	    "_id": "54528fdebcdd89cb2650f848",
	    "name": "Ella Ford",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 28,
	    "email": "ellaford@dymi.com",
	    "phone": "(911) 593-2374",
	    "location": "Dante, Maryland"
	  },
	  {
	    "_id": "54528fdebc69725727938d6f",
	    "name": "Donaldson Bush",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 29,
	    "email": "donaldsonbush@dymi.com",
	    "phone": "(970) 508-3971",
	    "location": "Mapletown, New Hampshire"
	  },
	  {
	    "_id": "54528fdeb121f12c67776302",
	    "name": "Marcella Garrison",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 19,
	    "email": "marcellagarrison@dymi.com",
	    "phone": "(909) 451-3237",
	    "location": "Tedrow, Vermont"
	  },
	  {
	    "_id": "54528fdeff2d30dd47a6eb8c",
	    "name": "Hoffman Whitehead",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 30,
	    "email": "hoffmanwhitehead@dymi.com",
	    "phone": "(931) 471-3988",
	    "location": "Waterloo, New Mexico"
	  },
	  {
	    "_id": "54528fde8381696f1170b995",
	    "name": "Boyle Morgan",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 30,
	    "email": "boylemorgan@dymi.com",
	    "phone": "(989) 438-3216",
	    "location": "National, Rhode Island"
	  },
	  {
	    "_id": "54528fde821d718ffb049bfd",
	    "name": "Marcia Richard",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 19,
	    "email": "marciarichard@dymi.com",
	    "phone": "(954) 528-2369",
	    "location": "Orviston, North Carolina"
	  },
	  {
	    "_id": "54528fde2a436ce6162ef92c",
	    "name": "Langley Mccarty",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 26,
	    "email": "langleymccarty@dymi.com",
	    "phone": "(849) 448-2226",
	    "location": "Drytown, Northern Mariana Islands"
	  },
	  {
	    "_id": "54528fdee469d35fe6d9198b",
	    "name": "Catalina Ortiz",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 27,
	    "email": "catalinaortiz@dymi.com",
	    "phone": "(950) 546-2167",
	    "location": "Croom, Wisconsin"
	  },
	  {
	    "_id": "54528fde0d6f4083b7b79bca",
	    "name": "Rowena Holcomb",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 28,
	    "email": "rowenaholcomb@dymi.com",
	    "phone": "(879) 498-3292",
	    "location": "Needmore, Nebraska"
	  },
	  {
	    "_id": "54528fde3249aef4e222c435",
	    "name": "Cooley Stark",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 29,
	    "email": "cooleystark@dymi.com",
	    "phone": "(855) 579-3221",
	    "location": "Escondida, South Dakota"
	  },
	  {
	    "_id": "54528fde04e4e20e2e97e7a6",
	    "name": "Virginia Williams",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 29,
	    "email": "virginiawilliams@dymi.com",
	    "phone": "(844) 502-2001",
	    "location": "Sparkill, Oklahoma"
	  },
	  {
	    "_id": "54528fdec9c14e95cc9737a7",
	    "name": "Skinner Garrett",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 18,
	    "email": "skinnergarrett@dymi.com",
	    "phone": "(827) 404-3799",
	    "location": "Smock, Texas"
	  },
	  {
	    "_id": "54528fdea5d3af8db0661f21",
	    "name": "Huffman Cooley",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 16,
	    "email": "huffmancooley@dymi.com",
	    "phone": "(865) 588-3838",
	    "location": "Ribera, Utah"
	  },
	  {
	    "_id": "54528fde73a11f4c81dd66d9",
	    "name": "Marilyn Bullock",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 18,
	    "email": "marilynbullock@dymi.com",
	    "phone": "(967) 493-2893",
	    "location": "Stockwell, Washington"
	  },
	  {
	    "_id": "54528fdef98f37a81d9c5326",
	    "name": "Elba Fitzgerald",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 23,
	    "email": "elbafitzgerald@dymi.com",
	    "phone": "(857) 454-2428",
	    "location": "Ivanhoe, Palau"
	  },
	  {
	    "_id": "54528fdec2de8bf3685c7a6c",
	    "name": "Casey Moses",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 15,
	    "email": "caseymoses@dymi.com",
	    "phone": "(888) 416-2102",
	    "location": "Dellview, Iowa"
	  },
	  {
	    "_id": "54528fde3b9f3618c9d2ef66",
	    "name": "Patti Fernandez",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 21,
	    "email": "pattifernandez@dymi.com",
	    "phone": "(905) 498-3810",
	    "location": "Bladensburg, Connecticut"
	  },
	  {
	    "_id": "54528fde8af4f5dc4aba20e4",
	    "name": "Britney Patel",
	    "photo": "http://placehold.it/32x32",
	    "gender": "female",
	    "age": 26,
	    "email": "britneypatel@dymi.com",
	    "phone": "(900) 419-2587",
	    "location": "Wattsville, Oregon"
	  },
	  {
	    "_id": "54528fde6c5abd3c2f4fb278",
	    "name": "Mcclure Long",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 24,
	    "email": "mcclurelong@dymi.com",
	    "phone": "(880) 569-2603",
	    "location": "Troy, Wyoming"
	  },
	  {
	    "_id": "54528fde8711d0e15882ec9d",
	    "name": "Whitaker Giles",
	    "photo": "http://placehold.it/32x32",
	    "gender": "male",
	    "age": 29,
	    "email": "whitakergiles@dymi.com",
	    "phone": "(858) 527-2801",
	    "location": "Tecolotito, Marshall Islands"
	  }
	];
	return users;
})