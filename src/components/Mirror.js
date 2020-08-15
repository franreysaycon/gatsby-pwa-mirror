import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

const MirrorContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const VideoRef = styled.video`
  display: ${({ show }) => show ? 'block': 'none'};
  min-width: 100%;
  min-height: 100%;

  width: 100%;
  height: 100%;
 
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) scaleX(-1);
`

const isBrowser = typeof window !== 'undefined'

const Mirror = () => {
  const videoRef = useRef()
  const [permissionGranted, setPermissionGranted] = useState(false)
  const askForCameraPermission = async () => {
    if(isBrowser){
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: {
          facingMode: { exact: 'user' }
        }})
        videoRef.current.srcObject = stream
        videoRef.current.play()
        setPermissionGranted(true)
      }
      catch(e){
        alert('Something went wrong. Please check permissions and make sure you have a working front camera.')
      }
    }
  }

  return (
    <MirrorContainer>
      {!permissionGranted && <Button onClick={askForCameraPermission}>Click here to enable mirror</Button>}
      <VideoRef ref={videoRef} show={permissionGranted} />
    </MirrorContainer>
  )
}

export default Mirror
