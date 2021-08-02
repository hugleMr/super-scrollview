
import { _decorator, Component, Node } from 'cc';
import { BaseItem } from './baseItem';
import { SuperLayout } from '../core/super-layout';
import { BaseMain } from './baseMain';
const { ccclass, property } = _decorator;

@ccclass('Page')
export class Page extends BaseMain {
    @property(SuperLayout) layout!: SuperLayout
    start() {
        for (let i = 0; i < 8; i++) {
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
