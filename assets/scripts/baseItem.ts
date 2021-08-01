
import { _decorator, Component, Node, Label, EditBox } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BaseItem')
export class BaseItem extends Component {
    @property(Label) label!: Label
    @property(EditBox) input!: EditBox
    private index!: number
    private clickFunc!: Function
    get transform() {
        return this.node._uiProps.uiTransformComp
    }
    show(data: any, index: number, callback: Function) {
        this.index = index
        this.label.string = data.message
        this.clickFunc = callback
    }
    onClick() {
        this.clickFunc?.call(this, this.index)
    }

    onInput() {

    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
