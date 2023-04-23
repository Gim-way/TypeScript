function logMiddlewareS7EX3<T>(data: T): T {
  console.log(data)
  return data
}

const resS7EX3 = logMiddlewareS7EX3<number>(10)

function getSplitedHalfS7EX3<T>(data: Array<T>): Array<T> {
  const l = data.length / 2
  return data.splice(0, l)
}

getSplitedHalfS7EX3<number>([1, 3, 4])


const split: <T>(data: Array<T>) => Array<T> = getSplitedHalfS7EX3;
const split2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalfS7EX3;

interface ILogLine<T> {
  timeStamp: Date;
  data: T
}

type LogLineType<T> = {
  timeStamp: Date;
  data: T
}

const logLine: ILogLine<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1
  }
}

/* Используем Generic в типах */