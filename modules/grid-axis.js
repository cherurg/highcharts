/*
 Highcharts JS v5.0.6-modified (2017-01-26)
 GridAxis

 (c) 2016 Lars A. V. Cabrera

 --- WORK IN PROGRESS ---

 License: www.highcharts.com/license
*/
(function(n){"object"===typeof module&&module.exports?module.exports=n:n(Highcharts)})(function(n){(function(h){var n=h.dateFormat,p=h.each,t=h.isObject,r=h.pick,l=h.wrap,m=h.Axis,u=h.Chart,q=h.Tick;m.prototype.isOuterAxis=function(){var a=this,c=-1,b=!0;p(this.chart.axes,function(e,f){e.side===a.side&&(e===a?c=f:0<=c&&f>c&&(b=!1))});return b};q.prototype.getLabelWidth=function(){return this.label.getBBox().width};m.prototype.getMaxLabelLength=function(a){var c=this.tickPositions,b=this.ticks,e=0;
if(!this.maxLabelLength||a)p(c,function(a){(a=b[a])&&a.labelLength>e&&(e=a.labelLength)}),this.maxLabelLength=e;return this.maxLabelLength};m.prototype.addTitle=function(){var a=this.chart.renderer,c=this.axisParent,b=this.horiz,e=this.opposite,f=this.options,d=f.title,g;this.showAxis=g=this.hasData()||r(f.showEmpty,!0);f.title="";this.axisTitle||((f=d.textAlign)||(f=(b?{low:"left",middle:"center",high:"right"}:{low:e?"right":"left",middle:"center",high:e?"left":"right"})[d.align]),this.axisTitle=
a.text(d.text,0,0,d.useHTML).attr({zIndex:7,rotation:d.rotation||0,align:f}).addClass("highcharts-axis-title").css(d.style).add(c),this.axisTitle.isNew=!0);this.axisTitle[g?"show":"hide"](!0)};h.dateFormats={W:function(a){a=new Date(a);var c=0===a.getUTCDay()?7:a.getUTCDay(),b=a.getTime(),e=new Date(a.getUTCFullYear(),0,1,-6);a.setDate(a.getUTCDate()+4-c);return 1+Math.floor(Math.floor((b-e)/864E5)/7)},E:function(a){return n("%a",a,!0).charAt(0)}};l(q.prototype,"addLabel",function(a){var c=this.axis,
b=void 0!==c.options.categories,e=c.tickPositions,e=this.pos!==e[e.length-1];(!c.options.grid||b||e)&&a.apply(this)});l(q.prototype,"getLabelPosition",function(a,c,b,e){var f=a.apply(this,Array.prototype.slice.call(arguments,1)),d=this.axis,g=d.options,k=g.tickInterval||1,h,l;g.grid&&(h=g.labels.style.fontSize,l=d.chart.renderer.fontMetrics(h,e),h=l.b,l=l.h,d.horiz&&void 0===g.categories?(g=d.axisGroup.getBBox().height,k=this.pos+k/2,f.x=d.translate(k)+d.left,k=g/2+l/2-Math.abs(l-h),f.y=0===d.side?
b-k:b+k):(void 0===g.categories&&(k=this.pos+k/2,f.y=d.translate(k)+d.top+h/2),k=this.getLabelWidth()/2-d.maxLabelLength/2,f.x=3===d.side?f.x+k:f.x-k));return f});l(m.prototype,"tickSize",function(a){var c=a.apply(this,Array.prototype.slice.call(arguments,1)),b;this.options.grid&&!this.horiz&&(b=2*Math.abs(this.defaultLeftAxisOptions.labels.x),this.maxLabelLength||(this.maxLabelLength=this.getMaxLabelLength()),b=this.maxLabelLength+b,c[0]=b);return c});l(m.prototype,"getOffset",function(a){var c=
this.chart.axisOffset,b=this.side,e,f,d=this.options,g=d.title,k=g&&g.text&&!1!==g.enabled;this.options.grid&&t(this.options.title)?(f=this.tickSize("tick")[0],c[b]&&f&&(e=c[b]+f),k&&this.addTitle(),a.apply(this,Array.prototype.slice.call(arguments,1)),c[b]=r(e,c[b]),d.title=g):a.apply(this,Array.prototype.slice.call(arguments,1))});l(m.prototype,"renderUnsquish",function(a){this.options.grid&&(this.labelRotation=0,this.options.labels.rotation=0);a.apply(this)});l(m.prototype,"setOptions",function(a,
c){c.grid&&this.horiz&&(c.startOnTick=!0,c.minPadding=0,c.endOnTick=!0);a.apply(this,Array.prototype.slice.call(arguments,1))});l(m.prototype,"render",function(a){var c=this.options,b,e,f,d,g,k,h=this.chart.renderer;if(c.grid){if(b=2*Math.abs(this.defaultLeftAxisOptions.labels.x),b=this.maxLabelLength+b,e=c.lineWidth,this.rightWall&&this.rightWall.destroy(),a.apply(this),a=this.axisGroup.getBBox(),this.horiz&&(this.rightWall=h.path(["M",a.x+this.width+1,a.y,"L",a.x+this.width+1,a.y+a.height]).attr({stroke:c.tickColor||
"#ccd6eb","stroke-width":c.tickWidth||1,zIndex:7,class:"grid-wall"}).add(this.axisGroup)),this.isOuterAxis()&&this.axisLine&&(this.horiz&&(b=a.height-1),e)){a=this.getLinePath(e);g=a.indexOf("M")+1;k=a.indexOf("L")+1;f=a.indexOf("M")+2;d=a.indexOf("L")+2;if(0===this.side||3===this.side)b=-b;this.horiz?(a[f]+=b,a[d]+=b):(a[g]+=b,a[k]+=b);this.axisLineExtra?this.axisLineExtra.animate({d:a}):this.axisLineExtra=h.path(a).attr({stroke:c.lineColor,"stroke-width":e,zIndex:7}).add(this.axisGroup);this.axisLine[this.showAxis?
"show":"hide"](!0)}}else a.apply(this)});l(u.prototype,"render",function(a){var c=25/11,b,e;p(this.axes,function(a){var d=a.options;d.grid&&(e=d.labels.style.fontSize,b=a.chart.renderer.fontMetrics(e),"datetime"===d.type&&(d.units=[["millisecond",[1]],["second",[1]],["minute",[1]],["hour",[1]],["day",[1]],["week",[1]],["month",[1]],["year",null]]),a.horiz?d.tickLength=d.cellHeight||b.h*c:(d.tickWidth=1,d.lineWidth||(d.lineWidth=1)))});a.apply(this)})})(n)});