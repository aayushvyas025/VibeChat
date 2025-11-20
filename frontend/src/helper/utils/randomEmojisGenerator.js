import {Constant} from "../index"
const {applicationContent} = Constant;
const {emojis} = applicationContent; 

function randomEmojisGenerator() {
 const randomIndex = Math.floor(Math.random() * emojis.length);

 return emojis[randomIndex]; 

} 

export default randomEmojisGenerator;