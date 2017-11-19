/**
 * Created by Administrator on 2017/5/7.
 */
const Domain = 'http://120.55.61.62/admin/web/'

let Services = {
  // 后台用户管理
  userAdminLogin: Domain + 'admin-user/login',
  userAdminLoginOut: Domain + 'admin-user/login-out',
  userAdminList: Domain + 'admin-user/list',
  userAdminAdd: Domain + 'admin-user/add',
  userAdminDel: Domain + 'admin-user/delete',
  userAdminModify: Domain + 'admin-user/modify',
  userAdminPermissionModify: Domain + 'admin-user/add-role',
  userAdminPermissionGet: Domain + 'admin-user/get-user-role',

  // 订单管理
  orderList: Domain + 'order/list',
  orderDetail: Domain + 'order/order-detail',
  orderCheckList: Domain + 'order/order-review-list',

  // 决策树管理
  treeList: Domain + 'tree/rule-list',
  treeDetail: Domain + 'tree/rule-detail',
  treeDelete: Domain + 'tree/rule-delete',
  treeAdd: Domain + 'tree/rule-add',
  treeModify: Domain + 'tree/rule-modify',

  // 前台用户管理
  userFrontList: Domain + 'user/list',
  userFrontAdd: Domain + 'user-manage/user-add',
  userFrontDel: Domain + 'user-manage/delete',
  userFrontModify: Domain + 'user-manage/user-modify',
  userFrontPwd: Domain + 'user-manage/user-modify-password',
  userFrontSendPwd: Domain + 'user-manage/user-modify-send-password',
  userSendMass: Domain + 'user-manage/user-send-mass',
  userStatisticType: Domain + 'user-manage/user-show-msg-statist',
  userDetail: Domain + 'user/detail',
  userLoanLimit: Domain + 'user/credit-list',

  // 签名列表
  singList: Domain + 'user-manage/sign-list',
  signAdd: Domain + 'user-manage/sign-add',
  signDel: Domain + 'user-manage/sign-delete',
  signModify: Domain + 'user-manage/sign-modify',

  // 角色管理
  permissionList: Domain + 'authority/all-list',
  roleList: Domain + 'authority/role-list',
  roleAdd: Domain + 'authority/role-add',
  roleModify: Domain + 'authority/role-edit',
  roleDel: Domain + 'authority/role-del',

  // 错误信息管理
  errList: Domain + 'error-manage/list',
  errAdd: Domain + 'error-manage/add',
  errDel: Domain + 'error-manage/delete',
  errModify: Domain + 'error-manage/edit',
  errUpload: Domain + 'error-manage/add-file',

  // 黑名单管理
  blackList: Domain + 'black-mobile-manage/list',
  blackListAdd: Domain + 'black-mobile-manage/add',
  blackListModify: Domain + 'black-mobile-manage/edit',
  blackListCheck: Domain + 'black-mobile-manage/check',
  blackListUpload: Domain + 'black-mobile-manage/add-file',

  // 通道、客户列表
  channelList: Domain + 'public/get-op',
  clientList: Domain + 'public/get-sp',

  // 运营商管理
  operatorList: Domain + 'mobile-operator-manage/list',
  operatorAdd: Domain + 'mobile-operator-manage/add',
  operatorModify: Domain + 'mobile-operator-manage/edit',
  operatorUpload: Domain + 'mobile-operator-manage/add-file',

  // 敏感词管理
  sensitiveList: Domain + 'sensitive-words-manage/list',
  sensitiveAdd: Domain + 'sensitive-words-manage/add',
  sensitiveDel: Domain + 'sensitive-words-manage/delete',
  sensitiveCheck: Domain + 'sensitive-words-manage/check',
  sensitiveUpload: Domain + 'sensitive-words-manage/add-file',

  // 短信任务管理
  smstaskList: Domain + 'task/list',
  smstaskCheck: Domain + 'task/check',

  // 任务明细
  taskRecord: Domain + 'task/record-list',

  // 短链统计
  shortUrlList: Domain + 'task/short-list',
  shortUrlDetail: Domain + 'task/short-detail-list',

  // 报表
  channelDelay: Domain + 'admin-data/channel-delay',
  channelDelay2: Domain + 'admin-data/channel-delay-new',
  verificationCode: Domain + 'admin-data/verification-code',
  verificationCode2: Domain + 'admin-data/verification-code-new',
  errorType: Domain + 'admin-data/error-type',
  gatewayDelay: Domain + 'admin-data/gateway',
  gatewayDelay2: Domain + 'admin-data/gateway-new',
  province: Domain + 'admin-data/province',
  province2: Domain + 'admin-data/province-new',
  channelCheck: Domain + 'admin-data/channel-reconciliation',
  clientCheck: Domain + 'admin-data/client-reconciliation',
  compare: Domain + 'admin-data/compare'
}

export default Services
