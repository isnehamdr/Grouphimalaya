import React, { useCallback, useEffect, useRef, useState } from 'react'
import newsimageone from '../../../public/images/news_one_image.jpeg'
import newsimagetwo from '../../../public/images/news_two_image.jpeg'
import newsimagethree from '../../../public/images/news_three_image.jpeg'
import newsimagefour from '../../../public/images/news_four_image.jpg'
import newsimagefive from '../../../public/images/news_five_image.jpg'
import newsimagesix from '../../../public/images/newsimagesix.jpg'
// import newsimageseven from '../../../public/images/nepalautofb.jpeg'

const News = [
   {
  id: 19,
  title:
    'गोर्खाज फाइनान्सले म्याक्सस, डोङफेङ, ट्राइ–रिङ र फोर्स मोटर्सका गाडी किन्न ८० प्रतिशत सम्म कर्जा उपलब्ध गराउने',
  description:
    'हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच सम्झौता भएसँगै म्याक्सस, डोङफेङ, ट्राइ–रिङ र फोर्सका कमर्सियल तथा विद्युतीय सवारी खरिदमा ८० प्रतिशतसम्म कर्जा, ७ वर्षसम्मको भुक्तानी अवधि र ३–५ कार्यदिनमै कर्जा स्वीकृति हुने सुविधा उपलब्ध हुनेछ ।',
  link: 'https://www.facebook.com/nepalauto1/posts/pfbid05wY1aABwpZaJGhpqoka7isGpKwcK2b66avTJnzPsvQkUZtybSdfv25KP816fH2jQl?rdid=dYp0j2yKoJjRaXyt#',
  image: newsimagesix,
},
  {
    id: 6,
    title: 'हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच सम्झौता, विद्युतीय सवारी खरिदमा ८० प्रतिशतसम्म कर्जा',
    description:
      'काठमाडौं । हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्स लिमिटेडबीच कमर्सियल तथा विद्युतीय सवारी साधन खरिदका लागि ८० प्रतिशतसम्म कर्जा उपलब्ध गराउने सम्झौता भएको छ । सम्झौतासँगै देशभरका ग्राहकले हिमालय अर्गनाइजेसनबाट बिक्री–वितरण हुने सबै कमर्सियल तथा विद्युतीय सवारी साधन खरिद गर्दा ८० प्रतिशतसम्म सहज फाइनान्सिङ सुविधा लिन सक्नेछन् ।',
    link: 'https://www.bikashnews.com/story/576455/',
    image: newsimagesix,
  },
  {
    id: 7,
    title: 'हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच ८०% सम्म सवारी कर्जा उपलब्ध गराउने सम्झौता',
    description:
      'काठमाडौं । नेपालमा वातावरणमैत्री, आधुनिक र दिगो यातायात सेवालाई प्रवर्द्धन गर्ने उद्देश्यका साथ हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्स लिमिटेडबीच समझदारी पत्रमा हस्ताक्षर भएको छ । अब देशभरिका ग्राहकहरूले कमर्सियल तथा विद्युतीय सवारी खरिदमा ८० प्रतिशतसम्म सहज फाइनान्सिङ सुविधा पाउनेछन् ।',
    link: 'https://arthikawaj.com/himalaya-organization-gorkhas-finance-sign-mou-for-up-to-80-vehicle-financing/',
    image: newsimagesix,
  },
  {
    id: 8,
    title: 'गोर्खाज फाइनान्सले विद्युतीय तथा कमर्सियल सवारीमा ८०% सम्म फाइनान्सिङ उपलब्ध गराउने',
    description:
      'काठमाडौं । हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच कमर्सियल तथा विद्युतीय सवारी साधन खरिदमा ८० प्रतिशतसम्म कर्जा उपलब्ध गराउने सम्झौता भएको छ । प्रतिस्पर्धी ब्याजदर, ७ वर्षसम्मको भुक्तानी अवधि र द्रुत कर्जा स्वीकृति सुविधा उपलब्ध छ ।',
    link: 'https://aarthiknews.com/news/127862/gorkhaz-financing-will-provide-80--financing-when/',
    image: newsimagesix,
  },
  {
    id: 9,
    title: 'हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच सम्झौता, सवारी कर्जाको अवधि ७ वर्षसम्म',
    description:
      'हिमालय अर्गनाइजेसनबाट बिक्री हुने कमर्सियल तथा विद्युतीय सवारी खरिदमा गोर्खाज फाइनान्सले ८० प्रतिशतसम्म कर्जा उपलब्ध गराउने सम्झौता भएको छ । कर्जाको भुक्तानी अवधि अधिकतम सात वर्षसम्म रहने र ३ देखि ५ कार्यदिनभित्र कर्जा स्वीकृत हुने व्यवस्था मिलाइएको छ ।',
    link: 'https://bizpati.com/2026/09/220635/',
    image: newsimagesix,
  },
  {
    id: 10,
    title: 'हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच ८० प्रतिशतसम्म सवारी कर्जा उपलब्ध गराउने सम्झौता',
    description:
      'काठमाडौं । हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्स लिमिटेडबीच कमर्सियल तथा विद्युतीय सवारी साधन खरिदका लागि ८० प्रतिशतसम्म कर्जा उपलब्ध गराउने समझदारी पत्रमा हस्ताक्षर भएको छ । यो सुविधा गोर्खाज फाइनान्सका देशभरका शाखाबाट उपलब्ध हुनेछ ।',
    link: 'https://corporatekhabar.com/himalayan-organizationgorkhaj-finance/',
    image: newsimagesix,
  },
  {
    id: 11,
    title: 'हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच सम्झौता, सवारी खरिदमा ८०% सम्म कर्जा',
    description:
      'काठमाडौं । हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच कमर्सियल तथा विद्युतीय सवारी खरिदमा ८० प्रतिशतसम्म कर्जा उपलब्ध गराउने सम्झौता भएको छ । ग्राहक तथा यातायात व्यवसायीले प्रतिस्पर्धी ब्याजदरमा लचिलो भुक्तानी अवधिसहित कर्जा लिन सक्नेछन् ।',
    link: 'https://bizshala.com/article/33884',
    image: newsimagesix,
  },
  {
    id: 12,
    title: 'हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्स लिमिटेडबीच ८०% सम्म सवारी कर्जा उपलब्ध गराउने सम्झौता',
    description:
      'काठमाडौं । नेपालमा वातावरणमैत्री र दिगो यातायातलाई प्रवर्द्धन गर्ने उद्देश्यका साथ हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच समझदारी पत्रमा हस्ताक्षर भएको छ । अब देशभरका ग्राहकले ८० प्रतिशतसम्म सहज फाइनान्सिङ सुविधा पाउनेछन् ।',
    link: 'https://himalayapost.com/archives/482222',
    image: newsimagesix,
  },
  {
    id: 13,
    title: 'हिमालय अर्गनाइजेसन–गोर्खाज फाइनान्स सम्झौता : विद्युतीय सवारीमा ८०% सम्म कर्जा',
    description:
      'काठमाडौं । हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच कमर्सियल तथा विद्युतीय सवारी साधन खरिदका लागि ८० प्रतिशतसम्म कर्जा उपलब्ध गराउने सम्झौता भएको छ । सम्झौताअनुसार ७ वर्षसम्मको भुक्तानी अवधि र द्रुत स्वीकृति सुविधा उपलब्ध छ ।',
    link: 'https://www.corporatenepal.com/story/287010',
    image: newsimagesix,
  },
  {
    id: 14,
    title: 'गोर्खाज फाइनान्स र हिमालय अर्गनाइजेसनबीच सवारी कर्जा सम्झौता',
    description:
      'काठमाडौं । हिमालय अर्गनाइजेसनबाट बिक्री–वितरण हुने कमर्सियल तथा विद्युतीय सवारी खरिदमा गोर्खाज फाइनान्सले ८० प्रतिशतसम्म कर्जा उपलब्ध गराउने सम्झौता भएको छ । यो सुविधा देशभरका शाखा सञ्जालमार्फत लागू हुनेछ ।',
    link: 'https://www.bittiyapost.com/news/2026/09/23/26736',
    image: newsimagesix,
  },
  {
    id: 15,
    title: 'हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच समझदारी, विद्युतीय सवारीमा सहज कर्जा',
    description:
      'काठमाडौं । हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्स लिमिटेडबीच कमर्सियल तथा विद्युतीय सवारी साधन खरिदका लागि ८० प्रतिशतसम्म कर्जा उपलब्ध गराउने सम्झौता भएको छ । ग्राहकले प्रतिस्पर्धी ब्याजदरमा ७ वर्षसम्मको लचिलो भुक्तानी अवधि पाउनेछन् ।',
    link: 'https://pahiloawaj.com/2026/09/23/18/913/',
    image: newsimagesix,
  },
  {
    id: 16,
    title: 'हिमालय अर्गनाइजेसन–गोर्खाज फाइनान्स : विद्युतीय तथा कमर्सियल सवारीमा ८०% कर्जा',
    description:
      'काठमाडौं । हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच सम्झौता भएसँगै देशभरका ग्राहकले म्याक्सस, डोङफेङ, ट्राइ–रिङ तथा फोर्स मोटर्सका सवारी खरिदमा ८० प्रतिशतसम्म सहज फाइनान्सिङ सुविधा लिन सक्नेछन् ।',
    link: 'https://biznessviews.com/info-tech/automobiles/66198/',
    image: newsimagesix,
  },
  {
    id: 17,
    title: 'हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच सवारी कर्जा सम्झौता',
    description:
      'काठमाडौं । हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्स लिमिटेडबीच कमर्सियल तथा विद्युतीय सवारी साधन खरिदका लागि ८० प्रतिशतसम्म कर्जा उपलब्ध गराउने सम्झौता भएको छ । आवश्यक कागजात पेस भएपछि ३ देखि ५ कार्यदिनभित्र कर्जा स्वीकृत हुने व्यवस्था मिलाइएको छ ।',
    link: 'https://www.samayapost.com/09/477378.html',
    image: newsimagesix,
  },
  {
    id: 18,
    title: 'हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच सम्झौता, विद्युतीय सवारी खरिदमा ८०% कर्जा',
    description:
      'काठमाडौं । हिमालय अर्गनाइजेसन र गोर्खाज फाइनान्सबीच कमर्सियल तथा विद्युतीय सवारी साधन खरिदका लागि ८० प्रतिशतसम्म कर्जा उपलब्ध गराउने समझदारी भएको छ । यसबाट यातायात व्यवसायी र ग्राहकहरूलाई वित्तीय पहुँच विस्तार हुने अपेक्षा गरिएको छ ।',
    link: 'https://hamrodes.com/archives/353287',
    image: newsimagesix,
  },
  {
    id: 1,
    title: "हिमालय मोट्रक्सले सार्वजनिक गऱ्यो 'म्याक्सस इटेरोन ९ कम्फर्ट'",
    description:
      'नेपालका लागि म्याक्सस सवारीसाधनको आधिकारिक आयातकर्ता तथा वितरक हिमालय मोट्रक्स प्रा.लि.ले नयाँ शक्तिशाली र प्रिमियम विद्युतीय फोर–ह्विल ड्राइभ पिकअप म्याक्सस इटेरोन ९ कम्फर्ट नेपाली बजारमा सार्वजनिक गरेको छ।',
    link: 'https://www.setopati.com/kinmel/automobiles/394313',
    image: newsimageone,
  },
  {
    id: 2,
    title:
      'हिमालय मोट्रक्सद्वारा MAXUS eTERRON 9 Comfort नेपालमा सार्वजनिक, पहिलो ५० जना ग्राहकका लागि विशेष मूल्य रु. ८८ लाख',
    description:
      'नेपालका लागि MAXUS सवारी साधनकाे आधिकारिक आयातकर्ता तथा वितरक हिमालय अर्गनाइजेसन अन्तर्गतको कम्पनी हिमालय मोट्रक्स प्रा.लि. ले नयाँ शक्तिशाली र प्रिमियम इलैक्ट्रिक फोर-हिवल ड्राइभ पिकअप MAXUS TERRON 9 Comfort नेपाली बजारमा सार्वजनिक गरेको छ।',
    link: 'https://arthapranali.com/2026/07/32031/',
    image: newsimagetwo,
  },
  {
    id: 3,
    title:
      'Himalaya Motrox Launches MAXUS eTERRON 9 Comfort in Nepal at an Introductory Price of NPR 88 Lakh',
    description:
      'Himalaya Motrox Pvt. Ltd., the authorized importer and distributor of MAXUS vehicles in Nepal, has officially launched the new MAXUS eTERRON 9 Comfort-a powerful, premium, all-electric 4WD pickup truck.',
    link: 'https://arthapranali.com/2026/07/32036/',
    image: newsimagethree,
  },
  {
    id: 4,
    title: 'हिमालय मोट्रक्स‌द्वारा विद्युतीय पिकअप ‘म्याक्सस इटेरोन–९ कम्फर्ट’ सार्वजनिक',
    description:
      'हिमालय अर्गनाइजेसन अन्तर्गतको हिमालय मोट्रक्स प्रालिले म्याक्सस ब्रान्डको नयाँ विद्युतीय चार पाङ्ग्रे पिकअप ‘म्याक्सस इटेरोन–९ कम्फर्ट’ नेपाली बजारमा सार्वजनिक गरेको छ। कम्पनीले पहिलो ५० जना ग्राहकका लागि यसको प्रारम्भिक बिक्री मूल्य ८८ लाख रुपैयाँ कायम गरेको जनाएको छ।',
    link: 'https://www.makalukhabar.com/2026/07/99977617953/',
    image: newsimagefour,
  },
  {
    id: 5,
    title: 'इलेक्टिक फोर–ह्विल ड्राइभ पिकअप ‘म्याक्सस इ–टेरोन ९ कम्फर्ट’ सार्वजनिक',
    description:
      'चीनको एसएआईसी ग्रुप अन्तर्गतको म्याक्सस ब्राण्डका सवारी साधनको नेपालका लागि आधिकारिक आयातकर्ता तथा वितरक हिमालय अर्गनाइजेसन अन्तर्गतको हिमालय मोट्रक्स प्रा.लि.ले नयाँ शक्तिशाली इलेक्टिक फोर–ह्विल ड्राइभ पिकअप ‘म्याक्सस इ–टेरोन ९ कम्फर्ट’ नेपाली बजारमा सार्वजनिक गरेको छ ।',
    link: 'https://arthikawaj.com/maxus-2/',
    image: newsimagefive,
  },
]


const decodeArticleText = (value) => {
  if (!/[àâ]/.test(value)) return value

  const bytes = Array.from(value, (character) =>
    windows1252Bytes[character] ?? character.charCodeAt(0)
  )

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
              Recent coverage, announcements, and stories from across Himalaya
              Organization.
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 18l-6-6 6-6"
                />
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6l6 6-6 6"
                />
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M8 7h9v9"
                        />
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
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 18l-6-6 6-6"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Show next articles"
                onClick={() => scrollSlider(1)}
                disabled={!canScrollRight}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white disabled:opacity-30"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6l6 6-6 6"
                  />
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