// import React, {
//   useEffect,
//   useLayoutEffect,
//   useRef,
//   useState,
// } from "react";

// const CARDS = [
//   {
//     location: "Pokhara,",
//     country: "Nepal",
//     heading: ["A Nepali", "escape"],
//     sub: "Pokhara, Nepal",
//     img: "https://images.unsplash.com/photo-1562462181-b228e3cff9ad?q=80&w=1600&auto=format&fit=crop",
//   },
//   {
//     location: "Sarangkot,",
//     country: "Nepal",
//     heading: ["A mountain", "sunrise"],
//     sub: "Sarangkot, Nepal",
//     img: "https://images.unsplash.com/photo-1718180555560-0c5f890f8098?q=80&w=1600&auto=format&fit=crop",
//   },
//   {
//     location: "Kathmandu,",
//     country: "Nepal",
//     heading: ["A Kathmandu", "pilgrimage"],
//     sub: "Kathmandu, Nepal",
//     img: "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=1600&auto=format&fit=crop",
//   },
//   {
//     location: "Annapurna,",
//     country: "Nepal",
//     heading: ["An Annapurna", "trek"],
//     sub: "Annapurna, Nepal",
//     img: "https://images.unsplash.com/photo-1636513988093-126e51dee32d?q=80&w=1600&auto=format&fit=crop",
//   },
//   {
//     location: "Khumbu,",
//     country: "Nepal",
//     heading: ["An Everest", "expedition"],
//     sub: "Khumbu, Nepal",
//     img: "https://images.unsplash.com/photo-1565770772312-2b43cac7d585?q=80&w=1600&auto=format&fit=crop",
//   },
//   {
//     location: "Bhaktapur,",
//     country: "Nepal",
//     heading: ["A Bhaktapur", "wander"],
//     sub: "Bhaktapur, Nepal",
//     img: "https://images.unsplash.com/photo-1650638987536-6fbcb9bc6085?q=80&w=1600&auto=format&fit=crop",
//   },
// ];

// const AUTO_INTERVAL = 3500;
// const TRANSITION_DURATION = 1100;

// export default function Test() {
//   const [active, setActive] = useState(0);
//   const [thumbOffset, setThumbOffset] = useState(0);

//   const thumbnailViewportRef = useRef(null);
//   const thumbnailTrackRef = useRef(null);

//   /*
//    * Using a timeout instead of a permanent interval means clicking
//    * a thumbnail resets the automatic slide timer.
//    */
//   useEffect(() => {
//     const timeout = window.setTimeout(() => {
//       setActive((previous) => (previous + 1) % CARDS.length);
//     }, AUTO_INTERVAL);

//     return () => window.clearTimeout(timeout);
//   }, [active]);

//   /*
//    * Calculate how far the thumbnail track needs to translate
//    * so that the active thumbnail remains centred.
//    */
//   useLayoutEffect(() => {
//     const viewport = thumbnailViewportRef.current;
//     const track = thumbnailTrackRef.current;

//     if (!viewport || !track) return;

//     const updateThumbnailPosition = () => {
//       const activeThumbnail = track.children[active];

//       if (!activeThumbnail) return;

//       const thumbnailCentre =
//         activeThumbnail.offsetLeft + activeThumbnail.offsetWidth / 2;

//       const desiredOffset =
//         thumbnailCentre - viewport.clientWidth / 2;

//       const maximumOffset = Math.max(
//         0,
//         track.scrollWidth - viewport.clientWidth
//       );

//       const boundedOffset = Math.min(
//         Math.max(desiredOffset, 0),
//         maximumOffset
//       );

//       setThumbOffset(boundedOffset);
//     };

//     updateThumbnailPosition();

//     const resizeObserver = new ResizeObserver(
//       updateThumbnailPosition
//     );

//     resizeObserver.observe(viewport);
//     resizeObserver.observe(track);

//     return () => resizeObserver.disconnect();
//   }, [active]);

//   const currentCard = CARDS[active];
//   const heading = currentCard.heading;
//   const sub = currentCard.sub;

