export class User {
  constructor(
    private id: string,
    private email: string,
    private password: string
  ) {
    (this.id = id), (this.email = email), (this.password = password);
  }

  public getId():string {
    return this.id;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(newEmail: string): void {
    this.email = newEmail;
  }

  public getPassword() {
    return this.password;
  }

  public setPassword(newPassword: string): void {
    this.password = newPassword;
  }
}
