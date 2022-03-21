import { searchCollection } from './modules/search.js'
import { locationHashChanged } from './modules/router.js'
import { locationHashHome } from './modules/router.js'



searchCollection();
locationHashChanged();
locationHashHome();



