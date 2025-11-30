function trailingZeros(n) {
  //your JS code here. If required.
	let res=1;
	for(let i=1;i<=n;i++){
		res*=i;
	}
	let Sres=res.toString();
	let cnt=0;
	for(let i=Sres.length-1;i>=0;i--){
		if(Sres[i]==0){
			cnt++;
		}
		else{
			break;
		}
	}
  return cnt;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
