import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table/interface'
import React from 'react'

interface DataType {
  key: React.Key
  title: React.ReactNode
  time: string
  action: React.ReactNode
}
const columns: ColumnsType<DataType> = [
  {
    title: '文章标题',
    dataIndex: 'title',
    width: '60%'
  },
  {
    title: '发布时间',
    dataIndex: 'time',
    width: '25%'
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '15%'
  }
]
// 按钮组件
const ActionBtn = () => {
  return (
    <>
      <Button type="primary" style={{ marginRight: '5px' }}>
        编辑
      </Button>
      <Button type="primary" danger>
        删除
      </Button>
    </>
  )
}
// 标题组件
const TitleCop = () => (
  <>
    <div>
      <a href="!#">标题123456789</a>
    </div>
    <p>副标题</p>
  </>
)
const data: DataType[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    title: <TitleCop />,
    time: '123',
    action: <ActionBtn />
  })
}
const List = () => {
  return <Table columns={columns} dataSource={data} showHeader={false} />
}
export default List
