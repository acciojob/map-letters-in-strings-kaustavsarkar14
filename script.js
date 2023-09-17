//your JS code here. If required.
const s = prompt()
function mapLetters(s) {
	const letterMap = {}
	for(let i=0; i<s.length; i++){
	  if(letterMap[s[i]]==undefined)
	    letterMap[s[i]] = [i]
	  else
	    letterMap[s[i]].push(i)
	}
	console.log(letterMap)
	alert(letterMap)
}
mapLetters(s)