import React from 'react'
import { ButtonData } from '../types/Alltypes'


  interface LeftCompProps {
      sideNavigationData: ButtonData[];
    }

const LeftComp:React.FC<LeftCompProps> = ({sideNavigationData}) => {
  return (
    <div className='left-parent'>
      {sideNavigationData?.map((btn,idx)=>(
        <div className='left-btn'>
          <img src={btn?.icon?.url} alt={btn?.icon?.alt} width={btn?.icon?.aspX} height={btn?.icon?.aspY} />
            <a key={idx} href={btn?.actionUrl}>{btn?.buttonText}</a>
        </div>
        
      ))}
    </div>
  )
}

export default LeftComp
