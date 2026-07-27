import React from 'react';
import styles from './BlogDetailContentSection.module.css';
import featuredImg from '../../../assets/images/video_main.png';

const BlogDetailContentSection = () => {
  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <img src={featuredImg} alt="Meditating by a lake" className={styles.featuredImage} />
          
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              In our fast-paced digital world, the way we spend our first hour often dictates the emotional tone of our entire day. When we wake up and immediately check our notifications, we surrender our peace to the demands of others. However, by incorporating intentional rituals, we can reclaim our focus and nurture our mental well-being from the moment we open our eyes.
            </p>
            
            <p className={styles.paragraph}>
              Here are six simple, science-backed rituals to help you start your day with clarity and intention.
            </p>
            
            <h3 className={styles.heading3}>1. The "Golden Minute" of Silence</h3>
            <p className={styles.paragraph}>
              Before you reach for your phone or roll out of bed, spend sixty seconds in complete silence. Listen to the sound of your breath or the distant morning birds. This tiny gap between sleep and action helps stabilize your nervous system, preventing the "rush" response that leads to midday anxiety.
            </p>
            
            <h3 className={styles.heading3}>2. Hydration with Intention</h3>
            <p className={styles.paragraph}>
              Drinking a glass of water is a physical necessity, but it can also be a mindful practice. Instead of gulping it down while walking, stand still. Feel the temperature of the water and the sensation of it hydrating your body. This act of "mindful sipping" grounds you in the physical present.
            </p>
            
            <h3 className={styles.heading3}>3. Gentle Movement and Stretching</h3>
            <p className={styles.paragraph}>
              You don't need a high-intensity workout to wake up your soul. Spend five minutes doing gentle stretches or a simple yoga flow. Focus on where your body feels tight and breathe into those spaces. Movement releases stored tension and signals to your brain that it is safe to start the day.
            </p>
            
            <h3 className={styles.heading3}>4. The Power of Three Gratitudes</h3>
            <p className={styles.paragraph}>
              Mindfulness is deeply rooted in appreciation. Either in a journal or simply in your mind, identify three specific things you are grateful for today. Moving beyond generalities (like "my family") to specifics (like "the warmth of this coffee") retrains your brain to look for the positive throughout the day.
            </p>
            
            <h3 className={styles.heading3}>5. Mindful Grooming</h3>
            <p className={styles.paragraph}>
              Transform your morning shower or skincare routine into a sensory experience. Notice the scent of your soap, the feeling of the warm water on your skin, and the sound of the droplets. By focusing entirely on these sensations, you prevent your mind from wandering into stressful "to-do" lists before you've even dressed.
            </p>
            
            <h3 className={styles.heading3}>6. Conscious Disconnection</h3>
            <p className={styles.paragraph}>
              Set a boundary with your technology. Commit to staying off social media and email until after you've completed your rituals and had breakfast. By choosing what information enters your mind first, you remain the architect of your own mood.
            </p>
            
            <h2 className={styles.heading2}>Finding Your Rhythm</h2>
            <p className={styles.paragraph}>
              You don't have to do all six rituals tomorrow. Start with one or two that resonate most with you. Remember, mindfulness isn't about being perfect; it's about being present. By choosing to start your day with intention, you are making a powerful investment in your long-term mental wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailContentSection;
