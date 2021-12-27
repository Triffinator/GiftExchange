var http = require("http");
var fs = require("fs");
var path = require("path");
var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

const { v4: uuidv4 } = require('uuid');

var databaseUrl = "mongodb://localhost:4330/";

function Error405(endpoint, request, response, desiredRequestType)
{
  response.writeHead(405, {"Content-Type": "text/plain"});
  response.write("Error 405! " + request.method + " is not allowed for this query.");
  response.write("Please try using a POST query, instead.");
  return response.end();
}
