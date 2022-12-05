import { AnimatePresence, motion, Variant, Variants } from 'framer-motion';
import React, {useState} from 'react';
import Calcul from './Calcul'
import { IoMdMore } from 'react-icons/io'

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
const optionsVariants = {
        hidden: { width: 0,height: 0 },
        visible: { height: 150,width: 200 }
}
interface Props {
    ev: number;
    setOpen: (b: boolean) => void;
    setAmount: (t: any) => void
}
const Modal: React.FC<Props> = ({setOpen,setAmount }) => {
  const [openOptions, setOpenOptions] = useState<boolean>(false)
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
                <div className="drag-area"></div>
                <div onClick={()=>{setOpenOptions(true)}} className="dots">
                  <IoMdMore />

                </div>
                <AnimatePresence>
              {openOptions && (
                <>
                        <motion.div
                            className="overlay options" onClick={() => { setOpenOptions(false) }}>
                        </motion.div>
                     <motion.div
                            variants={optionsVariants}
                            initial='hidden' animate='visible' exit='hidden'
                       transition={{duration: .3}}
                       className="options-modal"></motion.div>
                </>
              )}
                </AnimatePresence>
              <Calcul setAmount={setAmount}/>
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
