/** 
constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true

add whatever parameters you deem necessary

*/

function constructNote(message, letters) {
  const messageFreq = {};
  const letterFreq = {};

  // build frequency counter for letters
  for (let char of letters) {
    letterFreq[char] = letterFreq[char] + 1 || 1;
  }

  // build frequency counter for messages
  for (let char of message) {
    messageFreq[char] = messageFreq[char] + 1 || 1;
  }

  // compare message and letters frequencies
  for (let char in messageFreq) {
    if(!letterFreq[char]) return false;
    if (messageFreq[char] > letterFreq[char]) return false;
  }
  return true;
}
