import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'

const Container = styled(motion.div)`
    width: 25.8%;
    position: relative;
`

const Overlay = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    border-radius: 2rem;
    position: absolute;
    top: 0;
`

const Text = styled.span`
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
`

const FeatureImg = styled.img`
    width: 100%;
    border-radius: 2rem;
`

// VARIANTS
const OverlayVariant = {
    rest: {
        height: 0,
        opacity: 0,
        transition: { 
            duration: 0.5,
        }
    },

    hover: {
        opacity: 1,
        height: 375,
        transition: { 
            duration: 0.5,
        }
    }
}

const FeatureImage = ({img, text}) => {
    return (
        <AnimatePresence>
            <Container
                initial= 'rest'
                animate= 'rest'
                whileHover= 'hover'
            >
                <Overlay variants= { OverlayVariant }>
                    <Text> {text} </Text>
                </Overlay>

                <FeatureImg src={img} />
            </Container>
        </AnimatePresence>
    );
}

export default FeatureImage;