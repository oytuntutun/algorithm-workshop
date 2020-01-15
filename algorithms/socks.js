// HackerRank challenge:

// Complete the sockMerchant function in the editor below. It must return an
// integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

const socks = (n, arr) => {
  let sorted = arr.sort((a, b) => a - b);
  let pairs = 0;

  // arr.length could be used instead of n
  for (let i = 0; i < n - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      i += 1;
    }
  }

  return pairs;
}



export default socks
