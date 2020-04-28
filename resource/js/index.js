import '../scss/test.scss';
// import $ from 'jquery'
import * as util from './utility.js'
///////////////////////////////////////////////////////////////////////
document.getElementById("js_open").addEventListener("click", util.modalOpen, false);
$("#js_open").on("click", util.changeBig);