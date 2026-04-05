import BlogCard from "./PagesComponents/BlogCardDesign";
import SendPageTextFade from '../utils/SendPageTextFade';
import { useState, useEffect, useRef } from "react";
import { getAllData } from '../utils/SupabaseFunctions'
import BlogTitleImage from '../../assets/tailwindcss.svg'

export default function BlogPages() {
    const [ _BlogData, SetBlogData] = useState<any>([])
    const ClickHandlerCard = useRef<HTMLInputElement>(null);

    useEffect(function () {
      async function getDatas () {
        const BlogData = await getAllData();
        SetBlogData(BlogData); 
      }
      getDatas()
    },[])
  return (
    <>
      {/* ブログコンテンツ */}
      <SendPageTextFade>
        <div className='min-h-screen bg-linear-to-r from-emerald-700 via-green-500 to-lime-700 bg-size-[400%,400%] animate-gradient sticky top-36 z-8'>
          <div className="flex items-center justify-center p-3">
            <h1 className="text-2xl md:text-4xl">BlogPages</h1>
          </div>
          <div className="block p-5">
            <div className="flex items-center justify-center m-3">
              <img src={BlogTitleImage} alt="TopImageURL" className="size-64" />
            </div>
          <div className="flex flex-wrap justify-center items-center">
            <p className="flex text-center">
              Hello! Welcome to my blog.
              On this blog, I share things I have recently learned, personal projects, and my hobbies, mainly related to technology and IT.
              I am currently studying English, so all articles on this blog are written in English.
              If English is not your first language, please feel free to use your browser’s translation feature or a translation extension.
              I would love to connect with other IT engineers and people interested in technology.
              My contact information is available in the social media section at the bottom of this page.
              Please feel free to reach out.
            </p>
            <p className="flex mt-10 text-center">Let’s connect and talk!</p>
          </div>
          </div>
          
          
          
          <div className="flex flex-wrap justify-center items-center bg-black/30 p-12"  >
            <BlogCard BlogData={_BlogData} REF={ClickHandlerCard}/>
          </div>
        </div>
      </SendPageTextFade>

    </>
  )
}
