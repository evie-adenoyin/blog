import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
  
   const NewsListNav = ()=>{

    const style = {
        margin: "10px 0"
    }
    return(
        <div style={style}>
             <Breadcrumb spacing='8px' separator=''>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
            </BreadcrumbItem>
            </Breadcrumb>
        </div>
    )
  }

  export default NewsListNav
  
 