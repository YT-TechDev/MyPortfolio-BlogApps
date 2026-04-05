export default function ProfilesData(props:any) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center mx-auto container pt-3 mb-3 ">
        <div className="block mb-3">
          <img src={props.ImageURL} alt="MyIcons" className="lg:ml-6 w-64 h-64 items-start justify-center rounded-full object-none object-[60%_40%]" />
          <p className="text-center mt-3 text-2xl md:text-3xl lg:text-4xl text-white">name:Yuto.DEV</p>
          <p className="text-center mt-3 text-2xl md:text-3xl lg:text-4xl text-white">birthday:2000/04/02</p>
        </div>
        <div className="hidden mt-3 md:block md:mt-6 lg:inline md:ml-6 lg:ml-6 items-center justify-center">
            <h1 className="text-3xl md:text-4xl md:-ml-6 lg:text-5xl lg:mb-4 animate-bounce text-left bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Hello,World
            </h1>
            <div className="w-lg h-lg md:ml-0 lg:ml-0 p-5 bg-black/30 border-2 border-white rounded-xl">
              <div className="flex flex-row flex-wrap">
                <div className="mt-0 backdrop-opacity-75">
                  <p className="text-white">
                      "Hello! Welcome to my site!
                      Here, I plan to showcase my skills and the applications I've created.
                      Well, honestly, the main reason is I just wanted to get back into frontend development after so long...
                      Even so, the JS development environment has come a long way—it's the complete opposite of the ES4-5 era!
                      I also run a blog, so please check it out!"
                    </p>
                </div>
                <div className="ml-6 mt-3">
                  <p className="text-white">
                      (※The blog contains personal opinions)
                    </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
