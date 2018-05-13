var expect = chai.expect;

document.getElementById('start').onclick = function() {
	console.log(eval(document.getElementById('text').value))

	try {
		eval(document.getElementById('text').value)
		// expect(add(1, 1)).to.be.equal(2);
		console.log('success')
		document.getElementById('result').innerHTML = "success";
   		throw "success";
	}
	catch (e) {
		console.log(e)
	}
 
}