//   return (
//     <div className="relative h-screen min-h-[560px] w-full overflow-hidden bg-black">
//       {/* Main image slider */}
//       <div className="absolute inset-0">
//         {CARDS.map((card, index) => {
//           const isActive = active === index;

//           return (
//             <img
//               key={card.location}
//               src={card.img}
//               alt={`${card.location} ${card.country}`}
//               className={`
//                 absolute inset-0 h-full w-full object-cover
//                 will-change-[opacity,transform]
//                 transition-[opacity,transform]
//                 ease-[cubic-bezier(0.22,1,0.36,1)]
//                 ${
//                   isActive
//                     ? "z-10 scale-100 opacity-100"
//                     : "z-0 scale-[1.08] opacity-0"
//                 }
//               `}
//               style={{
//                 transitionDuration: `${TRANSITION_DURATION}ms`,
//               }}
//             />
//           );
//         })}
//       </div>

//       {/* Background overlays */}
//       <div className="absolute inset-0 z-20 bg-gray-600/40" />

//       <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/50 via-black/10 to-black/70" />

//       <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

//       {/* Main content */}
//       <div className="relative z-30 flex h-full w-full flex-col overflow-hidden px-4 pb-3 pt-16 xs:px-6 sm:px-0 sm:pb-6 sm:ps-16 sm:pt-20 md:ps-24 lg:pb-6 lg:ps-36 lg:pt-24">
//         {/* Large outlined VOYAGE text */}
//         <span
//           className="pointer-events-none absolute left-[-1rem] top-8 hidden font-sans text-[20vw] font-extrabold leading-none tracking-tighter text-transparent sm:left-[-2rem] sm:top-16 sm:block lg:left-0 lg:top-52 lg:text-[24rem]"
//           style={{
//             WebkitTextStroke:
//               "1px rgba(255,255,255,0.98)",
//             transform: "scaleY(1.4)",
//             transformOrigin: "center",
//           }}
//         >
//           VOYAGE
//         </span>

//         <div className="relative z-10 flex flex-1 flex-col justify-center gap-4 overflow-hidden sm:gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:pt-32">
//           {/* Heading content */}
//           <div className="max-w-xl">
//             <h1 className="text-left font-bebas text-[4.5rem] font-extrabold leading-[1.05] tracking-[1px] text-white sm:text-6xl sm:tracking-[3px] lg:text-[7.5rem]">
//               <span
//                 key={`heading-one-${heading[0]}`}
//                 className="block animate-[contentEnter_900ms_cubic-bezier(0.22,1,0.36,1)]"
//               >
//                 {heading[0]}
//               </span>

//               <span
//                 key={`heading-two-${heading[1]}`}
//                 className="block animate-[contentEnter_900ms_cubic-bezier(0.22,1,0.36,1)]"
//               >
//                 {heading[1]}
//               </span>
//             </h1>

//             <p
//               key={sub}
//               className="mt-3 animate-[contentEnter_900ms_cubic-bezier(0.22,1,0.36,1)] border-l-2 border-white/60 pl-3 font-inter text-sm font-medium tracking-wide text-white/90 sm:mt-4 sm:text-lg"
//             >
//               {sub}
//             </p>
//           </div>

//           {/* Thumbnail viewport */}
//           <div className="relative z-50 mt-6 w-full sm:mt-10 lg:mt-16 lg:w-[42rem]">
//             <div
//               ref={thumbnailViewportRef}
//               className="overflow-hidden px-2 py-5"
//             >
//               {/* Translating thumbnail track */}
//               <div
//                 ref={thumbnailTrackRef}
//                 className="flex w-max gap-2 will-change-transform transition-transform sm:gap-3"
//                 style={{
//                   transform: `translate3d(-${thumbOffset}px, 0, 0)`,
//                   transitionDuration: `${TRANSITION_DURATION}ms`,
//                   transitionTimingFunction:
//                     "cubic-bezier(0.22, 1, 0.36, 1)",
//                 }}
//               >
//                 {CARDS.map((card, index) => {
//                   const isActive = active === index;

