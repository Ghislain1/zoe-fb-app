

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import { map, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Topology, NodeDataArray } from '../../core/models/topology';
import { Subject } from 'rxjs/Subject';
import { NodeData } from '@angular/core/src/view';

 

@Injectable()
export class TopologyService {

}