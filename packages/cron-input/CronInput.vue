<template>
	<div class="ant-cron-input">
		<a-tabs type="card" v-model="tabActive">
			<a-tab-pane key="second">
				<span slot="tab"><a-icon type="calendar" /> {{ text.Seconds.name }}</span>
				<a-radio-group v-model="second.cronEvery" class="cron-radio-group">
					<a-radio class="cron-radio" value="1">{{ text.Seconds.every }}</a-radio>
					<a-radio class="cron-radio" value="2">
						<span class="cron-radio-content">
							{{ text.Seconds.interval[0] }}
							<a-input-number class="cron-form-item" v-model="second.incrementIncrement" :min="1" :max="60"></a-input-number>
							{{ text.Seconds.interval[1] || '' }}
							<a-input-number class="cron-form-item" v-model="second.incrementStart" :min="0" :max="59"></a-input-number>
							{{ text.Seconds.interval[2] || '' }}
						</span>
					</a-radio>
					<a-radio class="cron-radio long" value="3">
						<span class="cron-radio-content">
							{{ text.Seconds.specific }}
							<a-select class="cron-form-item" mode="tags" v-model="second.specificSpecific" style="margin-right:0">
								<a-select-option v-for="val in 60" :key="val" :value="String(val - 1)">{{ val - 1 }}</a-select-option>
							</a-select>
						</span>
					</a-radio>
					<a-radio class="cron-radio" value="4">
						<span class="cron-radio-content">
							{{ text.Seconds.cycle[0] }}
							<a-input-number class="cron-form-item" v-model="second.rangeStart" :min="1" :max="58"></a-input-number>
							{{ text.Seconds.cycle[1] || '' }}
							<a-input-number class="cron-form-item" v-model="second.rangeEnd" :min="1" :max="59"></a-input-number>
							{{ text.Seconds.cycle[2] || '' }}
						</span>
					</a-radio>
				</a-radio-group>
			</a-tab-pane>
			<a-tab-pane key="minutes">
				<span slot="tab"><a-icon type="calendar" /> {{ text.Minutes.name }}</span>
				<a-radio-group v-model="minute.cronEvery" class="cron-radio-group">
						<a-radio class="cron-radio" value="1">{{ text.Minutes.every }}</a-radio>
						<a-radio class="cron-radio" value="2">
							<span class="cron-radio-content">
								{{ text.Minutes.interval[0] }}
								<a-input-number class="cron-form-item" v-model="minute.incrementIncrement" :min="1" :max="60"></a-input-number>
								{{ text.Minutes.interval[1] }}
								<a-input-number class="cron-form-item" v-model="minute.incrementStart" :min="0" :max="59"></a-input-number>
								{{ text.Minutes.interval[2] || '' }}
							</span>
						</a-radio>
						<a-radio class="cron-radio long" value="3">
							<span class="cron-radio-content">
								{{ text.Minutes.specific }}
								<a-select class="cron-form-item" mode="multiple" v-model="minute.specificSpecific" style="margin-right:0">
									<a-select-option v-for="val in 60" :key="val" :value="String(val - 1)">{{ val - 1 }}</a-select-option>
								</a-select>
							</span>
						</a-radio>
						<a-radio class="cron-radio" value="4">
							<span class="cron-radio-content">
								{{ text.Minutes.cycle[0] }}
								<a-input-number class="cron-form-item" v-model="minute.rangeStart" :min="1" :max="60"></a-input-number>
								{{ text.Minutes.cycle[1] }}
								<a-input-number class="cron-form-item" v-model="minute.rangeEnd" :min="0" :max="59"></a-input-number>
								{{ text.Minutes.cycle[2] }}
							</span>
						</a-radio>
				</a-radio-group>
			</a-tab-pane>
			<a-tab-pane key="hours">
				<span slot="tab"><a-icon type="calendar" /> {{ text.Hours.name }}</span>
				<a-radio-group v-model="hour.cronEvery" class="cron-radio-group">
						<a-radio class="cron-radio" value="1">{{ text.Hours.every }}</a-radio>
						<a-radio class="cron-radio" value="2">
							<span class="cron-radio-content">
								{{ text.Hours.interval[0] }}
								<a-input-number class="cron-form-item" v-model="hour.incrementIncrement" :min="0" :max="23"></a-input-number>
								{{ text.Hours.interval[1] }}
								<a-input-number class="cron-form-item" v-model="hour.incrementStart" :min="0" :max="23"></a-input-number>
								{{ text.Hours.interval[2] }}
							</span>
						</a-radio>
						<a-radio class="cron-radio long" value="3">
							<span class="cron-radio-content">
							{{ text.Hours.specific }}
							<a-select class="cron-form-item" mode="multiple" v-model="hour.specificSpecific" style="margin-right:0">
								<a-select-option v-for="val in 24" :key="val" :value="String(val - 1)">{{ val - 1 }}</a-select-option>
							</a-select>
							</span>
						</a-radio>
						<a-radio class="cron-radio" value="4">
							<span class="cron-radio-content">
							{{ text.Hours.cycle[0] }}
							<a-input-number class="cron-form-item" v-model="hour.rangeStart" :min="0" :max="23"></a-input-number>
							{{ text.Hours.cycle[1] }}
							<a-input-number class="cron-form-item" v-model="hour.rangeEnd" :min="0" :max="23"></a-input-number>
							{{ text.Hours.cycle[2] }}
							</span>
						</a-radio>
				</a-radio-group>
			</a-tab-pane>
			<a-tab-pane key="day">
				<span slot="tab"><a-icon type="calendar" /> {{ text.Day.name }}</span>
				<a-radio-group v-model="day.cronEvery" class="cron-radio-group">
						<a-radio class="cron-radio" value="1">{{ text.Day.every }}</a-radio>
						<a-radio class="cron-radio" value="2">
							<span class="cron-radio-content">
							{{ text.Day.intervalWeek[0] }}
							<a-input-number class="cron-form-item" v-model="week.incrementIncrement" :min="1" :max="7"></a-input-number>
							{{ text.Day.intervalWeek[1] }}
							<a-select class="cron-form-item" v-model="week.incrementStart">
								<a-select-option v-for="val in 7" :key="val" :value="String(val)">{{ text.Week[val - 1] }}</a-select-option>
							</a-select>
							{{ text.Day.intervalWeek[2] }}
							</span>
						</a-radio>
						<a-radio class="cron-radio" value="3">
							<span class="cron-radio-content">
							{{ text.Day.intervalDay[0] }}
							<a-input-number class="cron-form-item" v-model="day.incrementIncrement" :min="1" :max="31"></a-input-number>
							{{ text.Day.intervalDay[1] }}
							<a-input-number class="cron-form-item" v-model="day.incrementStart" :min="1" :max="31"></a-input-number>
							{{ text.Day.intervalDay[2] }}
							</span>
						</a-radio>
					
					
						<a-radio class="cron-radio long" value="4">
							<span class="cron-radio-content">
							{{ text.Day.specificWeek }}
							<a-select class="cron-form-item" mode="tags" v-model="week.specificSpecific" style="margin-right:0">
								<a-select-option v-for="val in 7" :key="val"
									:value="['1', '2', '3', '4', '5', '6', '7'][val - 1]">{{ text.Week[val - 1] }}</a-select-option>
							</a-select>
							</span>
						</a-radio>
						<a-radio class="cron-radio long" value="5">
							<span class="cron-radio-content">
							{{ text.Day.specificDay }}
							<a-select class="cron-form-item" mode="tags" v-model="day.specificSpecific" style="margin-right:0">
								<a-select-option v-for="val in 31" :key="val" :value="String(val)">{{ val }}</a-select-option>
							</a-select>
							</span>
						</a-radio>
						<a-radio class="cron-radio" value="6">{{ text.Day.lastDay }}</a-radio>
						<a-radio class="cron-radio" value="7">{{ text.Day.lastWeekday }}</a-radio>	
						<a-radio class="cron-radio long" value="8">
							<span class="cron-radio-content">
							{{ text.Day.lastWeek[0] }}
							<a-select class="cron-form-item" v-model="day.cronLastSpecificDomDay" style="margin-right:0">
								<a-select-option v-for="val in 7" :key="val" :value="String(val)">{{ text.Week[val - 1] }}</a-select-option>
							</a-select>
							{{ text.Day.lastWeek[1] || '' }}
							</span>
						</a-radio>	
						<a-radio class="cron-radio" value="9">
							<span class="cron-radio-content">
							<a-input-number class="cron-form-item" v-model="day.cronDaysBeforeEomMinus" :min="1" :max="31"></a-input-number>
							{{ text.Day.beforeEndMonth[0] }}
							</span>
						</a-radio>	
						<a-radio class="cron-radio" value="10">
							<span class="cron-radio-content">
							{{ text.Day.nearestWeekday[0] }}
							<a-input-number class="cron-form-item" v-model="day.cronDaysNearestWeekday" :min="1" :max="31"></a-input-number>
							{{ text.Day.nearestWeekday[1] }}
							</span>
						</a-radio>
						<a-radio class="cron-radio long" value="11">
							<span class="cron-radio-content">
							{{ text.Day.someWeekday[0] }}
							<a-input-number class="cron-form-item" v-model="week.cronNthDayNth" :min="1" :max="5"></a-input-number>
							<span v-show="!lang || lang === 'cn'">{{ text.Day.someWeekday[1] }}</span>
							<a-select class="cron-form-item" v-model="week.cronNthDayDay" style="margin-right:0">
								<a-select-option v-for="val in 7" :key="val" :value="String(val)">{{ text.Week[val - 1] }}</a-select-option>
							</a-select>
							<span v-show="lang === 'en'">{{ text.Day.someWeekday[1] }}</span>
							</span>
						</a-radio>
				</a-radio-group>
			</a-tab-pane>
			<a-tab-pane key="month">
				<span slot="tab"><a-icon type="calendar" /> {{ text.Month.name }}</span>
				<a-radio-group v-model="month.cronEvery" class="cron-radio-group">				
						<a-radio class="cron-radio" value="1">{{ text.Month.every }}</a-radio>
						<a-radio class="cron-radio" value="2">
							<span class="cron-radio-content">
							{{ text.Month.interval[0] }}
							<a-input-number class="cron-form-item" v-model="month.incrementIncrement" :min="1" :max="12"></a-input-number>
							{{ text.Month.interval[1] }}
							<a-input-number class="cron-form-item" v-model="month.incrementStart" :min="1" :max="12" style="margin-right:0"></a-input-number>
							</span>
						</a-radio>
						<a-radio class="cron-radio long" value="3">
							<span class="cron-radio-content">
							{{ text.Month.specific }}
							<a-select class="cron-form-item" mode="multiple" v-model="month.specificSpecific" style="margin-right:0">
								<a-select-option v-for="val in 12" :key="val" :value="String(val)">{{ val }}</a-select-option>
							</a-select>
							</span>
						</a-radio>
						<a-radio class="cron-radio" value="4">
							<span class="cron-radio-content">
								{{ text.Month.cycle[0] }}
							<a-input-number class="cron-form-item" v-model="month.rangeStart" :min="1" :max="12"></a-input-number>
							{{ text.Month.cycle[1] }}
							<a-input-number class="cron-form-item" v-model="month.rangeEnd" :min="1" :max="12" style="margin-right:0"></a-input-number>
							</span>
						</a-radio>
				</a-radio-group>
			</a-tab-pane>
			<a-tab-pane key="year">
				<span slot="tab"><a-icon type="calendar" /> {{ text.Year.name }}</span>
				<a-radio-group v-model="year.cronEvery" class="cron-radio-group">				
						<a-radio class="cron-radio" value="1">{{ text.Year.every }}</a-radio>
						<a-radio class="cron-radio" value="2">
							<span class="cron-radio-content">
							{{ text.Year.interval[0] }}
							<a-input-number class="cron-form-item" v-model="year.incrementIncrement" :min="1" :max="99"></a-input-number>
							{{ text.Year.interval[1] }}
							<a-input-number class="cron-form-item" v-model="year.incrementStart" :min="2023" :max="2128" style="margin-right:0"></a-input-number>
							</span>
						</a-radio>
					
						<a-radio class="cron-radio long" value="3">
							<span class="cron-radio-content">
							{{ text.Year.specific }}
							<a-select class="cron-form-item" mode="tags" v-model="year.specificSpecific" style="margin-right:0">
								<a-select-option v-for="val in 100" :key="val" :value="String(2022 + val)">{{ 2022 + val }}</a-select-option>
							</a-select>
							</span>
						</a-radio>
					
					
						<a-radio class="cron-radio" value="4">
							<span class="cron-radio-content">
							{{ text.Year.cycle[0] }}
							<a-input-number class="cron-form-item" v-model="year.rangeStart" :min="2023" :max="2123"></a-input-number>
							{{ text.Year.cycle[1] }}
							<a-input-number class="cron-form-item" v-model="year.rangeEnd" :min="2023" :max="2123" style="margin-right:0"></a-input-number>
							</span>
						</a-radio>
					
				</a-radio-group>
			</a-tab-pane>
		</a-tabs>
		<div class="ant-cron-bottom">
			<span class="ant-cron-result">{{ this.cron }}</span>
		</div>
	</div>
