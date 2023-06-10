function getAndUpdate(){
    console.log('Updating List')
    title=document.getElementById('title').value
    desc=document.getElementById('description').value
    if(localStorage.getItem('itemsJson')==null){
        items=[]
        items.push([title,desc])
        localStorage.setItem('itemsJson',JSON.stringify(items))
    }
    else{
        itemsstr=localStorage.getItem('itemsJson')
        items=JSON.parse(itemsstr)
        items.push([title,desc])
        localStorage.setItem('itemsJson',JSON.stringify(items))
    }
    update()
}

function update(){
    if(localStorage.getItem('itemsJson')==null){
        items=[]
        localStorage.setItem('itemsJson',JSON.stringify(items))
    }
    else{
        itemsstr=localStorage.getItem('itemsJson')
        items=JSON.parse(itemsstr)
    }
    let tablebody=document.getElementById('tablebody')
    let str=''
    items.forEach((element,index) => {
        str+=`
        <tr>
              <th scope="row">${index+1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button class="btn btn-danger btn-sm" onclick="deleted(${index})">Delete</button></td>
        </tr>`
        
    });
    tablebody.innerHTML=str
}





function deleted(item){
    console.log('deleted',item)
    itemsstr=localStorage.getItem('itemsJson')
    items=JSON.parse(itemsstr)
    //delete item
    items.splice(item,1)
    localStorage.setItem('itemsJson',JSON.stringify(items))
    update();
}


function clearStorage(){
    if(confirm("Do you really want to clear the list?")){
    console.log('Clearing Storage')
    localStorage.clear()
    update()
}
}

add=document.getElementById('add')

add.addEventListener("click",getAndUpdate)
update()