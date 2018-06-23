import test from "./helper-functions";
import '../style/index.scss';
// import img from '../images/webpack.jpg';

const start = test.hello("test");
const end = test.goodbye("test test");

console.log(start);
console.log(end);