import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MyProvider } from "../../providers/my/my";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  case: string = "login";
  loginForm: FormGroup;
  signupForm: FormGroup;
  saveAttempt: Boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public utils: MyProvider
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(8)])
      ]
    });
    this.signupForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(8)])
      ],
      fname: [""],
      lname: [""],
      uname: [""]
    });
  }

  ionViewDidLoad() {}
  segmentChanged($event) {
    this.case = $event["_value"];
  }
  signupUser() {
    this.utils
      .signup(this.signupForm.value)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  loginUser() {
    console.log(this.loginForm.value);
  }
}
