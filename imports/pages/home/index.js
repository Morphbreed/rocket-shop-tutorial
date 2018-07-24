import './index.html'
import {Products} from '../../../collections/products'

Template.homeIndex.helpers({
    featured: function() {
        return Products.featured();
    }
});