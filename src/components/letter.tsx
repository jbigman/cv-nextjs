import type { IExperience } from '../Interface/IExperience'
import cv from '../json/curiculum.json'
import Block from './block'
import styles from './curiculum.module.scss'
import Experience from './experience'
import NetWork from './network'
import SideBarLetter from './sidebarletter'
import Skill from './skill'

const Letter = () => {
  return (
    <div className={styles.body}>
      <div style={{ maxWidth: '210mm' }}>
        <SideBarLetter />
        <div className={styles.main}>
          <div
            className={styles.content}
            style={{ fontSize: '18px', margin: '40px' }}
          >
            Dear Hiring Manager,
            <br />
            <br />I am writing to apply for the position of Full Stack Developer
            at TapNation.
            <br />
            <br />
            With over 10 years of experience in full stack development, I have
            acquired strong expertise in web and mobile development, focusing on
            NodeJs, ReactJs, and TypeScript, and have earned a Codingame
            certification with distinction. Confident in my ability to
            contribute to your team, I have employed web scraping techniques to
            enhance data for Gamewisher.com and collaborated with a designer to
            achieve high-quality UI/UX for LaPetitePouzerie.fr. These
            experiences align closely with the requirements of the position.
            <br />
            <br />
            My passion for the gaming industry led me to create a dedicated
            YouTube channel and develop a mobile game search engine using NestJS
            and NextJS. I am particularly excited about the prospect of joining
            your innovative team.
            <br /> <br />
            Managing a gaming community on Discord and thriving in an Agile
            environment over the years has taught me invaluable lessons in
            teamwork, communication, and adaptability. Having collaborated with
            product owners in English during my professional experience, I am
            confident in my ability to seamlessly integrate into your
            international team. Moreover, TapNation’s commitment to fostering
            employee growth and cohesion through events such as company trips,
            hackathons, and game jams resonates strongly with me and fuels my
            desire to contribute actively to your team’s success.
            <br />
            <br />
            Thank you for considering my application.I look forward to
            discussing my projects in detail and illustrating how my skills can
            contribute to TapNation during an interview at your earliest
            convenience.
            <br />
            <br />
            Best regards,
            <br />
            Jérémie Gambin
          </div>
        </div>
      </div>
    </div>
  )
}

export default Letter
