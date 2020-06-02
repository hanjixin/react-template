import React, { Component } from 'react'
import { Table } from 'antd'


function createMonth(year, style) {
    let arr = []
    for (let index = 1; index <= 12; index++) {
      let mon = year + '' + style
      if(index<10) {
        mon = mon + '0' +index
      } else {
        mon = mon + index
      }
      arr.push(mon)
    }
  return arr
}
let  columns = [
  {
    title: '课程名称',
    dataIndex: 'name',
    key: 'name',
  }
]
createMonth(new Date().getFullYear(), '-').forEach(item => {
  columns.push({
    title: item,
    dataIndex: item,
    key: item,
  })
});
const data = [
  {
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    children: [
      {
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
    ]
  },
]

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows)
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows)
  },
  // selectedRowKeys: [1]
}
let defaultExpandedRowKeys = []
for (let index = 0; index < data.length; index++) {
  defaultExpandedRowKeys.push(index + 1)
}
const expandable = {
  defaultExpandedRowKeys: defaultExpandedRowKeys,
  // expandedRowKeys: ['1'],
  defaultExpandAllRows: false
}

class Index extends Component {
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <Table columns={columns} rowSelection={rowSelection} dataSource={data} expandable={expandable} pagination={false}/>
    )
  }
}

export default Index