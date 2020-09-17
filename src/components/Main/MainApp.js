import React from 'react'
import Services from './Services'
import Search from './Search'
import Banner from './Banner'

export default function MainApp(props) {
    return (
        <div>
            <Banner />
            <Services/>
            <Search />
        </div>
    )
}
