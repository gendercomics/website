import moment from 'moment'

import 'moment/locale/de'

moment.locale('de')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
