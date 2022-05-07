export const user = async (BASEURL, currentUser) => {

    // get user from api if networks is available or fallback to localstorage
    try{
      const response = await fetch(`${BASEURL}/${currentUser.userId}`, {
        method: 'GET',
        headers: {
          'token': `Bearer ${currentUser.accessToken}`
        }
      })
      const resData = await response.json()
      const user = {
        userId: resData.data._id, 
        walletAddress: resData.data.walletAddress, 
        referLink: resData.data.wallet, 
        refered: resData.data.refered, 
        balance: resData.data.wallet.balance,
        rewards: resData.data.wallet.rewards,
      }
      if(resData.status === 'ok'){
        sessionStorage.setItem('currentUser', JSON.stringify(user))
      }
      return user
    }catch(err){
      const user = {
        userId: currentUser._id, 
        walletAddress: currentUser.walletAddress,
        referLink: currentUser.referLink,
        rewards: currentUser.rewards,
        balance: currentUser.balance,
        refered: currentUser.refered
      }
      return user
    }
  }
  
  export const man = 'this is a man'