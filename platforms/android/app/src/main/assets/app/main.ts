// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import * as tnsOAuthModule from "nativescript-oauth";

var facebookInitOptions: tnsOAuthModule.ITnsOAuthOptionsFacebook = {
    clientId: "1773484219367592",
    clientSecret: "41538a3851305ce61b1855e5bc03788d",
    scope: ["email"] //whatever other scopes you need
  };
  
  tnsOAuthModule.initFacebook(facebookInitOptions);

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
