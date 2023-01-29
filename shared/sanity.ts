import {CurrentUser, SanityDocument} from 'sanity'

export interface HiddenArgs {
  document: SanityDocument | undefined
  parent: any
  value: any
  currentUser: Omit<CurrentUser, 'role'> | null
}

export type Singleton = {
  type: string
  title: string
  name: string
}
