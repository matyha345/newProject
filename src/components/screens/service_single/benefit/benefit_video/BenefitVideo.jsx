import styles from './BenefitVideo.module.scss'

import imgVideo from './Photo.jpg'

import pathVideo from './videoOne.mp4'

import VideoGlobal from '../../../../layout/video_global/VideoGlobal'

const BenefitVideo = () => {

	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.content}>
					<VideoGlobal
						videoMain={pathVideo}
						imgMain={imgVideo}
						width={618}
						height={361}
					/>

					<div className={styles.names}>
						<h1 className={styles.title}>How It Works</h1>

						<div className={styles.texts}>
							Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
							sit, doloremque laudantium.
						</div>

						<div className={styles.text}>
							Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
							quae ab illo inventore veritatis.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default BenefitVideo
