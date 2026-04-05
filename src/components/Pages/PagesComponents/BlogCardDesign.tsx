import { motion } from "motion/react"
import type { BlogData } from '../../utils/interface'
import { Link } from "react-router-dom";
import type React from "react";


type Props = {
    BlogData: BlogData[];
    REF: any;
}

export default function BlogViewDesign(props:Props) {
    const { BlogData,REF  } = props;

    const BlogID:string = 'ID-'
    /* useStateでカードの状態変更、それに伴いデザインの調整（拡大縮小） */     



    function SplitTextsFunc(textData:string):React.ReactNode {
        const len = 25;
        if (textData.length > len) {
            return textData.substring(0, len) + "…";
        }
    }
    
    
    

    return (
        <>
        {BlogData.map(Data => {
             return <motion.div 
                    key={Data.id} 
                    ref={REF}
                    initial={{scale:0}}
                    whileInView={{scale:1,transition:{duration:0.5}}}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, }}
                    className="bg-stone-300 inline lg:flex justify-center lg:justify-start items-center mt-6 mb-6 mr-3 ml-3 md:mr-4.5 md:ml-4.5 lg:mr-6 lg:ml-6 border-2 border-black rounded-xl w-[90%] md:w-[40%] lg:w-[40%] h-[100vm] container "
                    id={BlogID + String(Data.id)}>
                        {/* ここからBlogCardDesign */}
                        {/* 
                            testとしてuseStateの実装は完了、残りは上部divでデザインを再設計する。このコメントはデプロイ前に削除する
                            ただすべてに状態変化がかかってしまっているので、そこも考え直す必要がある。
                        */}
                        <div id={BlogID + String(Data.id)}></div>
                        <img src={Data.ThumbnailImageURL} alt="BlogIcons" className="flex bg-black w-full lg:w-64 h-32 md:h-max lg:h-max size-16 rounded-t-xl lg:rounded-none p-2.5 lg:p-10 md:bg-none lg:bg-none object-contain" />
                        <div className='inline w-full md:w-48 lg:w-sm h-32 md:h-max lg:h-max'>
                            <div className='text-left p-1.5'>
                                <b className="text-balance text-md md:text-lg lg:text-xl">{ String(Data.Title) }</b>
                            </div>
                            <div className="text-gray-600 mt-1.5 ml-1.5">
                                <p className='text-balance text-sm md:text-md lg:text-lg txt-limit'>{ SplitTextsFunc( String(Data.SubTitle))  }</p> 
                            </div>
                            
                            <div className="mt-1.5 md:mt-3 lg:mt-4.5">
                                <p className="text-pink-400 underline text-center">{ String(Data.Dates) }</p>
                                <Link to={`/Blog-pages/${Data.id}/#TopPotision`} state={{ state: Data }}>
                                    <div className="block">
                                        <p className="text-sky-600 mr-1.5 text-right">View more→</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
        })}
    
            
    </>
    )
}
