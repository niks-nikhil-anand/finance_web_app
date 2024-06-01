import React from 'react'
import BannerRozana from './(ui)/BannerRozana'
import RozanaSection from './(ui)/RozanaSections'
import RozanaPayDetails from './(ui)/RozanaSection2'

const page = () => {
  return (
    <div>
        <BannerRozana/>
        <RozanaSection/>
        <RozanaPayDetails/>
    </div>
  )
}

export default page