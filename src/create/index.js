var expect = chai.expect;
var text;
var array;
var list = {
	"等于": "equal",
	"大于": "above",
	"小于": "below",
	"大于等于": "at.least",
	"小于等于": "at.most",
	"true": "true",
	"false": "false"
};
var name;
document.getElementById('start').onclick = function() {
	var text = document.getElementById('codeTextarea').value
	// xxx等于xxx
	if (text.match('等于')) {
		name = "等于";
		array = text.split("等于");
	} else if (text.match('大于')) {
		name = "大于";
		array = text.split("大于");
	} else if (text.match('小于')) {
		name = "小于";
		array = text.split("小于");
	} else if (text.match('大于等于') || text.match('不小于')) {
		name = "大于等于";
		array = text.split("大于等于") || text.split("不小于");
	} else if (text.match('小于等于') || text.match('不大于')) {
		name = "小于等于";
		array = text.split('小于等于') || text.split('不大于');
	} else if (text.match('true')) {
		name = "true";
		array = text.split('为true');
	}  else if (text.match('false')) {
		name = "false";
		array = text.split('为false');
	}

	document.getElementById('result').innerHTML = "expect(" + array[0] + ").to.be." + list[name] + "(" + array[1] + ")";
	// try {
	// 	if (!document.getElementById('codeTextarea').value) {
	// 		return;
	// 	}
	// 	eval(document.getElementById('codeTextarea').value)
	// 	// expect(add(1, 1)).to.be.equal(2);
	// 	// expect(‘’).to.be.equal(2);
	// 	document.getElementById('result').innerHTML = "语法正确";
   	// 	throw "success";
	// }
	// catch (e) {

	// 	console.log(e)
	// 	console.log(typeof e.toString())
	// 	text = e.toString();
	// 	if (text.match('AssertionError')) {
	// 		text = e.toString().replace('AssertionError:', '断言判断错误：');
	// 	} else if (text.match('TypeError')) {
	// 		text = e.toString().replace('TypeError:', '');
	// 		text = text.replace('is not a function', '语法错误')
	// 	} else if (text.match('Error: Invalid Chai property')) {
	// 		text = e.toString().replace('Error: Invalid Chai property:', '');
	// 		text = text.replace('Did you mean', '不是Chai的API，你需要的是')
	// 	}

	// 	document.getElementById('result').style.color = 'red'
	// 	document.getElementById('result').innerHTML = text;
	// }

}

