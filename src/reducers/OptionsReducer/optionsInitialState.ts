import RESOLUTIONS from '../../constants/resoloutions'
import { PLAYER_STYLES } from '../../constants/styles'
import { Options } from '../../types'

const OPTIONS_INITIAL_STATE: Options = {
  player: { color: PLAYER_STYLES[0] },
  resolution: RESOLUTIONS[0]
}

console.log({ OPTIONS_INITIAL_STATE })

export default OPTIONS_INITIAL_STATE
