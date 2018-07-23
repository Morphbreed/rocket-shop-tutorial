import '../imports/ui/layout/layout'
import '../imports/ui/nav/nav'

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