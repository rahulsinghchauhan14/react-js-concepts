import React from 'react'
import useTheme from '../context/ThemeContext'

function ThemeBtn() {

    const {themeMode, lightTheme, darkTheme} = useTheme()

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkTheme()
        }else{
            lightTheme()
        }
    }

    return (
        <label>
            <input type="checkbox" 
            value="" 
            onChange={onChangeBtn}
            checked={themeMode==="dark"}
            />
            {themeMode}
        </label>
    )
}

export default ThemeBtn