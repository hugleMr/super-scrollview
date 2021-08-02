
import { _decorator, Component, Node, Label, EditBox, Size } from 'cc';
import { BaseItem } from './baseItem';
const { ccclass, property } = _decorator;
@ccclass('Vertical')
export class Vertical extends BaseItem {
    onLoad() {
        this.input.placeholder = this.transform?.height.toString()!
    }
    onInput() {
        let height = Number(this.input.string)
        if (isNaN(height)) return
        if (height < 100) {
            return
        }

        this.transform?.setContentSize(new Size(this.transform.contentSize.width, height))
    }
}
