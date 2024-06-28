const obj = {
    apple : false ,
    banana : true ,
    guava : true,
    mango : true,
    litch: false ,

}

const array = "apple,mango,banana"
const arr = array.split(",")
console.log("data",arr)

const minarr = arr.map((item,idx)=>{
    return item
})
console.log("new",minarr)

newarr = minarr.filter((item,idx)=>{
    return idx!=1
})

console.log("newarr",newarr)
const x = [...newarr,"guava","mango"]
console.log("x",x)
x.push("litchi")
console.log("x",x)

const y = x.map((item)=>{
    if(obj[item]){
        return item
    }
}).filter((item)=>{
        return item!=null
})

console.log("y",y)

const array2 = ["watermelon" , "grapes" ,"jamun" , "kiwi"]
array2.map((item)=>{
    if(item.length>=5){
        obj[item] = true
    }
    else{
        obj[item] = false
    }
})

console.log("obj",obj)

const ans = Object.keys(obj).map((item , idx)=>{
    if(item.length>=6){
        return item
    }
    
})
console.log("ans",ans)
