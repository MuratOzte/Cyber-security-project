import React from 'react';
import ActiveTabIndicator from '../common/ActiveTabIndicator';
import { useSelector, useDispatch } from 'react-redux';
import uiSlice from '../../store/slices/uiSlice';
import { RootState } from '../../store';

import { motion } from 'framer-motion';

interface NavButtonProps {
    position: 'Attack' | 'Contact' | 'Register';
}

const NavButton: React.FC<NavButtonProps> = ({ position }) => {
    const dispatch = useDispatch();
    const ui = useSelector((state: RootState) => state.ui);

    const scrollHandler = (location: string) => {
        dispatch(uiSlice.actions.setScrollPosition(location));
    };
    return (
        <div className="">
            <button
                onClick={scrollHandler.bind(null, position)}
                className="text-white mr-8 hover:scale-105 transition-all text-center"
            >
                <p className='ml-[1%]' >{position}</p>
            </button>
            {ui.navPosition === position && (
                <motion.div layoutId="activeTabIndicator">
                    <ActiveTabIndicator />
                </motion.div>
            )}
        </div>
    );
};

export default NavButton;
