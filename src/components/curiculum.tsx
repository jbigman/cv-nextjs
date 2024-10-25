import type { IExperience } from '../Interface/IExperience'
import cv from '../json/curiculum.json'
import Block from './block'
import styles from './curiculum.module.scss'
import Experience from './experience'
import Formation from './formation'
import NetWork from './network'
import SideBar from './sidebar'
import Skill from './skill'

const Curiculum = () => {
  return (
    <div className={styles.body}>
      <div style={{ maxWidth: '210mm' }} >
        <SideBar/>
        <div className={styles.main}>
        <div className={styles.content}>
          <div style={{flex:3}}>
            <div className={styles.about}>
              <div className='row' style={{ gap: "25px"}}>
                <div style={{flex: 1}}>   
                  <Block title={"Compétences humaines"}>        
                    {cv.skills.filter((s) => s.type === 'soft').map((skill) => {
                        return (
                          <Skill data={skill} key={skill.name} />
                        )
                    })}
                  </Block> 
                </div>
                <div style={{flex: 1}}>   
                  <Block title={"Compétences techniques"}>        
                    {cv.skills.filter((s) => s.type === 'hard').map((skill) => {
                        return (
                          <Skill data={skill} key={skill.name} />
                        )
                    })}
                  </Block>
                </div>
              </div>
              <Block title={'Expérience'}>
                  {cv.experiences.map((exp: IExperience[], index: number) => {
                    return <Experience key={index} data={exp} />
                  })}
              </Block>   
            <Block title={'Formation'}>
              {cv.formations.map((exp: IExperience[]) => {
                return <Formation key={exp[0].title} data={exp} />
              })}
            </Block> 
            </div>
          </div>   
        </div>
        </div>
      </div>
    </div>
  )
}

export default Curiculum
