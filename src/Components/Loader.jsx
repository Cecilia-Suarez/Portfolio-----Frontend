import React from 'react'
import { useCharStates } from "../Context/Context";
import "../Styles/Components/Loader.css"

const Loader = () => {
    const { t } = useCharStates();

    return (
        <div className='loadingContainer'>
            <div className='loader'></div>
            <h5>{t('loader')}</h5>
        </div>
    )
}

export default Loader