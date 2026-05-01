 const num = [1,2,3]
 const mtn = num.reduce( (acc, crv) => {
    console.log(`acc: ${acc} and currval: ${crv} `)
    return acc + crv
 },0)
 console.log(mtn)

 // shoping cart

 const spc = [
    {
        alu: 20,
        kg: 5
    },
    {
        tomato: 40,
        kg: 15
    },
    {
        vandi: 50,
        kg: 2
    },
    {
        cucumber: 100,
        kg: 1
    },
    {
        poha: 150,
        kg: 1
    },
    {
        potol: 60,
        kg: 5
    }
 ]

 const totalKgs = spc.reduce( (acc, items) => acc+items.kg,0)
 console.log(`total Kg's ${totalKgs}`)