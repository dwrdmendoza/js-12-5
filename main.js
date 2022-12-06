// An anagram is the result o frearranging the letters of a word to produce a new word
// Note: anagrama are case insensitive
// Complete the function to return true if the two argumnts given are anagrams of each other; return false otherwise.
// Examples "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubek"

const isAnagram = (test, original) =>
[...test.toLowerCase()].sort().join() == [...original.toLowerCase()].sort().join()