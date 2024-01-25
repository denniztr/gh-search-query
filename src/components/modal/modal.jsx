import {useState} from "react"
import {IoClose} from "react-icons/io5"
import {FaGithub} from "react-icons/fa"
import * as Styled from './modal.styles.js'

export const Modal = props => {
    const {
        handleModalClose: handleModalClose,
        users: users,
        selectedUserId: userId,
    } = props

    const [user] = useState(users.find(user => user.id === userId))

  return (
      <Styled.Wrapper>
          <Styled.Container>
              <Styled.Heading>
                  <Styled.userInfoHeading>
                      <Styled.Image>
                          <img src={user.avatar_url} alt=""/>
                      </Styled.Image>
                      <Styled.UserName>
                          <h3>{user.login}</h3>
                          <span>{user.type}</span>
                      </Styled.UserName>
                  </Styled.userInfoHeading>
                  <IoClose
                      size={30}
                      style={{cursor: 'pointer', paddingRight: '1rem'}}
                      onClick={handleModalClose}
                  />
              </Styled.Heading>
              <Styled.ModalContent>
                  <a href={user.html_url}>
                      <FaGithub size={30} style={{color: 'gray', paddingBottom: '0.5rem'}}/>
                  </a>
              </Styled.ModalContent>
          </Styled.Container>
      </Styled.Wrapper>
  )
}