//                   return (
//                     <button
//                       key={card.location}
//                       type="button"
//                       aria-label={`Show ${card.location} ${card.country}`}
//                       aria-current={isActive ? "true" : undefined}
//                       onClick={() => setActive(index)}
//                       className={`
//                         group relative z-10 h-52 w-32 shrink-0
//                         overflow-hidden text-left
//                         will-change-[opacity,transform]
//                         transition-[opacity,transform,box-shadow]
//                         ease-[cubic-bezier(0.22,1,0.36,1)]
//                         sm:w-40 lg:h-72 lg:w-72
//                         ${
//                           isActive
//                             ? "z-20 scale-[1.06] opacity-100 ring-2 ring-white/40"
//                             : "scale-95 opacity-65 hover:scale-100 hover:opacity-100"
//                         }
//                       `}
//                       style={{
//                         transitionDuration: `${TRANSITION_DURATION}ms`,
//                         transformOrigin: "center",
//                       }}
//                     >
//                       <img
//                         src={card.img}
//                         alt=""
//                         className={`
//                           h-full w-full object-cover
//                           transition-transform
//                           ease-[cubic-bezier(0.22,1,0.36,1)]
//                           ${
//                             isActive
//                               ? "scale-100"
//                               : "scale-110 group-hover:scale-105"
//                           }
//                         `}
//                         style={{
//                           transitionDuration: `${TRANSITION_DURATION}ms`,
//                         }}
//                       />

//                       <div
//                         className={`
//                           absolute inset-0 bg-gradient-to-t
//                           from-black/75 via-black/10 to-transparent
//                           transition-opacity
//                           ${
//                             isActive
//                               ? "opacity-100"
//                               : "opacity-80"
//                           }
//                         `}
//                         style={{
//                           transitionDuration: `${TRANSITION_DURATION}ms`,
//                         }}
//                       />

//                       <div className="absolute bottom-2 left-2 right-2 text-[10px] font-semibold leading-tight text-white xs:text-xs sm:bottom-3 sm:left-3 sm:text-lg">
//                         <div>{card.location}</div>
//                         <div>{card.country}</div>
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom navigation */}
//         <div className="relative z-10 mt-3 flex shrink-0 flex-wrap items-center justify-between gap-y-1 text-[9px] font-medium tracking-[0.1em] text-white/70 xs:text-[10px] sm:mt-4 sm:text-xs sm:tracking-[0.15em]">
//           <div className="flex gap-3 xs:gap-5">
//             <a
//               href="#"
//               className="transition-colors hover:text-white"
//             >
//               FACEBOOK
//             </a>

//             <a
//               href="#"
//               className="transition-colors hover:text-white"
//             >
//               TWITTER
//             </a>

//             <a
//               href="#"
//               className="transition-colors hover:text-white"
//             >
//               INSTAGRAM
//             </a>
//           </div>

//           <div className="text-base font-semibold text-white sm:text-xl">
//             {String(active + 1).padStart(2, "0")}

