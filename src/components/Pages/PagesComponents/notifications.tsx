export default function notifications() {
  return (
    <>
      <div className="flex flex-wrap items-start justify-center mx-auto container mt-6">
        <div className="block mt-3">
        <h1 className="text-3xl md:text-4xl md:ml-6 lg:text-5xl lg:mb-4 text-left text-stone-300">New Notice</h1>
        <div className="bg-amber-200 mt-3 ml-16 md:ml-32 lg:ml-64 mr-16 md:mr-32 lg:mr-64 mb-3  w-[50%] underline">
          <div className="block border-y-2">
            <span>1</span>
            <span>Text</span>
          </div>
          <div className="block border-y-2 mt-0.5">
            <span>2</span>
            <span>text</span>
          </div>
          <div className="block border-y-2 mt-0.5">
            <span>3</span>
            <span>Text</span>
          </div>
          <div className="block border-y-2 mt-0.5">
            <span>4</span>
            <span>text</span>
          </div>
          <div className="block border-y-2 mt-0.5">
            <span>5</span>
            <span>Text</span>
          </div>
          <div className="block border-y-2 mt-0.5">
            <span>6</span>
            <span>text</span>
          </div>
        </div>
        </div>
        
      </div>
    </>
  )
}
