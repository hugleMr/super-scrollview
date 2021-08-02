
import { _decorator, Component, Node } from 'cc';
import { SuperLayout } from './core/super-layout';
import { BaseItem } from './scripts/baseItem';
const { ccclass, property } = _decorator;

@ccclass('Typescript')
export class Typescript extends Component {
    @property(SuperLayout) layout!: SuperLayout
    private datas: any[] = []
    start() {
        for (let i = 0; i < 10; i++) {
            this.datas.push({
                message: i
            })
        }
        this.layout.total(this.datas.length)
    }
    onRefreshEvent(item: Node, index: number) {
        item.getComponent(BaseItem)?.show(this.datas[index], index, this.onClickItem.bind(this))
    }
    onClickItem() {

    }

    onPageEvent(event: any) {
        console.error(this.layout.currPageIndex)
    }
}
