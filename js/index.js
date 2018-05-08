var pudArray=[
	{'item':'美体','href':'javascript:;'},
	{'item':'美容类','href':'javascript:;'},
	{'item':'初级美甲','href':'javascript:;'},
	{'item':'染发','href':'javascript:;'},
	{'item':'皮肤管理','href':'javascript:;'},
	{'item':'蔡依林商品','href':'javascript:;'},
	{'item':'调养','href':'javascript:;'},
	{'item':'面膜','href':'javascript:;'},
	{'item':'理发','href':'javascript:;'},
	{'item':'小儿理疗用品','href':'javascript:;'},
	{'item':'小儿调理方法','href':'javascript:;'},
	{'item':'你好啊','href':'javascript:;'},
	{'item':'剪发','href':'javascript:;'},
	{'item':'电发','href':'javascript:;'},
	{'item':'身体塑形','href':'javascript:;'},
	{'item':'纹绣美甲','href':'javascript:;'},
	{'item':'造型设计','href':'javascript:;'},
	{'item':'面部保养','href':'javascript:;'},
	{'item':'身体养生','href':'javascript:;'},
	{'item':'你好','href':'javascript:;'},
	{'item':'婴童服务','href':'javascript:;'},
	{'item':'染烫类','href':'javascript:;'},
	{'item':'足疗护理','href':'javascript:;'},
	{'item':'面部','href':'javascript:;'},
	{'item':'身材管理','href':'javascript:;'},
	{'item':'身材管理','href':'javascript:;'},
	{'item':'甲油胶','href':'javascript:;'},
	{'item':'席间催','href':'javascript:;'},
	{'item':'美发','href':'javascript:;'},
	{'item':'美体','href':'javascript:;'},
	{'item':'减肥类','href':'javascript:;'},
	{'item':'烫发','href':'javascript:;'},
	{'item':'美容美白','href':'javascript:;'},
	{'item':'美白','href':'javascript:;'},
	{'item':'蔡依林补水','href':'javascript:;'},
	{'item':'基础皮肤管理项目','href':'javascript:;'},
	{'item':'高级皮肤管理项目','href':'javascript:;'},
	{'item':'治疗项目','href':'javascript:;'},
	{'item':'赠送单','href':'javascript:;'},
	{'item':'颈椎病','href':'javascript:;'},
	{'item':'产后护理','href':'javascript:;'},
	{'item':'推拿服务','href':'javascript:;'},
	{'item':'测试','href':'javascript:;'},
	{'item':'储值卡','href':'javascript:;'},
	{'item':'会员卡','href':'javascript:;'},
	{'item':'赵健的储值卡','href':'javascript:;'},
	{'item':'次卡','href':'javascript:;'},
	{'item':'年卡','href':'javascript:;'},
	{'item':'季卡','href':'javascript:;'},
	{'item':'按摩次卡','href':'javascript:;'},
	{'item':'月卡','href':'javascript:;'},
	{'item':'12','href':'javascript:;'}
];

var imgList=[
	{'src':'image/1.jpg','title':'紧肌缓皱爽','price':'￥153.00'},
	{'src':'image/2.jpg','title':'893873','price':'￥8.00'},
	{'src':'image/3.jpg','title':'美甲','price':'￥300.00'},
	{'src':'image/4.jpg','title':'文身','price':'￥2000.00'},
	{'src':'image/5.jpg','title':'原肌美素优化精华','price':'￥4250.00'},
	{'src':'image/6.jpg','title':'岩盘浴','price':'￥600.00'},
	{'src':'image/7.jpg','title':'脂肪管理定型专家','price':'￥6000.00'},
	{'src':'image/8.jpg','title':'川东日系造型','price':'￥278.00'},
	{'src':'image/9.jpg','title':'御瑶药浴','price':'￥280.00'},
	{'src':'image/10.jpg','title':'总监洗剪吹','price':'￥188.00'},
	{'src':'image/11.jpg','title':'再生紧肤面膜','price':'￥1258.00'},
	{'src':'image/12.jpg','title':'唇部修护精华','price':'￥640.00'},
	{'src':'image/13.jpg','title':'刷刷瘦','price':'￥800.00'},
	{'src':'image/14.jpg','title':'明星指定造型','price':'￥168.00'},
	{'src':'image/15.jpg','title':'胶原再造眼膜','price':'￥1500.00'},
	{'src':'image/16.jpg','title':'雷琳基因肽无纹','price':'￥3600.00'},
	{'src':'image/1.jpg','title':'紧肌缓皱爽','price':'￥153.00'},
	{'src':'image/2.jpg','title':'紧肌缓皱爽','price':'￥153.00'},
	{'src':'image/3.jpg','title':'紧肌缓皱爽','price':'￥153.00'},
	{'src':'image/4.jpg','title':'紧肌缓皱爽','price':'￥153.00'},
	{'src':'image/5.jpg','title':'紧肌缓皱爽','price':'￥153.00'},
	{'src':'image/6.jpg','title':'紧肌缓皱爽','price':'￥153.00'},
	{'src':'image/7.jpg','title':'紧肌缓皱爽','price':'￥153.00'},
	{'src':'image/8.jpg','title':'紧肌缓皱爽','price':'￥153.00'},
	{'src':'image/9.jpg','title':'紧肌缓皱爽','price':'￥153.00'},
];

