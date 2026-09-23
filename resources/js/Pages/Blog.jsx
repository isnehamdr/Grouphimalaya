import MainWrapper from '@/MainComponents/MainWrapper'
import React, { useEffect, useRef, useState } from 'react'
import blogimage from '../../../public/images/blog_image.avif'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Head, Link } from '@inertiajs/react'
import axios from 'axios'
import parse from 'html-react-parser'
import SEO from '@/Components/SEO' // Import the SEO component
import { newsArticles } from '@/HomeComponents/NewsArticle'

gsap.registerPlugin(ScrollTrigger)

// Converts stored path "blogs/abc.jpg" → "/storage/blogs/abc.jpg"
const storageUrl = (path) => `${import.meta.env.VITE_IMAGE_PATH}/${path}`

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const heroTextRef = useRef(null)
  const heroSubtextRef = useRef(null)
  const sectionTitleRef = useRef(null)
  const cardRefs = useRef([])
  const cardImageRefs = useRef([])
  const cardContentRefs = useRef([])

  // SEO data with consistent blog keywords
  const seoData = {
    title: "Blog | Insights & Stories from Himalaya Organization Nepal",
    description: "Explore real stories, updates, industry insights, and impact reports from Himalaya Organization. Discover Nepal's leading auto solutions, agriculture innovations, banking services, and real estate developments since 1991.",
    url: "https://www.himalayaorganization.com/blog",
    image: "/images/blog_image.avif",
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(route('blog.index', { status: 'published' }))
        setBlogs(response.data)
      } catch (error) {
        console.log('Error fetching blogs', error)
      }
    }
    fetchBlogs()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionTitleRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionTitleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      cardRefs.current.forEach((card, index) => {
        if (!card) return

        gsap.fromTo(
          cardImageRefs.current[index],
          { scale: 1.05, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )

        gsap.fromTo(
          cardContentRefs.current[index],
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [blogs])

  // Generate dynamic meta tags for blog posts if needed
  const getBlogSeo = () => {
    if (blogs.length > 0) {
      return {
        ...seoData,
        description: `Latest articles from Himalaya Organization: ${blogs.slice(0, 3).map(b => b.title).join(' | ')}. Explore insights on Nepal's automotive, agriculture, banking, and real estate sectors.`,
      }
    }
    return seoData
  }

  const currentSeo = getBlogSeo()

  return (
    <MainWrapper>
      <SEO {...currentSeo} />
      
      <div className='w-full min-h-screen p-2 sm:p-4 text-white'>
        <div
          className='rounded-2xl min-h-[60vh] sm:min-h-[75vh] lg:min-h-[95vh] bg-cover bg-center bg-no-repeat relative flex justify-center items-end p-6 sm:p-8 lg:p-10'
          style={{ backgroundImage: `url(${blogimage})` }}
        >
          <div className='absolute inset-0 rounded-2xl bg-gradient-to-b from-black/10 to-black/80' />
          <div className='z-10 flex flex-col items-center pb-2 sm:pb-0'>
            <p
              ref={heroTextRef}
              className='text-white text-2xl sm:text-5xl lg:text-7xl max-w-[280px] sm:max-w-lg lg:max-w-4xl text-center leading-tight font-semibold'
            >
              Insights & Stories
            </p>
            <p
              ref={heroSubtextRef}
              className='text-white text-sm sm:text-base max-w-[260px] sm:max-w-lg lg:max-w-4xl text-center leading-snug sm:leading-tight font-semibold mt-3 sm:mt-6'
            >
              Explore real stories, updates, and impact reports from our work
            </p>
          </div>
        </div>

        <div className='mt-8 sm:mt-12 lg:mt-20 px-2 sm:px-6 lg:px-20 py-14'>
          <section
            aria-labelledby='press-articles-heading'
          >
            <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
              <div>
                <p className='text-xs uppercase tracking-[0.3em] text-[#c6a36c]'>
                  In the press
                </p>
                <h2
                  id='press-articles-heading'
                  className='mt-2 text-2xl font-medium sm:text-4xl lg:text-5xl'
                >
                  News and media coverage
                </h2>
              </div>
              <p className='max-w-xl text-sm leading-6 text-white/60 sm:text-base'>
                Explore recent announcements and independent coverage of Himalaya Organization.
              </p>
            </div>

            <div className='mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
              {newsArticles.map((article) => (
                <article
                  key={`press-${article.id}`}
                  className='group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#111318] shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_16px_42px_rgba(0,0,0,0.45)]'
                >
                  <a
                    href={article.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${article.title} (opens in a new tab)`}
                    className='flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b08a42] focus-visible:ring-inset'
                  >
                    <div className='relative aspect-[16/10] overflow-hidden bg-white/5'>
                      <img
                        src={article.image}
                        alt=''
                        loading='lazy'
                        className='h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-[#111318]/70 via-transparent to-transparent' />
                      <span className='absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-md'>
                        Press coverage
                      </span>
                    </div>

                    <div className='flex flex-1 flex-col p-5 sm:p-6'>
                      <h3 className='line-clamp-3 text-lg font-medium leading-snug text-white transition-colors group-hover:text-[#d0ad76] sm:text-xl'>
                        {article.title}
                      </h3>
                      <p className='mt-3 line-clamp-3 text-sm leading-6 text-white/60'>
                        {article.description}
                      </p>

                      <span className='mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#c6a36c]'>
                        Read original article
                        <svg
                          aria-hidden='true'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='1.8'
                          className='h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' d='M7 17L17 7M8 7h9v9' />
                        </svg>
                      </span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className='mt-20 border-t border-white/10 pt-12 sm:mt-24 sm:pt-16'>
            <p
              ref={sectionTitleRef}
              className='text-2xl sm:text-4xl lg:text-5xl font-medium'
            >
              Latest Articles
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 sm:mt-8'>
              {blogs.length > 0 ? blogs.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => { cardRefs.current[index] = el }}
                  className='lg:min-h-[70vh]'
                >
                  <img
                    alt={item.title}
                    ref={(el) => { cardImageRefs.current[index] = el }}
                    src={item.image ? storageUrl(item.image) : blogimage}
                    className='w-full h-[220px] sm:h-[400px] lg:h-[70vh] object-cover rounded-2xl'
                  />
                  <div
                    ref={(el) => { cardContentRefs.current[index] = el }}
                    className='py-3 sm:py-4 flex flex-col gap-3 sm:gap-4'
                  >
                    <p className='text-lg sm:text-2xl lg:text-3xl font-medium lg:max-w-lg leading-snug'>
                      {item.title}
                    </p>
                    <div className='text-sm sm:text-base text-gray-300 line-clamp-3'>
                      {parse(item.content || '')}
                    </div>
                    <div>
                      {/* Use route('blog.show') which maps to GET /blogs/{blog} with slug */}
                      <Link
                        href={`/blogs/${item.slug}`}
                        className='inline-flex rounded-full bg-[#4b4640] px-4 py-2 text-sm text-white transition hover:bg-[#61594f] sm:text-base'
                      >
                        Read Article
                      </Link>
                    </div>
                  </div>
                </div>
              )) : (
                <p className='text-white/70 text-lg'>No published blogs available right now.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </MainWrapper>
  )
}

export default Blog
