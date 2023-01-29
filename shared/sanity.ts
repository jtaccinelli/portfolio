import {CurrentUser, SanityDocument} from 'sanity'

export interface HiddenArgs {
  document: SanityDocument | undefined
  parent: any
  value: any
  currentUser: Omit<CurrentUser, 'role'> | null
}
