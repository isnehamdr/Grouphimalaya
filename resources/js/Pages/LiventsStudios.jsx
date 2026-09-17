

// import React, {useRef, useEffect} from 'react'
// import MainWrapper from '@/MainComponents/MainWrapper'
// import gsap from 'gsap'
// import liventsLogo from '../../../public/images/livents_logo.jpeg'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import liventsVan from '../../../public/images/livents_van.jpeg';
// import liventsSonuNigam from '../../../public/images/livents_sonu_nigam.jpeg'
// import liventsVideoOne from '../../../public/images/livents_video_one.mp4'
// import liventsPratikKuhad from '../../../public/images/livents_pratik_kuhad.mp4'


// gsap.registerPlugin(ScrollTrigger)

// const LiventsStudios = () => {
//     const textRef = useRef(null)

//     useEffect(() => {
//         const el = textRef.current
//         if (!el) return

//         // Get each paragraph's text separately
//         const paragraphs = Array.from(el.querySelectorAll('p'))
//         const paragraphTexts = paragraphs.map(p => p.innerText)

//         el.innerHTML = ''
//         el.style.display = 'block'
//         el.style.whiteSpace = 'normal'
//         el.style.wordBreak = 'break-word'
//         el.style.overflowWrap = 'break-word'

//         const chars = []

//         paragraphTexts.forEach((text, pIndex) => {
//             const tokens = text.split(/(\s+)/)

//             tokens.forEach((token) => {
//                 if (/^\s+$/.test(token)) {
//                     el.appendChild(document.createTextNode(token))
//                 } else {
//                     const wordSpan = document.createElement('span')
//                     wordSpan.style.display = 'inline-block'
//                     wordSpan.style.whiteSpace = 'nowrap'
//                     token.split('').forEach((char) => {
//                         const span = document.createElement('span')
//                         span.textContent = char
//                         span.style.color = 'rgb(75, 75, 75)'
//                         span.style.display = 'inline'
//                         wordSpan.appendChild(span)
//                         chars.push(span)
//                     })
//                     el.appendChild(wordSpan)
//                 }
//             })

//             // Add spacing between paragraphs (but not after the last one)
//             if (pIndex < paragraphTexts.length - 1) {
//                 const br1 = document.createElement('br')
//                 const br2 = document.createElement('br')
//                 el.appendChild(br1)
//                 el.appendChild(br2)
//             }
//         })

//         gsap.to(chars, {
//             color: 'rgb(235, 235, 235)',
//             stagger: 0.015,
//             ease: 'none',
//             scrollTrigger: {
//                 trigger: el,
//                 start: 'top 85%',
//                 end: 'bottom 30%',
//                 scrub: 1,
//             },
//         })

//         return () => {
//             ScrollTrigger.getAll().forEach((t) => t.kill())
//         }
//     }, [])

//     return (
//         <MainWrapper>
//             <div className="w-full min-h-screen p-2 sm:p-4 text-white">
//                 {/* Hero */}
//                 <div
//                     className="rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-6 sm:p-8 lg:p-10"
//                     style={{ backgroundImage: `url(${liventsLogo})` }}
//                 >
//                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/90" />
//                 </div>

//                 {/* Scroll-reveal text */}
//                 <div className="my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20">
//                     <div
//                         ref={textRef}
//                         className="w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words"
//                     >
//                         {/* Use <p> tags instead of <br/> so paragraphs can be detected */}
//                         <p>Livents Studios is Nepal's first and only dedicated vanity service provider for the film and media industry, setting a new benchmark in on-location production support. Specializing in premium vanity vans, the company offers a comfortable, private, and fully equipped space for actors, artists, and crew members during shoots. Each unit is thoughtfully designed with modern interiors, makeup stations, rest areas, and essential amenities to ensure a seamless working environment even in demanding outdoor locations.</p>
//                         <p>With a strong focus on professionalism, reliability, and attention to detail, Livents Studios works closely with production houses, filmmakers, advertising agencies, and event organizers to meet the dynamic needs of the industry. From film shoots and music videos to commercial productions and large-scale events, the company ensures that talent and crew can perform at their best with convenience and comfort.</p>
//                         <p>By introducing world-class vanity services to Nepal, Livents Studios has played a key role in enhancing the overall production experience and raising industry standards. Its commitment to quality and innovation continues to support the growth of Nepal's entertainment sector, making it an essential partner for modern filmmaking and content creation.</p>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-12 lg:mb-24 sm:px-10 lg:px-20">
//            {[
//            //   { num: '50+', label: 'Productions Served' },
//              { num: '1st', label: 'In Nepal' },
//              { num: '100%', label: 'On-Time Delivery' },
//              { num: '∞', label: 'Attention to Detail' },
//            ].map((s, i) => (
//              <div key={i} className=" text-center sm:text-center  bg-white/5
//                   backdrop-blur-lg
//                   border border-white/10
//                   shadow-[0_6px_24px_rgba(0,0,0,0.35)]
//                   transition-all duration-300
//                   hover:bg-white/10
//                   hover:border-white/20
//                   hover:-translate-y-1
//                   hover:shadow-[0_10px_32px_rgba(0,0,0,0.55)]
//                   cursor-pointer py-12 flex justify-center items-center flex-col rounded-lg">
//                <div className="text-6xl text-amber-700 font-medium">{s.num}</div>
//                <div style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(232,232,232,0.45)', marginTop: 8 }}>{s.label}</div>
//              </div>
//            ))}
//                 </div>


