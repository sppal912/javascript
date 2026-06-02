const descripter = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descripter)

const product = {
    name: 'bottle',
    price: 300,
    inStock: 52
}
console.log(Object.getOwnPropertyDescriptor(product, 'name'))

