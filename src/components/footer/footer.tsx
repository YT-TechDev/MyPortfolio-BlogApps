import githubIcon from '../../assets/github.svg'
import ChatAppIcon from '../../assets/message-square.svg'
import Instagram from '../../assets/instagram.svg'
import SendPageTextFade from '../utils/SendPageTextFade';

export default function footer() {


  return (
    <>
    <SendPageTextFade>
      <div className="flex flex-wrap mx-auto container justify-center items-center bg-black z-10">
          <div className="bg-black">
            <h1 className='text-white text-xl bg-black text-center'>social media</h1>
            <div className='flex flex-wrap m-3 p-1'> 
              <a href="https://github.com/mashu-png" target='_blank' className='hover:animate-ping  active:animate-ping '>
                <img src={githubIcon} className='w-10 m-1.5 ' id='Github' alt="Git" />
              </a>
              <a href="https://smp14.simplex.im/a#zOT9P-QfK3jfGJfCAY5RkQE1pVnjYz2npgl5o6qa0a0" target='_blank' className='hover:animate-ping  active:animate-ping '>
                <img src={ChatAppIcon} className='w-10 m-1.5 ' id='ChatApp' alt="chatApp" />
              </a>
              <a href="https://www.instagram.com/y_s_x.r3act?igsh=MXZ3ZXBvbHA0NG03ag%3D%3D&utm_source=qr" target='_blank' className='hover:animate-ping  active:animate-ping '>
                <img src={Instagram} className='w-10 m-1.5 ' id='Instagram' alt="Instagram" />
              </a>
            </div>
          </div>
      </div>
    </SendPageTextFade>
      
    </>
  )
}
