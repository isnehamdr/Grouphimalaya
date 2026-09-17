import React, { useCallback, useEffect, useRef, useState } from 'react'
import newsimageone from '../../../public/images/news_one_image.jpeg'
import newsimagetwo from '../../../public/images/news_two_image.jpeg'
import newsimagethree from '../../../public/images/news_three_image.jpeg'
import newsimagefour from '../../../public/images/news_four_image.jpg'
import newsimagefive from '../../../public/images/news_five_image.jpg'


const News = [{
id:1, 
title:"हिमालय मोट्रक्सले सार्वजनिक गऱ्यो 'म्याक्सस इटेरोन ९ कम्फर्ट'", 
description:'नेपालका लागि म्याक्सस सवारीसाधनको आधिकारिक आयातकर्ता तथा वितरक हिमालय मोट्रक्स प्रा.लि.ले नयाँ शक्तिशाली र प्रिमियम विद्युतीय फोर–ह्विल ड्राइभ पिकअप म्याक्सस इटेरोन ९ कम्फर्ट नेपाली बजारमा सार्वजनिक गरेको छ।',
link: 'https://www.setopati.com/kinmel/automobiles/394313', 
image: newsimageone
},
{
id:2, 
title:'हिमालय मोट्रक्सद्वारा MAXUS eTERRON 9 Comfort नेपालमा सार्वजनिक, पहिलो ५० जना ग्राहकका लागि विशेष मूल्य रु. ८८ लाख', 
description: 'नेपालका लागि MAXUS सवारी साधनकाे आधिकारिक आयातकर्ता तथा वितरक हिमालय अर्गनाइजेसन अन्तर्गतको कम्पनी हिमालय मोट्रक्स प्रा.लि. ले नयाँ शक्तिशाली र प्रिमियम इलैक्ट्रिक फोर-हिवल ड्राइभ पिकअप MAXUS TERRON 9 Comfort नेपाली बजारमा सार्वजनिक गरेको छ।',
link:'https://arthapranali.com/2026/07/32031/', 
image: newsimagetwo
}, 
{
id:3, 
title:'Himalaya Motrox Launches MAXUS eTERRON 9 Comfort in Nepal at an Introductory Price of NPR 88 Lakh', 
description: 'Himalaya Motrox Pvt. Ltd., the authorized importer and distributor of MAXUS vehicles in Nepal, has officially launched the new MAXUS eTERRON 9 Comfort-a powerful, premium, all-electric 4WD pickup truck.',
link:'https://arthapranali.com/2026/07/32036/',
image: newsimagethree
}, 
{
id:4, 
title:'हिमालय मोट्रक्स‌द्वारा विद्युतीय पिकअप ‘म्याक्सस इटेरोन–९ कम्फर्ट’ सार्वजनिक', 
description: 'हिमालय अर्गनाइजेसन अन्तर्गतको हिमालय मोट्रक्स प्रालिले म्याक्सस ब्रान्डको नयाँ विद्युतीय चार पाङ्ग्रे पिकअप ‘म्याक्सस इटेरोन–९ कम्फर्ट’ नेपाली बजारमा सार्वजनिक गरेको छ। कम्पनीले पहिलो ५० जना ग्राहकका लागि यसको प्रारम्भिक बिक्री मूल्य ८८ लाख रुपैयाँ कायम गरेको जनाएको छ।', 
link:'https://www.makalukhabar.com/2026/07/99977617953/', 
image: newsimagefour
}, 
{
id:5, 
title:'इलेक्टिक फोर–ह्विल ड्राइभ पिकअप ‘म्याक्सस इ–टेरोन ९ कम्फर्ट’ सार्वजनिक', 
description: 'चीनको एसएआईसी ग्रुप अन्तर्गतको म्याक्सस ब्राण्डका सवारी साधनको नेपालका लागि आधिकारिक आयातकर्ता तथा वितरक हिमालय अर्गनाइजेसन अन्तर्गतको हिमालय मोट्रक्स प्रा.लि.ले नयाँ शक्तिशाली इलेक्टिक फोर–ह्विल ड्राइभ पिकअप ‘म्याक्सस इ–टेरोन ९ कम्फर्ट’ नेपाली बजारमा सार्वजनिक गरेको छ ।', 
link:'https://arthikawaj.com/maxus-2/',
image: newsimagefive
}
]

