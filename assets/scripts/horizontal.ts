
import { _decorator, Component, Node, Size } from 'cc';
import { BaseItem } from './baseItem';
const { ccclass, property } = _decorator;

@ccclass('Horizontal')
export class Horizontal extends BaseItem {
    onLoad() {
        this.input.placeholder = this.transform?.width.toString()!
    }
    onInput() {
        if (isNaN(Number(this.input.string))) return
        this.transform?.setContentSize(new Size(Number(this.input.string), this.transform.contentSize.height))
    }
}
