import React from 'react'
import styled from '@emotion/styled'
import Twemoji from 'react-twemoji'

interface EmojiProps {
  children?: React.ReactNode
}

const EmojiBox = styled.span`
  .emoji {
    height: 1em;
    width: 1em;
    margin: 0 0.05em 0 0.1em;
    vertical-align: -0.1em;
  }
`

const Emoji: React.FC = (props: EmojiProps) => {
  const TwemojiOptions = {
    folder: 'svg',
    ext: '.svg',
  }
  return (
    <EmojiBox>
      <Twemoji options={TwemojiOptions}>{props.children}</Twemoji>
    </EmojiBox>
  )
}

export default Emoji
