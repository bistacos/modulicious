// standard variety importation
import Bordeaux from './Bordeaux.js';
//aliasing a function
import {burg as lookABurgAlias} from './burgundy.js';
/* importing an entire module into the current scope: note that 
*  import './napa.js' would import only the >>default<< value of 
* napa.js, rather than the entire module. */
import * as napa from './napa.js';
import {displayInfo as dispInf} from './fingerLakes.js';

var text = 'Grape and Country of Bordeaux: ' + new Bordeaux("Cab", "Fr.");
var text2 = 'Grape and Country of Burgundy: ' + lookABurgAlias(); 
var text3 = napa.displayNapaInfo();
var text4 = dispInf();

document.write(text + '\n\n' + text2 + '\n\n' + text3 + '\n\n' + text4);