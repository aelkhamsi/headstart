import CtaButton from './cta-button'
import FaqButton from './faq-button'
import RegulationButton from './regulation-button'
import '../pattern.css'

const CtaSection = ({
  className
}:{
  className?: string
}) => {
  return (
    <div className={`pattern text-center w-full md:w-1/2 p-10 space-y-8 text-white custom-shadow ${className}`}>
      <div className='space-y-2'>
        <h2 className='font-bold font-neco text-3xl'>Rejoignez l&apos;aventure</h2>
        <p className="text-base">Explorer, Élaborer, Collaborer</p>
      </div>
      
      <div className='flex justify-center space-x-4'>
        <CtaButton />
        <FaqButton />
        <RegulationButton />
      </div>
    </div>
  )
}

export default CtaSection