//遍历生成产品二级类目
function showItem(){
	var itemList=$('.itemList');
	var st='';
	for(var i=0;i<pudArray.length;i++){	
		st+="<li><a href='"+pudArray[i].href+"'>"+pudArray[i].item+"</a></li>";	
	}
	itemList.html(st);
}
showItem();
//鼠标滑动显示和隐藏二级类目
$('.icon').mouseover(function(){
	$('.icon_mark').css({'background':'gray','border-radius':'5px','cursor':'pointer'});
	$('.showMore').show();
}).mouseout(function(){
	$('.icon_mark').css({'background':'','border-radius':'0px'});
	$('.showMore').hide();
})

//遍历imgList,生成图片列表
function imgL(){
	var imgL=$('.imgList');
	var strD="";
	for(var i=0;i<imgList.length;i++){
		strD+='<div class="imgCon" goods_id="'+i+'" goods_name="'+imgList[i].title+'" goods_price="'+imgList[i].price+'" goods_count="1">\
		<dl><dt><img src="'+imgList[i].src+'" class="img-responsive"></dt><dd>'+imgList[i].title+'</dd>\
		<dd class="price">售价:<span>'+imgList[i].price+'</span></dd><dl></div>';
	}
	imgL.html(strD);
}
imgL();
// {goods_id:"asdf",goods_name:"asdfa",count:1};
// [{goods_id:"asdf",goods_name:"asdfa",count:1}]
// 
//散客的选取
$('.ris_top_r p').click(function(){
	$(this).css('background','#35B7A5').parent().siblings('li').find('p').css('background','#eee');
});

//消费项目详情的显示与隐藏
function show(){
	var status=0;
	$('#item_title').click(function(){
		if(status==0){
			$('.item_detail').addClass('hide');
			status=1;
		}else{
			$('.item_detail').removeClass('hide');
			status=0;
		}	
	});
}
show();

//购物车的生成

var cartArray=[];
$('.imgCon').click(function(){
	// $('#discount').css('display','block');
	var goods_id = $(this).attr("goods_id");
	var goods_name = $(this).attr("goods_name");
	var goods_count = $(this).attr("goods_count");
	var goods_price = $(this).attr("goods_price");
	var goods={
		goods_id:goods_id,
		goods_name:goods_name,
		goods_count:goods_count,
		goods_price:goods_price
	};
	if(existsInCart(goods_id)){
		addCartGoodsCount(goods_id);
	}else{
		cartArray.push(goods);
	}
	flashCart(cartArray);
	//1，可能 1， 点击的是在购物车数据已经存在的商品，
	// 2 可能2    不在	

});