//             <span className="text-white/50">
//               /{String(CARDS.length).padStart(2, "0")}
//             </span>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes contentEnter {
//           from {
//             opacity: 0;
//             transform: translateY(18px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           * {
//             animation-duration: 0.01ms !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const CARDS = [
  {
    location: "Pokhara,",
    country: "Nepal",
    heading: ["A Nepali", "escape"],
    sub: "Pokhara, Nepal",
    img: "https://images.unsplash.com/photo-1562462181-b228e3cff9ad?q=80&w=1600&auto=format&fit=crop",
  },
  {
    location: "Sarangkot,",
    country: "Nepal",
    heading: ["A mountain", "sunrise"],
    sub: "Sarangkot, Nepal",
    img: "https://images.unsplash.com/photo-1718180555560-0c5f890f8098?q=80&w=1600&auto=format&fit=crop",
  },
  {
    location: "Kathmandu,",
    country: "Nepal",
    heading: ["A Kathmandu", "pilgrimage"],
    sub: "Kathmandu, Nepal",
    img: "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=1600&auto=format&fit=crop",
  },
  {
    location: "Annapurna,",
    country: "Nepal",
    heading: ["An Annapurna", "trek"],
    sub: "Annapurna, Nepal",
    img: "https://images.unsplash.com/photo-1636513988093-126e51dee32d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    location: "Khumbu,",
    country: "Nepal",
    heading: ["An Everest", "expedition"],
    sub: "Khumbu, Nepal",
    img: "https://images.unsplash.com/photo-1565770772312-2b43cac7d585?q=80&w=1600&auto=format&fit=crop",
  },
  {
    location: "Bhaktapur,",
    country: "Nepal",
    heading: ["A Bhaktapur", "wander"],
    sub: "Bhaktapur, Nepal",
    img: "https://images.unsplash.com/photo-1650638987536-6fbcb9bc6085?q=80&w=1600&auto=format&fit=crop",
  },
];

const CARD_COUNT = CARDS.length;

const HOLD_DURATION = 2800;
const TRANSITION_DURATION = 1150;
const FINISH_FADE_DURATION = 180;