//                   <div className="px-4 sm:px-10 lg:px-24 pb-16 sm:pb">
//            <div className="mb-12 sm:mb-16">
//              <div className="label-pill"><span className="gold-line" />Our Guests</div>
//              <h2 className="display-font" style={{ fontSize: 'clamp(28px, 4vw, 54px)', fontWeight: 300, lineHeight: 1.2, color: '#e8e8e8' }}>
//                Trusted by<br /><em style={{ color: '#c9a84c' }}>Iconic Artists</em>
//              </h2>
//            </div>

//           {/* Sonu Nigam — image */}
// <div className="mb-6 sm:mb-8">
//   <div
//     className="celeb-card relative overflow-hidden rounded-2xl w-full"
//     style={{ height: 'clamp(320px, 55vw, 580px)' }}
//   >
//     <img
//       src={liventsSonuNigam}
//       alt="Sonu Nigam"
//       className="absolute inset-0 w-full h-full object-cover object-center"
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//     <div className="absolute bottom-0 left-0 p-6 sm:p-10 z-10">
//       <div className="label-pill" style={{ marginBottom: 8 }}>
//         <span className="gold-line" />Featured Guest
//       </div>
//       <h3
//         className="display-font"
//         style={{ fontSize: 'clamp(26px, 4vw, 52px)', fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: 8 }}
//       >
//         Sonu Nigam
//       </h3>
//       <p style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.85)' }}>
//         Legendary Playback Singer
//       </p>
//     </div>
//   </div>
// </div>

// {/* Pratik Kuhad — video */}
// <div>
//   <div
//     className="celeb-card relative overflow-hidden rounded-2xl w-full"
//     style={{ height: 'clamp(320px, 55vw, 580px)' }}
//   >
//     <video
//       src={liventsPratikKuhad}
//       autoPlay
//       muted
//       loop
//       playsInline
//       className="absolute inset-0 w-full h-full object-cover object-center"
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//     <div className="absolute bottom-0 left-0 p-6 sm:p-10 z-10">
//       <div className="label-pill" style={{ marginBottom: 8 }}>
//         <span className="gold-line" />Featured Guest
//       </div>
//       <h3
//         className="display-font"
//         style={{ fontSize: 'clamp(26px, 4vw, 52px)', fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: 8 }}
//       >
//         Pratik Kuhad
//       </h3>
//       <p style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.85)' }}>
//         Indie Artist &amp; Singer-Songwriter
//       </p>
//     </div>
//   </div>
// </div>
//                  </div>


//                          <div className="px-4 sm:px-10 lg:px-24 py-16 sm:py-24">
//            <div className="mb-12">
//              <div className="label-pill"><span className="gold-line" />The Fleet</div>
//              <h2 className="display-font" style={{ fontSize: 'clamp(28px, 4vw, 54px)', fontWeight: 300, lineHeight: 1.2, color: '#e8e8e8' }}>
//                Inside Our<br /><em style={{ color: '#c9a84c' }}>Vanity Vans</em>
//              </h2>
//            </div>

//            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//              {/* Van image — spans 2 cols on large screens */}
//              <div className="gallery-item lg:col-span-2" style={{ height: 'clamp(220px, 35vw, 420px)' }}>
//                <img src={liventsVan} alt="Livents Vanity Van" />
//              </div>
//              {/* Video 1 */}
//              <div className="gallery-item" style={{ height: 'clamp(220px, 35vw, 420px)' }}>
//                <video src={liventsVideoOne} autoPlay muted loop playsInline />
//              </div>
//              {/* Wide video — Pratik repeat in gallery context */}
//              {/* <div className="gallery-item sm:col-span-2 lg:col-span-3" style={{ height: 'clamp(200px, 28vw, 340px)' }}>
//                <video src={liventsPratikKuhad} autoPlay muted loop playsInline />
//              </div> */}
//            </div>
//                          </div>


//                              <div className="px-4 sm:px-10 lg:px-24 py-20 sm:py-32 text-center">
//            <div className="label-pill" style={{ justifyContent: 'center' }}><span className="gold-line" />Get in Touch</div>
//            <h2 className="display-font" style={{
//              fontSize: 'clamp(32px, 5.5vw, 72px)',
//              fontWeight: 300,
//              lineHeight: 1.1,
//              color: '#e8e8e8',
//              marginBottom: 24,
//            }}>
//              Ready to Elevate<br /><em style={{ color: '#c9a84c' }}>Your Production?</em>
//            </h2>
//            <p style={{ fontSize: 'clamp(13px, 1.4vw, 16px)', color: 'rgba(232,232,232,0.5)', marginBottom: 40, fontWeight: 300, letterSpacing: '0.04em' }}>
//              Nepal's premier vanity service is one call away.
//            </p>
//            <a
//              href="mailto:hello@liventsstudios.com"
//              style={{
//                display: 'inline-block',
//                padding: '16px 44px',
//                border: '1px solid rgba(201,168,76,0.6)',
//                color: '#c9a84c',
//                fontSize: 12,
//                letterSpacing: '0.22em',
//                textTransform: 'uppercase',
//                fontWeight: 500,
//                textDecoration: 'none',
//                transition: 'background 0.3s, color 0.3s',
//                borderRadius: 2,
//              }}
//              onMouseEnter={e => {
//                e.currentTarget.style.background = 'rgba(201,168,76,0.12)'
//                e.currentTarget.style.color = '#f0d080'
//              }}
//              onMouseLeave={e => {
//                e.currentTarget.style.background = 'transparent'
//                e.currentTarget.style.color = '#c9a84c'
//              }}
//            >
//              Book Your Van
//            </a>
//         </div>
//         </div>
       
            
//         </MainWrapper>
//     )
// }

