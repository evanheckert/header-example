import React from 'react'
import { ActionSheetIOS, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/core'

import Sun from './Sun'

const HeaderRight = () => {
  const navigation = useNavigation()

  const userInitials = 'EH'
  return (
    <TitleRow>
      <IconButtonTouch onPress={handleDarkMode} activeOpacity={0.8}>
        <IconButtonView>
          <Sun size={24} />
        </IconButtonView>
      </IconButtonTouch>

      <ProfileCircleTouch onPress={handleProfileTouch} activeOpacity={0.8}>
        <ProfileCircle>
          <ProfileText>{userInitials}</ProfileText>
        </ProfileCircle>
      </ProfileCircleTouch>
    </TitleRow>
  )

  function handleProfileTouch() {
    // eslint-disable-next-line no-undef
    requestAnimationFrame(() => {
      ActionSheetIOS.showActionSheetWithOptions(
        { options: ['Cancel', 'Log Out'], destructiveButtonIndex: 1, cancelButtonIndex: 0 },
        buttonIndex => {
          if (buttonIndex === 1) {
            navigation.navigate('Logout')
          }
        },
      )
    })
  }
  function handleDarkMode() {
    // eslint-disable-next-line no-undef
    requestAnimationFrame(() => {
      ActionSheetIOS.showActionSheetWithOptions(
        { options: ['Cancel', 'System Default', 'Dark Mode', 'Light Mode'], cancelButtonIndex: 0 },
        buttonIndex => {
          if (buttonIndex === 2) console.log('Hit button')
          else if (buttonIndex === 1) console.log('Hit button')
          else if (buttonIndex === 3) console.log('Hit button')
        },
      )
    })
  }
}

export default HeaderRight

const IconButtonTouch = styled(TouchableOpacity)`
  margin: -10px;
  border-radius: 30px;
  margin-right: 24px;
`
const IconButtonView = styled(View)`
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: black;
`

const ProfileCircleTouch = styled(TouchableOpacity)`
  border-radius: 30px;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  margin: -5px;
  background-color: black;
`
const TitleRow = styled(View)`
  flex-direction: row;
  /* padding: 0 16px; */
  align-items: center;
  border: 1px solid transparent;
`
const ProfileCircle = styled(View)`
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background-color: #636366;
`
const ProfileText = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  color: white;
`
