import React from 'react'

const useMedia = (media) => {
    const [match, setMacth] = React.useState(null)

    React.useEffect(() =>{
        function changeMatch(){
            const {matches} = window.matchMedia(media)
            setMacth(matches)
        }
        changeMatch()
         window.addEventListener('resize', changeMatch)
        return () =>{
            window.addEventListener('resize', changeMatch)
        }
        
    }, [media])

    return match
}

export default useMedia
