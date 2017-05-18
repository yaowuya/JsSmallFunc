// 模块加载配置
require.config({
  baseUrl: '../../js/',
  paths: {
    'jquery': 'plugins/jquery-3.1.1.min',
    'bootstrap': 'plugins/bootstrap.min',
    'angular': 'plugins/angular/angular-1.3.0',
    'vue':'plugins/vue/vue',
    'ajaxPackage': 'package/ajaxPakage', //封装的ajax
    'jqueryValidate': 'plugins/jquery-validate/jquery.validate', //jQuery验证插件
    'messageCN': 'plugins/jquery-validate/messages_zh', //jqueryValidate的中文翻译
    'metismenu': 'plugins/metisMenu', //metisMenu菜单
    'bootstrapTable': 'plugins/bootstrap-table/bootstrap-table.min',
    'bootstrapZhCN': 'plugins/bootstrap-table/bootstrap-table-zh-CN',
    'bootstrapExport': 'plugins/bootstrap-table/bootstrap-table-export',
    'tableExport': 'plugins/tableExport',
    'fileSave': 'plugins/FileSaver.min',
    'bootstrapEditable': 'plugins/bootstrap-table/bootstrap-table-editable',
    'Editable': 'plugins/bootstrap-table/bootstrap-editable',
    'contextMenu': 'plugins/bootstrap-table/bootstrap-table-contextmenu', //右键菜单
    'table': 'package/table', //bootstraptable封装
    'bootstrapSelect': 'plugins/boostrap-select/bootstrap-select',
    'selectPackage': 'package/selectPakage',
    'select': 'package/select',
    'jqueryConfirm': 'plugins/jquery-confirm',
    'datepicker': 'plugins/bootstrap-datetimepicker/bootstrap-datetimepicker',
    'moment': 'plugins/bootstrap-datetimepicker/moment-with-locales',
    'timePicker': 'package/timePicker',
    'slimscroll': 'plugins/jquery.slimscroll',
  },
  shim: {
    'bootstrap': {
      deps: ['jquery']
    },
    'jqueryValidate': {
      deps: ['jquery']
    },
    'messageCN': {
      deps: ['jqueryValidate']
    },
    'bootstrapTable': {
      deps: ['bootstrap']
    },
    'bootstrapZhCN': {
      deps: ['bootstrapTable']
    },
    'bootstrapExport': {
      deps: ['bootstrapTable']
    },
    'tableExport': {
      deps: ['bootstrapTable']
    },
    'fileSave': {
      deps: ['bootstrapTable']
    },
    'bootstrapEditable': {
      deps: ['bootstrapTable']
    },
    'Editable': {
      deps: ['bootstrapTable']
    },
    'contextMenu': {
      deps: ['bootstrapTable']
    },
    'bootstrapSelect': {
      deps: ['jquery']
    },
    'jqueryConfirm': {
      deps: ['jquery']
    },
    'datepicker': {
      deps: ['jquery']
    },
    'moment': {
      deps: ['bootstrap']
    },
  }
});