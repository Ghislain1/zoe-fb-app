

import { ControlBase } from './control-base';

export class SimpleTextBlock extends ControlBase<string> {
    controlType = 'textbox';
    type: string;
    parent: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}



export class SimpleDropdown extends ControlBase<string> {
    controlType = 'textbox';
    type: string;
    parent: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}