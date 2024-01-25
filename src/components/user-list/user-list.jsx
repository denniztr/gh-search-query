import {useState} from "react";
import {User} from './ui/user.jsx'
import {Modal} from '../modal/modal.jsx'
import * as Styled from './user-list.styles.js'

export const UserList = props => {
    const { users } = props
    const [isOpen, setIsOpen] = useState(false)
    const [selectedUserId, setSelectedUserId] = useState(null)

    const handleModalClose = () => {
        setIsOpen(false)
    }

    const handleModalOpen = (id) => {
        setSelectedUserId(id)
        setIsOpen(true)
    }

  return (
      <Styled.UserListContainer>
          {isOpen && <Modal handleModalClose={handleModalClose} users={users} selectedUserId={selectedUserId} />}
          {users ? users.map(user => (
              <User key={user.id} {...user} handleModalOpen={handleModalOpen} />
          )) : (<p>Пользователь не найден</p>)}
      </Styled.UserListContainer>
  )
}