/*
 * @Author: Innei
 * @Date: 2020-09-30 16:57:04
 * @LastEditTime: 2021-03-07 10:47:47
 * @LastEditors: Innei
 * @FilePath: /web/pages/login/index.tsx
 * @Mark: Coding with Love
 */
import { message } from 'utils/message'
import { Input } from 'components/Input'
import { NextPage } from 'next'
import Router from 'next/router'
import { useState } from 'react'
import { useStore } from '../../common/store'
import { Rest } from '../../utils/api'
import { setToken } from '../../utils/cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
// import { releaseDevtools } from 'utils/console'

const LoginView: NextPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { userStore } = useStore()
  const handleLogin = async () => {
    const data = (await Rest('Master', 'login').post({
      username,
      password,
    })) as any
    setToken(data.token, 7)
    if (history.backPath && history.backPath.length) {
      Router.push(history.backPath.pop()!)
    } else {
      Router.push('/')
    }
    message.success('登录成功')
    userStore.setToken(data.token)
    // releaseDevtools()
  }

  return (
    <main>
      <style jsx>{`
        .login-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          right: 0;
          text-align: center;
          transform: translate(-50%, -50%);
          width: 20em;
        }
        .field {
          margin: 6px 0;
        }
      `}</style>
      <div className="login-wrap">
        <div className="field">
          <Input
            prefix={<FontAwesomeIcon icon={faUser} />}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <Input
            prefix={<FontAwesomeIcon icon={faLock} />}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => (e.keyCode === 13 ? handleLogin() : '')}
          />
        </div>

        <button className="btn blue" onClick={() => handleLogin()}>
          登录
        </button>
      </div>
    </main>
  )
}

export default LoginView
