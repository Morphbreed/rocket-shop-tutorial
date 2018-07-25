import { Template } from 'meteor/templating';
import { Products } from '../../../collections/products';
import './show.html';

Template.vendorsShow.helpers({
    products: function() {
        return Products.find({'vendor.id': this.id});
    }   
});