$("body").on("click",".delete",function(e){
	var goods_id = $(this).attr("goods_id");
	removeGoods(goods_id,cartArray);
});
function addCartGoodsCount(goods_id){
	for(var i=0;i<cartArray.length;i++){
		if(cartArray[i].goods_id==goods_id){
			cartArray[i].goods_count++;
		}
	}
}
function existsInCart(goods_id){
	for(var i=0;i<cartArray.length;i++){
		if(cartArray[i].goods_id==goods_id){
			return true;
		}
	}
	return false;
}
function flashCart(arr){
	var $ris_middle = $(".ris_middle");
	var goods_tpl=$("#goods_tpl")[0].innerHTML;
	var html="";
	for(var i=0;i<arr.length;i++){
		html=html+goods_tpl.replace(/#goods_name#/g,arr[i].goods_name)
					   .replace(/#goods_id#/g,arr[i].goods_id,)
					   .replace(/#goods_count#/g,arr[i].goods_count,)
					   .replace(/#goods_price#/g,arr[i].goods_price,)
	}
	$ris_middle.html(html);
	flashTotalPrice(arr);
}
function flashTotalPrice(arr){
	var total_price=0;
	for(var i=0;i<arr.length;i++){
		var goods_price = parseInt(arr[i].goods_price.slice(1));
		total_price+=arr[i].goods_count * goods_price;
	}
	$(".total_price").text("￥"+total_price);
	$(".rec").text("￥"+total_price);
}


function removeGoods(goods_id,arr){
	for(var i=0;i<arr.length;i++){
		if(goods_id==arr[i].goods_id){
			arr.splice(i,1);
		}
	}
	flashCart(arr);
}

function emptyCart(arr){
	$(".ris_middle").empty();
	arr.length=0;
	$(".total_price").text("");
	$(".rec").text("");
}
function updateGoods(obj){

}

//创建会员的表单验证
$(function() {
    $('#aa').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            userName: {
                message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    remote: { 
                     url: 'remote.php',//验证地址
                     message: '用户已存在',//提示消息
                     delay :2000,//每输入一个字符，就发ajax请求，服务器压力还是太大，设置2秒发送一次ajax（默认输入一个字符，提交一次，服务器压力太大）
                     type: 'POST'//请求方式
                 	},
                 	regexp: {
	                    regexp: /^([a-zA-Z]|[\u4e00-\u9fa5]){2,10}$/,
	                    message: '用户名必须是汉字或字母长度为2至10个字'
                    },
                }
            },
            mobile: {
                validators: {
                    notEmpty: {
                        message: "手机号码不能为空"
                    },
                    remote: { 
                     url: 'remote.php',//验证地址
                     message: '电话号码已经注册',//提示消息
                     delay :  2000,//每输入一个字符，就发ajax请求，服务器压力还是太大，设置2秒发送一次ajax（默认输入一个字符，提交一次，服务器压力太大）
                     type: 'POST'//请求方式
                 	},
                 	regexp: {
                        regexp: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
                        message: '手机号码为11位数字'
                    },
                }
            },
            cardNum: {
                validators: {
                    notEmpty: {
                        message: '卡号不能为空'
                    } 
                }
            },
            sex: {
                validators: {
                    notEmpty: {
                        message: '性别不能为空'
                    } 
                }
            },
            birth: {
                validators: {
                    notEmpty: {
                        message: '生日不能为空'
                    } 
                }
            },
            nickName: {
                validators: {
                    notEmpty: {
                        message: '昵称不能为空'
                    }, 
                    remote: { 
                     url: 'remote.php',//验证地址
                     message: '昵称已经存在',//提示消息
                     delay :  2000,//每输入一个字符，就发ajax请求，服务器压力还是太大，设置2秒发送一次ajax（默认输入一个字符，提交一次，服务器压力太大）
                     type: 'POST'//请求方式
                 	}
                }
            },
            stature: {
                validators: {
                    notEmpty: {
                        message: '身高不能为空'
                    },
                    regexp: {
                        regexp: /^[0-9]{3}$/,
                        message: '请输入身高'
                    }
                }
            },
            weight: {
                validators: {
                    notEmpty: {
                        message: '体重不能为空'
                    },
                    regexp: {
                        regexp: /^[0-9]{3}$/,
                        message: '请输入体重'
                    }
                }
            },
            marry: {
                validators: {
                    notEmpty: {
                        message: '婚姻不能为空'
                    } 
                }
            },
            job: {
                validators: {
                    notEmpty: {
                        message: '职业不能为空'
                    } 
                }
            },
            hobby: {
                validators: {
                    notEmpty: {
                        message: '个人爱好不能为空'
                    } 
                }
            },
            address: {
                validators: {
                    notEmpty: {
                        message: '地址不能为空'
                    }, 
                    regexp: {
                        regexp: /^[\u4e00-\u9fa5]+$/,
                        message: '请输入居住地址'
                    }
                }
            },
            company: {
                validators: {
                    notEmpty: {
                        message: '工作单位不能为空'
                    }, 
                    regexp: {
                        regexp: /^[\u4e00-\u9fa5]+$/,
                        message: '请输入工作单位'
                    }
                }
            },
        }
    })

	  //验证成功后的处理逻辑
	.on('success.form.bv', function(e) {//点击提交之后
     // Prevent form submission
     e.preventDefault();

     // Get the form instance
     var $form = $(e.target);

     // Get the BootstrapValidator instance
     var bv = $form.data('bootstrapValidator');

     // Use Ajax to submit form data 提交至form标签中的action，result自定义
     $.post($form.attr('action'), $form.serialize(), function(result) {
		//do something...
		console.log(result);
		});
 	})

	//验证失败后的处理逻辑
	.on('error.form.bv', function(e) {
	    console.log(e);
	});

});