const TRANSITION_EASING =
  "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Hero() {
  const [active, setActive] = useState(0);

  /*
   * Begin from the middle copy of the repeated list.
   * This lets the thumbnails move continuously forward.
   */
  const [cursor, setCursor] = useState(CARD_COUNT);

  const [trackOffset, setTrackOffset] = useState(0);
  const [animateTrack, setAnimateTrack] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  /*
   * Temporary image used for the thumbnail-to-hero animation.
   */
  const [transitionData, setTransitionData] = useState(null);

  const heroRef = useRef(null);
  const thumbnailViewportRef = useRef(null);
  const thumbnailTrackRef = useRef(null);
  const thumbnailRefs = useRef([]);

  const timersRef = useRef([]);
  const isAnimatingRef = useRef(false);

  /*
   * Three copies create the forward-only infinite thumbnail loop.
   */
  const repeatedCards = useMemo(() => {
    return Array.from(
      { length: CARD_COUNT * 3 },
      (_, flatIndex) => ({
        ...CARDS[flatIndex % CARD_COUNT],
        logicalIndex: flatIndex % CARD_COUNT,
        flatIndex,
      })
    );
  }, []);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => {
      window.clearTimeout(timer);
    });

    timersRef.current = [];
  }, []);

  const addTimer = useCallback((callback, delay) => {
    const timer = window.setTimeout(callback, delay);

    timersRef.current.push(timer);

    return timer;
  }, []);

  /*
   * Preload all images to avoid flashes during transitions.
   */
  useEffect(() => {
    CARDS.forEach((card) => {
      const image = new Image();
      image.src = card.img;
    });
  }, []);

  /*
   * Enable thumbnail animation after the initial track
   * position has been rendered.
   */
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setAnimateTrack(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  /*
   * Calculate the offset required to center a thumbnail.
   */
  const getCenteredTrackOffset = useCallback((flatIndex) => {
    const viewport = thumbnailViewportRef.current;
    const track = thumbnailTrackRef.current;
    const thumbnail = thumbnailRefs.current[flatIndex];

    if (!viewport || !track || !thumbnail) {
      return 0;
    }

    const thumbnailCenter =
      thumbnail.offsetLeft + thumbnail.offsetWidth / 2;

    const desiredOffset =
      thumbnailCenter - viewport.clientWidth / 2;

    const maximumOffset = Math.max(
      0,
      track.scrollWidth - viewport.clientWidth
    );

    return Math.min(
      Math.max(desiredOffset, 0),
      maximumOffset
    );
  }, []);

  /*
   * Move the thumbnail track whenever the selected cursor changes.
   */
  useLayoutEffect(() => {
    const viewport = thumbnailViewportRef.current;
    const track = thumbnailTrackRef.current;

    if (!viewport || !track) return;

    const updatePosition = () => {
      setTrackOffset(getCenteredTrackOffset(cursor));
    };

    updatePosition();

    const resizeObserver = new ResizeObserver(updatePosition);

    resizeObserver.observe(viewport);
    resizeObserver.observe(track);

    return () => {
      resizeObserver.disconnect();
    };
  }, [cursor, getCenteredTrackOffset]);

  /*
   * Reset from the third copy to the identical card in the
   * middle copy without showing a backward animation.
   */
  const rebaseInfiniteTrack = useCallback(
    (targetCursor) => {
      if (targetCursor < CARD_COUNT * 2) return;

      const rebasedCursor = targetCursor - CARD_COUNT;
      const rebasedOffset =
        getCenteredTrackOffset(rebasedCursor);

      setAnimateTrack(false);
      setCursor(rebasedCursor);
      setTrackOffset(rebasedOffset);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setAnimateTrack(true);
        });
      });
    },
    [getCenteredTrackOffset]
  );

  /*
   * Start the thumbnail-to-full-screen transition.
   */
  const beginTransition = useCallback(
    ({ targetCursor, sourceElement }) => {
      if (
        isAnimatingRef.current ||
        !heroRef.current ||
        !sourceElement
      ) {
        return;
      }

      clearTimers();

      const heroRectangle =
        heroRef.current.getBoundingClientRect();

      const thumbnailRectangle =
        sourceElement.getBoundingClientRect();

      const nextIndex =
        ((targetCursor % CARD_COUNT) + CARD_COUNT) %
        CARD_COUNT;

      const startingRectangle = {
        left:
          thumbnailRectangle.left - heroRectangle.left,
        top:
          thumbnailRectangle.top - heroRectangle.top,
        width: thumbnailRectangle.width,
        height: thumbnailRectangle.height,
      };

      isAnimatingRef.current = true;

      /*
       * Hide the old heading while the image expands.
       */
      setContentVisible(false);

      /*
       * First render the temporary image at thumbnail size.
       */
      setTransitionData({
        index: nextIndex,
        rectangle: startingRectangle,
        expanded: false,
        finishing: false,
      });

      /*
       * Move the thumbnail track at the same time.
       */
      setCursor(targetCursor);

      /*
       * Start expansion after the browser paints the
       * starting thumbnail-sized element.
       */
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setTransitionData((current) => {
            if (!current) return current;

            return {
              ...current,
              expanded: true,
            };
          });
        });
      });

      /*
       * Replace the hero background while the expanding image
       * is already covering most of the viewport.
       */
      addTimer(() => {
        setActive(nextIndex);
      }, TRANSITION_DURATION * 0.55);

      /*
       * Reveal the new heading near the end.
       */
      addTimer(() => {
        setContentVisible(true);
      }, TRANSITION_DURATION * 0.72);

      /*
       * Fade the temporary image into the identical background.
       */
      addTimer(() => {
        setTransitionData((current) => {
          if (!current) return current;

          return {
            ...current,
            finishing: true,
          };
        });
      }, TRANSITION_DURATION - FINISH_FADE_DURATION);

      /*
       * Remove the temporary image after the fade completes.
       */
      addTimer(() => {
        setActive(nextIndex);
        setTransitionData(null);

        isAnimatingRef.current = false;

        rebaseInfiniteTrack(targetCursor);
      }, TRANSITION_DURATION);
    },
    [
      addTimer,
      clearTimers,
      rebaseInfiniteTrack,
    ]
  );

  /*
   * Automatic forward-only sliding.
   */
  useEffect(() => {
    if (transitionData || isAnimatingRef.current) return;

    const timer = window.setTimeout(() => {
      const nextCursor = cursor + 1;
      const sourceElement =
        thumbnailRefs.current[nextCursor];

      beginTransition({
        targetCursor: nextCursor,
        sourceElement,
      });
    }, HOLD_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    active,
    cursor,
    transitionData,
    beginTransition,
  ]);

  /*
   * Clear animation timers when the component unmounts.
   */
  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  /*
   * Clicking a thumbnail still follows the forward circular path.
   */
  const handleThumbnailClick = (
    logicalIndex,
    sourceElement
  ) => {
    if (
      logicalIndex === active ||
      isAnimatingRef.current
    ) {
      return;
    }

    const forwardDistance =
      (logicalIndex - active + CARD_COUNT) %
      CARD_COUNT;

    const targetCursor =
      cursor + forwardDistance;

    beginTransition({
      targetCursor,
      sourceElement,
    });
  };

  const currentCard = CARDS[active];

  return (
    <div
      ref={heroRef}
      className="relative h-screen min-h-[560px] w-full overflow-hidden bg-black"
    >
      {/* Permanent full-screen hero background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={currentCard.img}
          alt={`${currentCard.location} ${currentCard.country}`}
          className="h-full w-full object-cover"
        />
      </div>

      {/*
       * Temporary expanding image.
       * It begins at the selected thumbnail's exact position.
       */}
      {transitionData && (
        <div
          className="pointer-events-none absolute z-[25] overflow-hidden will-change-[left,top,width,height,opacity,border-radius]"
          style={{
            left: transitionData.expanded
              ? 0
              : transitionData.rectangle.left,

            top: transitionData.expanded
              ? 0
              : transitionData.rectangle.top,

            width: transitionData.expanded
              ? "100%"
              : transitionData.rectangle.width,

            height: transitionData.expanded
              ? "100%"
              : transitionData.rectangle.height,

            borderRadius: transitionData.expanded
              ? "0px"
              : "3px",

            opacity: transitionData.finishing
              ? 0
              : 1,

            boxShadow: transitionData.expanded
              ? "0 0 0 rgba(0,0,0,0)"
              : "0 20px 60px rgba(0,0,0,0.35)",

            transition: `
              left ${TRANSITION_DURATION}ms ${TRANSITION_EASING},
              top ${TRANSITION_DURATION}ms ${TRANSITION_EASING},
              width ${TRANSITION_DURATION}ms ${TRANSITION_EASING},
              height ${TRANSITION_DURATION}ms ${TRANSITION_EASING},
              border-radius ${TRANSITION_DURATION}ms ${TRANSITION_EASING},
              box-shadow ${TRANSITION_DURATION}ms ${TRANSITION_EASING},
              opacity ${FINISH_FADE_DURATION}ms ease-out
            `,
          }}
        >
          <img
            src={CARDS[transitionData.index].img}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/*
       * Permanent overlays remain above both the hero and the
       * temporary expanding image, preventing brightness jumps.
       */}
      <div className="pointer-events-none absolute inset-0 z-[26] bg-gray-600/25" />

      <div className="pointer-events-none absolute inset-0 z-[26] bg-gradient-to-b from-black/50 via-black/10 to-black/70" />

      <div className="pointer-events-none absolute inset-0 z-[26] bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative z-30 flex h-full w-full flex-col overflow-hidden px-4 pb-3 pt-16 xs:px-6 sm:px-0 sm:pb-6 sm:ps-16 sm:pt-20 md:ps-24 lg:pb-6 lg:ps-36 lg:pt-24">
        {/* Large outlined VOYAGE text */}
        <span
          className="pointer-events-none absolute left-[-1rem] top-8 hidden font-sans text-[20vw] font-extrabold leading-none tracking-tighter text-transparent sm:left-[-2rem] sm:top-16 sm:block lg:left-0 lg:top-52 lg:text-[24rem]"
          style={{
            WebkitTextStroke:
              "1px rgba(255,255,255,0.98)",
            transform: "scaleY(1.4)",
            transformOrigin: "center",
          }}
        >
          VOYAGE
        </span>

        <div className="relative z-10 flex flex-1 flex-col justify-center gap-4 overflow-hidden sm:gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:pt-32">
          {/* Heading content */}
          <div
            className="max-w-xl will-change-[opacity,transform]"
            style={{
              opacity: contentVisible ? 1 : 0,

              transform: contentVisible
                ? "translateY(0)"
                : "translateY(16px)",

              transition: `
                opacity 420ms cubic-bezier(0.22,1,0.36,1),
                transform 620ms cubic-bezier(0.22,1,0.36,1)
              `,
            }}
          >
            <h1 className="text-left font-bebas text-[4.5rem] font-extrabold leading-[1.05] tracking-[1px] text-white sm:text-6xl sm:tracking-[3px] lg:text-[7.5rem]">
              <span className="block">
                {currentCard.heading[0]}
              </span>

              <span className="block">
                {currentCard.heading[1]}
              </span>
            </h1>

            <p className="mt-3 border-l-2 border-white/60 pl-3 font-inter text-sm font-medium tracking-wide text-white/90 sm:mt-4 sm:text-lg">
              {currentCard.sub}
            </p>
          </div>

          {/* Thumbnail slider */}
          <div className="relative z-50 mt-6 w-full sm:mt-10 lg:mt-16 lg:w-[42rem]">
            <div
              ref={thumbnailViewportRef}
              className="overflow-hidden px-2 py-5"
            >
              <div
                ref={thumbnailTrackRef}
                className="flex w-max gap-2 will-change-transform sm:gap-3"
                style={{
                  transform: `translate3d(-${trackOffset}px, 0, 0)`,

                  transition: animateTrack
                    ? `transform ${TRANSITION_DURATION}ms ${TRANSITION_EASING}`
                    : "none",
                }}
              >
                {repeatedCards.map((card) => {
                  const isSelected =
                    card.flatIndex === cursor;

                  return (
                    <button
                      key={`${card.location}-${card.flatIndex}`}
                      ref={(element) => {
                        thumbnailRefs.current[
                          card.flatIndex
                        ] = element;
                      }}
                      type="button"
                      aria-label={`Show ${card.location} ${card.country}`}
                      aria-current={
                        isSelected ? "true" : undefined
                      }
                      onClick={(event) =>
                        handleThumbnailClick(
                          card.logicalIndex,
                          event.currentTarget
                        )
                      }
                      className={`
                        group relative h-52 w-32 shrink-0
                        overflow-hidden text-left
                        will-change-[opacity,transform]
                        sm:w-40 lg:h-72 lg:w-72
                        ${
                          isSelected
                            ? "z-20 scale-[1.06] opacity-100 ring-2 ring-white/35"
                            : "z-10 scale-95 opacity-65 hover:scale-100 hover:opacity-100"
                        }
                      `}
                      style={{
                        transformOrigin: "center",

                        transition: `
                          opacity 400ms ease,
                          transform ${TRANSITION_DURATION}ms ${TRANSITION_EASING},
                          box-shadow ${TRANSITION_DURATION}ms ${TRANSITION_EASING}
                        `,
                      }}
                    >
                      <img
                        src={card.img}
                        alt=""
                        className={`
                          h-full w-full object-cover
                          transition-transform
                          ${
                            isSelected
                              ? "scale-100"
                              : "scale-105 group-hover:scale-100"
                          }
                        `}
                        style={{
                          transitionDuration: `${TRANSITION_DURATION}ms`,
                          transitionTimingFunction:
                            TRANSITION_EASING,
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      <div className="absolute bottom-2 left-2 right-2 text-[10px] font-semibold leading-tight text-white xs:text-xs sm:bottom-3 sm:left-3 sm:text-lg">
                        <div>{card.location}</div>
                        <div>{card.country}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="relative z-10 mt-3 flex shrink-0 flex-wrap items-center justify-between gap-y-1 text-[9px] font-medium tracking-[0.1em] text-white/70 xs:text-[10px] sm:mt-4 sm:text-xs sm:tracking-[0.15em]">
          <div className="flex gap-3 xs:gap-5">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              FACEBOOK
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              TWITTER
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              INSTAGRAM
            </a>
          </div>

          <div className="text-base font-semibold text-white sm:text-xl">
            {String(active + 1).padStart(2, "0")}

            <span className="text-white/50">
              /{String(CARD_COUNT).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}