// export default LiventsStudios




import React, { useRef, useEffect } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import liventsLogo from '../../../public/images/livents_logo.jpeg'
import liventsVan from '../../../public/images/livents_van.jpeg'
import liventsSonuNigam from '../../../public/images/livents_sonu_nigam.jpeg'
import liventsVideoOne from '../../../public/images/livents_video_one.mp4'
import liventsPratikKuhad from '../../../public/images/livents_pratik_kuhad.mp4'
import SEO from '@/Components/SEO'

gsap.registerPlugin(ScrollTrigger)

const LiventsStudios = () => {

    const heroRef = useRef()
    const textSectionRef = useRef()
    const statsRef = useRef()
    const guestsRef = useRef()
    const fleetRef = useRef()
    const ctaRef = useRef()
     const textRef = useRef(null)
    useEffect(() => {

        /* HERO PARALLAX */
        gsap.to(heroRef.current, {
            scale: 1.1,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        })

        /* TEXT FADE UP */
        // gsap.from(
        //     textSectionRef.current.querySelectorAll("p"),
        //     {
        //         y: 80,
        //         opacity: 0,
        //         duration: 1,
        //         stagger: 0.2,
        //         ease: "power3.out",
        //         scrollTrigger: {
        //             trigger: textSectionRef.current,
        //             start: "top 80%"
        //         }
        //     }
        // )

        /* STATS ANIMATION */
        // gsap.from(
        //     statsRef.current.children,
        //     {
        //         y: 60,
        //         opacity: 0,
        //         duration: 1,
        //         stagger: 0.2,
        //         ease: "power3.out",
        //         scrollTrigger: {
        //             trigger: statsRef.current,
        //             start: "top 85%"
        //         }
        //     }
        // )

        /* GUEST CARDS */
        gsap.from(
            guestsRef.current.querySelectorAll(".guest-card"),
            {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: guestsRef.current,
                    start: "top 80%"
                }
            }
        )

        /* FLEET GRID */
        gsap.from(
            fleetRef.current.querySelectorAll(".fleet-item"),
            {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: fleetRef.current,
                    start: "top 80%"
                }
            }
        )

        /* CTA */
        gsap.from(ctaRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ctaRef.current,
                start: "top 85%"
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }

    }, [])


    

    useEffect(() => {
        const el = textRef.current
        if (!el) return

        // Get each paragraph's text separately
        const paragraphs = Array.from(el.querySelectorAll('p'))
        const paragraphTexts = paragraphs.map(p => p.innerText)

        el.innerHTML = ''
        el.style.display = 'block'
        el.style.whiteSpace = 'normal'
        el.style.wordBreak = 'break-word'
        el.style.overflowWrap = 'break-word'

        const chars = []

        paragraphTexts.forEach((text, pIndex) => {
            const tokens = text.split(/(\s+)/)

            tokens.forEach((token) => {
                if (/^\s+$/.test(token)) {
                    el.appendChild(document.createTextNode(token))
                } else {
                    const wordSpan = document.createElement('span')
                    wordSpan.style.display = 'inline-block'
                    wordSpan.style.whiteSpace = 'nowrap'
                    token.split('').forEach((char) => {
                        const span = document.createElement('span')
                        span.textContent = char
                        span.style.color = 'rgb(75, 75, 75)'
                        span.style.display = 'inline'
                        wordSpan.appendChild(span)
                        chars.push(span)
                    })
                    el.appendChild(wordSpan)
                }
            })

            // Add spacing between paragraphs (but not after the last one)
            if (pIndex < paragraphTexts.length - 1) {
                const br1 = document.createElement('br')
                const br2 = document.createElement('br')
                el.appendChild(br1)
                el.appendChild(br2)
            }
        })

        gsap.to(chars, {
            color: 'rgb(235, 235, 235)',
            stagger: 0.015,
            ease: 'none',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                end: 'bottom 30%',
                scrub: 1,
            },
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])


    const seoData = {
  title: "Livents Studios | Premium Vanity Van Services in Nepal",
  description: "Nepal's first and only dedicated vanity service provider for the film and media industry. We offer luxury on-location vanity vans, makeup stations, and production support for filmmakers and events.",
  url: "https://www.himalayaorganization.com/livents-studios",
  image: "/images/livents_logos.jpeg",
}

    return (
        <MainWrapper>
                
                <SEO {...seoData}/>
           

                {/* ================= HERO ================= */}

                {/* <section className="relative h-[80vh] lg:h-screen flex items-end">

                    <div
                        ref={heroRef}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${liventsLogo})`
                        }}
                    />

                    

                </section> */}

            <div className="w-full min-h-screen p-2 sm:p-4 text-white">
                 {/* Hero */}
                 <div
                     className="rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-6 sm:p-8 lg:p-10"
                     style={{ backgroundImage: `url(${liventsLogo})` }}
                 >
                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/80" />
                 </div>


                {/* ================= ABOUT ================= */}

                {/* <section
                    ref={textSectionRef}
                    className="px-6 lg:px-24 py-20 lg:py-32 max-w-6xl"
                >

                    <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 leading-relaxed mb-10">
                        Livents Studios is Nepal's first and only dedicated
                        vanity service provider for the film and media industry,
                        setting a new benchmark in on-location production
                        support.
                    </p>

                    <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 leading-relaxed mb-10">
                        Specializing in premium vanity vans, the company offers
                        comfortable and fully equipped spaces designed for
                        actors and production teams working in demanding
                        outdoor environments.
                    </p>

                    <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 leading-relaxed">
                        With world-class services and attention to detail,
                        Livents Studios supports filmmakers, artists, and
                        production houses across Nepal.
                    </p>

                </section> */}

                                 <div className="my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20">
                     <div
                         ref={textRef}
                         className="w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words"
                     >
                         {/* Use <p> tags instead of <br/> so paragraphs can be detected */}
                         <p>Livents Cinework Pvt. Ltd is Nepal's first and only dedicated vanity service provider for the film and media industry, setting a new benchmark in on-location production support. Specializing in premium vanity vans, the company offers a comfortable, private, and fully equipped space for actors, artists, and crew members during shoots. Each unit is thoughtfully designed with modern interiors, makeup stations, rest areas, and essential amenities to ensure a seamless working environment even in demanding outdoor locations.</p>
                         <p>With a strong focus on professionalism, reliability, and attention to detail, Livents Studios works closely with production houses, filmmakers, advertising agencies, and event organizers to meet the dynamic needs of the industry. From film shoots and music videos to commercial productions and large-scale events, the company ensures that talent and crew can perform at their best with convenience and comfort.</p>
                         <p>By introducing world-class vanity services to Nepal, Livents Studios has played a key role in enhancing the overall production experience and raising industry standards. Its commitment to quality and innovation continues to support the growth of Nepal's entertainment sector, making it an essential partner for modern filmmaking and content creation.</p>
                     </div>
                 </div>


                {/* ================= STATS ================= */}

                <section
                    
                    className="px-2 lg:px-24 pb-24 grid grid-cols-1 sm:grid-cols-3 gap-6"
                >

                    {[
                        { num: "1st", label: "In Nepal" },
                        { num: "100%", label: "On-Time Delivery" },
                        { num: "∞", label: "Attention to Detail" }
                    ].map((item, i) => (

                        <div
                            key={i}
                            className="text-center bg-white/5 border border-white/10 rounded-2xl p-12 hover:bg-white/10 transition"
                        >

                            <div className="text-5xl text-amber-500 mb-4">
                                {item.num}
                            </div>

                            <div className="uppercase text-xs tracking-widest text-neutral-400">
                                {item.label}
                            </div>

                        </div>

                    ))}

                </section>


                {/* ================= GUESTS ================= */}

                <section
                    ref={guestsRef}
                    className="px-2 lg:px-24 pb-16 lg:pb-24"
                >

                    <h2 className="text-4xl lg:text-6xl font-light mb-16">
                        Trusted by
                        <span className="text-amber-500">
                            {" "}Iconic Artists
                        </span>
                    </h2>


                    {/* Sonu Nigam */}

                    <div className="guest-card mb-12 relative rounded-2xl overflow-hidden h-[450px] lg:h-[650px]">

                        <img
                            src={liventsSonuNigam}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                        <div className="absolute bottom-0 p-8">

                            <h3 className="text-3xl lg:text-5xl font-light">
                                Sonu Nigam
                            </h3>

                            <p className="uppercase text-xs tracking-widest text-amber-500 mt-2">
                                Legendary Playback Singer
                            </p>

                        </div>

                    </div>


                    {/* Pratik Kuhad */}

                    <div className="guest-card relative rounded-2xl overflow-hidden h-[450px] lg:h-[650px]">

                        <video
                            src={liventsPratikKuhad}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                        <div className="absolute bottom-0 p-8">

                            <h3 className="text-3xl lg:text-5xl font-light">
                                Pratik Kuhad
                            </h3>

                            <p className="uppercase text-xs tracking-widest text-amber-500 mt-2">
                                Indie Artist
                            </p>

                        </div>

                    </div>

                </section>


                {/* ================= FLEET ================= */}

                <section
                    ref={fleetRef}
                    className="px-2 lg:px-24 pb-16 lg:pb-24"
                >

                    <h2 className="text-4xl lg:text-6xl font-light mb-16">
                        Inside Our
                        <span className="text-amber-500">
                            {" "}Vanity Vans
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="fleet-item lg:col-span-2 h-[420px] rounded-xl overflow-hidden">
                            <img
                                src={liventsVan}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="fleet-item h-[420px] rounded-xl overflow-hidden">
                            <video
                                src={liventsVideoOne}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                </section>


                {/* ================= CTA ================= */}

                <section
                    ref={ctaRef}
                    className="px-2 lg:px-24 lg:pb-32 pb-20 text-center"
                >

                    <h2 className="text-4xl lg:text-7xl font-light mb-8">

                        Ready to Elevate
                        <br />

                        <span className="text-amber-500">
                            Your Production?
                        </span>

                    </h2>

                    <p className="text-neutral-400 mb-10">
                        Nepal's premier vanity service is one call away.
                    </p>

                    <a
                        href="mailto:info@grouphimalaya.com"
                        className="inline-block border border-amber-500 px-12 py-4 uppercase tracking-widest text-amber-500 hover:bg-amber-500 hover:text-black transition"
                    >
                        Book Your Van
                    </a>

                </section>


            </div>

        </MainWrapper>
    )
}

