import { Fragment } from 'react'
import type { IExperience } from '../Interface/IExperience'
import experienceStyles from './experience.module.scss'

const Experience = (props: { data: IExperience[] }) => {
  const expContent = (exp: IExperience) => {
    return (
      <Fragment key={exp.title}>
        <div className={`${experienceStyles.subtile}`}>
          {exp.link ? (
            <a
              href={exp.link}
              target="_blank"
              className={`${experienceStyles.company}`}
              rel="noreferrer"
            >
              {exp.company}
              {exp.duration && (
                <span className={experienceStyles.duration}>
                  {exp.duration}
                </span>
              )}
            </a>
          ) : (
            <>
              {exp.company ? (
                <div className={`${experienceStyles.company}`}>
                  <span>{exp.company}</span>

                  {exp.duration && (
                    <span className={experienceStyles.duration}>
                      {exp.duration}
                    </span>
                  )}
                </div>
              ) : (
                <div />
              )}
            </>
          )}

          <div className="row text-small">
            <span>{exp.dateStart}</span>
            {exp.dateStart && exp.dateEnd && '-'}
            <span>{exp.dateEnd}</span>
          </div>
        </div>
        {exp.title && <h3 className={experienceStyles.title}>{exp.title}</h3>}
        {exp.description && (
          <div style={{ fontStyle: 'italic' }}>
            {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
            <div dangerouslySetInnerHTML={{ __html: exp.description }} />
          </div>
        )}
        {exp.tasks && exp.tasks.length > 0 && (
          <ul className={`${experienceStyles.shift}`}>
            {exp.tasks.map((task) => {
              return (
                <li key={task}>
                  {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
                  <span dangerouslySetInnerHTML={{ __html: task }} />
                </li>
              )
            })}
          </ul>
        )}
        {exp.stack && exp.stack.length > 0 && (
          <div className={`${experienceStyles.shift}`}>
            {exp.stack.map((task) => {
              return (
                <div key={task}>
                  {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
                  <div dangerouslySetInnerHTML={{ __html: task }} />
                </div>
              )
            })}
          </div>
        )}
      </Fragment>
    )
  }

  if (props.data && props.data.length > 0)
    return (
      <div className={experienceStyles.experience}>
        <div className={`${experienceStyles.details} column`}>
          {props.data.map((elem) => {
            return expContent(elem)
          })}
        </div>
      </div>
    )
}

export default Experience
