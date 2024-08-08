'use client'
import Badge from "./Badge.jsx"
import Separator from "./Separator.jsx"

const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-screen relative text-white">
      {/*overlay*/}
      <div className={'bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]'}></div>
      {/*video*/}
      <video
        autoPlay
        loop
        muted
        className={'absolute top-0 left-0 w-full h-full object-cover'}
      >
        <source
          src="/assets/hero/video.mp4"
          type={'video/mp4'}
        />
        Your browser doesn't support the video tag.
      </video>
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        {/*text*/}
        <div
          className={'flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full'}
          data-scroll
          data-scroll-speed="0.4"
        >
          {/*Budge and h1*/}
          <div className={'flex flex-col items-center'}>
            <Badge containerStyles={'hidden xl:flex xl:w-[180px] xl:h-[180px]'}/>
            <h1 className={'h1 text-white'}>
              <span className={'text-accent'}>Coffee</span> & Joy
            </h1>
          </div>
          {/*  separator */}
          <Separator/>
          <p className={'lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4'}>
            Experience the joy of exceptional coffee in our cozy space, where every cup is crafted with passion and
            warmth
          </p>
          <button className={'btn'}>Our menu</button>
        </div>
      </div>
    </section>
  )
}
export default Hero
