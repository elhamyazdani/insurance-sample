import { useEffect, useState } from 'react'

const mediaQueries = {
  phone: '(max-width: 425px)' /*Mobile.*/,
  tablet: '(min-width : 426px) and (max-width : 767px)' /*IPads, Tablets.*/,
  laptop:
    '(min-width : 768px) and (max-width : 1023px)' /*Small screens, laptops.*/,
  desktop:
    '(min-width : 1024px) and (max-width : 1439px)' /*Desktops, large screens. '(min-width : 992px) and (max-width : 1199px)', */,
  bigDesktop: '(min-width : 1440px)' /*Extra large screens, TV.*/
}

function useMediaQuery (query) {
  const queryToMatch = mediaQueries[query] || query
  const [matches, setMatches] = useState(
    window.matchMedia(queryToMatch).matches
  )
  useEffect(() => {
    if (!(typeof window !== 'object' || !window.matchMedia)) {
      if (window.matchMedia(queryToMatch).matches) {
        setMatches(window.matchMedia(queryToMatch).matches)
      }
    }
  }, [queryToMatch])

  useEffect(() => {
    if (!(typeof window !== 'object' || !window.matchMedia)) {
      const media = window.matchMedia(queryToMatch)
      if (media.matches !== matches) setMatches(media.matches)
      const listener = () => setMatches(media.matches)
      media.addEventListener
        ? media.addEventListener('change', listener)
        : media.addListener(listener)
      return () =>
        media.removeEventListener
          ? media.removeEventListener('change', listener)
          : media.removeListener(listener)
    }
  }, [matches, queryToMatch])

  return matches
}

function useResponsive () {
  const isMobile = useMediaQuery('phone')
  const isTablet = useMediaQuery('tablet')
  const isLaptop = useMediaQuery('laptop')
  const isDesktop = useMediaQuery('desktop')
  const isBigDesktop = useMediaQuery('bigDesktop')

  return { isMobile, isTablet, isLaptop, isDesktop, isBigDesktop }
}

export default useResponsive
