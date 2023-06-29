
import styles from './Related.module.scss'
import imgOne from './image/Photo.jpg'
import imgTwo from './image/Photo1.1.jpg'
import imgFree from './image/Photo1.2.jpg'

const Related = () => {
    return(
        <section className={styles.wrapper}>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.title}>Related Project</h1>


                    <div className={styles.images}>
                        <div className={styles.image}>
                            <img src={imgOne} alt="imgRelated" />
                        </div>
                        <div className={styles.image}>
                            <img src={imgTwo} alt="imgRelated" />
                        </div>
                        <div className={styles.image}>
                            <img src={imgFree} alt="imgRelated" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Related