import React from 'react'
import { ButtonData, HeaderData, TweetData } from '../types/Alltypes'


interface HeaderDataType {
  headerData: HeaderData | undefined;
  tweetButton:ButtonData | undefined
  tweetThreads:TweetData[][] | undefined
}

const MidComp:React.FC<HeaderDataType> = ({headerData ,tweetButton ,tweetThreads}) => {
  console.log("h : ",headerData);
  return (
    <div className='mid-p'>
      <h3>{headerData?.title?.text}</h3>
      <div className='f-btn'>
        {headerData?.navigationTabs?.map((btn,idx)=>(
         <div key={idx}><a href={btn?.actionUrl} >{btn?.buttonText}</a></div>
        ))}
        
      </div>
      <div className='type-parent b-t b-b'>
        <div className='type-text'>
          <img className='profile' src="https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG" alt="" />
           <input type="text" placeholder="What's happening ?"  />
        </div>
        
        <div className='tweet-btn'><a style={{background:`${tweetButton?.bgColorData?.bgKey}` , borderStyle:`${tweetButton?.bgColorData?.dottedBorder ? 'dotted' :''}`}} href={tweetButton?.actionUrl}>{tweetButton?.buttonText}</a></div>
      </div>

      <div className='all-tweet'>
         {tweetThreads?.map((tw,idx)=>(
          <div key={idx} className='b-b'>
                {tw?.map((t,i)=>(
                  <>
                   <div key={i} className='tw-wrapper'>
                        <div className='user-all' style={{display:"flex"}}>
                                <img className='profile' src={t?.user?.imageData?.url} alt={t?.user?.imageData?.alt} />
                           <div className='parent-desc'>
                              <div className='user-d'>
                              <p className='user-name'>{t?.user?.userName}</p>
                              <p className='u-d' style={{fontSize:"12px", fontWeight:'400'}}>{t?.user?.userId}</p>
                              </div>
                              <span className='desc' style={{fontSize:"14px", fontWeight:'500'}} >{t?.textArea}</span>
                            </div>
                        </div>
                       
                   </div>
                   <div className="line-div">
                    
                   </div>
                  </>
                ))}
          </div>
         ))}
      </div>
    </div>
  )
}

export default MidComp
