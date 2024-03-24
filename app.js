var count = document.getElementById("vowelCount");

function countVowel(str) {
  str = str.toLowerCase();
  let vowelArray = ["a", "e", "i", "o", "u"];
  count = 0;
  for (let letter of str) {
    if (vowelArray.includes(letter)) {
      count++;
      vowelCount.classList.add('flash');
    } else {
      vowelCount.classList.remove('flash');

    }
  }
  vowelCount.innerHTML = count;
}
