export function usernameField(): string {
   return "//input[@data-test='username']";
}

export function passwordField(): string {
   return "//input[@data-test='password']";
}

export function loginButton(): string {
   return "//input[@data-test='login-button']";
}

export function headerProduct(): string {
   return "//div[@data-test='secondary-header']//span[@data-test='title']";
}

export function errorMessage(): string {
   return "//h3[@data-test='error']";
}
