import React from 'react';
import "./swipeButtons.css";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import {FaStar} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
            <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__left">
            <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__star">
            <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__right">
            <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
            <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}
export default SwipeButtons;