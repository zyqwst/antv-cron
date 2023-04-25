export default {
	Seconds: {
		name: '秒',
		every: '每一秒钟',
		interval: ['每隔', '秒执行，从', '秒开始'],
		specific: '具体秒数(可多选)',
		cycle: ['从', '到', '秒']
	},
	Minutes: {
		name: '分',
		every: '每一分钟',
		interval: ['每隔', '分执行，从', '分开始'],
		specific: '具体分钟数(可多选)',
		cycle: ['从', '到', '分']
	},
	Hours: {
		name: '时',
		every: '每一小时',
		interval: ['每隔', '小时执行，从', '小时开始'],
		specific: '具体小时数(可多选)',
		cycle: ['从', '到', '小时']
	},
	Day: {
		name: '天',
		every: '每一天',
		interval: ['每隔', '天执行，从', '日开始'],
		specific: '具体天数(可多选)',
		lastDay: '在这个月的最后一天',
		lastWeekday: '在这个月的最后一个工作日',
		beforeEndMonth: ['在本月底前', '天'],
		nearestWeekday: ['距离每月', '日最近的工作日'],
		noSet: '不指定'
	},
	Week: {
		name: '周(星期)',
		interval: Error('不支持此项'),
		specific: '具体星期几(可多选)',
		someWeekday: ['在这个月的第', '个'],
		lastday: ['本月的最后一个'],
		noSet: '不指定',
		select: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
	},
	Month: {
		name: '月',
		every: '每一月',
		interval: ['每隔', '月执行,从', '月开始'],
		specific: '具体月数(可多选)',
		cycle: ['从', '到', '月']
	},
	Year: {
		name: '年',
		every: '每一年',
		interval: ['每隔', '年执行,从', '年开始'],
		specific: '具体年份(可多选)',
		cycle: ['从', '到', '年'],
		noSet: '不指定'
	}
}