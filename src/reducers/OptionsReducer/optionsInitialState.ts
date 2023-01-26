import RESOLUTIONS from '../../constants/resoloutions'
import { PLAYER_STYLES } from '../../constants/styles'
import { Options } from '../../types'

const OPTIONS_INITIAL_STATE: Options = {
  player: { color: PLAYER_STYLES[0] },
  resolution: RESOLUTIONS[0],
  sounds: {
    effects: 0.5,
    music: 0.02
  }
}

export default OPTIONS_INITIAL_STATE