export default LiventsStudios












// import React, { useRef, useEffect } from 'react'
// import MainWrapper from '@/MainComponents/MainWrapper'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import liventsLogo from '../../../public/images/livents_logo.jpeg'
// import liventsVan from '../../../public/images/livents_van.jpeg'
// import liventsSonuNigam from '../../../public/images/livents_sonu_nigam.jpeg'
// import liventsVideoOne from '../../../public/images/livents_video_one.mp4'
// import liventsPratikKuhad from '../../../public/images/livents_pratik_kuhad.mp4'

// gsap.registerPlugin(ScrollTrigger)

// /* ─── Scroll-reveal char animation ──────────────────────────────── */
// function useCharReveal(ref) {
//   useEffect(() => {
//     const el = ref.current
//     if (!el) return

//     const paragraphs = Array.from(el.querySelectorAll('p'))
//     const paragraphTexts = paragraphs.map(p => p.innerText)

//     el.innerHTML = ''
//     el.style.display = 'block'
//     el.style.whiteSpace = 'normal'
//     el.style.wordBreak = 'break-word'
//     el.style.overflowWrap = 'break-word'

//     const chars = []

//     paragraphTexts.forEach((text, pIndex) => {
//       const tokens = text.split(/(\s+)/)
//       tokens.forEach(token => {
//         if (/^\s+$/.test(token)) {
//           el.appendChild(document.createTextNode(token))
//         } else {
//           const wordSpan = document.createElement('span')
//           wordSpan.style.display = 'inline-block'
//           wordSpan.style.whiteSpace = 'nowrap'
//           token.split('').forEach(char => {
//             const span = document.createElement('span')
//             span.textContent = char
//             span.style.color = 'rgb(75, 75, 75)'
//             span.style.display = 'inline'
//             wordSpan.appendChild(span)
//             chars.push(span)
//           })
//           el.appendChild(wordSpan)
//         }
//       })
//       if (pIndex < paragraphTexts.length - 1) {
//         el.appendChild(document.createElement('br'))
//         el.appendChild(document.createElement('br'))
//       }
//     })

