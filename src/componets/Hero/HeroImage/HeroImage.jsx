
import styles from './HeroImage.module.css'
const HeroImage = () => {
    return (
        <img
        src="/images/hero-desktop.png"
        // srcset="/images/hero-mobile.png 900w,
        //         /images/hero-desktop.png 901w"
        // sizes="(max-width: 900px) 100vw,
        //        901px"
        alt="Cozy living room with a fireplace"
        className={styles.heroImage}
      />
    )
}

export default HeroImage