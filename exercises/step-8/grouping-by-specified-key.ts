interface DataS8H1 {
  group: number

  name: string
}

const dataS8H1: DataS8H1[] = [
  {
    group: 1,
    name: 'a'
  },
  {
    group: 1,
    name: 'b'
  },
  {
    group: 2,
    name: 'c'
  },
  {
    group: 2,
    name: 'd'
  },
]

interface IGroup<T> {
  [key: string]: T[]
}

type key = string | number | symbol

function groupS8H1<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key]
    let curEl = map[itemKey]
    if (Array.isArray(curEl)) {
      curEl.push(item)
    } else {
      curEl = [item]
    }
    map[itemKey] = curEl
    return map
  },
    {})
}
const resS8H1 = groupS8H1(dataS8H1,'group')
console.log(resS8H1)