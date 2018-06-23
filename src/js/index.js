import helpers from "./helper-functions";
import '../style/index.scss';
import sum from "./helper-functions";
// import img from '../images/webpack.jpg';

const start = helpers.hello("test");
const end = helpers.goodbye("test test");
const add = helpers.sum(1, 2);

console.log(start);
console.log(end);
console.log(add);