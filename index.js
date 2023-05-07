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

function titleCased() {
  let tutSplit = tutorials.map((tutElements => tutElements.split(" ")));
  for (let tutStr of tutSplit){
    for (let i=0;i<tutStr.length;i++){
      tutStr[i] = (tutStr[i].charAt(0).toUpperCase() + tutStr[i].slice(1));
      };
    };
  let tutRejoined = tutSplit.map((tutElements) => tutElements.join(" "));
return tutRejoined
} 
