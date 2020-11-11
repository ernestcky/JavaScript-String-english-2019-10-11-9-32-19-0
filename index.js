// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
for (var i = 0; i < sentence.length; i++) {
  if (i == 0)
    sentence = sentence.charAt(i).toUpperCase() + sentence.slice(i+1);
  else if (sentence.charAt(i-1) == " ")
    sentence = sentence.slice(0, i) + sentence.charAt(i).toUpperCase() + sentence.slice(i+1);
}
console.log(sentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.slice(1));

