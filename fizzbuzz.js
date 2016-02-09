<doctype! JavaScript>

for ( givenNumber = 1; givenNumber <= 100; givenNumber++)

{
  if (givenNumber % 3 === 0 && givenNumber % 5  === 0)
   console.log("fizzbuzz")
  else if (givenNumber % 3 === 0)
   console.log("fizz")
  else if (givenNumber % 5 === 0)
   console.log("buzz")
  else
   console.log(givenNumber)
}
