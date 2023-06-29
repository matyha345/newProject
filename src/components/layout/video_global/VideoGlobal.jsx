import { useRef, useState } from 'react'
import PlayButton from '../../ui/play_button/PlayButton'
import styles from './VideoGlobal.module.scss'

const VideoGlobal = ({ videoMain, imgMain, width, height }) => {
	const [isPlaying, setIsPlaying] = useState(false)

	const videoRef = useRef(null)

	const handlerPlay = () => {
		setIsPlaying(true)
		videoRef.current.play()
	}

	return (
		<div className={styles.videos}>
			<video
				className={styles.video}
				src={videoMain}
				poster={imgMain}
				width={width}
				height={height}
				ref={videoRef}
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
			/>
			{!isPlaying && (
				<div className={styles.playButton} onClick={handlerPlay}>
					<PlayButton />
				</div>
			)}
		</div>
	)
}

export default VideoGlobal
