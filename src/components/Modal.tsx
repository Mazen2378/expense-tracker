import { motion, Variant, Variants } from 'framer-motion';
import React from 'react';
import Calcul from './Calcul'

const overlayAnimations = {
    initial: {
        transition: {
            duration: .1
        }, opacity: 0
    },
    animate: { opacity: .7 },
    exit: {
        transition: {
            duration: .2,
        },
        opacity: 0
    }
}
const animationVariants:Variants = {
  
  hidden: {y:700},
  visible: {y:0}
}
interface Props {
    ev: number;
    setOpen: (b: boolean) => void
}
const Modal: React.FC<Props> = ({setOpen }) => {
    return (
        <>
            <motion.div
                variants={animationVariants}
              initial='hidden' animate='visible' exit='hidden'
              drag='y'
              transition={{
                type: 'spring',
                damping:15 
              }}
              dragConstraints={{
               top: 0,
                bottom: 0
              }}
              dragElastic={0.8}
                onDragEnd={(event, info) => {
                    if (info.offset.y > 200) {
                        setOpen(false)
                    }
                }}
                className='calc-modal'>
                <div className="drag-area">

                </div>
              <Calcul />
            </motion.div>
            <motion.div
                variants={overlayAnimations}
                initial="initial" animate="animate" exit="exit"
                className="overlay" onClick={() => { setOpen(false) }}>
            </motion.div>
        </>
    )
}

export default Modal
