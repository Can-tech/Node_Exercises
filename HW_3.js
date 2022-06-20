//calculateServer.js
const circleArea = (radi) => {
    return Math.PI*radi*radi;
}
const circleCircumference = (radi) => {
    return Math.PI*radi*2;
}
module.exports={

    circleArea,
    circleCircumference
}


//index.js
const {circleArea,circleCircumference} = require("./Moduler");

console.log(circleArea(4));
console.log(circleCircumference(4));
