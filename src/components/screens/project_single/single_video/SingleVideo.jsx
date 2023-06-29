import styles from './SingleVideo.module.scss'
import videoTwo from './videoOne.mp4'
import imageOne from './imageOne.jpg'

import VideoGlobal from '../../../layout/video_global/VideoGlobal'
import Related from '../related/Related'

const SingleVideo = () => {
	return (
		<>
			<section className={styles.wrapper}>
				<div className='container'>
					<div className={styles.content}>
						<h1 className={styles.title}>Our Project Transportation</h1>
						<p className={styles.text}>
							Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
							Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
							feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat
							id nunc. Morbi quis justo velit. Duis semper lacus scelerisque,
							aliquam leo quis, porttitor leo. Fusce lectus ex, pretium
							efficitur suscipit sed, faucibus vel elit Integer adipiscing erat
							eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor
							malesuada sagittis accumsan ipsum. Pellentesque ultrices ultrices
							sapien, nec tincidunt nunc posuere.
						</p>

						<VideoGlobal
							videoMain={videoTwo}
							imgMain={imageOne}
							width={1180}
							height={681}
						/>

						<Related />
					</div>
				</div>
			</section>
		</>
	)
}
export default SingleVideo
