
export const isObjectEmpty = (obj: object): boolean => {
  return Object.getOwnPropertyNames(obj).length == 0
}

export const objectOnlyContainsKeys = (obj: object, keys: string[]): boolean => {
  const objKeys = Object.keys(obj)

  if (objKeys.length === 0 || objKeys.length !== keys.length) {
    return false
  }

  return objKeys.reduce((acc, value) => {
    if (acc === false) {
      return false
    }

    return keys.includes(value)
  }, true)
}

const objectFilter = (obj:object, predicate:(key:any, value:any) => boolean):object => {
  return Object.keys(obj)
    .filter( key => predicate(key, obj[key]) )
    .reduce( (res, key) => (res[key] = obj[key], res), {} );
}

export const objectWithoutKeys = (obj:object, keys:string[]):object => {
  return objectFilter(obj, (key, value) => !keys.includes(key));
}
