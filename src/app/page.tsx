import React from "react";
import {OurTeam} from "@/app/[locale]/components/our-team/OurTeam";
import styles from '@/app/[locale]/page.module.scss'
import { HelpOptions } from '@/app/[locale]/pages/main-page/second-part/help-options/HelpOptions'
import { OurPartners } from '@/app/[locale]/pages/main-page/second-part/our-partners/OurPartners'
import { GetHelp } from '@/app/[locale]/pages/main-page/second-part/get-help/GetHelp'
import { DonateHelp } from '@/app/[locale]/pages/main-page/second-part/donate-help/DonateHelp'
import { Footer } from '@/app/[locale]/components/footer/Footer'
import stylesMain from '@/app/[locale]/pages/main-page/first-part/styles/main.module.scss'
import Header from '@/app/[locale]/components/header/Header'
import Firstblock from '@/app/[locale]/pages/main-page/first-part/pages/firtsBlock'
import News from '@/app/[locale]/pages/main-page/first-part/pages/news'
import Abouthelp from '@/app/[locale]/pages/main-page/first-part/pages/aboutHelp'
import Reviews from '@/app/[locale]/pages/main-page/first-part/pages/reviews'
import {Newsletter} from "@/app/[locale]/components/email-newsletter/Newsletter";

export default function MainPage() {
  
  return (
    <>
      <div className={stylesMain.body__container}>
          <Header />
        <Firstblock />
        <News/>
        <Abouthelp/>
        <Reviews/>
      </div>
      <div className={styles.container}>
        <OurTeam />
        <HelpOptions />
        <OurPartners />
        <GetHelp />
      </div>
      <DonateHelp />
      <Newsletter />
      <Footer />
    </>


  )
}
