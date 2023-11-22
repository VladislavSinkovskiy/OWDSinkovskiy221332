function gcd (a, b) {
    if(a<0) return 0
	if(b<0) return 0
	if (b > a) return gcd(b, a);
	if (!b) return a;
	return gcd(b, a % b);
}
console.log(gcd(8, 16));	