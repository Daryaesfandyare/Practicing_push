let yesOrNo = ['DEFINITELY!', 'yes', 'of course', 'hell no', 'no', 'absolutely not', 'maybe', 'probably'];
const randomiser = (ques) => {
  if(typeof ques === 'string'){
    return yesOrNo[Math.floor(Math.random() * yesOrNo.length)]; 
 } 
}
console.log(randomiser('Should I accept the company offer?'));
    
