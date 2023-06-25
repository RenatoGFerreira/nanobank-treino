import Header from "../../componets/Header/Header"
import Footer from "../../componets/Footer/Footer"
import HeroBanner from "../../componets/HeroBanner/HeroBanner"
import BlockDescription from "../../componets/BlockDescription/BlockDescription"
import BlockBenefits from "../../componets/BlockBenefits/BlockBenefits"
import BlockPremium from "../../componets/BlockPremium/BlockPremium"
import MenuMobile from "../../componets/MenuMobile/MenuMobile"
import { useState } from "react"

export default function HomePage(){
    const [menuVisible, setMenuVisible] = useState()

    return(
        <>
        <Header setMenuVisible={setMenuVisible}/>
        <MenuMobile menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
        <HeroBanner/>
        <BlockDescription/>
        <BlockBenefits/>
        <BlockPremium/>
        <Footer/>
        </>
    )
}