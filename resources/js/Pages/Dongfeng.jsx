import React, { useRef, useEffect } from 'react'
import MainWrapper from '@/MainComponents/MainWrapper'
import SEO from '@/Components/SEO'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import coverImage from '../../../public/images/fb cover.png'
import dongfengLogo from '../../../public/images/Dongfeng Yunnan Log.png'
import brochure28 from '../../../public/images/Dongfeng EV Bus.pdf'
import brochure38 from '../../../public/images/Donfeng 9 M Bus Flyer.pdf'
import brochure50 from '../../../public/images/Donfeng 12 M Bus Flyer.pdf'

gsap.registerPlugin(ScrollTrigger)

const brochures = [
  {
    title: '28/30 Seater',
    subtitle: 'Electric city and school bus brochure',
    file: brochure28,
    fileName: 'Dongfeng-EV-Bus-28-30-Seater.pdf',
  },
  {
    title: '38/40 Seater',
    subtitle: '9M bus flyer',
    file: brochure38,
    fileName: 'Dongfeng-9M-Bus-38-40-Seater.pdf',
  },
  {
    title: '50 Seater',
    subtitle: '12M luxury travel bus flyer',
    file: brochure50,
    fileName: 'Dongfeng-12M-Bus-50-Seater.pdf',
  },
]

const focusAreas = [
  'Electric city buses',
  'School buses',
  'Luxury travel buses',
  'Commercial passenger mobility',
]

