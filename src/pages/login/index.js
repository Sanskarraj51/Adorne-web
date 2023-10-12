import BreadCrumb from 'src/@core/components/breadcrumb'
import LoginForm from 'src/views/pages/login'

const LoginPage = () => {
  return (
    <>
      <BreadCrumb path='Login' />
      <LoginForm type='login' />
    </>
  )
}

LoginPage.guestGuard = true
LoginPage.authGuard = false

export default LoginPage
