import React from 'react'

export const TopNav = () => {
  return (
    <div className='topNav'>
        <div className='flex'>
            <div>Coins</div>
            <div>Exchanges</div>
            <div>Charts</div>
            <div>Swap</div>
        </div>
        <div className='logo'>
            <img src='https://yt3.ggpht.com/v0_mduiVVzb8vLBORaMntdFH0Fks6Cskg8nYr-OJk07ck__fzdxWaeP6B8qacAQ6yfocfU_UyVo=s900-c-k-c0x00ffffff-no-rj' alt='logo'/>
        </div>
        <div className='imageIcon flex'>
            <div>
                <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="search"/>
            </div>
            <div>
            <img src="https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png" alt='setting'/>
            </div>
            <div><button>Connect Wallet</button></div>
        </div>
    </div>
  )
}
