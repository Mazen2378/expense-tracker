import React from 'react';
import {motion} from 'framer-motion'

import Form from '../components/Form';

interface AddPropTypes {
}
const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}
const Add:React.FC<AddPropTypes> = () => {

    return (
        <>
          <motion.div
            className="add"
                transition={{
                  duration: 1,
                }}
                variants={animations}
                initial="initial"
                animate="animate"
          >
            <Form />
          </motion.div>
        </>
    )
};

export default Add;
