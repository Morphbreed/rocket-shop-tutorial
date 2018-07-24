import { Mongo } from 'meteor/mongo';

const Data = new Mongo.Collection('Products');

Data.featured = function() {
    var featuredSkus = ["illudium-q36", "honeymoon-mars","one-way-reentry"];
    return Data.find({sku: {$in: featuredSkus}});
  }
  
  Data.findOne = function(args) {
    console.log(Data.findOne({sku: args.sku}).fetch());
    return Data.find({sku: args.sku});   
  }

export const Products = Data;