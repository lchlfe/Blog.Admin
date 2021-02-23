import { UserManager } from 'oidc-client'

class ApplicationUserManager extends UserManager {
  constructor () {
    super({
      authority: 'http://localhost:5004',//认证服务器本地域名http://localhost:5004
      client_id: 'blogadminjs',//客户端Id
      redirect_uri: 'http://localhost:2364/callback',//回调域名http://localhost:2364
      response_type: 'id_token token',
      scope: 'openid profile roles blog.core.api',
      post_logout_redirect_uri: 'http://localhost:2364'//退出回调地址http://localhost:2364
    })
  }

  async login () {
    await this.signinRedirect()
    return this.getUser()
  }

  async logout () {
    return this.signoutRedirect()
  }
}

const applicationUserManager = new ApplicationUserManager()
export { applicationUserManager as default }
