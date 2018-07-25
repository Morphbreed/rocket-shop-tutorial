import {Mongo} from 'meteor/mongo'

const Data = new Mongo.Collection('Vendors');

export const Vendors = Data;