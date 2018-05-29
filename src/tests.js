var expect = chai.expect;
var text;
document.getElementById('start').onclick = function() {
	// console.log(eval(document.getElementById('codeTextarea').value))
	
	try {
		if (!document.getElementById('codeTextarea').value) {
			return;
		}
		eval(document.getElementById('codeTextarea').value)
		// expect(add(1, 1)).to.be.equal(2);
		// expect(‘’).to.be.equal(2);
		document.getElementById('result').innerHTML = "语法正确";
   		throw "success";
	}
	catch (e) {

		console.log(e)
		console.log(typeof e.toString())
		text = e.toString();
		if (text.match('AssertionError')) {
			text = e.toString().replace('AssertionError:', '断言判断错误：');
		} else if (text.match('TypeError')) {
			text = e.toString().replace('TypeError:', '');
			text = text.replace('is not a function', '语法错误')
		} else if (text.match('Error: Invalid Chai property')) {
			text = e.toString().replace('Error: Invalid Chai property:', '');
			text = text.replace('Did you mean', '不是Chai的API，你需要的是')
		}

		document.getElementById('result').style.color = 'red'
		document.getElementById('result').innerHTML = text;
	}

}