//支付方式的选择
function pay(){
	$('.payway').click(function(){		
			var text=$(this).text();
			if($(this).hasClass('bor')){
				$(this).removeClass('bor');
				$(this).find('img').hide();		
			}else{
				$(this).addClass('bor').siblings('').removeClass('bor');
				$(this).find('img').show().parent().siblings('').find('img').hide();
			}
			if($(this).hasClass('bor')||$(this).siblings('').hasClass('bor')){
				$("#gathering").removeClass("hide");
				$(".sum_detail label").text(text+"支付:");
			}else{
				$("#gathering").addClass("hide");
			}
	});
}
pay();

// toastr消息提示插件的参数配置
$(function(){
	toastr.options = {  
        closeButton:true,  
        debug: false,  
        progressBar: false,  
        positionClass: "toast-top-center",  
        onclick: null,  
        showDuration: "300",  
        hideDuration: "1000",  
        timeOut: "2000",  
        extendedTimeOut: "1000",  
        showEasing: "swing",  
        hideEasing: "linear",  
        showMethod: "fadeIn",  
        hideMethod: "fadeOut"  
    };  
})
//推拉门的打开和关闭
jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		var btn_rec=$(".btn_rec").text().slice(3);
		if(btn_rec==""||btn_rec==0){
			toastr.error("请选择至少一种产品!"); 
			return 
		}
		$("#main").css("z-index","6");
		orderList();
		var recep=$('#receipt_o').text().slice(1);
		$(".total_num").attr("value",recep);
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			// $('body').toggleClass('navigation-is-open');
			$('body').removeClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
	//推拉门的关闭
	$(".switch").click(function() {
		$("body").addClass("navigation-is-open");
	});
});


//订单页面订单数据的渲染
function orderList(){
	var order="";
	var tableCon=$("#item_title_l");
	for(var i=0;i<cartArray.length;i++){
		order+='<tbody><tr><th class="name" colspan="2">'+cartArray[i].goods_name+'</th><th class="count">×<span class="number">'+cartArray[i].goods_count+'</span></th><th class="Jiage" style="text-align:right">'+cartArray[i].goods_price+'</th></tr></tbody>'
	}
	tableCon.html(order);
}

//订单页面收款按钮点击的判断

$(".btn_sk .btn").click(function(){
	if(!($(".payway").hasClass('bor'))){
		toastr.error("请选择一种支付方式");
		return false;
	}else{
		medalStatu($("#myModal_rec"));
		$(".payway").removeClass('bor');
		$(".payway img").hide();
		$("#gathering").addClass('hide');
		emptyCart(cartArray);
		toastr.success("操作成功");
	}
});

//点击返回开单的时候，隐藏交易结果模态框

$("#btn_ret").click(function(){
	$("body").addClass("navigation-is-open");
	$(".modal-backdrop").css("zIndex","0");
});

//点击close按钮，关闭推拉门
$(".close").click(function(){
	$("body").addClass('navigation-is-open');
});

//点击挂单弹出挂单模态框
$(".btn_ord").click(function(){
	if(cartArray.length==0){
		toastr.error("请选择至少一种产品!");
		return false;
	 } 
});	