const Dongfeng = () => {
  const brochuresRef = useRef(null)
  const textRef = useRef(null)

  const focusCardsRef = useRef([])
  const brochureHeaderRef = useRef(null)
  const brochureCardsRef = useRef([])
  const ctaRef = useRef(null)

  const seoData = {
    title: 'Dongfeng Yunnan Electric Buses in Nepal',
    description:
      "Dongfeng Yunnan Automobile Co., Ltd. is represented in Nepal by Aayam Intercontinental Pvt. Ltd., a member of Himalaya Organization, offering electric city buses, school buses, and luxury travel buses.",
    url: 'https://grouphimalaya.com/dongfengyunnan',
    image: '/images/fb cover.png',
  }

  const scrollToBrochures = (e) => {
    e.preventDefault()
    brochuresRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleDownload = async (e, file, fileName) => {
    e.preventDefault()
    try {
      const response = await fetch(file)
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(blobUrl)
    } catch (err) {
      window.open(file, '_blank', 'noopener,noreferrer')
    }
  }

  // Same word-by-word scroll reveal used on the Automobile page's description block
  useEffect(() => {
    const el = textRef.current
    if (!el) return

    const text = el.innerText
    el.innerHTML = ''

    el.style.display = 'block'
    el.style.whiteSpace = 'normal'
    el.style.wordBreak = 'break-word'
    el.style.overflowWrap = 'break-word'

    const tokens = text.split(/(\s+)/)
    const chars = []

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

  useEffect(() => {
    const cards = focusCardsRef.current
    const triggers = cards.map((card, i) =>
      ScrollTrigger.create({
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play reverse play reverse',
        onEnter: () =>
          gsap.fromTo(
            card,
            { opacity: 0, y: 40, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: i * 0.1, ease: 'power3.out' }
          ),
        onLeaveBack: () =>
          gsap.to(card, { opacity: 0, y: 40, scale: 0.96, duration: 0.4, ease: 'power2.in' }),
      })
    )
    return () => triggers.forEach((t) => t.kill())
  }, [])

  useEffect(() => {
    const headerTl = ScrollTrigger.create({
      trigger: brochureHeaderRef.current,
      start: 'top 90%',
      toggleActions: 'play reverse play reverse',
      onEnter: () =>
        gsap.fromTo(
          brochureHeaderRef.current.children,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
        ),
      onLeaveBack: () =>
        gsap.to(brochureHeaderRef.current.children, { opacity: 0, y: 24, duration: 0.35 }),
    })

    const cards = brochureCardsRef.current
    const cardTriggers = cards.map((card, i) =>
      ScrollTrigger.create({
        trigger: card,
        start: 'top 92%',
        toggleActions: 'play reverse play reverse',
        onEnter: () =>
          gsap.fromTo(
            card,
            { opacity: 0, y: 32 },
            { opacity: 1, y: 0, duration: 0.5, delay: i * 0.08, ease: 'power3.out' }
          ),
        onLeaveBack: () =>
          gsap.to(card, { opacity: 0, y: 32, duration: 0.35, ease: 'power2.in' }),
      })
    )

    return () => {
      headerTl.kill()
      cardTriggers.forEach((t) => t.kill())
    }
  }, [])

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ctaRef.current,
      start: 'top 88%',
      toggleActions: 'play reverse play reverse',
      onEnter: () =>
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 32, scale: 0.99 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }
        ),
      onLeaveBack: () =>
        gsap.to(ctaRef.current, { opacity: 0, y: 32, scale: 0.99, duration: 0.35, ease: 'power2.in' }),
    })
    return () => trigger.kill()
  }, [])

  return (
    <MainWrapper>
      <SEO {...seoData} />

      <div className="w-full min-h-screen p-2 sm:p-4 bg-[#0b0c0f] text-white">
        {/* Hero Section - same rounded-card pattern as Automobile page */}
       <div
  className="rounded-2xl min-h-[65vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-no-repeat relative flex justify-center items-end p-5 sm:p-8 lg:p-10 pb-8 sm:pb-8 lg:pb-10 bg-[position:center_20%] sm:bg-center"
  style={{ backgroundImage: `url(${coverImage.src || coverImage})` }}
>
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/20 to-black/90" />
  <div className="z-10 text-center w-full">
    <p className="text-white text-3xl sm:text-5xl lg:text-7xl max-w-4xl mx-auto leading-tight font-semibold">
      Dongfeng Yunnan
    </p>
    <p className="text-white/80 max-w-4xl mx-auto text-sm sm:text-lg mt-4 sm:mt-6 px-3">
      Commercial electric buses for public transport, education, and tourism operators in Nepal.
    </p>

    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center px-4 sm:px-0">
      <button
        type="button"
        onClick={scrollToBrochures}
        className="w-full sm:w-auto max-w-xs inline-flex h-11 sm:h-12 items-center justify-center rounded-full bg-[#b08d57] px-6 sm:px-7 text-sm sm:text-lg font-semibold text-black transition duration-300 hover:bg-[#d0aa72] hover:scale-[1.03] active:scale-95"
      >
        View Brochures
      </button>
      <a
        href="https://www.facebook.com/share/1BrT7eDY7y/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto max-w-xs inline-flex h-11 sm:h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 sm:px-7 text-sm sm:text-lg font-medium text-white transition duration-300 hover:bg-white/15 hover:scale-[1.03] active:scale-95"
      >
        Visit Facebook
      </a>
    </div>
  </div>
</div>

        {/* Description Section */}
        <div className="my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20">
          <p
            ref={textRef}
            className="w-full max-w-5xl text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed break-words text-white/80 text-left"
          >
            Dongfeng Yunnan Automobile Co., Ltd. is a vehicle manufacturer based in Yunnan, China, with a manufacturing heritage dating back to 1937. With longstanding ties to the Dongfeng automotive group, the company brings decades of experience in vehicle development and manufacturing, including new energy vehicles. In Nepal, Aayam Intercontinental Pvt. Ltd., a member of Himalaya Organization, represents Dongfeng's commercial vehicle range. Our portfolio includes electric city buses, school buses and luxury travel buses, serving the needs of public transport operators, educational institutions and tourism businesses. Through this partnership, Himalaya Organization is expanding access to electric mobility with a focus on passenger comfort, practical transport solutions and long-term value for operators.
          </p>
        </div>

        {/* Focus Areas */}
        <div className="my-10 sm:my-12 lg:my-20 px-2 sm:px-10 lg:px-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Focus Areas</p>
              <h2 className="text-3xl sm:text-4xl text-white mt-2">What we bring to Nepal</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {focusAreas.map((item, index) => (
              <div
                key={item}
                ref={(el) => (focusCardsRef.current[index] = el)}
                className="rounded-2xl border border-white/10 bg-[#111318] p-4 sm:p-6 opacity-0 transition-all duration-300 hover:border-[#b08d57]/40 hover:scale-[1.02]"
              >
                <p className="text-xs sm:text-sm text-[#b08d57]/80">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-4 sm:mt-8 text-sm sm:text-lg font-medium text-white leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brochures */}
        <div
          ref={brochuresRef}
          className="my-10 sm:my-12 lg:my-24 mx-2 sm:mx-10 lg:mx-20 rounded-2xl bg-[#f4f0e8] px-4 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16 text-[#111318]"
        >
          <div
            ref={brochureHeaderRef}
            className="mb-6 sm:mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="opacity-0">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#8a6a3f]">Brochures</p>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl font-medium">Dongfeng bus range</h2>
            </div>
            <p className="max-w-md text-sm sm:text-base leading-relaxed text-black/58 opacity-0">
              Open each brochure to review the model details, seating class, and vehicle information.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {brochures.map((brochure, index) => (
              <article
                key={brochure.title}
                ref={(el) => (brochureCardsRef.current[index] = el)}
                className="rounded-2xl border border-black/10 bg-white px-5 py-5 sm:px-8 sm:py-6 shadow-sm opacity-0 transition duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.24em] text-black/45">Title</p>
                <h3 className="mt-2 sm:mt-3 text-lg sm:text-2xl font-semibold">{brochure.title}</h3>
                <p className="mt-2 sm:mt-3 min-h-10 sm:min-h-12 text-sm leading-relaxed text-black/58">{brochure.subtitle}</p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={brochure.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-[#111318] px-5 text-sm font-medium text-white transition hover:bg-[#2a2d34]"
                  >
                    Open Brochure
                  </a>
                  <a
                    href={brochure.file}
                    onClick={(e) => handleDownload(e, brochure.file, brochure.fileName)}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 px-5 text-sm font-medium text-black transition hover:bg-black/5"
                  >
                    Download PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="my-10 sm:my-12 lg:my-24 px-2 sm:px-10 lg:px-20">
          <div
            ref={ctaRef}
            className="rounded-2xl grid gap-5 sm:gap-8 border border-white/10 bg-[#111318] p-5 sm:p-7 lg:p-10 lg:grid-cols-[1fr_auto] lg:items-center opacity-0"
          >
            <div>
              <p className="text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#b08d57]">Represented in Nepal by</p>
              <h2 className="mt-2 sm:mt-3 text-lg sm:text-2xl lg:text-3xl font-medium text-white">
                Aayam Intercontinental Pvt. Ltd.
              </h2>
              <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/62">
                A member of Himalaya Organization, serving operators who need practical, comfortable,
                and future-ready commercial passenger transport solutions.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex h-11 sm:h-12 w-full lg:w-auto items-center justify-center rounded-full bg-[#b08d57] px-6 sm:px-7 text-sm sm:text-md font-semibold text-black transition duration-300 hover:bg-[#d0aa72] hover:scale-[1.03] active:scale-95"
            >
              Contact Team
            </a>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

export default Dongfeng