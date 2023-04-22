import React from 'react';





import {PagesEnum} from "./pages-enum";
const PagesHeader = ({setChoice}) => {

    return (
        <div>
            <div className={'Header'}>
                <button onClick={() => setChoice(PagesEnum.USERS)}>Users</button>
                <button onClick={() => setChoice(PagesEnum.COMMENTS)}>Comments</button>
                <button onClick={() => setChoice(PagesEnum.CARS)}>Cars</button>
            </div>
        </div>
    );
};

export default PagesHeader;