const reverse = function(x: number) {
  const inf: number = Math.pow(2, 31);

  if (x > inf || x < -inf) {
    return 0;
  }

  return [...x.toString()].reverse().join('');
}

export default reverse;