//模态框显示和隐藏的方法
function medalStatu(modalBox){
	if(!($("body").hasClass('modal-open'))){
		$("body").attr('class','modal-open');
		modalBox.show().addClass('in');
		$(".modal-backdrop").css("zIndex","1040");		
	}else{
		$("body").removeClass('modal-open');
		modalBox.hide().removeClass("in");
		$(".modal-backdrop").css("zIndex","0");
	}
}
//取单列表的生成

//获取商品名称
function getProduct(){
	var nameArray=[];
	for(var i=0;i<cartArray.length;i++){
		nameArray.push(cartArray[i].goods_name);
	}
	return nameArray.join(",");	
} 
//封装挂单生成DOM的逻辑
var copyNodeArray=[];
function createDom(obj){
	if(!obj.attr("id")){
		var value=obj.attr("value");
		obj.attr("disabled","disabled");
	}else{
		var value=obj.prev().val();
	}
	var guest="散客";
	var goods_name=getProduct();
	var orderObj={
		value:value,
		guest:guest,
		goods_name:goods_name
	}
	orderArray.push(orderObj);	
	flashOrder();
	medalStatu($("#myModal_hang"));
	copyNodeArray.push($(".comsumer_container").clone(true));
	emptyCart(cartArray);
	var timer=null;
	timer=setTimeout(function(){
		clearTimeout(timer);
		toastr.success("挂单成功");
	},300);	
}

//刷新挂单生成的DOM
function flashOrder(){
	var orderDetail="";
	for(var i=0;i<orderArray.length;i++){
		orderDetail+='<div class="order_detail" index="'+0+'">'
					+'<p><span class="place">'+orderArray[i].value+'</span><span class="glyphicon glyphicon-trash delete right"></span></p>'
					+'<ul><li>顾客:'+orderArray[i].guest+'</li><li class="goods_name">项目:'+orderArray[i].goods_name+'</li><li>备注:xxx</li></ul>'
					+'</div>'	
	}
	$(".order_container").html(orderDetail);
}

//点击挂单名称获取响应的数据,生成DOM
var orderArray=[];	
$(".room input").click(function(){
	createDom($(this));

});

//点击挂单模态框的挂单按钮获取响应的数据,生成DOM
var valArray=[];
$("#btn_hand").click(function(){
	if($(this).prev().val()===""){
		toastr.error("请输入挂单名称");
	}else if(valArray.indexOf($(this).prev().val())!=-1){
		toastr.error("挂单名称已经存在");
	}else{
		valArray.push($(this).prev().val());	
		createDom($(this));
		$(this).prev().val("");
	}	
});				

//取单模态框的逻辑

//取单模态框click的时候,改变背景,将数据刷新到购物车(未完成)
$(function(){
	$("#myModal_fetch").on("click",".order_container .order_detail",function(){
		$(this).css("background","#F1F4F7");
		var index=$(this).index();
		$(".comsumer_container").replaceWith(copyNodeArray[index]);
		medalStatu($("#myModal_fetch"));
	})
})


//点击挂单模态框的删除按钮，删除当前项挂单
var persent=null;
$(function(){
	$("#myModal_fetch").on("click",".order_container .order_detail p .delete",function(event){
		event.stopPropagation();
		$("#notice_box").animate({top:"0px",opacity:"0"},"50");
		$("#notice_box").animate({top:"15px",opacity:"0.6"},"50",function() {$("#notice_box").show();});	
		$("#notice_box").animate({top:"30px",opacity:"1"},"50",function() {$("#notice_box").show();});
		$(".modal-backdrop.in").animate({opacity:"0.7"},"100");
		persent=$(this).parent().parent();
	})
})

//点击警告框的删除按钮，隐藏警告框模态框
$("#notice_box .notice_box_h .close,#notice_box .notice_box_f .btn_confirm,#notice_box .notice_box_f .btn-default").click(function(){
	$("#notice_box").animate({top:"30px",opacity:"1"},"10");		
	$("#notice_box").animate({top:"15px",opacity:"0.6"},"10");
	$("#notice_box").animate({top:"0px",opacity:"0"},"10",function() {$("#notice_box").hide();});	
	$(".modal-backdrop.in").animate({opacity:"0.5",zIndex:"0"},"20");
	
	if($(this).hasClass('btn_confirm')){
		persent.remove();
		var timer=setTimeout(function(){toastr.success("操作成功");},1500);			
	}	
});


			
		



