
// all element declaration
let mainSection=document.getElementById('mainSection')
let showOnSection=document.getElementById('showOnSection')
let allCardSection=document.getElementById('allCardSection')
let totalApplication=allCardSection.children.length
let interviewJobCount=document.getElementById('interviewCount')
let rejectedJobCount=document.getElementById('rejectCount')
let againTotalCount=document.getElementById('againTotalCount')
let totalCardForInterview=[]
let totalCardForRejected=[]
let currentStatus='All'
let allToggleBtn=document.getElementById('allToggleBtn')
let interviewToggleBtn=document.getElementById('interviewToggleBtn')
let rejectToggleBtn=document.getElementById('rejectToggleBtn')
let emptySection=document.getElementById('emptySection')
let totalJobCount=document.getElementById('totalCount')

// all event 
mainSection.addEventListener('click',function(event)
{
// Interview
if(event.target.classList.contains('cardInterviewBtn')){

let parentNode=event.target.parentNode.parentNode
let cardfirstTtext=parentNode.querySelector('.cardfirstTtext').innerText
let cardSecondText=parentNode.querySelector('.cardSecondText').innerText
let cardThirdText=parentNode.querySelector('.cardThirdText').innerText
let cardFourthTtext=parentNode.querySelector('.cardFourthTtext').innerText

// modifying the status btn
let cardStatusBtn=parentNode.querySelector('.cardStatusBtn')
cardStatusBtn.innerHTML=`
<button class="border rounded-sm p-1 text-green-400  active:scale-95 cardInterviewBtn
                                 " >INTERVIEW</button>
`
cardStatusBtn.style.backgroundColor="white";

// now gathering all info to store it on an object
let cardInfo={
cardfirstTtext,
cardSecondText,
cardThirdText,
cardFourthTtext,
cardStatusBtn:'INTERVIEW'
}

let cardfirstTtextExist=totalCardForInterview.find(item=>item.cardfirstTtext==cardInfo.cardfirstTtext)

if(!cardfirstTtextExist){
totalCardForInterview.push(cardInfo)
//  ShowInterviewSection()
}
// calculateTotalJobApllication()
totalCardForRejected=totalCardForRejected.filter(item=>item.cardfirstTtext!=cardInfo.cardfirstTtext)

if(currentStatus=="rejectToggleBtn"){
    ShowRejectedSection()
}
calculateTotalJobApllication()

}

// reject
else if(event.target.classList.contains('cardRejectedBtn')){

let parentNode=event.target.parentNode.parentNode
let cardfirstTtext=parentNode.querySelector('.cardfirstTtext').innerText
let cardSecondText=parentNode.querySelector('.cardSecondText').innerText
let cardThirdText=parentNode.querySelector('.cardThirdText').innerText
let cardFourthTtext=parentNode.querySelector('.cardFourthTtext').innerText

// modifying the status btn
let cardStatusBtn=parentNode.querySelector('.cardStatusBtn')

cardStatusBtn.innerHTML=`
 <button class="border rounded-sm p-1 text-red-400 active:scale-95 cardRejectedBtn 
                                ">REJECTED</button>
`
cardStatusBtn.style.backgroundColor="white";

// now gathering all info to store it on an object
let cardInfo={
cardfirstTtext,
cardSecondText,
cardThirdText,
cardFourthTtext,
cardStatusBtn:'REJECTED'
}

let cardfirstTtextExist=totalCardForRejected.find(item=>item.cardfirstTtext==cardInfo.cardfirstTtext)

if(!cardfirstTtextExist){
totalCardForRejected.push(cardInfo)
//  ShowInterviewSection()
}
// calculateTotalJobApllication()
totalCardForInterview=totalCardForInterview.filter(item=>item.cardfirstTtext!=cardInfo.cardfirstTtext)

if(currentStatus=="interviewToggleBtn"){
    ShowInterviewSection()
}
calculateTotalJobApllication()

}

// delete
else if(event.target.classList.contains('cardDeleteBtn')){
let parentNode=event.target.parentNode.parentNode

let cardfirstTtext=parentNode.querySelector('.cardfirstTtext').innerText

parentNode.remove()


totalCardForRejected=totalCardForRejected.filter(item=>item.cardfirstTtext!=cardfirstTtext)

totalCardForInterview=totalCardForInterview.filter(item=>item.cardfirstTtext!=cardfirstTtext)

totalApplication=allCardSection.children.length
calculateTotalJobApllication()

}
})



