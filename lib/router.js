import '../imports/ui/layout/layout'
import '../imports/ui/nav/nav'
import {Products} from '../collections/products'
import {Vendors} from '../collections/vendors'
import { Template } from 'meteor/templating';
import '../imports/ui/product-tile/product_tile'

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
})

Router.route('/', function () {
    import '../imports/pages/home';
    this.render('homeIndex', {
        data: function() {
            return {
                message: 'Welcome to the Rocket Shop!',
            }
        }
    });
}, {
    name: 'homeIndex'
});

Router.route('/about', function () {
    import '../imports/pages/home/about'
    this.render('homeAbout');
}, {
    name: 'homeAbout'
});

Router.route('/contact', function () {
    import '../imports/pages/home/contact';
    this.render('homeContact');
}, {
    name: 'homeContact'
});

Router.route('/products/:sku', function () {
    import all from '../imports/pages/products/show';
    this.render('productShow', {
        data: function() {
            return Products.findOne({sku: this.params.sku});
        }
    });
}, {
    name: 'productShow'
});

Router.route('/vendors/:slug', function () {
    import '../imports/pages/vendors/show';
    this.render('vendorsShow', {
        data: function() {
            return Vendors.findOne({slug: this.params.slug});
        }
    });
}, {
    name: 'vendorsShow'
});