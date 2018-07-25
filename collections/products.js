import { Mongo } from 'meteor/mongo';
import '../lib/permissions'

const Data = new Mongo.Collection('Products');

Data.featured = function() {
    var featuredSkus = ["illudium-q36", "honeymoon-mars","one-way-reentry"];
    return Data.find({sku: {$in: featuredSkus}});
}

Data.allow({
  update: function(userid, product) {
    return isAdmin();
  },
  insert: function(userid, product) {
    return isAdmin();
  },
  remove: function(userid, product) {
    return isAdmin();
  },
});

export const Products = Data;