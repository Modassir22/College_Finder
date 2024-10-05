let url = "http://universities.hipolabs.com/search?country=india&name=";
let btn = document.querySelector("button");
btn.addEventListener("click" , async()=>{
    let state = document.querySelector("input").value;
    let CollArr = await collegeFinder(state);
    showCollege(CollArr);
})

function showCollege(CollArr){
    let list = document.querySelector(".list");
    list.innerText = "";
    for(col of CollArr){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li); //1st wrong
    }
}


async function collegeFinder(state){
    try{
    let res = await axios.get(url + state);
    return res.data;
    }catch(e){
        console.log("Error Occur",e);
        return [];
    }
}


