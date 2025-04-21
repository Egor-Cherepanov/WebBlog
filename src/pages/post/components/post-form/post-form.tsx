import styled from "styled-components"
import { useLayoutEffect, useRef, useState } from "react"
import { Input } from "../../../../components"
import { PostContentProps, SavePostParams } from "../../../../../public/types"
import { SpecialPanel } from "../special-panel/special-panel"
import { sanitazeContent } from "./utils"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { savePostAsync } from "../../../../actions"
import { useServerRequest } from "../../../../../public/hooks"

const PostFormContainer: React.FC<PostContentProps> = ({
  className,
  post: { title, id, image_url, content, published_at },
}) => {
  const [imageUrlValue, setImageUrlValue] = useState(image_url)
  const [titleValue, setTitleValue] = useState(title)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const requestServer = useServerRequest()

  useLayoutEffect(() => {
    setImageUrlValue(image_url)
    setTitleValue(title)
  }, [image_url, title])

  const onSave = async () => {
    const newContentUrl = sanitazeContent(contentRef.current?.innerHTML ?? "")

    const newPostData: SavePostParams = {
      id,
      imageRef: imageUrlValue,
      titleRef: titleValue,
      contentRef: newContentUrl,
    }

    dispatch(savePostAsync(requestServer, newPostData)).then(({ id }) =>
      navigate(`/post/${id}`)
    )
  }

  const onImageChange = ({ target }) => setImageUrlValue(target.value)
  const onTitleChange = ({ target }) => setTitleValue(target.value)

  return (
    <div className={className}>
      <Input
        value={imageUrlValue}
        onChange={onImageChange}
        placeholder="Изображение..."
      />
      <Input
        value={titleValue}
        onChange={onTitleChange}
        placeholder="Заголовок..."
      />
      <SpecialPanel
        id={id}
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
    border: 1px solid #000;
    min-height: 80px;
  }
`
