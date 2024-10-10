class AuthService {
  
  
  loggedIn() {
    const token = this.getToken();
    return token;
  }

  
  getToken(): string {
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  
  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}


export default new AuthService();
