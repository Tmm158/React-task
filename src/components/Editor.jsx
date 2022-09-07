import { useEffect, useRef, useState } from 'react';
import { PageHeader, Button } from 'antd';
import E from 'wangeditor'

let editor = null
const Editor = () => {
  const [content, setContent] = useState("");
  const myeditor=useRef(null)
  useEffect(() => {
    // 实例化
    editor = new E(myeditor.current)

    editor.config.onchange = (newHtml) => {
      setContent(newHtml);
    }

    // 创建
    editor.create()

    return () => {
      // 组件销毁时销毁编辑器
      editor.destroy()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="editor">
      <PageHeader
        style={{padding: 0, marginBottom: '20px'}}
        ghost={false}
        title="文章编辑"
        subTitle={`当前日期：${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`}
        extra={[
          <Button key="3" type="primary">提交文章</Button>,
        ]}
      ></PageHeader>
      <div id="myeditor" ref={myeditor}></div>
    </div>
  );
}

export default Editor;
