const data = [
  { id: 1, name:'Вася' },
  { id: 2, name:'Саша' },
  { id: 3, name:'Миша' },
  { id: 4, name:'Коля' },
  { id: 5, name:'Паша' },
  { id: 6, name:'Юра' },
]
interface ID {
  id: number
}
function sortId <T extends ID> (data:T[], type: 'asc' | 'desc' = 'asc'):T[]{
      return data.sort((a,b) => {
        switch (type) {
        case 'asc':
          return a.id - b.id
        case 'desc':
          return b.id - a.id
        }
      })
}

console.log(sortId(data,'desc'))
console.log(sortId(data))