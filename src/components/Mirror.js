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

  width: auto;
  height: auto;
 
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) scaleX(-1);
`

const Mirror = () => {
  const videoRef = useRef()
  const [error, setError] = useState(false)
  const [permissionGranted, setPermissionGranted] = useState(false)
  const supportsMedia = 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices
  const askForCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({video: {
        facingMode: { exact: 'user' }
      }})
      videoRef.current.srcObject = stream
      videoRef.current.play()
      setPermissionGranted(true)
      if(error){
        setError(false)
      }
    }
    catch(e) {
      setError(true)
    }
  }

  return (
      <MirrorContainer>
        {!supportsMedia && <span>Your device doesn't support camera.</span>}
        {!permissionGranted && <Button onClick={askForCameraPermission}>Start Mirror</Button>}
        {error && <span>Something went wrong. <br/> Please allow permissions and make sure front camera is working.</span>}
        <VideoRef ref={videoRef} show={permissionGranted} />
      </MirrorContainer>
  )
}

export default Mirror
