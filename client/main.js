import '../lib/router'
import '../lib/permissions'
import './main.html'
import './config/accounts'
import * as accounting from './scripts/accounting'
import * as showdown from './scripts/showdown'
   
UI.registerHelper("money", function(amount) {
    return accounting.formatMoney(amount);
})   

UI.registerHelper("markdown", function(text) {
    var converter = new showdown.Converter();
    return converter.makeHtml(text);
})