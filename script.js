// logic 1:all card section er total child er shongkhai hobe total job application er shongkha

// eikhane total button ache 5ta
// 1.All,2.interview,3.Rejected--->header section e
// 4.INTERVIEW,5.REJECTED----->card


// step-1 :1st ei all card section er child ke count kori.
let allCardSection=document.getElementById('allCardSection')
let totalApplication=allCardSection.children.length
// step-2 :totalCount interviewCount rejectCount

// by default total,interview,rejected 0 ache,ekhon dynamicaly function diye egulor counting plus-minus korte chacchi.
let interviewJobCount=document.getElementById('interviewCount')
let rejectedJobCount=document.getElementById('rejectCount')
let againTotalCount=document.getElementById('againTotalCount')

let totalCardForInterview=[]
let totalCardForRejected=[]

// lets start with "Total".now catch Total er '0' element dhori
let totalJobCount=document.getElementById('totalCount')
function calculateTotalJobApllication(){

totalJobCount.innerText=totalApplication
againTotalCount.innerText=totalApplication
interviewJobCount.innerText=totalCardForInterview.length
rejectedJobCount.innerText=totalCardForRejected.length

}
calculateTotalJobApllication()

// now calc function complete

// logic 2:job available section e 3ta button ache,
// ami eder toggling korte chacchi,
//  step-1 ; 1ta button e click korle shetai color change korbe,step -2:baki gulo other same color ei thakbe

// ekhon ami button gulor id collect korechi,
// 1.All=allToggleBtn,
// 2.Interview=interviewToggleBtn,
// 3.Rejected= rejectToggleBtn

// step 3:ekta togglong function banabo jeno ta onclick ei kaaj kore,erjonno age button gulo ke dhore store kore rakhlam

let allToggleBtn=document.getElementById('allToggleBtn')
let interviewToggleBtn=document.getElementById('interviewToggleBtn')
let rejectToggleBtn=document.getElementById('rejectToggleBtn')
//  bg-white text-gray-500 --->thats for others
//  bg-blue-500 text-white--->when click any button that will turn this

console.log(allToggleBtn,interviewToggleBtn,rejectToggleBtn)
 function togglingButton(id){

allToggleBtn.classList.remove('')



 }
