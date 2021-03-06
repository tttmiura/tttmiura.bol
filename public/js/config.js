/*
 * config.js
 */
var VIDEO = {
	videos : [
		{
			id : '48dJo93Crzo',
			title : 'HANA氏 その１'
		},{
			id : 'WgKbfxwVuXE',
			title : 'ほーりー その１'
		},{
			id : 'g_rCjCbI9PM',
			title : 'ちょるる その１'
		},{
			id : 'zR4TOBOVmxA',
			title : 'ちょるる その２'
		},{
			id : 'On6ivOoRCN0',
			title : 'HANA氏 その２'
		},{
			id : '6P4gSQWHfhI',
			title : 'ほーりー その２'
		},{
			id : 'GhAyfmGlPcI',
			title : 'ちょるる その３'
		},{
			id : 'iHIblDnJDUY',
			title : 'HANA氏 その３'
		},{
			id : 'kXvz6EQInc8',
			title : 'HANA氏 その４'
		},{
			id : 'uTWPxRFLEnE',
			title : 'HANA氏 その５'
		},{
			id : 'oeZMmVCGBPU',
			title : 'ほーりー その３'
		},{
			id : 'FdZ4PMr3NeI',
			title : 'ほーりー その４'
		},{
			id : 'Z9kh6NiKGBk',
			title : 'NAKA その１'
		}
	],
	initVideoFrame : function() {
		if(VIDEO.videos) {
			$.each(VIDEO.videos, function(i, video) {
				var section = $('<section id="sectionHistory' + i + '"></section>');
				var title = $('<h3></h3>');
				title.text(video.title);
				section.append(title);

				var frame = $('<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/' + video.id + '?rel=0" frameborder="0" allowfullscreen></iframe>');
				section.append(frame);

				$('#sectionHistory').append(section);
			});
		}
	}
};

