import React from 'react'

interface Props {
}

interface State {
}

class Register extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // // onChange 事件處理函示
  // public handleChange(event) {
  //   // event.target 是當前的 DOM elment
  //   // 從 event.target.value 取得 user 剛輸入的值
  //   // 將 user 輸入的值更新回 state
  //   this.setState({value: event.target.value});
  // }

  // // form onSubmit 事件處理函式
  // public handleSubmit(event) {
  //   alert('Submit ' + this.state.value);
  //   event.preventDefault();
  // }

  public render() {
    return (
      <div className="Login">
        <form>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p>帳號</p>
            <input type="text" name="account"></input>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p>密碼</p>
            <input type="text" name="password"></input>
        </div>
          <button type="submit" value="submit">登入</button>
          <button value="register">註冊</button>
        </form>
      </div>
    )
  }

  private readonly handleCancel = () => {
    this.setState({
    })
  }

  private readonly handleClose = () => {
    this.setState({
    })
  }
}

export default Register
