import './App.css'
import { animate, easeIn, easeInOut, motion } from 'framer-motion';

function App() {

  return (
      <div className='flex'>
      <motion.div
      initial={{x:0}}
      animate={{x:"-50vw"}}
      transition={{duration: 2, delay:3.5}}
      exit={{x:"-50vw"}}
      className='h-screen w-1/2 bg-black relative'
      >
        <motion.div 
        initial={{width: 0, opacity: 1}}
        animate={{width: 220, opacity: 0}}
        transition={{
          width: { duration: 1.5, ease: easeInOut, delay: 1 },
          opacity: { duration: 1, delay: 2.9 }
      }}
        className='absolute top-1/2 right-0 text-white w-0 h-[1px] bg-white'>
          </motion.div>
      </motion.div>
      <motion.div
      initial={{x:0}}
      animate={{x:"50vw"}}
      transition={{duration: 2, delay:3.5}}
      className='h-screen w-1/2 bg-black'
      >
        <motion.div 
        initial={{width: 0, opacity: 1}}
        animate={{width: 220, opacity: 0}}
        transition={{
          width: { duration: 1.5, ease: easeInOut, delay: 1 },
          opacity: { duration: 1, delay: 2.9 }
      }}
        className='absolute top-1/2 left-0 text-white w-0 h-[1px] bg-white'>
            </motion.div>
      </motion.div>
      </div>
  )
}

export default App
