import { motion } from 'framer-motion'

export function Scroller() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="z-10 flex flex-col items-center"
    >
      <div className='flex flex-row border-2 border-gray-400 pb-6 rounded-xl'>
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-4 flex justify-center"
        >
          <div className="w-1 h-full bg-gray-800 rounded-full">
            <motion.div
              animate={{
                y: [0, 6, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
              className="w-1 h-3 bg-gray-700 rounded-full absolute bottom-1"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      <motion.span
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-xs text-gray-600 mt-1"
      >
        Scroll down
      </motion.span>
    </motion.div>
  )
}