    getAdvice()
    var shuffleBtn=document.getElementById("btn")
    const adviceNo=document.getElementById("advice-num")
    const adviceText=document.getElementById("main-text")

    function getAdvice(){
        let url="https://api.adviceslip.com/advice/"+JSON.stringify(Math.floor(Math.random()*229 + 1))
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            if(data.slip){
                adviceNo.textContent=JSON.stringify(data.slip.id)
            }
            if(data.slip){
                adviceText.textContent=JSON.stringify(data.slip.advice)
            }
            console.log(JSON.stringify(data))
        })
        .catch(e=>{
            console.log(e)
            getAdvice()
        })
    }
