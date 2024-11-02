import { toast } from "react-toastify"



let getItemFromLs=()=>{

    let getStr=localStorage.getItem("read")
    if(getStr){
        let ConvertArray=JSON.parse(getStr)
        return ConvertArray
    }
    else{
        return []
    }
}
let getItemFromLsW=()=>{

    let getStr=localStorage.getItem("WishList")
    if(getStr){
        let ConvertArray=JSON.parse(getStr)
        return ConvertArray
    }
    else{
        return []
    }
}

let AddToLocalStorage=(id)=>{

    let arrayItem=getItemFromLs()
    if(arrayItem.includes(id)){

        console.log(id,"Doesnt Exist")

    }
    else{
        arrayItem.push(id)
         let strItem=JSON.stringify(arrayItem)
         localStorage.setItem("read",strItem)
         toast("This Book is Added to the Read List")
    }
}

let AddToLocalStorageW=(id)=>{

    let arrayItem=getItemFromLsW()
    if(arrayItem.includes(id)){

        console.log(id,"Doesnt Exist")

    }
    else{
        arrayItem.push(id)
         let strItem=JSON.stringify(arrayItem)
         localStorage.setItem("WishList",strItem)
    }
}



export {AddToLocalStorage,AddToLocalStorageW,getItemFromLs}