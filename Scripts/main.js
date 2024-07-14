

const HTML = document;

const special_LetterArr = Array.from(HTML.getElementsByClassName("special_Letter"))
const efxUnderLetterArr = Array.from(HTML.getElementsByClassName("EffectUnderButton"))
const buttons = Array.from(HTML.getElementsByClassName("buttonClass"))
const videoletters = Array.from(HTML.getElementsByClassName("Highlight"))
const video = Array.from(HTML.getElementsByClassName("video"))
const videoDiv = HTML.getElementById("videoDiv")
const Hi_ = HTML.getElementById("SpecialAgain")
const Welcome = document.getElementById('Welcoming');
const pfp = HTML.getElementById("pfp")

Welcome.classList.add("typingAnim")


let trackerS = 0
let trackerEF = 0
let lastTracker = 0
let paratracker = 1
let debounceVideo = false
let circle = 2*Math.PI
let division = circle/10
let Hibool = false
inAnim = false
animframe = 0
frameTrack = 0
called = false

////////Buttons

let CombinedArr = []
let stringOfTouched = []
let global = []

for(let i = 0; i < special_LetterArr.length; i++){
    CombinedArr[i] = {Button: null}
}

special_LetterArr.forEach(item => {
    let sub = []
    let Letter_ = item.style
    let index_plus_1 = trackerS+1
    Letter_.backgroundColor = `rgba(255, 127, 80, 0)`

    sub[item.className] = false
    CombinedArr[trackerS].Button = {["buttonClass "+"B"+index_plus_1]:{item, bool: sub[item.className], UnderLine: null}}
    trackerS++
})
efxUnderLetterArr.forEach(item =>{
    let underline = item.style
    let index_plus_1 = trackerEF + 1
    underline.backgroundColor = `rgba(255, 127, 80, 0)`

    CombinedArr[trackerEF].Button["buttonClass "+"B"+index_plus_1].UnderLine = item

    trackerEF++
})
CombinedArr.forEach(obj =>{
    let getButton = obj.Button
    
    buttons.forEach(button =>{
    
        button.addEventListener("mouseover", async event => {
            let nameOfObject = event.target.className
            if (getButton[nameOfObject]) {
                let currentButton = getButton[nameOfObject]
                if (!currentButton.bool) {
                    currentButton.bool = true
                    let i = 0
                    animationId = setInterval(() => {
                        if(i <= 1 && currentButton.bool){
                            let value = ymxb(0, 1, i)
                            console.log(value)
                            currentButton.item.style.backgroundColor = `rgba(250, 195, 112, ${value})`
                            currentButton.UnderLine.style.backgroundColor = `rgba(250, 195, 112, ${value})`
                            i += 0.1
                        }else{
                            
                        }
                    }, 25) 
                }
            }
        })

        button.addEventListener("mouseleave", event => {
            let nameOfObject = event.target.className
            if (getButton[nameOfObject]) {
                console.log("leaving")
                let currentButton = getButton[nameOfObject]
                if(currentButton.bool){
                    currentButton.bool = false

                    currentButton.item.style.backgroundColor = `rgba(250, 195, 112, 0)`
                    currentButton.UnderLine.style.backgroundColor = `rgba(250, 195, 112, 0)`
                }
            }
        })
    })
})

HTML.getElementById("button2").addEventListener('click', event=>{
   console.log("clicked")
   HTML.getElementById("Section2").scrollIntoView({ behavior: 'smooth' });
})
HTML.getElementById("button1").addEventListener('click', event=>{
    console.log("clicked")
    HTML.getElementById("center").scrollIntoView({ behavior: 'smooth' });
    
    Welcome.classList.remove("typingAnim")
    void Welcome.offsetWidth
    Welcome.classList.add("typingAnim")


 })


Hi_.addEventListener("mouseover", Event=>{
    if(Hibool == false){
        console.log("YYYY")
        Hibool = true
    }
 })

Hi_.addEventListener("mouseleave", Event=>{
    if(Hibool == true){
        Hibool = false
    }
})



video.forEach(film => {
    videoletters.forEach(letter => {

        letter.addEventListener("mouseover", event => {
            let obj = event.target;


            pfp.style.zIndex = -100
            pfp.classList.remove("fadein")
            void pfp.offsetWidth
            pfp.classList.add("fadein")

            if (!debounceVideo && obj.className === "Highlight") {
                console.log("Yippie")
                debounceVideo = true
               
                obj.style.color = `rgb(255, 100, 59)`

                videoDiv.style.zIndex = 100
               
                film.src = "Videos/Deriving the derivative of the Omega function.mp4"
                film.load()
                film.play()

                film.classList.remove("fadein")
                void film.offsetWidth
                film.classList.add("fadein")

            }else if (!debounceVideo && obj.className === "Highlight music") {
                
                console.log("Yippie")
                debounceVideo = true
               
                obj.style.color = `rgb(255, 100, 59)`

                videoDiv.style.zIndex = 100
               
                film.src = "Videos/yesssir.mp4"
                film.load()
                film.play()

                film.classList.remove("fadein")
                void film.offsetWidth
                film.classList.add("fadein")
            } else if (!debounceVideo && obj.className === "Highlight programming") {
                
                console.log("Yippie")
                debounceVideo = true
               
                obj.style.color = `rgb(255, 100, 59)`

                videoDiv.style.zIndex = 100
               
                film.src = "Videos/2024-07-14 14-27-30.mp4"
                film.load()
                film.play()

                film.classList.remove("fadein")
                void film.offsetWidth
                film.classList.add("fadein")
            }
                
               
        })
        letter.addEventListener("mouseleave", event => {
            let obj = event.target;
            
            pfp.style.zIndex = 100

            if (debounceVideo == true && obj.className === "Highlight") {
                console.log("Yippie no")
                debounceVideo = false

                
               
                obj.style.color = `rgb(241, 163, 163)`
                film.pause()

                film.classList.remove("fadeout")
                void film.offsetWidth
                film.classList.add("fadeout")
                videoDiv.style.zIndex = -100

            }else if (debounceVideo == true && obj.className === "Highlight music") {
                console.log("Yippie no")
                debounceVideo = false

                
               
                obj.style.color = `rgb(241, 163, 163)`
                film.pause()

                film.classList.remove("fadeout")
                void film.offsetWidth
                film.classList.add("fadeout")
                videoDiv.style.zIndex = -100
            }else if (debounceVideo == true && obj.className === "Highlight programming") {
                console.log("Yippie no")
                debounceVideo = false

                
               
                obj.style.color = `rgb(241, 163, 163)`
                film.pause()

                film.classList.remove("fadeout")
                void film.offsetWidth
                film.classList.add("fadeout")
                videoDiv.style.zIndex = -100
            }
                
               
        })

    })
})



function animationFrame_(){
    requestAnimationFrame(animationFrame_)
    frameTrack++

    let step = frameTrack/60
    

   
    if(Hibool == true && animframe < 1000 && inAnim == false){
        inAnim = true
        animframe++
        Hi_.style.fontSize = ymxb(32, 80, animframe/30) + "px";
    }else{
        inAnim = false
        Hi_.style.fontSize = "xx-large";
        animframe = 0
    }
}
animationFrame_()




function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

function ymxb(starting, end, interp){
    return (end-starting)*interp + starting
}












