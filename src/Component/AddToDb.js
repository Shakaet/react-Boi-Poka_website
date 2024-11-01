


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

let AddToLocalStorage=(id)=>{

    let arrayItem=getItemFromLs()
    if(arrayItem.includes(id)){

        console.log(id,"Doesnt Exist")

    }
    else{
        arrayItem.push(id)
         let strItem=JSON.stringify(arrayItem)
         localStorage.setItem("read",strItem)
    }
}



export {AddToLocalStorage}