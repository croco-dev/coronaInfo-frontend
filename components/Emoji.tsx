import React from 'react'
import styled from '@emotion/styled'
import Twemoji from 'react-twemoji'

const EmojiBox = styled.span`
  .emoji {
    height: 1em;
    width: 1em;
    margin: 0 0.05em 0 0.1em;
    vertical-align: -0.2em;
  }
`

interface EmojiProps {
  str: string
}

const Emoji: React.FC<EmojiProps> = props => {
  const TwemojiOptions = {
    folder: 'svg',
    ext: '.svg',
  }
  return (
    <EmojiBox role="img">
      <Twemoji tag="span" options={TwemojiOptions}>
        {props.str}
      </Twemoji>
    </EmojiBox>
  )
}

export default Emoji
