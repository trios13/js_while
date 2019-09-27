var upper = 10000;
var intRand = getRandomNumber(upper);
var guess;
var attempts = 0;
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while (guess !== intRand)
{
  guess = getRandomNumber(upper);
  attempts += 1;
}

document.write("<p> The random number was: " + intRand + "<p>");
document.write("<p>It took the computer " + attempts + "attempts to guess the number.<p>");
