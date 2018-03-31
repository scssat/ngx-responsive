import { Injectable} from '@angular/core';
import { ResponsiveState } from '../../@core';
import { BrowserInfo } from './browser-info';

@Injectable()
export class BrowserInfoRx extends BrowserInfo  {
    constructor( public _responsiveState: ResponsiveState) { super(_responsiveState); }
}