// calculation function
function calculateTotalJobApllication(){
totalJobCount.innerText=totalApplication
againTotalCount.innerText=totalApplication
interviewJobCount.innerText=totalCardForInterview.length
rejectedJobCount.innerText=totalCardForRejected.length

}
calculateTotalJobApllication()
// toggling function
 function togglingButton(id){

    allToggleBtn.classList.remove('text-white','bg-[#3B82F6]')
    interviewToggleBtn.classList.remove('text-white','bg-[#3B82F6]')
    rejectToggleBtn.classList.remove('text-white','bg-[#3B82F6]')

    allToggleBtn.classList.add('bg-white','text-gray-500')
    interviewToggleBtn.classList.add('bg-white','text-gray-500')
    rejectToggleBtn.classList.add('bg-white','text-gray-500')
    
    currentStatus=id
    console.log(currentStatus)

     
    let selected=document.getElementById(id)
    selected.classList.remove('bg-white','text-gray-500')
    selected.classList.add('text-white','bg-[#3B82F6]')

    if(id=='allToggleBtn'){
    allCardSection.classList.remove('hidden')
    emptySection.classList.add('hidden')
    showOnSection.classList.add('hidden')
    }
    else if(id=='interviewToggleBtn'){
     allCardSection.classList. add('hidden')
     emptySection.classList.remove('hidden')
     ShowInterviewSection()
    }
    else if(id=='rejectToggleBtn'){
     allCardSection.classList. add('hidden')
     emptySection.classList.remove('hidden')
    ShowRejectedSection()
    }


 }

function ShowInterviewSection(){
showOnSection.innerHTML=''
for(let interviewCard of totalCardForInterview)
    {
let div=document.createElement('div')
div.className='card  p-6 bg-white shadow rounded-sm mb-6 '
div.innerHTML=
`
     <div class="flex justify-between items-center">
                    <div>
                        <p  class="cardfirstTtext text-[20px] font-semibold">${interviewCard.cardfirstTtext}</p>
                        <p class="cardSecondText text-gray-400">${interviewCard.cardSecondText}</p>
                     </div>
                    
                       <img class="active:scale-95 cardDeleteBtn" src="./reasource/Group 1.png" alt="">
        </div>

       <div class="space-y-6">
                        <p class="cardThirdText text-gray-400 ">${interviewCard.cardThirdText}</p>
                        
                       <button class="border rounded-sm p-1 text-green-400  active:scale-95 cardInterviewBtn
                                 " >INTERVIEW</button>

                        <p class="cardFourthTtext">${interviewCard.cardFourthTtext}</p>
        </div>

    <div class="flex gap-2">
                    <!-- clickable button section -->
                    <button class="border rounded-sm p-1 text-green-400  active:scale-95 cardInterviewBtn
                                 " >INTERVIEW</button>

                    <button class="border rounded-sm p-1 text-red-400 active:scale-95 cardRejectedBtn 
                                ">REJECTED</button>
  </div>

`
showOnSection.appendChild(div)
if(currentStatus=='interviewToggleBtn'){
emptySection.classList.add('hidden')
showOnSection.classList.remove('hidden')
}

}

}
function ShowRejectedSection(){
showOnSection.innerHTML=''
for(let rejectCard of totalCardForRejected)
    {
let div=document.createElement('div')
div.className='card  p-6 bg-white shadow rounded-sm mb-6 '
div.innerHTML=
`
     <div class="flex justify-between items-center">
                    <div>
                        <p  class="cardfirstTtext text-[20px] font-semibold">${rejectCard.cardfirstTtext}</p>
                        <p class="cardSecondText text-gray-400">${rejectCard.cardSecondText}</p>
                     </div>
                    
                       <img class="active:scale-95 cardDeleteBtn" src="./reasource/Group 1.png" alt="">
        </div>

       <div class="space-y-6">
                        <p class="cardThirdText text-gray-400 ">${rejectCard.cardThirdText}</p>
                    <button class="border rounded-sm p-1 text-red-400 active:scale-95 cardRejectedBtn 
                                ">REJECTED</button>
                        <p class="cardFourthTtext">${rejectCard.cardFourthTtext}</p>
        </div>

    <div class="flex gap-2">
                    <!-- clickable button section -->
                       <button class="border rounded-sm p-1 text-green-400  active:scale-95 cardInterviewBtn
                                 " >INTERVIEW</button>

                    <button class="border rounded-sm p-1 text-red-400 active:scale-95 cardRejectedBtn 
                                ">REJECTED</button>
  </div>

`
showOnSection.appendChild(div)

if(currentStatus=='rejectToggleBtn'){
emptySection.classList.add('hidden')
showOnSection.classList.remove('hidden')
}

}
// emptySection.classList.add('hidden')
// showOnSection.classList.remove('hidden')

}

