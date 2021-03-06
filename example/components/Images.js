// @flow
import {Asset} from "expo";

export default class Images {

    static login = require("./images/login.jpg");

    static downloadAsync(): Promise<*>[] {
        return [
            Asset.fromModule(Images.login).downloadAsync()
        ];
    }
}