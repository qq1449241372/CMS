type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[] //针对select
  otherOptions?: any //针对其它选择器
}