//     gsap.to(chars, {
//       color: 'rgb(235, 235, 235)',
//       stagger: 0.012,
//       ease: 'none',
//       scrollTrigger: {
//         trigger: el,
//         start: 'top 85%',
//         end: 'bottom 30%',
//         scrub: 1,
//       },
//     })

//     return () => ScrollTrigger.getAll().forEach(t => t.kill())
//   }, [])
// }

// /* ─── Service card data ──────────────────────────────────────────── */
// const SERVICES = [
//   {
//     num: '01',
//     title: 'Premium Vanity Vans',
//     desc: 'State-of-the-art mobile suites with modern interiors, climate control, and bespoke amenities for talent comfort during long shoot days.',
//   },
//   {
//     num: '02',
//     title: 'Professional Makeup Stations',
//     desc: 'Hollywood-grade lighting rigs and ergonomic workstations so your makeup and hair team can perform at their absolute best.',
//   },
//   {
//     num: '03',
//     title: 'On-Location Production Support',
//     desc: "End-to-end coordination with production houses, filmmakers, and event organizers across Nepal's most demanding locations.",
//   },
//   {
//     num: '04',
//     title: 'Film & Music Video Shoots',
//     desc: "Trusted by Nepal's leading artists and international productions — from intimate acoustic sessions to grand cinematic features.",
//   },
// ]

// /* ─── Component ──────────────────────────────────────────────────── */
// const LiventsStudios = () => {
//   const textRef = useRef(null)
//   const heroRef = useRef(null)
//   const heroTextRef = useRef(null)
//   const taglineRef = useRef(null)
//   const servicesRef = useRef(null)
//   const serviceCardsRef = useRef([])
//   const celebTitleRef = useRef(null)
//   const sonuRef = useRef(null)
//   const pratikRef = useRef(null)
//   const galleryRef = useRef(null)
//   const statsRef = useRef(null)
//   const ctaRef = useRef(null)

//   useCharReveal(textRef)

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       /* Hero entrance */
//       gsap.from(heroTextRef.current, {
//         y: 60,
//         opacity: 0,
//         duration: 1.4,
//         ease: 'power4.out',
//         delay: 0.3,
//       })

//       /* Hero subtle parallax */
//       gsap.to(heroRef.current, {
//         yPercent: 20,
//         ease: 'none',
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: true,
//         },
//       })

//       /* Tagline */
//       gsap.from(taglineRef.current, {
//         y: 40,
//         opacity: 0,
//         duration: 1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: taglineRef.current,
//           start: 'top 85%',
//         },
//       })

//       /* Service cards stagger */
//       gsap.from(serviceCardsRef.current, {
//         y: 80,
//         opacity: 0,
//         duration: 0.9,
//         stagger: 0.15,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: servicesRef.current,
//           start: 'top 80%',
//         },
//       })

//       /* Celebrity section title */
//       gsap.from(celebTitleRef.current, {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: celebTitleRef.current,
//           start: 'top 85%',
//         },
//       })

//       /* Sonu Nigam slide in from left */
//       gsap.from(sonuRef.current, {
//         x: -100,
//         opacity: 0,
//         duration: 1.1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: sonuRef.current,
//           start: 'top 80%',
//         },
//       })

//       /* Pratik Kuhad slide in from right */
//       gsap.from(pratikRef.current, {
//         x: 100,
//         opacity: 0,
//         duration: 1.1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: pratikRef.current,
//           start: 'top 80%',
//         },
//       })

//       /* Gallery items */
//       const galleryItems = galleryRef.current?.querySelectorAll('.gallery-item')
//       if (galleryItems) {
//         gsap.from(galleryItems, {
//           scale: 0.85,
//           opacity: 0,
//           duration: 0.8,
//           stagger: 0.12,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: galleryRef.current,
//             start: 'top 80%',
//           },
//         })
//       }

//       /* Stats count-up feel */
//       const statEls = statsRef.current?.querySelectorAll('.stat-item')
//       if (statEls) {
//         gsap.from(statEls, {
//           y: 60,
//           opacity: 0,
//           duration: 0.8,
//           stagger: 0.15,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: statsRef.current,
//             start: 'top 80%',
//           },
//         })
//       }

