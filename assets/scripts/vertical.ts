
import { _decorator, Component, Node, Label, EditBox, Size } from 'cc';
import { BaseItem } from './baseItem';
const { ccclass, property } = _decorator;
@ccclass('Vertical')
export class Vertical extends BaseItem {
    onLoad(){
        this.input.placeholder = this.transform?.height.toString()!
    }
    onInput() {
        if (isNaN(Number(this.input.string))) return
        this.transform?.setContentSize(new Size(this.transform.contentSize.width, Number(this.input.string)))
    }
}
