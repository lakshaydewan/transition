import './App.css'
import { animate, easeIn, easeInOut, motion } from 'framer-motion';

function App() {

  return (
      <div className='relative'>
      <motion.div
      initial={{y:0}}
      animate={{y:"-100vh"}}
      transition={{duration: 1.7, delay:3.5}}
      className='absolute top-0 z-50 h-screen w-screen bg-black flex items-center justify-center'
      >
        <motion.div 
        initial={{width: 0, opacity: 1}}
        animate={{width: 330, opacity: 0}}
        transition={{
          width: { duration: 1.5, ease: easeInOut, delay: 1 },
          opacity: { duration: 1.3, delay: 3 }
      }}
        className='text-white w-0 h-[1px] bg-white'>
          </motion.div>
        </motion.div>
        <motion.div 
        initial={{y:0}}
        animate={{y:"-100vh"}}
        transition={{duration: 1.6, delay:3.9}}
        className='z-30 w-screen h-screen absolute top-0 bg-[#111111]'>
        </motion.div>
        <motion.div 
        initial={{y:0}}
        animate={{y:"-100vh"}}
        transition={{duration: 1.3, delay:4.4}}
        className='z-20 w-screen h-screen absolute top-0 bg-[#1e1e1e]'>
        </motion.div>
        <motion.div 
        initial={{y:0}}
        animate={{y:"-100vh"}}
        transition={{duration: 0.8, delay:4.8}}
        className='z-10 w-screen h-screen absolute top-0 bg-[#3c3c3c]'>
        </motion.div>
      </div>
  )
}

export default App
