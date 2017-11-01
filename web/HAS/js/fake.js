/**
 * Created by Jay on 2016/12/6.
 */

var FAKE_LOG_1 = [
    "service receive a new task...",
    "check credit score...",
    "fetch data from alipay",
    "fetch data from bank *ICBC*",
    "fetch data from bank *HSBC*",
    "fetch data from bank...",
    "fetch data from bank *boc*",
    "validating personal profile...",
    "client identify...",
    "WARNING: no data return",
    "check black list",
    "operation completed.",
    "global data analyze",
    "WARNING: address validation failed",
    "go to Phase A...",
    "[LOG] system online: " + (new Date().getTime()),
    "check authorization...",
    "vel eum iure reprehenderit qui in ea voluptate",
    "procure him some great pleasure",
    "autem quibusdam et aut officiis debitis",
    "contains examples demonstrating how to animate",
    "Sed ut perspiciatis..."
];

var FAKE_INFO = [
    "kevein logger_test[22484]: 64 bytes from 192.168.0.1: icmp_seq=1 ttl=253 time=49.7 ms",
    'Resolved address "xml:readonly:/etc/gconf/gconf.xml.defaults"',
    'IN=ra0 OUT= MAC=00:17:9a:0a:f6:44:00:08:5c:00:00:01:08:00',
    'DF PROTO=TCP SPT=46040 DPT=22 WINDOW=5840 RES=0x00 SYN URGP=0',
    "Could not reliably determine the server's fully qualified domain name",
    "Starting Micro Service...                Initializing cgroup subsys cpuset...",
    "Linux version 3.11.7+ (buildbot@10.10.10.10) (gcc version 4.6.3 (Gentoo Hardened)",
    "Runtime journal is using 188.0K (max 49.9M, leaving 74.8M of free 499.0M)",
    "Initializing cgroup subsys cpu...              Initializing memory clean...",
    "top: clean, 29428/3276800 files, 489152/13106688 blocks",
    'linux-nirvana.site(6546) [zypp] TargetImpl.cc(~TargetImpl):816 Targets closed'
];

var CITES = {
    "北京":[116.41005,39.93157,169.8,96.9],
    "天津":[120.88349,24.17477,173.30,100.15],
    "河北":[108.94586,34.15559,165.55,103.65],
    "山西":[112.56878,37.73565,155.3,108.4],
    "内蒙古":[108.9608,34.26641],
    "辽宁":[120.88349,24.17477,152.3,89.4],
    "吉林":[125.3245,43.886841,203.05,77.9],
    "黑龙江":[126.61705,45.75586,213.05,59.15],
    "上海":[121.49295,31.22337,188.8,141.4],
    "江苏":[118.79772,32.04856,183.05,132.4],
    "浙江":[120.16922,30.24255,183.3,149.65],
    "安徽":[117.283042,31.86119,172.3,138.9],
    "福建":[114.35559,34.79517,176.05,165.9],
    "江西":[115.892151,28.676493,167.3,157.65],
    "山东":[117.000923,36.675807,175.05,116.4],
    "河南":[113.665412,34.757975,159.3,126.9],
    "湖北":[114.30943,30.59982,154.05,141.9],
    "湖南":[113.03176,28.1844,151.55,157.4],
    "广东":[113.2442,23.12592,158.05,178.9],
    "广西":[108.36694,22.85355,140.3,181.4],
    "海南":[110.29345,20.00752,145.8,201],
    "重庆":[108.40869,30.80788,137.55,148.75],
    "四川":[104.08347,30.65614,122.05,144.25],
    "贵州":[106.7145,26.56819,134.55,163.25],
    "云南":[102.70786,25.03521,113.8,175.75],
    "西藏":[103.8252,36.05725,79.3,147.5],
    "陕西":[108.948024,34.263161,141.8,127],
    "甘肃":[103.8252,36.05725,123.05,120.5],
    "青海":[101.80373,36.59969,102.3,116.75],
    "宁夏":[106.28872,38.47392,131.3,109.75],
    "新疆":[87.63167,43.79439,61.05,88.5],
    "香港":[114.27854,22.37944,164.3,186.25],
    "澳门":[113.549134,22.198751,161.55,186.25]
};

var LOC = ["北京", "上海", "广东", "湖北", "海南", "重庆", "广西"];

var genMockUser = function() {
    var gender = Math.random() < 0.5 ? 1 : 2;
    var name = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + (gender == 1 ? '先生' : '女士');
    var loc = LOC.random();
    return {
        id: randomNumber(8),
        name:name,
        gender:gender,
        province: loc,
        loc: loc,
        phone: [ "186", "170", "139", "182"].random() + "*****" + randomNumber(3),
        age: Math.round(20 + Math.random() * 30),
        loan: 500 + Math.round(Math.random() * 6) * 200,
        after_status: [ -3, 0, 7].random(),  //-3是拒绝，0是转人工，7是通过
        info_score: randomBetween(50, 90, true),
        credit_score: randomBetween(10, 30, true),
        fake_score: randomBetween(10, 30, true),
        prohibit: randomBetween(0, 10, true)
    };
};

var PROCESS_PHASE = [ "验证用户信息", "信用评估", "反欺诈分析", "禁止项分析" ];

var PROCESS_1_PROPS = [ "手机号", "实名信息", "性别", "年龄", "婚姻状况", "学历", "工作" ];
var PROCESS_1_TAG = ["注册信息", "用户属性", "设备信息", "身份证信息", "户籍地址", "常住地址", "运营商", "通讯录", "短信", "在网时长", "紧急联系人储蓄卡", "信用卡", "支付宝授权", "学历信息", "工作单位", "单位地址", "工作证照"];

var PROCESS_2_PROPS = ["IDENTIFY", "FAMILY", "COMMUNICATION", "EDUCATION", "WORKS", "SOCIAL", "MOVEMENT", "FINANCIAL", "INVESTMENT", "CONSUME"];
var PROCESS_2_TAG = ["身份", "家庭", "通讯", "学历", "工作", "社交", "出行", "金融", "投资", "消费"];

var PROCESS_3_TAGS = ["同盾分", "平台借贷总数", "身份证关联申请信息", "手机号申请信息", "中介过滤", "7天内查询次数", "1个月内查询次数", "单位名称重复", "单位电话关联地址", "单位地址关联名称", "直接联系人申请数"];

var PROCESS_4_SITES = ["芝麻", "宜信", "聚信力", "同盾", "白骑士", "葫芦", "蜜罐", "算话", "中智诚", "91征信", "前程", "有盾"];
var PROCESS_4_TAGS = ["宜信风险名单", "当前逾期", "芝麻行业黑名单", "逾期未处理", "黑名单", "反欺诈风险高", "蜜罐黑名单", "手机网贷黑名单", "身份证网贷黑名单", "其他黑名单", "91征信当前逾期", "白骑士黑名单"];


