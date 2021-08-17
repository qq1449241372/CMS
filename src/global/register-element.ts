import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'

import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import { ElBreadcrumb, ElBreadcrumbItem, locale } from 'element-plus'
import {
  ElAside,
  ElAvatar,
  ElButton,
  ElCard,
  ElCheckbox,
  ElContainer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElRadio,
  ElCol,
  ElRow,
  ElSubmenu,
  ElSelect,
  ElOption,
  ElDatePicker
} from 'element-plus'
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElCard,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElMain,
  ElHeader,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
]

export default function (app: App): void {
  // locale(lang)
  for (const component of components) {
    app.component(component.name, component)
  }
}
