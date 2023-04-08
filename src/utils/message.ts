// 对element-plus的ElMessage进行二次封装，使其不会多次弹出
/* import ShowMessage from '../../utils/message.js'
const showMessage = new ShowMessage() 
showMessage.success(option)*/

import { ElMessage } from 'element-plus'
let messageStatus:any = null
export default class ShowMessage {
  success(options:any) {
    this.message('success', options)
  }

  warning(options:any) {
    this.message('warning', options)
  }

  info(options:any) {
    this.message('info', options)
  }

  error(options:any) {
    this.message('error', options)
  }

  message(type:any, options:any) {
    if (messageStatus) {
      messageStatus.close()
    }
    messageStatus = ElMessage[type](options)
  }
}
