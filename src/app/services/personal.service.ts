import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { HttpClient } from "@angular/common/http";
import { NewSkladUserModel } from "../models/personal-models/new-sklad-user";
import { LoginResponse } from "../models/login-models/login-response";
import { Status } from "../models/status";
import { Observable } from "rxjs";
import { UpdateSkladUserModel } from "../models/personal-models/update-sklad-user";
import { LoginQuery } from "../models/login-models/login-query";
import { TokenModel } from "../models/token";
import { DocSendsUsersModel } from "../models/personal-models/doc-sends.users";
import { MotivationQueryModel } from "../models/personal-models/motivation-query";
import { MotivationAnswModel } from "../models/personal-models/motivation-answ";
import { SkladUserModel } from "../models/login-models/sklad-user";
import { DocumentsListModel } from "../models/documents-models/documents-list";
import { WhoSendDocChangeModel } from "../models/personal-models/who-send-doc-change-model";


@Injectable({
    providedIn: 'root'
})
export class PersonalService {
    constructor(
        private http: HttpClient
    ) { }
    private addNewSkladUserUrl = environment.apiUrl + '/AddNewSkladUser/'
    private deleteSkladUserUrl = environment.apiUrl + '/DeleteSkladUser/'
    private updateSkladUserUrl = environment.apiUrl + '/UpdateSkladUser/'
    private authSkladUserUrl = environment.apiUrl + '/AuthSkladTsdUser/'
    private getSendedDocUsersUrl = environment.apiUrl + '/GetSendedDocUsers/'
    private getMotivationUrl = environment.apiUrl + '/GetNewMotivation/'
    private getSkladUserURL = environment.apiUrl + '/GetSkladUser/'
    private getUserDocURL = environment.apiUrl + '/GetUserDoc/'
    private changeWhoSetDocURL = environment.apiUrl + '/ChangeWhoSetDoc/'

    GetSkladUser(data: TokenModel): Observable<SkladUserModel[]> {
        return this.http.post<SkladUserModel[]>(this.getSkladUserURL, data)
    }
    AddNewSkladUser(data: NewSkladUserModel): Observable<Status> {
        return this.http.post<Status>(this.addNewSkladUserUrl, data)
    }
    DeleteSkladUser(data: NewSkladUserModel): Observable<Status> {
        return this.http.post<Status>(this.deleteSkladUserUrl, data)
    }
    UpdateSkladUser(data: UpdateSkladUserModel): Observable<Status> {
        return this.http.post<Status>(this.updateSkladUserUrl, data)
    }
    AuthSkladUser(data: LoginQuery): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.authSkladUserUrl, data)
    }
    GetSendedDocUsers(data: TokenModel): Observable<DocSendsUsersModel> {
        return this.http.post<DocSendsUsersModel>(this.getSendedDocUsersUrl, data)
    }
    GetMotivation(data: MotivationQueryModel): Observable<MotivationAnswModel[]> {
        return this.http.post<MotivationAnswModel[]>(this.getMotivationUrl, data)
    }
    GetUserDoc(data: TokenModel): Observable<DocumentsListModel[]> {
        return this.http.post<DocumentsListModel[]>(this.getUserDocURL, data)
    }
    ChangeWhoSetDoc(data: WhoSendDocChangeModel): Observable<Status> {
        return this.http.post<Status>(this.changeWhoSetDocURL, data)
    }
}