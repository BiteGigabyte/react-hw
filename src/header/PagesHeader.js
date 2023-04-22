import React, { useState } from 'react';

import './PagesHeader.css';
import { PagesEnum } from "./pages-enum";

const PagesHeader = ({ setChoice }) => {
    const [selectedPage, setSelectedPage] = useState(null);

    const handleButtonClick = (page) => {
        if (selectedPage !== page) {
            setSelectedPage(page);
            setChoice(page);
        } else {
            setSelectedPage(null);
            setChoice(null);
        }
    };

    return (
        <div className={'headerDiv'}>
            <div className={'Header'}>
                <button className={'headerButton'} onClick={() => handleButtonClick(PagesEnum.USERS)}>Users</button>
                <button className={'headerButton'} onClick={() => handleButtonClick(PagesEnum.COMMENTS)}>Comments</button>
                <button className={'headerButton'} onClick={() => handleButtonClick(PagesEnum.CARS)}>Cars</button>
            </div>
        </div>
    );
};

export default PagesHeader;





// import React from 'react';
//
// import './PagesHeader.css';
// import {PagesEnum} from "./pages-enum";
//
//
//
// const PagesHeader = ({setChoice}) => {
//
//     return (
//         <div className={'headerDiv'}>
//             <div className={'Header'}>
//                 <button className={'headerButton'} onClick={() => setChoice(PagesEnum.USERS)}>Users</button>
//                 <button className={'headerButton'} onClick={() => setChoice(PagesEnum.COMMENTS)}>Comments</button>
//                 <button className={'headerButton'} onClick={() => setChoice(PagesEnum.CARS)}>Cars</button>
//             </div>
//         </div>
//     );
// };
//
// export default PagesHeader;