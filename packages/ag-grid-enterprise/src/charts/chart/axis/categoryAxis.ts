import {ChartAxis} from "./chartAxis";
import {BandScale} from "../../scale/bandScale";
import {Axis} from "../../axis";

export class CategoryAxis extends Axis<string> {
    constructor() {
        const scale = new BandScale<string>();
        scale.paddingInner = 0.1;
        scale.paddingOuter = 0.3;
        super(scale);
    }
}