//       /* CTA */
//       gsap.from(ctaRef.current, {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: ctaRef.current,
//           start: 'top 85%',
//         },
//       })
//     })

//     return () => ctx.revert()
//   }, [])

//   return (
//     <MainWrapper>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');

//         .livents-wrap {
//           font-family: 'Outfit', sans-serif;
//           background: #080808;
//           color: #e8e8e8;
//           overflow-x: hidden;
//         }
//         .display-font { font-family: 'Urbanist', serif; }

//         /* Gold accent line */
//         .gold-line {
//           display: inline-block;
//           width: 48px;
//           height: 2px;
//           background: linear-gradient(90deg, #c9a84c, #f0d080);
//           vertical-align: middle;
//           margin-right: 14px;
//           flex-shrink: 0;
//         }

//         /* Label pill */
//         .label-pill {
//           display: inline-flex;
//           align-items: center;
//           font-size: 11px;
//           font-weight: 500;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #c9a84c;
//           margin-bottom: 20px;
//         }

//         /* Service card */
//         .service-card {
//           border: 1px solid rgba(201, 168, 76, 0.15);
//           background: rgba(255,255,255,0.02);
//           backdrop-filter: blur(4px);
//           border-radius: 4px;
//           padding: 36px 28px;
//           transition: border-color 0.3s, background 0.3s;
//           position: relative;
//           overflow: hidden;
//         }
//         .service-card::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 60%);
//           opacity: 0;
//           transition: opacity 0.4s;
//         }
//         .service-card:hover { border-color: rgba(201, 168, 76, 0.45); }
//         .service-card:hover::before { opacity: 1; }

//         /* Celebrity card */
//         .celeb-media {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           border-radius: 4px;
//         }
//         .celeb-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%);
//           border-radius: 4px;
//           pointer-events: none;
//         }
//         .celeb-card {
//           position: relative;
//           overflow: hidden;
//           border-radius: 4px;
//           border: 1px solid rgba(201,168,76,0.2);
//         }
//         .celeb-card::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           border-radius: 4px;
//           border: 1px solid transparent;
//           transition: border-color 0.4s;
//           pointer-events: none;
//         }
//         .celeb-card:hover::after { border-color: rgba(201,168,76,0.5); }

//         /* Stat */
//         .stat-num {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(48px, 7vw, 80px);
//           font-weight: 300;
//           line-height: 1;
//           background: linear-gradient(135deg, #f0d080, #c9a84c);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         /* Gallery hover zoom */
//         .gallery-item { overflow: hidden; border-radius: 4px; }
//         .gallery-item video,
//         .gallery-item img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           transition: transform 0.6s ease;
//         }
//         .gallery-item:hover video,
//         .gallery-item:hover img { transform: scale(1.06); }

//         /* Gold divider */
//         .gold-divider {
//           width: 100%;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent);
//         }

//         /* Scrollbar */
//         ::-webkit-scrollbar { width: 4px; }
//         ::-webkit-scrollbar-track { background: #080808; }
//         ::-webkit-scrollbar-thumb { background: #c9a84c44; border-radius: 2px; }
//       `}</style>

//       <div className="livents-wrap w-full">