// The supplied Nepali copy was saved as Windows-1252 text after being UTF-8.
// Convert only affected strings so the headlines render correctly in the browser.
const windows1252Bytes = {
  '€': 0x80, '‚': 0x82, 'ƒ': 0x83, '„': 0x84, '…': 0x85, '†': 0x86,
  '‡': 0x87, 'ˆ': 0x88, '‰': 0x89, 'Š': 0x8a, '‹': 0x8b, 'Œ': 0x8c,
  'Ž': 0x8e, '‘': 0x91, '’': 0x92, '“': 0x93, '”': 0x94, '•': 0x95,
  '–': 0x96, '—': 0x97, '˜': 0x98, '™': 0x99, 'š': 0x9a, '›': 0x9b,
  'œ': 0x9c, 'ž': 0x9e, 'Ÿ': 0x9f,
}

const decodeArticleText = (value) => {
  if (!/[àâ]/.test(value)) return value

  const bytes = Array.from(value, (character) => (
    windows1252Bytes[character] ?? character.charCodeAt(0)
  ))

  return new TextDecoder('utf-8').decode(Uint8Array.from(bytes))
}

export const newsArticles = News.map((article) => ({
  ...article,
  title: decodeArticleText(article.title),
  description: decodeArticleText(article.description),
}))




const NewsArticle = () => {
  const sliderRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateControls = useCallback(() => {
    const slider = sliderRef.current
    if (!slider) return

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth
    setCanScrollLeft(slider.scrollLeft > 4)
    setCanScrollRight(slider.scrollLeft < maxScrollLeft - 4)
  }, [])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return undefined

    updateControls()
    slider.addEventListener('scroll', updateControls, { passive: true })

    const resizeObserver = new ResizeObserver(updateControls)
    resizeObserver.observe(slider)

    return () => {
      slider.removeEventListener('scroll', updateControls)
      resizeObserver.disconnect()
    }
  }, [updateControls])

  const scrollSlider = (direction) => {
    const slider = sliderRef.current
    if (!slider) return

    slider.scrollBy({
      left: direction * slider.clientWidth * 0.82,
      behavior: 'smooth',
    })
  }

  return (
    <section
      aria-labelledby="news-articles-heading"
      className="bg-[#0b0c0f] px-4 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="mx-auto">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              In the press
            </p>
            <h2
              id="news-articles-heading"
              className="mt-2 text-3xl text-white sm:text-4xl"
            >
              Latest news and articles
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
              Recent coverage, announcements, and stories from across Himalaya Organization.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              aria-label="Show previous articles"
              onClick={() => scrollSlider(-1)}
              disabled={!canScrollLeft}
              className="group grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#b08d57]/70 hover:bg-[#b08d57] hover:text-black disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:bg-white/5 disabled:hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5 transition-transform group-hover:-translate-x-0.5 group-disabled:translate-x-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Show next articles"
              onClick={() => scrollSlider(1)}
              disabled={!canScrollRight}
              className="group grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#b08d57]/70 hover:bg-[#b08d57] hover:text-black disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:bg-white/5 disabled:hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-disabled:translate-x-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') scrollSlider(-1)
              if (event.key === 'ArrowRight') scrollSlider(1)
            }}
            tabIndex="0"
            aria-label="News article slider"
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="group min-w-0 shrink-0 basis-[88%] snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#111318] shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_16px_42px_rgba(0,0,0,0.45)] sm:basis-[56%] lg:basis-[calc((100%-2.5rem)/3)]"
              >
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${article.title} (opens in a new tab)`}
                  className="flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b08d57] focus-visible:ring-inset"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                    <img
                      src={article.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/70 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
                      Press coverage
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3
                      className="text-lg font-medium leading-snug text-white transition-colors group-hover:text-[#d0ad76]"
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        overflow: 'hidden',
                      }}
                    >
                      {article.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-6 text-white/60"
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        overflow: 'hidden',
                      }}
                    >
                      {article.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#c6a36c]">
                      Read full article
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between sm:hidden">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
              Swipe to explore
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Show previous articles"
                onClick={() => scrollSlider(-1)}
                disabled={!canScrollLeft}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white disabled:opacity-30"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Show next articles"
                onClick={() => scrollSlider(1)}
                disabled={!canScrollRight}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white disabled:opacity-30"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsArticle
