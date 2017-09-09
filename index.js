// @flow
'use strict'

module.exports = (data /* : Object */) => {
  const result = loop(data)
  return format(result)
}

function format(obj /* : Object */) {
  return JSON.stringify(obj, null, 2).replace(/"|,/g, '')
}

function loop(obj) /* : any  */ {
  if (Array.isArray(obj)) {
    return obj.length > 0 ? [loop(obj[0])] : '[]'
  } else if (typeof obj === 'object') {
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (obj == null) {
      return 'unknown'
    }
    return Object.keys(obj).reduce((prev, key) => {
      const value = loop(obj[key])
      return value ? Object.assign(prev, { [key]: value }) : prev
    }, {})
  } else if (typeof obj === 'string') {
    return 'String'
  } else if (typeof obj === 'number') {
    return 'Number'
  } else if (typeof obj === 'boolean') {
    return 'Boolean'
  }
  return 'unknown'
}
