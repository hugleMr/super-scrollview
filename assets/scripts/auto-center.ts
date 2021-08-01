
import { _decorator, Component, Node, EditBox, Label } from 'cc';
import { Simple } from './simple';
const { ccclass, property } = _decorator;

@ccclass('AutoCenter')
export class AutoCenter extends Simple {
    @property(Label) label!: Label
    @property key: string = ""
    start() {
        this.label.string = `当前中心锚点：${(this.layout.centerAnchor as any)[this.key]}`
        this.layout.scrollToCenter()
    }
    onInputAnchor(event: EditBox) {
        let anchor = Number(event.string)
        if (isNaN(anchor)) return
        (this.layout.centerAnchor as any)[this.key] = anchor
        this.layout.scrollToCenter()
        this.label.string = `当前中心锚点：${(this.layout.centerAnchor as any)[this.key]}`
    }
}