//         {/* ── HERO ─────────────────────────────────────────────────── */}
//         <div
//           ref={heroRef}
//           className="relative w-full overflow-hidden"
//           style={{ height: 'clamp(480px, 95vh, 900px)' }}
//         >
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${liventsLogo})`, transform: 'scale(1.1)' }}
//           />
//           <div className="absolute inset-0" style={{
//             background: 'linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.2) 40%, rgba(8,8,8,0.95) 100%)'
//           }} />

//           {/* Corner accents */}
//           <div className="absolute top-6 left-6 sm:top-10 sm:left-10" style={{ width: 40, height: 40, borderTop: '1px solid rgba(201,168,76,0.6)', borderLeft: '1px solid rgba(201,168,76,0.6)' }} />
//           <div className="absolute top-6 right-6 sm:top-10 sm:right-10" style={{ width: 40, height: 40, borderTop: '1px solid rgba(201,168,76,0.6)', borderRight: '1px solid rgba(201,168,76,0.6)' }} />
//           <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10" style={{ width: 40, height: 40, borderBottom: '1px solid rgba(201,168,76,0.6)', borderLeft: '1px solid rgba(201,168,76,0.6)' }} />
//           <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10" style={{ width: 40, height: 40, borderBottom: '1px solid rgba(201,168,76,0.6)', borderRight: '1px solid rgba(201,168,76,0.6)' }} />

//           {/* <div ref={heroTextRef} className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16">
//             <div className="label-pill">
//               <span className="gold-line" />
//               Nepal's First Vanity Service
//             </div>
//             <h1 className="display-font text-white" style={{
//               fontSize: 'clamp(36px, 7vw, 88px)',
//               fontWeight: 300,
//               lineHeight: 1.05,
//               letterSpacing: '-0.01em',
//               marginBottom: 20,
//             }}>
//               Livents<br />
//               <em style={{ color: '#c9a84c' }}>Studios</em>
//             </h1>
//             <p className="text-white/60" style={{
//               fontWeight: 300,
//               fontSize: 'clamp(13px, 1.6vw, 17px)',
//               letterSpacing: '0.06em',
//               textTransform: 'uppercase',
//               maxWidth: 320,
//             }}>
//               Where Comfort Meets Cinema
//             </p>
//           </div> */}
//         </div>

//         {/* ── SCROLL-REVEAL TEXT ───────────────────────────────────── */}
//         <div className="px-4 sm:px-10 lg:px-24 py-16 sm:py-24">
//           {/* <div ref={taglineRef} className="mb-10 sm:mb-14">
//             <div className="label-pill"><span className="gold-line" />Our Story</div>
//           </div> */}
//           <div
//             ref={textRef}
//             className="display-font w-full"
//             style={{
//               fontSize: 'clamp(18px, 2.4vw, 30px)',
//               fontWeight: 300,
//               lineHeight: 1.75,
//               maxWidth: '900px',
//             }}
//           >
//             <p>Livents Studios is Nepal's first and only dedicated vanity service provider for the film and media industry, setting a new benchmark in on-location production support. Specializing in premium vanity vans, the company offers a comfortable, private, and fully equipped space for actors, artists, and crew members during shoots. Each unit is thoughtfully designed with modern interiors, makeup stations, rest areas, and essential amenities to ensure a seamless working environment even in demanding outdoor locations.</p>
//             <p>With a strong focus on professionalism, reliability, and attention to detail, Livents Studios works closely with production houses, filmmakers, advertising agencies, and event organizers to meet the dynamic needs of the industry. From film shoots and music videos to commercial productions and large-scale events, the company ensures that talent and crew can perform at their best with convenience and comfort.</p>
//             <p>By introducing world-class vanity services to Nepal, Livents Studios has played a key role in enhancing the overall production experience and raising industry standards. Its commitment to quality and innovation continues to support the growth of Nepal's entertainment sector, making it an essential partner for modern filmmaking and content creation.</p>
//           </div>
//         </div>

//         <div className="gold-divider mx-4 sm:mx-10 lg:mx-24" />

//         {/* ── STATS ───────────────────────────────────────────────── */}
//         <div ref={statsRef} className="px-4 sm:px-10 lg:px-24 py-16">
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
//             {[
//             //   { num: '50+', label: 'Productions Served' },
//               { num: '1st', label: 'In Nepal' },
//               { num: '100%', label: 'On-Time Delivery' },
//               { num: '∞', label: 'Attention to Detail' },
//             ].map((s, i) => (
//               <div key={i} className="stat-item text-center sm:text-center">
//                 <div className="stat-num">{s.num}</div>
//                 <div style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(232,232,232,0.45)', marginTop: 8 }}>{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="gold-divider mx-4 sm:mx-10 lg:mx-24" />

//         {/* ── SERVICES ─────────────────────────────────────────────── */}
//         <div ref={servicesRef} className="px-4 sm:px-10 lg:px-24 py-16 sm:py-24">
//           <div className="mb-12">
//             <div className="label-pill"><span className="gold-line" />What We Offer</div>
//             <h2 className="display-font" style={{ fontSize: 'clamp(28px, 4vw, 54px)', fontWeight: 300, lineHeight: 1.2, color: '#e8e8e8' }}>
//               Full-Spectrum<br /><em style={{ color: '#c9a84c' }}>Production Services</em>
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//             {SERVICES.map((s, i) => (
//               <div
//                 key={i}
//                 ref={el => serviceCardsRef.current[i] = el}
//                 className="service-card"
//               >
//                 <div style={{
//                   fontSize: 11,
//                   letterSpacing: '0.2em',
//                   color: '#c9a84c',
//                   marginBottom: 16,
//                   fontWeight: 500,
//                 }}>{s.num}</div>
//                 <h3 className="display-font" style={{ fontSize: 'clamp(20px, 2vw, 26px)', fontWeight: 400, color: '#e8e8e8', marginBottom: 12 }}>
//                   {s.title}
//                 </h3>
//                 <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(232,232,232,0.55)', fontWeight: 300 }}>
//                   {s.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="gold-divider mx-4 sm:mx-10 lg:mx-24" />

//         {/* ── CELEBRITIES ──────────────────────────────────────────── */}
//         <div className="px-4 sm:px-10 lg:px-24 py-16 sm:py-24">
//           <div ref={celebTitleRef} className="mb-12 sm:mb-16">
//             <div className="label-pill"><span className="gold-line" />Our Guests</div>
//             <h2 className="display-font" style={{ fontSize: 'clamp(28px, 4vw, 54px)', fontWeight: 300, lineHeight: 1.2, color: '#e8e8e8' }}>
//               Trusted by<br /><em style={{ color: '#c9a84c' }}>Iconic Artists</em>
//             </h2>
//           </div>

//           {/* Sonu Nigam — image */}
//           <div ref={sonuRef} className="mb-6 sm:mb-8">
//             <div className="celeb-card" style={{ height: 'clamp(320px, 55vw, 580px)' }}>
//               <img src={liventsSonuNigam} alt="Sonu Nigam" className="celeb-media" />
//               <div className="celeb-overlay" />
//               <div className="absolute bottom-0 left-0 p-6 sm:p-10 z-10">
//                 <div className="label-pill" style={{ marginBottom: 8 }}><span className="gold-line" />Featured Guest</div>
//                 <h3 className="display-font" style={{ fontSize: 'clamp(26px, 4vw, 52px)', fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: 8 }}>
//                   Sonu Nigam
//                 </h3>
//                 <p style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.85)' }}>
//                   Legendary Playback Singer
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Pratik Kuhad — video */}
//           <div ref={pratikRef}>
//             <div className="celeb-card" style={{ height: 'clamp(320px, 55vw, 580px)' }}>
//               <video
//                 src={liventsPratikKuhad}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="celeb-media"
//               />
//               <div className="celeb-overlay" />
//               <div className="absolute bottom-0 left-0 p-6 sm:p-10 z-10">
//                 <div className="label-pill" style={{ marginBottom: 8 }}><span className="gold-line" />Featured Guest</div>
//                 <h3 className="display-font" style={{ fontSize: 'clamp(26px, 4vw, 52px)', fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: 8 }}>
//                   Pratik Kuhad
//                 </h3>
//                 <p style={{ fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.85)' }}>
//                   Indie Artist &amp; Singer-Songwriter
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="gold-divider mx-4 sm:mx-10 lg:mx-24" />

//         {/* ── VAN SHOWCASE + GALLERY ───────────────────────────────── */}
//         <div className="px-4 sm:px-10 lg:px-24 py-16 sm:py-24">
//           <div className="mb-12">
//             <div className="label-pill"><span className="gold-line" />The Fleet</div>
//             <h2 className="display-font" style={{ fontSize: 'clamp(28px, 4vw, 54px)', fontWeight: 300, lineHeight: 1.2, color: '#e8e8e8' }}>
//               Inside Our<br /><em style={{ color: '#c9a84c' }}>Vanity Vans</em>
//             </h2>
//           </div>

//           <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//             {/* Van image — spans 2 cols on large screens */}
//             <div className="gallery-item lg:col-span-2" style={{ height: 'clamp(220px, 35vw, 420px)' }}>
//               <img src={liventsVan} alt="Livents Vanity Van" />
//             </div>
//             {/* Video 1 */}
//             <div className="gallery-item" style={{ height: 'clamp(220px, 35vw, 420px)' }}>
//               <video src={liventsVideoOne} autoPlay muted loop playsInline />
//             </div>
//             {/* Wide video — Pratik repeat in gallery context */}
//             <div className="gallery-item sm:col-span-2 lg:col-span-3" style={{ height: 'clamp(200px, 28vw, 340px)' }}>
//               <video src={liventsPratikKuhad} autoPlay muted loop playsInline />
//             </div>
//           </div>
//         </div>

//         <div className="gold-divider mx-4 sm:mx-10 lg:mx-24" />

//         {/* ── PROCESS STRIP ────────────────────────────────────────── */}
//         <div className="px-4 sm:px-10 lg:px-24 py-16 sm:py-20">
//           <div className="mb-10">
//             <div className="label-pill"><span className="gold-line" />How It Works</div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
//             {[
//               { step: '1', title: 'Book', desc: 'Reach out with your shoot date, location, and talent requirements. We handle everything else.' },
//               { step: '2', title: 'Arrive', desc: 'Our fully equipped van arrives on-set, prepped and ready before your first call time.' },
//               { step: '3', title: 'Create', desc: 'Your talent rests, refreshes, and gets camera-ready in luxury — so the magic can happen.' },
//             ].map((p, i) => (
//               <div key={i} style={{ borderTop: '1px solid rgba(201,168,76,0.25)', paddingTop: 24 }}>
//                 <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#c9a84c', marginBottom: 14, fontWeight: 500 }}>STEP {p.step}</div>
//                 <h3 className="display-font" style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 400, color: '#e8e8e8', marginBottom: 10 }}>{p.title}</h3>
//                 <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(232,232,232,0.5)', fontWeight: 300 }}>{p.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="gold-divider mx-4 sm:mx-10 lg:mx-24" />

//         {/* ── CTA ──────────────────────────────────────────────────── */}
//         <div ref={ctaRef} className="px-4 sm:px-10 lg:px-24 py-20 sm:py-32 text-center">
//           <div className="label-pill" style={{ justifyContent: 'center' }}><span className="gold-line" />Get in Touch</div>
//           <h2 className="display-font" style={{
//             fontSize: 'clamp(32px, 5.5vw, 72px)',
//             fontWeight: 300,
//             lineHeight: 1.1,
//             color: '#e8e8e8',
//             marginBottom: 24,
//           }}>
//             Ready to Elevate<br /><em style={{ color: '#c9a84c' }}>Your Production?</em>
//           </h2>
//           <p style={{ fontSize: 'clamp(13px, 1.4vw, 16px)', color: 'rgba(232,232,232,0.5)', marginBottom: 40, fontWeight: 300, letterSpacing: '0.04em' }}>
//             Nepal's premier vanity service is one call away.
//           </p>
//           <a
//             href="mailto:hello@liventsstudios.com"
//             style={{
//               display: 'inline-block',
//               padding: '16px 44px',
//               border: '1px solid rgba(201,168,76,0.6)',
//               color: '#c9a84c',
//               fontSize: 12,
//               letterSpacing: '0.22em',
//               textTransform: 'uppercase',
//               fontWeight: 500,
//               textDecoration: 'none',
//               transition: 'background 0.3s, color 0.3s',
//               borderRadius: 2,
//             }}
//             onMouseEnter={e => {
//               e.currentTarget.style.background = 'rgba(201,168,76,0.12)'
//               e.currentTarget.style.color = '#f0d080'
//             }}
//             onMouseLeave={e => {
//               e.currentTarget.style.background = 'transparent'
//               e.currentTarget.style.color = '#c9a84c'
//             }}
//           >
//             Book Your Van
//           </a>

//           {/* Footer mark */}
//           {/* <div style={{ marginTop: 80, fontSize: 11, letterSpacing: '0.18em', color: 'rgba(232,232,232,0.2)', textTransform: 'uppercase' }}>
//             © {new Date().getFullYear()} Livents Studios · Kathmandu, Nepal
//           </div> */}
//         </div>

//       </div>
//     </MainWrapper>
//   )
// }

// export default LiventsStudios