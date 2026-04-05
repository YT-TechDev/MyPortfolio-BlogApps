import ProfileData from './PagesComponents/ProfileData';
import ProfileImage from '../../assets/ProfileIcon.gif';
import SendPageTextFade from '../utils/SendPageTextFade';
import SkillPages from './PagesComponents/SkillPages';

export default function TopPages() {


  return (
    <>
      
        {/* ホームコンテンツ */}
        <SendPageTextFade>
          <div className='min-h-screen bg-linear-to-r from-violet-900 via-purple-600 to-violet-400 bg-size-[400%,400%] animate-gradient items-center justify-center text-white'>
          <ProfileData ImageURL={ProfileImage} />
          <div className='block md:hidden lg:hidden'>
            <h1 className="text-3xl bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text animate-bounce items-center ml-0.5">
              Hello,Phone!
            </h1>
            <div className="flex flex-wrap p-1 mt-0 w-auto h-lg border-2 border-white bg-black/30 mx-auto rounded-xl">
                  <p className="text-white text-lg m-1.5">
                      "Hello! Welcome to my site!
                      Here, I plan to showcase my skills and the applications I've created.
                      Well, honestly, the main reason is I just wanted to get back into frontend development after so long...
                      Even so, the JS development environment has come a long way—it's the complete opposite of the ES4-5 era!
                      I also run a blog, so please check it out!"
                  </p>
            </div>
          </div>
          <SkillPages/>
          </div>
        </SendPageTextFade>
    </>
  )
}