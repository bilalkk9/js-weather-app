// var button=document.querySelector('.button');
// var inputValue=document.querySelector('.inputValue');
// var name=document.querySelector('.name');
// var desc=document.querySelector('.desc');
// var temp=document.querySelector('.temp');

// button.addEventListener('click',function(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0f14da7e696064f8f46bcc9332e8909d')
//     .then(response=>response.json())
//     .then(data=>console.log(data))

//     .catch(err=>alert("Invalid city name!"));
// })


var button=document.querySelector('.button');
var inputValue=document.querySelector('.inputValue');
var place=document.querySelector('.place');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0f14da7e696064f8f46bcc9332e8909d')
    .then(response=>response.json())
    .then(data=>{
            var nameValue=data['name'];
            var tempValue=data['main']['temp'];
            var descValue=data['weather'][0]['main'];
        
            place.innerHTML=nameValue;
            temp.innerHTML=tempValue;
            desc.innerHTML=descValue;
        })

    .catch(err=>alert("Invalid city name!"));
})


