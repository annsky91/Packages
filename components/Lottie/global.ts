import { AnimationConfigWithData, AnimationConfigWithPath } from 'lottie-web'
import { CSSProperties, ReactNode } from 'react'
import globalify from 'sky/helpers/globalify'

import * as module from '.'

globalify({ Lottie: module.default })

declare global {
    function Lottie(
        props: Omit<
            AnimationConfigWithPath<'svg'> & AnimationConfigWithData<'svg'>,
            'container'
        > & {
            className?: string
            style?: CSSProperties
            speed?: number
        }
    ): ReactNode
}
