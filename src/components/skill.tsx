import type { ReactNode } from 'react'
import type { ISkill } from '../Interface/ISkill.js'
import skillStyles from './skill.module.scss'
import { TypeScriptIcon } from '../icons/TypeScriptIcon'
import { NodeJsIcon } from '../icons/NodeJsIcon'
import { ReactIcon } from '../icons/ReactIcon'
import { AutonomieIcon } from '../icons/AutonomieIcon'
import { BrainIcon } from '../icons/BrainIcon'
import { FireFighterIcon } from '../icons/FireFighterIcon'
import { YoutubeIcon } from '../icons/YoutubeIcon'
import { LinkedInIcon } from '../icons/LinkedInIcon'
import { CodinGameIcon } from '../icons/CodinGameIcon'
import { GithubIcon } from '../icons/GithubIcon'
import { DiscordIcon } from '../icons/DiscordIcon'

const Skill = (props: { data: ISkill }) => {

  const Wrapper = (props: {children: ReactNode, data: ISkill}) => {
    return (
      <>
        {props.data.link ? (
            <a
              href={props.data.link}
              target="_blank"
              className={`${skillStyles.company} ${props.data.icon === 'youtube' && skillStyles.silver}`}
              rel="noreferrer"
            >
              {props.children}
            </a>
          ) : (
            <div className={`${skillStyles.company} ${props.data.icon === 'youtube' && skillStyles.silver}`} >
              {props.children}
            </div>
          )}
      </>
    )
  }

  return (
    <Wrapper data={props.data}>
      <div className={skillStyles.main}>
        <div className='row' style={{ alignItems: 'center', width: '100%'}}>
          {
            props.data.icon === 'ts' && 
            <TypeScriptIcon className={skillStyles.icon} />
          }
          {
            props.data.icon === 'node' && 
            <NodeJsIcon className={skillStyles.icon} />
          }
          {
            props.data.icon === 'react' && 
            <ReactIcon className={skillStyles.icon} />
          }
          {
            props.data.icon === 'autonomie' && 
            <AutonomieIcon className={`${skillStyles.icon} ${skillStyles.legend}`} size={30}/>
          }
          {
            props.data.icon === 'fire' && 
            <FireFighterIcon className={`${skillStyles.icon} ${skillStyles.legend}`} size={30} />
          }
          {
            props.data.icon === 'brain' && 
            <BrainIcon className={`${skillStyles.icon} ${skillStyles.legend}`} size={30}/>
          }
          {
            props.data.icon === 'youtube' && 
            <YoutubeIcon className={`${skillStyles.icon} ${skillStyles.white}`} size={30}/>
          }
          {
            props.data.icon === 'linkedin' && 
            <LinkedInIcon className={`${skillStyles.icon} ${skillStyles.white}`} size={30}/>
          }
          {
            props.data.icon === 'github' && 
            <GithubIcon className={`${skillStyles.icon} ${skillStyles.white}`} size={30}/>
          }
          {
            props.data.icon === 'cg' && 
            <CodinGameIcon className={`${skillStyles.icon}`} />
          }
          {
            props.data.icon === 'discord' && 
            <DiscordIcon className={`${skillStyles.icon}`} />
          }
          <div className={`${skillStyles.details} column`}>
            <h3 className={skillStyles.title}>{props.data.name}</h3>
            <div className={`${skillStyles.subtile}`}>
              {props.data.subtitle}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Skill
