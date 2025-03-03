import React from 'react'
import { useCharStates } from "../Context/Context";
import sent from "../assets/animationSent.webp"

const Send = ({name}) => {

  const { t } = useCharStates();

  return (
    <div>
        <img src={sent} alt="Sent mail" style={{width: '40%'}}/>
        <h4>{t('sentEmail')}</h4>
        <h5>{t('feedbackEmailSent')} {name}</h5>
    </div>
  )
}

export default Send
