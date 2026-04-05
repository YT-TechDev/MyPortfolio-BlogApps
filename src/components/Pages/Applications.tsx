import Galaxy from '../utils/Glaxy'
import SendPageTextFade from '../utils/SendPageTextFade'

export default function ApplicationPages() {
  return (
    <>
     <SendPageTextFade>
      <div className='absolute w-full h-full bg-black'>
        <div style={{ width: '100%', height: '100%', position:'relative' }}>
        <Galaxy 
          mouseRepulsion={false}
          mouseInteraction={false}
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}>
            <div className=' absolute top-5 left-5'>
              <h1 className='text-white text-5xl md:text-6xl lg:text-7xl'>Applications</h1>
            </div>
          </Galaxy>

        </div>
      </div>
     </SendPageTextFade>
    </>
  )
}
