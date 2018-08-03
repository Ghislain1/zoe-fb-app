import { Action } from "@ngrx/store";

interface UnsafeAction extends Action {
    payload?: any;
}