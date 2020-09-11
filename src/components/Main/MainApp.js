import React from 'react'
import Services from './Services'
import Info from './Info'
import Faq from './Faq'
import Department from './Department'
import Banner from './Banner'

export default function MainApp(props) {
    return (
        <div>
            <Banner />
            <Services/>
            <Department />
            <Info />
            <Faq />
        </div>
    )
}
