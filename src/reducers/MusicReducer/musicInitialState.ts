import PLAY_LIST from '../../constants/playList'
import { Music } from '../../types'

const MUSIC_INITIAL_STATE: Music = {
  currentSong: {
    ...PLAY_LIST[0]
  },
  indexInPlaylist: 0
}

export default MUSIC_INITIAL_STATE
