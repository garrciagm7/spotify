import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2'>
            <div className='w-1 h-1 bg-white rounded-full'></div>
            <div className='w-1 h-1 bg-white rounded-full'></div>
            <div className='w-1 h-1 bg-white rounded-full'></div>
          </div>
          
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold hover:text-white'>
              <HomeIcon></HomeIcon>
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold hover:text-white'>
              <Search></Search>
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold hover:text-white'>
              <Library></Library>
              Your Library
            </a>
          </nav>

          <nav className='mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-4'>
            <a href="" className='text-sm text-white hover:text-zinc-400'>Liked Songs</a>
            <a href="" className='text-sm text-white hover:text-zinc-400'>Rockstar</a>
            <a href="" className='text-sm text-white hover:text-zinc-400'>GL</a>
            <a href="" className='text-sm text-white hover:text-zinc-400'>LoFi Fruits</a>
            <a href="" className='text-sm text-white hover:text-zinc-400'>(G)old</a>
            <a href="" className='text-sm text-white hover:text-zinc-400'>Hot Hits Brazil</a>
          </nav>

        </aside>
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-3'>
            <button className='p-1 bg-black/40 rounded-full'>
              <ChevronLeft></ChevronLeft>
            </button>
            <button className='p-1 bg-black/40 rounded-full'>
              <ChevronRight></ChevronRight>
            </button>
          </div>
             <h1 className='font-semibold text-3xl text-zinc-50 mt-8'>Good Afternoon</h1>

             <div className='grid grid-cols-3 gap-4 mt-4'>
              <a href='#' className='flex items-center gap-4 group bg-white/10  overflow-hidden rounded hover:bg-white/20 transition-colors'><Image src="/silverhand.png" alt='capa do album' width={104} height={104}/>
              
                <strong>Never Fade Away</strong>
                <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              
              </a>
              <a href='#' className='flex items-center gap-4 group bg-white/10  overflow-hidden rounded hover:bg-white/20 transition-colors'><Image src="/silverhand.png" alt='capa do album' width={104} height={104}/>
              
                <strong>Never Fade Away</strong>
                <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a href='#' className='flex items-center gap-4 group bg-white/10  overflow-hidden rounded hover:bg-white/20 transition-colors'><Image src="/silverhand.png" alt='capa do album' width={104} height={104}/>
              
                <strong>Never Fade Away</strong>
                <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>

              </a>
              <a href='#' className='flex items-center gap-4 group bg-white/10  overflow-hidden rounded hover:bg-white/20 transition-colors'><Image src="/silverhand.png" alt='capa do album' width={104} height={104}/>
              
                <strong>Never Fade Away</strong>
                <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>

              </a>
              <a href='#' className='flex items-center gap-4 group bg-white/10  overflow-hidden rounded hover:bg-white/20 transition-colors'><Image src="/silverhand.png" alt='capa do album' width={104} height={104}/>
              
                <strong>Never Fade Away</strong>
                <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>

              </a>
              <a href='#' className='flex items-center gap-4 group bg-white/10  overflow-hidden rounded hover:bg-white/20 transition-colors'><Image src="/silverhand.png" alt='capa do album' width={104} height={104}/>
                
                  <strong>Never Fade Away</strong>
                  <button className='w-12 h-12 flex items-center justify-center p-2 rounded-full bg-green-600 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>

              </a>
             </div>

             <h2 className='font-semibold text-2xl text-zinc-50 mt-8'>Made for Gabriel Garcia</h2>

             <div className='grid grid-cols-8 gap-4 mt-4'>
              <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors'>
                <Image className='w-full' src="/silverhand.png" alt='capa do album' width={104} height={104}/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Johnny Silver Hand and more</span>
              </a>
              <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors'>
                <Image className='w-full' src="/silverhand.png" alt='capa do album' width={104} height={104}/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Johnny Silver Hand and more</span>
              </a>
              <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors'>
                <Image className='w-full' src="/silverhand.png" alt='capa do album' width={104} height={104}/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Johnny Silver Hand and more</span>
              </a>
              <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors'>
                <Image className='w-full' src="/silverhand.png" alt='capa do album' width={104} height={104}/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Johnny Silver Hand and more</span>
              </a>
              <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors'>
                <Image className='w-full' src="/silverhand.png" alt='capa do album' width={104} height={104}/>
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400'>Johnny Silver Hand and more</span>
              </a>
             </div>

        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 px-6 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image className='rounded-lg p-1' src="/silverhand.png" alt='capa do album' width={60} height={60}/>
          <div className='flex flex-col '>
            <strong className='font-normal'>Refused</strong>
            <span className='text-xs text-zinc-400'>Never fade away</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2 mt-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-400' />
            <SkipBack size={20} className='text-zinc-400'/>
            <button className='w-10 h-10 flex items-center justify-center p-2 rounded-full bg-white text-black'>
              <Play />
            </button>
            <SkipForward size={20} className='text-zinc-400'/>
            <Repeat size={20} className='text-zinc-400' />
          </div>
          <div className='flex items-center gap-2'>
              <span className='text-xs text-zinc-400'>0:31</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
              </div>
              <span className='text-xs text-zinc-400'>2:14</span>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center gap-2'>
            <Volume size={20}/>
            <div className='h-1 rounded-full w-16 bg-zinc-600'>
                <div className='bg-zinc-200 w-8 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
    </div>
  )
}
