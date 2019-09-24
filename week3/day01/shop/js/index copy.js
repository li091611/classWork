let data = null;
let xhr = new XMLHttpRequest();
xhr.open('get','./data.json',true);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        data = JSON.parse(xhr.response)
        console.log(data);
    }
}
xhr.send();