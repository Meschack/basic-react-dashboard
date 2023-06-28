import loginIllustration from '../../assets/login-illustration.png'
import '../../styles/Login.css'

export const Login = ({ isConnected, setConnected }) => {
  const authenticateUser = async (infos) => {
    let headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
    }

    let bodyContent = JSON.stringify(infos)

    let response = await fetch(
      'https://dev-api.easy-associat.com/api/0.1/auth/login',
      {
        method: 'POST',
        body: bodyContent,
        headers: headersList,
        mode: 'no-cors',
      }
    )

    if (response.ok) {
      setConnected(() => {
        return !isConnected
      })

      window.location = '/dashboard'

      return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const datas = new FormData(e.target)

    const email = datas.get('email')
    const password = datas.get('password')

    authenticateUser({ email, password })
  }

  return (
    <div className="login-page">
      <section>
        <h2>Se connecter</h2>
        <form method="post" className="login-form" onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="email-input">Email</label>
            <input
              type="email"
              id="email-input"
              name="email"
              autoComplete="off"
            />
          </div>
          <div className="container">
            <label htmlFor="password-input">Password</label>
            <input type="password" name="password" id="password-input" />
          </div>
          <button>Submit</button>
        </form>
      </section>
      <div className="illustration">
        <img src={loginIllustration} alt="Login Illustration" />
      </div>
    </div>
  )
}
