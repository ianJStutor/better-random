/*
This is a linear congruential generator algorithm from the book <cite>Numerical Recipes: The Art of Scientific Computing</cite>, 1986, by William H. Press, Saul A. Teukolsky, William T. Vetterling, and Brian P. Flannery.

It's NOT suitable for cryptography, but stable in production, and is a lot faster than more modern, more sophisticated algorithms (like Mersenne Twister or ARC4, for example).
*/

function betterRandom(seed = Date.now()){
	const a = 1664525,
		  c = 1013904223,
		  m = Math.pow(2, 32);
	var min, max;
    if (isNaN(Number(seed))) seed = Date.now();

	function nextSeed() {
		seed = (seed * a + c) % m;
	}
	function nextInt()   {
		nextSeed();
		if (min === undefined || max === undefined) return seed;
		return Math.floor(seed/m * (max-min+1)+min);
	}
	function nextFloat() {
		nextSeed();
		if (min === undefined || max === undefined) return seed/m;
		return (seed/m) * (max-min)+min;
	}
	function range(mn, mx=0) {
		if (mn === undefined) {
			min = max = undefined;
			return;
		}
		const n = Math.min(mn, mx),
			  x = Math.max(mn, mx);
		min = isNaN(n) ? undefined : n;
		max = isNaN(x) ? undefined : x;
		return {nextInt, nextFloat, range};
	}

	return {nextInt, nextFloat, range};
}

export { betterRandom };
