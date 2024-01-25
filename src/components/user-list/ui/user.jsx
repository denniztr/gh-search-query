import * as Styled from './user.styles.js';

export const User = props => {
    const {
        id: id,
        login: login,
        avatar_url: imgUrl,
        handleModalOpen: handleModalOpen,
    } = props

    return (
        <Styled.User>
            <Styled.Image>
                <img src={imgUrl} alt=""/>
            </Styled.Image>
            <Styled.UserInfo>
                <p>{login}</p>
                <Styled.Icon size={22} onClick={() => handleModalOpen(id)}/>
            </Styled.UserInfo>
        </Styled.User>
    )
}