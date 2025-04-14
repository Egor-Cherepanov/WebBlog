export interface User {
  id: string
  login: string
  password: string
  registered_at: string
  role_id: number
  session?: string
}

export interface Session {
  logOut: () => void
  removeComment?: () => void
  [key: string]: (() => void) | undefined
}

export interface Response {
  session: string
  id: string
  login: string
  role_id: number
  password: string
}

export interface AuthResponse {
  error: string | null
  res: Response | null
}

export interface ContainerProps {
  className?: string
}

export interface IconContainerProps {
  className?: string
  id: string
  size?: string
  margin?: string
  disabled?: boolean
  onClick?: () => void
  isButton?: boolean
}

export interface FooterProps {
  className?: string
}

export interface WeatherData {
  name: string
  main: {
    temp: number
  }
  weather: Array<{
    description: string
  }>
}

export interface AuthFormData {
  login: string
  password: string
}

export interface AuthFormData {
  login: string
  password: string
}

export interface RegisterFormData {
  login: string
  password: string
  passcheck: string
}

export interface Role {
  id: number
  name: string
}

export interface UserRowProps extends ContainerProps {
  login: string
  id: string
  registered_at?: string
  userRoleId: number
  roles?: Role[]
  onUsersRemove: () => void
}

export interface Comment {
  id: string
  author_id: string
  post_id: string
  content: string
  published_at: string
  author: string
}

export interface PostState {
  id: string
  title: string
  image_url: string
  content: string
  published_at: string
  comments?: Comment[]
}

export interface PostContentProps {
  post: PostState
  className?: string
}

export interface CommentsProps extends ContainerProps {
  postId: string
  comments: Comment[]
}

export interface CommentProps extends Comment {
  className?: string
  postId: string
}

export interface SessionState {
  id: string
  hash: string
  user: User
}

export interface ModalState {
  isOpen: boolean
  text: string
  onConfirm: () => void
  onCancel: () => void
}

export interface AppState {
  wasLogout: boolean
  modal: ModalState
}

export interface SpecialPanelProps {
  id: string
  className?: string
  margin?: string
  published_at: string
  editButton: string
  editButtonOnClick: () => void
}

export interface SavePostParams {
  id?: string
  imageRef: string
  titleRef: string
  contentRef: string
}

// export interface AddPostParams {
//   image_url: string
//   title: string
//   content: string
// }
