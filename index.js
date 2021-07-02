const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
  
//   return tutorials
// }



const titleCased = function (title) {
  
  tutorials.forEach(curString => { 

    let substringArray = curString.split(' ').map(curentSubstring => curentSubstring[0].toUpperCase() + curentSubstring.substring(1));

    tutorials[tutorials.indexOf(curString)] =substringArray.join(' ')  

  })
return tutorials
  // const tutorials = title.map((str) =>
  //   str
  //     .split(" ")
  //     .map((word) => word[0].toUpperCase() + word.substring(1))
  //     .join(" ")
  // );
  // return tutorials;
};