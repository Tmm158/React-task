import { Button, Form, Input, message } from 'antd'
import React from 'react'
import { ChangeUserInfoApi, UserInfoApi } from 'request/api'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

interface IProps {
  changeKeyFn: () => void
}
const Means = (props: IProps) => {
  const onFinish = (values: any) => {
    // 调用接口，把前端数据传递给后端，让后端修改数据库
    ChangeUserInfoApi({
      username: values.username || '',
      password: values.password || ''
    }).then((res: any) => {
      if (res.errCode === 0) {
        message.success(res.message)
        let { avatar, username } = res.data
        // 存储访问接口返回的数据
        localStorage.setItem('avatar', avatar)
        localStorage.setItem('username', username)
        localStorage.setItem('cms-token', res.data['cms-token'])
        // 更新header组件
        props.changeKeyFn()
      }
    })
  }

  return (
    <Form
      style={{ width: '300px', margin: '20px', verticalAlign: 'center' }}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="on"
    >
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  )
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeKeyFn() {
      dispatch({ type: 'changeKey' })
    }
  }
}
export default connect(null, mapDispatchToProps)(Means)