</template>
<script>
import Language from './language/index'
import { InputNumber, Radio, Select, Tabs, Icon } from 'ant-design-vue'
export default {
	name: 'CronInput',
	components: {
		AInputNumber: InputNumber,
		ARadio: Radio,
		ARadioGroup: Radio.Group,
		ASelect: Select,
		ASelectOption: Select.Option,
		ATabs: Tabs,
		ATabPane: Tabs.TabPane,
		AIcon: Icon
	},
	props: {
		lang: {
			type: String,
			default: 'cn'
		}, 
		value: {
			type: String,
			default: '* * * * * ? *'
		}
	},
	data() {
		return {
			tabActive: 'second',
			exps: [
				{ type: "second", expression: "" },
				{ type: "minute", expression: "" },
				{ type: "hour", expression: "" },
				{ type: "day", expression: "" },
				{ type: "month", expression: "" },
				{ type: "Week", expression: "" },
				{ type: "year", expression: "" },
			],
			second: {
				cronEvery: '',
				incrementStart: '0',
				incrementIncrement: '1',
				rangeStart: '1',
				rangeEnd: '2',
				specificSpecific: [],
			},
			minute: {
				cronEvery: '',
				incrementStart: '0',
				incrementIncrement: '1',
				rangeStart: '1',
				rangeEnd: '2',
				specificSpecific: [],
			},
			hour: {
				cronEvery: '',
				incrementStart: '0',
				incrementIncrement: '1',
				rangeStart: '1',
				rangeEnd: '2',
				specificSpecific: [],
			},
			day: {
				cronEvery: '',
				incrementStart: '1',
				incrementIncrement: '1',
				rangeStart: '',
				rangeEnd: '',
				specificSpecific: [],
				cronLastSpecificDomDay: '',
				cronDaysBeforeEomMinus: '',
				cronDaysNearestWeekday: '',
			},
			week: {
				cronEvery: '',
				incrementStart: '1',
				incrementIncrement: '1',
				specificSpecific: [],
				cronNthDayDay: '',
				cronNthDayNth: '1',
			},
			month: {
				cronEvery: '',
				incrementStart: '1',
				incrementIncrement: '1',
				rangeStart: '',
				rangeEnd: '',
				specificSpecific: [],
			},
			year: {
				cronEvery: '',
				incrementStart: '2017',
				incrementIncrement: '1',
				rangeStart: '',
				rangeEnd: '',
				specificSpecific: [],
			},
			output: {
				second: '',
				minute: '',
				hour: '',
				day: '',
				month: '',
				Week: '',
				year: '',
			}
		}
	},
	watch: {
		cron(val) {
			this.$emit('input', val)
			this.$emit('change', val);
		}
	},
	computed: {
		text() {
			return Language[this.lang || 'cn']
		},
		secondsText() {
			let seconds = '';
			let cronEvery = this.second.cronEvery;
			switch (cronEvery.toString()) {
				case '1':
					seconds = '*';
					break;
				case '2':
					seconds = this.second.incrementStart + '/' + this.second.incrementIncrement;
					break;
				case '3':
					this.second.specificSpecific.map(val => {
						seconds += val + ','
					});
					seconds = seconds.slice(0, -1);
					break;
				case '4':
					seconds = this.second.rangeStart + '-' + this.second.rangeEnd;
					break;
			}
			return seconds;
		},
		minutesText() {
			let minutes = '';
			let cronEvery = this.minute.cronEvery;
			switch (cronEvery.toString()) {
				case '1':
					minutes = '*';
					break;
				case '2':
					minutes = this.minute.incrementStart + '/' + this.minute.incrementIncrement;
					break;
				case '3':
					this.minute.specificSpecific.map(val => {
						minutes += val + ','
					});
					minutes = minutes.slice(0, -1);
					break;
				case '4':
					minutes = this.minute.rangeStart + '-' + this.minute.rangeEnd;
					break;
			}
			return minutes;
		},
		hoursText() {
			let hours = '';
			let cronEvery = this.hour.cronEvery;
			switch (cronEvery.toString()) {
				case '1':
					hours = '*';
					break;
				case '2':
					hours = this.hour.incrementStart + '/' + this.hour.incrementIncrement;
					break;
				case '3':
					this.hour.specificSpecific.map(val => {
						hours += val + ','
					});
					hours = hours.slice(0, -1);
					break;
				case '4':
					hours = this.hour.rangeStart + '-' + this.hour.rangeEnd;
					break;
			}
			return hours;
		},
		daysText() {
			let days = '';
			let cronEvery = this.day.cronEvery;
			switch (cronEvery.toString()) {
				case '1':
					break;
				case '2':
				case '4':
				case '11':
					days = '?';
					break;
				case '3':
					days = this.day.incrementStart + '/' + this.day.incrementIncrement;
					break;
				case '5':
					this.day.specificSpecific.map(val => {
						days += val + ','
					});
					days = days.slice(0, -1);
					break;
				case '6':
					days = "L";
					break;
				case '7':
					days = "LW";
					break;
				case '8':
					days = this.day.cronLastSpecificDomDay + 'L';
					break;
				case '9':
					days = 'L-' + this.day.cronDaysBeforeEomMinus;
					break;
				case '10':
					days = this.day.cronDaysNearestWeekday + "W";
					break
			}
			return days;
		},
		weeksText() {
			let weeks = '';
			let cronEvery = this.day.cronEvery;
			switch (cronEvery.toString()) {
				case '1':
				case '3':
				case '5':
					weeks = '?';
					break;
				case '2':
					weeks = this.week.incrementStart + '/' + this.week.incrementIncrement;
					break;
				case '4':
					this.week.specificSpecific.map(val => {
						weeks += val + ','
					});
					weeks = weeks.slice(0, -1);
					break;
				case '6':
				case '7':
				case '8':
				case '9':
				case '10':
					weeks = "?";
					break;
				case '11':
					weeks = this.week.cronNthDayDay + "#" + this.week.cronNthDayNth;
					break;
			}
			return weeks;
		},
		monthsText() {
			let months = '';
			let cronEvery = this.month.cronEvery;
			switch (cronEvery.toString()) {
				case '1':
					months = '*';
					break;
				case '2':
					months = this.month.incrementStart + '/' + this.month.incrementIncrement;
					break;
				case '3':
					this.month.specificSpecific.map(val => {
						months += val + ','
					});
					months = months.slice(0, -1);
					break;
				case '4':
					months = this.month.rangeStart + '-' + this.month.rangeEnd;
					break;
			}
			return months;
		},
		yearsText() {
			let years = '';
			let cronEvery = this.year.cronEvery;
			switch (cronEvery.toString()) {
				case '1':
					years = '*';
					break;
				case '2':
					years = this.year.incrementStart + '/' + this.year.incrementIncrement;
					break;
				case '3':
					this.year.specificSpecific.map(val => {
						years += val + ','
					});
					years = years.slice(0, -1);
					break;
				case '4':
					years = this.year.rangeStart + '-' + this.year.rangeEnd;
					break;
			}
			return years;
		},
		cron() {
			return `${this.secondsText || '*'} ${this.minutesText || '*'} ${this.hoursText || '*'} ${this.daysText || '*'} ${this.monthsText || '*'} ${this.weeksText || '?'} ${this.yearsText || '*'}`
		},
	},
	methods: {
		resolveExpression() {
			if (!this.value?.length) return;
			let expList = this.value.split(" ");
			if (expList.length < 7) {
				new Error("表达式格式不正确");
			}
			for (let i = 0; i < expList.length; i++) {
				this.exps[i].expression = expList[i];
			}
			this.exps.forEach((exp) => {
				this.output[exp.type] = exp.expression;
				switch (exp.type) {
					case "year":
					case "month":
					case "hour":
					case "minute":
					case "second":
						this.commonParser(this[exp.type], exp.expression);
						return;
					case "Week":
						this.resolveWeek(exp.expression);
						return;
					case "day":
						this.resolveDay(exp.expression);
						return;
				}
			});
		},
		// 年，月，时，分，秒
		commonParser(expressionType, str) {
			if (str == "*") {
				this.resolveStar(expressionType);
			} else if (str.indexOf("-") >= 0) {
				this.resolveLine(expressionType, str);
			} else if (str.indexOf("/") >= 0) {
				this.resolveSlash(expressionType, str);
			} else {
				this.resolveComma(expressionType, str);
			}
		},
		resolveWeek(str) {
			if (str.indexOf("/") >= 0) {
				this.day.cronEvery = "2";
				this.resolveSlash(this.week, str);
			} else if (str.indexOf(",") >= 0) {
				this.day.cronEvery = "4";
				this.resolveComma(this.week, str);
			} else if (str.indexOf("#") >= 0) {
				this.day.cronEvery = "11";
				let range = str.split("#");
				this.Week.cronNthDayDay = range[0];
				this.Week.cronNthDayNth = range[1];
			}
		},
		resolveDay(str) {
			if (str == "*") {
				this.resolveStar(this.day);
			} else if (str.indexOf("/") >= 0) {
				this.resolveSlash(this.day, str, "3");
			} else if (str == "L") {
				this.day.cronEvery = "6";
			} else if (str == "LW") {
				this.day.cronEvery = "7";
			} else if (/\dL/.test(str)) {
				this.day.cronEvery = "8";
				this.day.cronLastSpecificDomDay = Number(str.match(/(\d)L/)[1]);
			} else if (/L-\d+/.test(str)) {
				this.day.cronEvery = "9";
				this.day.cronDaysBeforeEomMinus = Number(str.match(/L-(\d+)/)[1]);
			} else if (/\d+W/.test(str)) {
				this.day.cronEvery = "10";
				this.day.cronDaysNearestWeekday = Number(str.match(/(\d+)W/))[1];
			} else {
				this.resolveComma(this.day, str, "5");
			}
		},
		resolveStar(expressionObj, type = "1") {
			expressionObj.cronEvery = type;
		},
		resolveSlash(expressionObj, expression, type = "2") {
			expressionObj.cronEvery = type;
			let range = expression.split("/");
			expressionObj.incrementStart = range[0];
			expressionObj.incrementIncrement = range[1];
		},
		resolveLine(expressionObj, expression, type = "4") {
			expressionObj.cronEvery = type;
			let range = expression.split("-");
			expressionObj.rangeStart = range[0];
			expressionObj.rangeEnd = range[1];
		},
		resolveComma(expressionObj, expression, type = "3") {
			expressionObj.cronEvery = type;
			expressionObj.specificSpecific = expression.split(",");
		}

	},
	mounted() {
		this.resolveExpression();
	}
}
</script>
<style scoped>
.language {
	position: absolute;
	right: 25px;
	z-index: 1;
}
.ant-cron-input{
	width:460px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.cron-radio-group {
	display: flex;
	flex-direction: column;
	padding: .5em;
}
.cron-radio{
	display: flex;
	align-items: center;
	margin: 0 0 .5em .5em;
}
.cron-radio-content{
	display: flex;
	align-items: center;
	width: 400px;
	max-width: 400px;
}
.cron-radio-content .cron-form-item{
	margin: 0 1em;
	flex: 1;
}
.cron-radio-group .ant-radio-wrapper-checked{
	color:#1890ff
}
.ant-cron-bottom {
	width: 100%;
	text-align: center;
	margin-top: 5px;
	position: relative;

}
.ant-cron-result {
	font-size: 18px;
	font-weight: bold;
}
</style>