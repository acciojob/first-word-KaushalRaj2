function firstWord(s) {
  // your code here
	if(s.length==0){
		return ""
	}
	let st=s.trim();
	let arr=st.split(" ");
	let result="";
	result+=arr[0];
	return result;
}

// Do not change the code below
// const s = prompt("Enter String:");
// alert(firstWord(s));
