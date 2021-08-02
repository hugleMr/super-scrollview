
import { _decorator, Component, Node, Size } from 'cc';
import { BaseItem } from './baseItem';
const { ccclass, property } = _decorator;

@ccclass('Horizontal')
export class Horizontal extends BaseItem {
    onLoad() {
        this.input.placeholder = this.transform?.width.toString()!
    }
    onInput() {
        let width = Number(this.input.string)
        if (isNaN(width)) return
        if (width < 100) {
            return
        }
        this.transform?.setContentSize(new Size(Number(this.input.string), this.transform.contentSize.height))
    }
}
