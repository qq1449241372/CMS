import { IForm } from '@/base-ui/form'
export const formConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      type: 'input',
      field: 'username',
      label: '用户名',
      rules: [],
      placeholder: '用户名'
    },
    {
      type: 'input',
      field: 'password',
      label: '密码',
      rules: [],
      placeholder: '密码'
    },
    {
      type: 'input',
      field: 'realName',
      label: '姓名',
      rules: [],
      placeholder: '姓名'
    },
    {
      type: 'input',
      field: 'phone',
      label: '手机号',
      rules: [],
      placeholder: '手机号'
    },
    {
      type: 'select',
      field: 'role',
      label: '角色',
      rules: [],
      placeholder: '角色',
      options: [{ label: '超级管理员' }, { label: '超级管理员' }]
    },
    {
      type: 'datepicker',
      field: 'createdTime',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
