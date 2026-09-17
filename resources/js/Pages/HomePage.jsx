import React from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import Hero from '@/HomeComponents/Hero'
import OrganizationDesc from '@/HomeComponents/OrganizationDesc'
import BusinessGrid from '@/HomeComponents/BusinessGrid'
import Business from '@/HomeComponents/Business'
import GrowthJourney from '@/HomeComponents/GrowthJourney'
import Faq from '@/HomeComponents/Faq'
import Stats from '@/HomeComponents/Stats'
import BrandStrip from '@/HomeComponents/BrandStrip'
import AutomotiveShowcase from '@/HomeComponents/AutomotiveShowcase'
import ChairmanTeaser from '@/HomeComponents/ChairmanTeaser'
// import LatestUpdates from '@/HomeComponents/LatestUpdates'
import VisionMission from '@/HomeComponents/VisionMission'
import CareersCTA from '@/HomeComponents/CareersCTA'
import ContactStrip from '@/HomeComponents/ContactStrip'
import Subhero from '@/HomeComponents/Subhero'
import SEO from '@/Components/SEO'
import LaunchingSoon from '@/HomeComponents/LaunchingSoon'
import himalayanlogo from '../../../public/images/logo2.png'
import NewsArticle from '@/HomeComponents/NewsArticle'
import Test from '@/HomeComponents/Test'
const HomePage = ({ url }) => {
  return (
    <MainWrapper>

      <SEO
        title="Himalaya Organization - Official Website | Leading Business Conglomerate"
        description="Himalaya Organization is a leading business group in Nepal offering services in automobile, real estate, banking, agriculture, and engineering sectors."
        url={url}
      />

      <div className='bg-[#0b0c0f]'>
        
        <Hero/>
        <Subhero/>
        <Stats/>
        <BrandStrip/>
        <OrganizationDesc/>
        <BusinessGrid/>
        <AutomotiveShowcase/>
        <Business/>
        <LaunchingSoon/>
        <ChairmanTeaser/>
        <GrowthJourney/>
        
        <VisionMission/>
        <CareersCTA/>
        <ContactStrip/>
        <NewsArticle/>
        <Faq/>
      </div>

     

    </MainWrapper>
  )
}

export default HomePage



