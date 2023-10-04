import { ObjectIndex } from 'types'

export default class EventEmitter {
    static extend: <T extends unknown[], TT, R>(
        fn: (this: TT, ...args: T) => R
    ) => ((this: TT, ...args: T) => R) & EventEmitter

    on!: (ev: ObjectIndex, fn: Function) => () => void
    emit!: (ev: string, ...args: unknown[]) => void

    constructor(x: string) {
        console.log(x)
    }

    private __events: Record<ObjectIndex, Function[]> = {}
}