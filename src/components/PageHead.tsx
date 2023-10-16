import React from 'react'
interface HeadProps{
  pageTitle:string;
  pageDesc:string;
}
const PageHead:React.FC<HeadProps> = ({pageTitle,pageDesc}) => {
  return (
    <div className=' space-y-1'>
      <h2 className=' text-marine-blue font-[700] text-4xl font-myUbuntu-font flex-grow-0 flex-shrink-0'>{pageTitle}</h2>
      <p className=' text-cool-gray'>{pageDesc}</p>
    </div>
  )
}

export default PageHead