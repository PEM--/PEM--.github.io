import { shouldUpdate } from 'recompose'

const noUpdate = shouldUpdate(() => false)
export default noUpdate