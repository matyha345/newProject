import './PlayButton.scss'
import { BsFillPlayFill } from "react-icons/bs";


const PlayButton = () => {
	return (
		<>
			<div className='box'>
				<button className='video-play-button' href='#'>
					<span>
						<BsFillPlayFill  />
					</span>
				</button>
			</div>
		</>
	)
}

export default PlayButton
