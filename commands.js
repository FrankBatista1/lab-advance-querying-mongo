
db.companies.find({"name" : {$eq: "Babelgum"}}).pretty()
db.companies.find({"number_of_employees": {$gt: 5000}}).limit(20).sort({"number_of_employees" : 1}) //displayed a bunch of embaded code
db.companies.find({"founded_year" : {$gt: 1999, $lt: 2006}}, {"founded_year" : 1, "name" : 1}).pretty()
db.companies.find({founded_year : {$lt: 2011}, "acquisition.price_amount" : {$gt: 100000000}},{"name" : 1 , "ipo" : 1})// when you are using gt and lt has to be in the same {}???????
db.companies.find({"number_of_employees" : {$lt : 1000},"founded_year" : {$lt: 2005}}).limit(10).sort({"number_of_employees" : 1}).pretty()
db.companies.find({"partners" : {$exists: -1}})
db.companies.find({"category_code" :  null})
db.companies.find({"number_of_employees": {$gte : 100, $lt: 1000}}, {"name" : 1, "number_of_employees" : 1})
db.companies.find().sort({"ipo" : -1})
db.companies.find().sort({"number_of_employees": -1}).limit(10)
db.companies.find({"founded_month" : {$gt: 6}}).limit(1000)
db.companies.find({"founded_year" : {$lt: 2000}, "acquisition.price_amount" : {$gt : 10000000}})
db.companies.find({"acquisition.acquired_year" : {$gt: 2010}}, {"name": 1, "acquisition" : 1} ).sort({"acquisition.price_amount" : 1})
db.companies.find({},{"name" : 1, "founded_year" : 1}).sort({"founded_year" : 1})// why {}                                                          displays only nulls, doesn't print all the companies
db.companies.find({"founded_month" : {$lte: 7}}).sort({"acquisition.price_amount" : 1}).limit(10).pretty()
db.companies.find({"category_code" : "web", "number_of_employees" : {$gt: 4000}}).sort({"number_of_employees" : -1})





