export interface User {
  name: string;
  email: string;
  firstname: String;
  lastname: String;
  id: Number;
  isAdmin: boolean;
  generateAvatar(): string;
}

export class AppUser {
  public email: String;
  public id: Number;
  public firstname: String;
  public lastname: String;
  public avatar?: string;
  public flags?: String[];
  public settings?: Object;

  constructor(user: User) {
    this.email = user['email'] || '';
    this.id = user['id'] || -1;
    this.firstname = user['firstname'] || '';
    this.lastname = user['lastname'] || '';
    this.flags = this.flags || [];
    this.settings = this.settings || {};
    this.avatar = this.generateAvatar() || '';
  }

  public generateAvatar(): string {
    const colors = [
      '#c62828',
      '#ad1457',
      '#6a1b9a',
      '#4527a0',
      '#283593',
      '#1565c0',
      '#0277bd',
      '#00838f',
      '#2e7d32',
      '#558b2f',
      '#9e9d24',
      '#f9a825',
      '#ff8f00',
      '#ef6c00',
      '#d84315'
    ];
    return (
      'https://dummyimage.com/60x60/' +
      colors[Math.round(Math.random() * (colors.length - 1))].substr(1) +
      '/ffffff&text=' +
      this.firstname[0] +
      this.lastname[0]
    );
  }
}
