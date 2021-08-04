
import { _decorator, Component, Node } from 'cc';
import { BaseMain } from './baseMain';
const { ccclass, property } = _decorator;

@ccclass('Simple')
export class Simple extends BaseMain {

    async onLoad() {
        for (let i = 0; i < 50; i++) {
            this.datas.push({ message: i })
        }
        await this.layout.total(this.datas.length)
    }
}
