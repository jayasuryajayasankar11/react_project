import React from 'react'
import Title from '../components/Title'
// Styled component
import Styled, { styled } from 'styled-components'
import { ButtonStyle } from './ButtonStyle'


const UserList = styled.ul`
    
  padding: 0;
  margin: 0;

   & li:nth-child(even){
    background-color: #eee;
    &:hover{
        background-color: #cccc;
    }
}

`
const UserListItem = styled.li`
    

    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;

    & span {
        font-weight: bold;
    }
`

const UserAvatar = styled.img`

width: 50px;
border-radius: 50%;
margin-right: 10px;
    
`
export default function StyledComponent() {
    return (
        <div>

            <Title text={"  StyledComponent "} />

            {/* styled components */}

            <UserList>
                <UserListItem>
                    <UserAvatar src="https://avatars.githubusercontent.com/u/36979420?v=4" alt="" />
                    <span>John Deo</span>
                </UserListItem>
                <UserListItem>
                    <UserAvatar src="https://avatars.githubusercontent.com/u/36979420?v=4" alt="" />
                    <span>John Deo</span>
                </UserListItem>
                <UserListItem>
                    <UserAvatar src="https://avatars.githubusercontent.com/u/36979420?v=4" alt="" />
                    <span>John Deo</span>
                </UserListItem>
                <UserListItem>
                    <UserAvatar src="https://avatars.githubusercontent.com/u/36979420?v=4" alt="" />
                    <span>John Deo</span>
                </UserListItem>
                <UserListItem>
                    <UserAvatar src="https://avatars.githubusercontent.com/u/36979420?v=4" alt="" />
                    <span>John Deo</span>
                </UserListItem>
            </UserList>
            <ButtonStyle>Click</ButtonStyle>
            <ButtonStyle primary>Click</ButtonStyle>


        </div>
    )
}
