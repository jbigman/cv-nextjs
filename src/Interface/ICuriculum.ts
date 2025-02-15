import type { IExperience } from './IExperience'
import type { ISkill } from './ISkill'

export interface ICuriculum {
  lastName: string
  firstName: string
  address?: string
  email?: string
  phone?: string
  githubUrl?: string
  stackOverFlowUrl?: string
  drivingLicence?: string

  experiences: IExperience[][]
  formations: IExperience[]
  skills: ISkill[]
}
