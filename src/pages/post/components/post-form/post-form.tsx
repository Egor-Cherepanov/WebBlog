import styled from "styled-components"
import { useRef } from "react"
import { Input } from "../../../../components"
import { PostContentProps, SavePostParams } from "../../../../../public/types"
import { SpecialPanel } from "../special-panel/special-panel"
import { sanitazeContent } from "./utils"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { savePost } from "../../../../actions"
import { useServerRequest } from "../../../../../public/hooks"

const PostFormContainer: React.FC<PostContentProps> = ({
  className,
  post: { title, id, image_url, content, published_at },
}) => {
  const imageRef = useRef<HTMLInputElement | null>(null)
  const titleRef = useRef<HTMLInputElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const requestServer = useServerRequest()

  const onSave = async () => {
    const newImageUrl = imageRef.current?.value ?? ""
    const newTitleUrl = titleRef.current?.value ?? ""
    const newContentUrl = sanitazeContent(contentRef.current?.innerHTML ?? "")

    const newPostData: SavePostParams = {
      id,
      imageRef: newImageUrl,
      titleRef: newTitleUrl,
      contentRef: newContentUrl,
    }

    dispatch(savePost(requestServer, newPostData))

    navigate(`/post/${id}`)
  }

  return (
    <div className={className}>
      <Input
        ref={imageRef}
        defaultValue={image_url}
        placeholder="Изображение..."
      />
      <Input ref={titleRef} defaultValue={title} placeholder="Заголовок..." />
      <SpecialPanel
        margin="0 0 20px 0 "
        published_at={published_at}
        editButton="fa-floppy-o"
        editButtonOnClick={onSave}
      />

      <div
        ref={contentRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="post-text"
      >
        {content}
      </div>
    </div>
  )
}

export const PostForm = styled(PostFormContainer)`
  & img {
    float: left;
    margin: 0 20px 16px 0;
  }
  & H2 {
    margin: 0 0 20px 0;
  }

  & .post-text {
    font-size: 18px;
    white-space: pre-line;
  }
`
