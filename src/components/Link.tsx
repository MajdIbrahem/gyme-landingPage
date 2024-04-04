
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
type Props = {
    page: string
    selectedPage: string
    setSelectedPage:(value:string)=>void
}
const Link = ({ page,selectedPage,setSelectedPage }: Props) => {
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "")
    console.log(lowerCasePage)
    return (
        <AnchorLink
            href={`#${lowerCasePage}`}
            onClick={()=>{setSelectedPage(lowerCasePage)}}
            className={`${selectedPage===lowerCasePage ? "text-primary-500":""} transition duration-300 hover:text-primary-500`}
            
        >{page}</AnchorLink>
    )
}

export default Link