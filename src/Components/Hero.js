import muphoto from '../asserts/muphoto.jpg'
import { AiOutlineTwitter ,AiOutlineLinkedin,AiOutlineWhatsApp} from "react-icons/ai";

export default function Hero() {

    const config ={
        subtitle:'Im a Full-Stack developer',
        Social: {
            linkedin:'https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit',
            twitter:'',
            whatsapp:'https://wa.me/+918870244134'
        }

    }

    return(
        <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center items-center' id='Hero'>
            <div className='md:w-1/2 flex-col'>
            <h1 className='  text-4xl font-hero-font'>Hi, <br/> Im Nitheesh kumar A
            <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
            <a href={config.Social.linkedin} className='pr-5  hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href={config.Social.whatsapp} className='pr-5 hover:text-white'><AiOutlineWhatsApp size={40}/></a>
                <a href={config.Social.twitter} className=' hover:text-white'><AiOutlineTwitter size={40}/></a>
              
            </div>
            </div>
           
            <img className=' md:w-1/4 shadow-2xl ' src={muphoto} />
        </section>
    )
}