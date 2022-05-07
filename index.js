
const BASEURL = "https://frank-ap.herokuapp.com/getusers/register";

const submit = document.getElementById('airdrop-main-form')
submit.addEventListener('submit', walletsubmit)

async function walletsubmit (e) {

  e.preventDefault()

  const walletAddress = document.getElementById('walletinput').value

  try{
    e.preventDefault()
    console.log(walletAddress);
    const response = await fetch('http://localhost:3000/getusers/register', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
        walletAddress,
    }),
    
    })
    console.log(walletAddress);
    const resData = await response.json()
    if(resData){
      const currentUser = {
        // userId: resData.data._id, 
        walletAddress: resData.data.walletAddress, 
        // referLink: resData.data.wallet, 
        // refered: resData.data.refered, 
        // balance: resData.data.wallet.balance,
        // rewards: resData.data.wallet.rewards,
      }
      sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
    }
    else if(resData.status === 'error'){
      const errorMessage = resData.errorMessage
      console.log(errorMessage);
    }
    console.log("I have done it oooo");
  }catch(error){
    alert(error)
  }
}


// (async () => {
//     const User = await user (BASEURL, currentUser)
//     const {name, email} = User
//     welcome.innerHTML = `Welcome ${name}`
//     activeuser.innerHTML = `${name}`
//     activemail.innerHTML = `${email}`
//     wallBalance.innerHTML = User.walletBalance
//     interBalance.innerHTML = User.interestBalance
//     idStatus.innerHTML = User.idStatus
//     if(User.idStatus === 'Unverified' && User.idStatus === 'Declined'){
//       idVerifyButton.disable = false
//       idVerifyButton.style.display = 'block'  
//     }
//     if(User.idStatus === 'Verified'){
//       idVerifyButton.disable = true
//       idVerifyButton.style.display = 'none'  
//       idStatus.style.color = '#056608'  
//       idStatus.style.fontWeight = '700'  
//     }
//    if(User.idStatus === 'Pending'){
//       idVerifyButton.style.display = 'none'
//       idStatus.style.color = '#FFFFE0'
  
//     }
//     verifyIdContainer.style.display = 'block'
//   })()