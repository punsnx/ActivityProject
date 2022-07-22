var MongoClient = require("mongodb").MongoClient;
var url = process.env.CON_DB;

const dbName = "FaceAttendance";
const dbCollection = "users";

exports.insert = (objData) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection(dbCollection).insertOne(objData, function (err) {
      if (err) throw err;
      db.close();
    });
  });
};

exports.query = (queryData) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    var query = queryData;
    dbo
      .collection(dbCollection)
      .find(query)
      .toArray(function (err, result) {
        if (err) throw err;
        db.close();
      });
  });
};
