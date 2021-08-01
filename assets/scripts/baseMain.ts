
import { _decorator, Component, Node, EditBox, director } from 'cc';
import { SuperLayout } from '../core/super-layout';
import { BaseItem } from './baseItem';
const { ccclass, property } = _decorator;

@ccclass('BaseMain')
export class BaseMain extends Component {
    @property(SuperLayout) layout!: SuperLayout
    @property(EditBox) input!: EditBox
    protected datas: any[] = []

    toHeader() {
        this.layout.scrollToHeader(1)
    }
    toFooter() {
        this.layout.scrollToFooter(1)
    }
    toIndex() {
        var index = Number(this.input.string)
        if (isNaN(index)) return
        this.layout.scrollToIndex(index, 1)
    }
    toBack() {
        director.loadScene("main")
    }

    onRefreshEvent(item: Node, index: number) {
        item.getComponent(BaseItem)?.show(this.datas[index], index, this.onClickItem.bind(this))
    }
    onClickItem(index: number) {
        this.datas.splice(index, 1)
        this.layout.total(this.datas.length)
    }
    addItem(event: any, args: any) {
        let count = Number(args)
        if (isNaN(count)) return
        for (let i = 0; i < count; i++) {
            this.datas.push({ message: this.datas.length })
        }
        this.layout.total(this.datas.length)
    }
}
