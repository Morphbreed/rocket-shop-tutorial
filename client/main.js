import '../lib/router'
import './main.html'
import * as accounting from './scripts/accounting'
   
UI.registerHelper("money", function(amount) {
    return accounting.formatMoney(amount);
})



