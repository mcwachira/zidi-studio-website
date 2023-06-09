import React from 'react'


type HeaderProps = {
    title:string,
        subtitle:string,
}
const Header = ({title , subtitle}:HeaderProps) => {
    return (
        <>

            <div className="relative pt-10 bg-center text-gray-600 bg-[url('https://uploads-ssl.webflow.com/6135e5f06048e4e83fb2c8ab/618f67055710e1c54f0b1dba_title-area-bg.jpg')] bg-cover bg-no-repeat pb-24  ">
                <div className="text-center pt-24 pb-10">
                    <div className="container w-container">
                        <div className="text-white uppercase text-base font-semibold tracking-widest leading-tight">

                            {title}

                       </div>
                        <h1 className="mt-0 pt-1 tracking-wide leading-tight font-bold text-white text-5xl">

                            {subtitle}

                            </h1>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Header