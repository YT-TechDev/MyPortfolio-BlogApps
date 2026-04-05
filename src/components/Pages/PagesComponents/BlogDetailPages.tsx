import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom"

export default function BlogDetailPages() {
  const { state }  = useLocation();
  const PageStateData = state.state;
  console.log(PageStateData)
    //console.log(DetailData)
  return (
    <>
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1, transition:{ duration:1 }}} id="TopPotision">
      <div className="bg-linear-to-r from-emerald-700 via-green-500 to-lime-700 bg-size-[400%,400%] h-15 md:h-15 lg:h-30 animate-gradient sticky top-18 z-9">
        <div className="flex justify-center items-center w-full h-full">
          <Link to='/Blog-pages'>
            <h1 className="text-lg md:text-3xl lg:text-4xl">BlogPageへ</h1>
          </Link>
        </div>
      </div>
      <div className="inline-flex w-full">
        <div className="hidden md:hidden lg:inline-flex lg:w-[25%] flex-wrap flex-col h-full items-center justify-center bg-pink-400/30 m-3 sticky top-58 z-8 border-2 border-black rounded-xl">
          <Link to='/'>
            <motion.div initial={{scale:0}} whileInView={{scale:1,transition:{duration:0.2,delay:0.1}}} className="flex border-b-2 border-black w-full items-center justify-center m-3 ">
              <h2>Homeへ</h2>
            </motion.div>
          </Link>
          <Link to='/Blog-pages'>
            <motion.div initial={{scale:0}} whileInView={{scale:1,transition:{duration:0.2,delay:0.2}}} className="flex border-b-2 w-full justify-center items-center">
              <div className="m-3">
                <h2>blogPage-Topへ</h2>
              </div>
            </motion.div>
          </Link>
          <Link to='/Application-pages'>
            <motion.div initial={{scale:0}} whileInView={{scale:1,transition:{duration:0.2,delay:0.3}}}className="flex border-b-2 w-full justify-center items-center">
              <div className="m-3">
                <h2>Applicationsへ</h2>
              </div>
            </motion.div>
          </Link>
          <Link to='/ErrorPage/404/'>
            <motion.div initial={{scale:0}} whileInView={{scale:1,transition:{duration:0.2,delay:0.4}}}className="flex border-b-2 w-full justify-center items-center">
              <div className="m-3">
                <h2>Blog1~10へ</h2>
              </div>
            </motion.div>
          </Link>
          <Link to='/ErrorPage/404/'>
            <motion.div initial={{scale:0}} whileInView={{scale:1,transition:{duration:0.2,delay:0.5}}}className="flex border-b-2 w-full justify-center items-center">
              <div className="m-3">
                <h2>Blog11~20へ</h2>
              </div>
            </motion.div>
          </Link>
          <Link to='/ErrorPage/404/'>
            <motion.div initial={{scale:0}} whileInView={{scale:1,transition:{duration:0.2,delay:0.6}}}className="flex border-b-2 w-full justify-center items-center">
              <div className="m-3">
                <h2>Blog21~30へ</h2>
              </div>
            </motion.div>
          </Link>
          <Link to='/ErrorPage/404/'>
            <motion.div initial={{scale:0}} whileInView={{scale:1,transition:{duration:0.2,delay:0.6}}} className="flex w-full justify-center items-center">
              <div className="m-3">
                <h2>Blog31~40へ</h2>
              </div>
            </motion.div>
          </Link>
        </div>

        <div className="inline-flex flex-col container mx-auto lg:w-full">
          <div className="flex mx-auto container justify-center items-center sticky top-30 lg:top-45 z-8 bg-black/15 rounded-xl">
            <h1 className="flex-wrap m-3">
              <b className="text-3xl md:text-4xl lg:text-5xl">{ PageStateData.Title }</b>
            </h1>
          </div>
          
          
          <div className="flex w-full h-full items-center justify-center bg-black/10">
            <div className="m-3 inline-flex flex-wrap container mx-auto items-center justify-center">
              <img
                src={ PageStateData.FirstImageURL }
                alt="BlogTopImage"
                className={ PageStateData.id === 1 ? 'size-64 m-10 animate-bounce' : `size-64 m-10`} />
              <img
                src={ PageStateData.SecondImageURL }
                alt="BlogTopImage"
                className={ PageStateData.id === 1 ? `size-64 m-10 animate-spin` : `size-64 m-10`} />
              <img
                src={ PageStateData.ThirdImageURL }
                alt="BlogTopImage"
                className={ PageStateData.id === 1 ? `size-64 m-10 animate-bounce` : `size-64 m-10`} />
            </div>
          </div>
          <pre className="text-2xl leading-relaxed whitespace-pre-line">{ PageStateData.DetailsFirstText }</pre>
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={PageStateData.FirstImageURL}
              alt="TopImage1"
              className="size-64 m-3" />
          </div>
          <pre className="text-2xl leading-relaxed whitespace-pre-line">{ PageStateData.DetailsSecondText }</pre>
          
          <div className="flex justify-center items-center w-full h-full">
            <img 
              src={ PageStateData.SecondImageURL }
              alt="TopImage1"
              className="size-64 m-3" />
          </div>
          <pre className="text-2xl leading-relaxed whitespace-pre-line">{PageStateData.DetailsThirdText}</pre>
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={ PageStateData.ThirdImageURL }
              alt="TopImage1"
              className="size-64 m-3" />
          </div>
          <pre className="text-2xl leading-relaxed whitespace-pre-line">{ PageStateData.LastMessageText }</pre>
        </div>
      </div>
    </motion.div>
    </>
  )
}
