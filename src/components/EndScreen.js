import React from 'react'

const style = {
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}

export default function () {
  return (
    <div style={style}>
      <p>You finished all the passwords! Thank you for your participation!</p>
      <p>Please click <a href='https://hotsoft.carleton.ca/comp3008limesurvey/index.php/316197?lang=en'>here</a> to do our questionnaire.</p>
    </div>
  )
}
