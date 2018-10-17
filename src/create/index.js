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
	try {
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
		var negation = array[0].substring(array[0].length - 1);

		if(negation === '不') {
			array[0] = array[0].substring(0, array[0].length - 1)
		}

		document.getElementById('result').innerHTML = "expect(" + array[0] + ").to." + (negation === '不' ? "not." : "") + "be." + list[name] + "(" + array[1] + ")";
	} catch (e) {
		alert('语法错误，请重新输入')
	}

}

