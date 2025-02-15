import type { IExperience } from '../Interface/IExperience'
import experienceStyles from './experience.module.scss'

const Formation = (props: { data: IExperience }) => {
  const Company = (exp: IExperience) => {
    return (
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
              <span className={experienceStyles.duration}>{exp.duration}</span>
            )}
          </a>
        ) : (
          <div className={`${experienceStyles.company}`}>
            {exp.company}
            {exp.duration && (
              <span className={experienceStyles.duration}>{exp.duration}</span>
            )}
          </div>
        )}
      </div>
    )
  }
  const expContent = (exp: IExperience) => {
    return (
      <div
        key={exp.title + exp.dateEnd}
        className="row vcenter"
        style={{ gap: '20px', alignItems: 'center' }}
      >
        {exp.title && (
          <h3
            style={{ flex: 1 }}
            className={experienceStyles.title}
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html: exp.title }}
          />
        )}
        {Company(exp)}
        <div className="row text-small">
          <span>{exp.dateStart}</span>
          {exp.dateStart && exp.dateEnd && '-'}
          <span>{exp.dateEnd}</span>
        </div>
      </div>
    )
  }

  return (
    <div className={experienceStyles.experience}>
      <div className={`${experienceStyles.details} column`}>
        {expContent(props.data)}
      </div>
    </div>
  )
}

export default Formation
