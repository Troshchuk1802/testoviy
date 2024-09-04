const a = 17
const b = 15
const colors = ['blue', 'yellow']
colors.unshift('dark')

// let price = null;
// null - це помилка (нічого)


const details = {
    
    lang: 'EN',
    countr: 'UA'

}


delete details.lang


let detailsProp = 'countr';
details [detailsProp] = 'Ukraine'

console.log({
    
    detailsProp,
    
    a,

})