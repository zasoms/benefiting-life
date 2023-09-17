const config = {
	// 聚推客的个人id
	pub_id:"137841",
	// tabs
	tabs: [{
		name: '全部',
		tabId: 0
	},{
		name: '外卖',
		tabId: 1
	}, {
		name: '出行',
		tabId: 2
	}],
	// 活动跳转链接
	coupons: [
		{
		"name": "美团外卖红包",
		"bannerPic": "/static/coupon/meituan_banner.png",
		"icon": "/static/coupon/meituan.png",
		"minapp": {
			"appid": "wxde8ac0a21135c07d",
			"path": "/index/pages/h5/h5?weburl=https%3A%2F%2Fdpurl.cn%2FV606vRhz&lch=cps:waimai:5:65c5f4b9271221c79eae104d969a48a3:137841jutuikeminiprogram:33:85459&f_token=1&f_userId=1"
		},
		"sort": 99,
		"tabId": 1,
		"type": 1,
		"needLocation": false
	}, {
		"name": "饿了么外卖红包天天领",
		"bannerPic": "/static/coupon/ele_banner.png",
		"icon": "/static/coupon/ele.png",
		"minapp": {
			"appid": "wxece3a9a4c82f58c9",
			"path": "commercialize/pages/taoke-guide/index?scene=5bd04e7687e04b679acf9e91e595d096"
		},
		"sort": 100,
		"tabId": 1,
		"type": 1,
		"needLocation": true
	}, {
		"name": "饿了么无门槛可叠加红包",
		"bannerPic": "/static/coupon/ele_2_banner.jpg",
		"icon": "/static/coupon/ele.png",
		"minapp": {
			"appid": "wxece3a9a4c82f58c9",
			"path": "/commercialize/pages/compose-reduce-guide/index?scene=5bd04e7687e04b679acf9e91e595d096&configKey=BAWANGCAN_ELE_ENR_COUPON_GUIDE"
		},
		"sort": 100,
		"tabId": 1,
		"type": 1,
		"needLocation": true
	}, {
	// 	"name": "美团生鲜",
	// 	"bannerPic": "/static/coupon/meituanshengxian_banner.jpg",
	// 	"icon": "/static/coupon/meituan.png",
	// 	"minapp": {
	// 		"appid": "wxde8ac0a21135c07d",
	// 		"path": "/index/pages/h5/h5?lch=cps:waimai:5:65c5f4b9271221c79eae104d969a48a3:62828jutuikemeituan:4:85459&weburl=https%3A%2F%2Fdpurl.cn%2FYekwWAgz&f_userId=1&f_token=1"
	// 	},
	// 	"sort": 100,
	// 	"tabId": 1,
	// 	"type": 1,
	// 	"needLocation": false
	// }, {
		"name": "滴滴打车",
		"bannerPic": "/static/coupon/didi_banner.png",
		"icon": "/static/coupon/didi_logo.jpg",
		"minapp": {
			"appid": "wxaf35009675aa0b2a",
			"path": "/pages/index/index?scene=2MW92w3&source_id=137841jutuikeminiprogram"
		},
		"sort": 101,
		"tabId": 2,
		"type": 1,
		"needLocation": true
	}, {
		"name": "花小猪打车",
		"bannerPic": "/static/coupon/hxz_banner.png",
		"icon": "/static/coupon/huaxiaozhu_logo.jpeg",
		"minapp": {
			"appid": "wxd98a20e429ce834b",
			"path": "/pages/chitu/index?scene=OpmPMJa&source_id=137841jutuikeminiprogram"
		},
		"sort": 101,
		"tabId": 2,
		"type": 1,
		"needLocation": true
	}],
	// 电商平台
	sourceList: [{ 
		name: '拼多多',
		source: 'pdd',
		discountType: 'money',
	}, {
		name: '淘宝',
		source: 'taobao',
		discountType: 'money',
	}, {
		name: '京东',
		source: 'jd',
		discountType: 'money',
	}, {
		name: '唯品会',
		source: 'vip',
		discountType: 'ratio',
	}],
}
export {
  config
}
