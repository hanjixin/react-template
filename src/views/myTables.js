import React, { useState } from 'react'
import { Table, Divider, Tag, Button, Modal, Form, Input } from 'antd';

function MyTables(props) {
  const [show , setShow] = useState(false);
  // let show = false, temp = {};
  console.log(props)
  function add() {
    setShow(true)
    // console.log('add')
  }
  function del() {
    // console.log('del')
  }
  function edit() {
    // console.log('edit')
  }
  let handleOk = e => {
    console.log(e);
    setShow(false)
    // alert()
    props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      console.log(fieldsValue)
    })
    console.log(props.form.getFieldsValue())
  };

  let handleCancel = e => {
    console.log(e);
    setShow(false)
  }
 let saveFormRef = formRef => {
    this.formRef = formRef;
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        // console.log(record)
        return (<span>
          <Button type="primary" onClick={edit(record)} Style="margin: 3px;">Edit</Button>
          <Divider type="vertical" />
          <Button type="danger" onClick={del(record)} Style="margin: 3px;">Delete</Button>
        </span>)
      },
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <div className="content">
      <h2> Test</h2>
      <div className="action">
      <Button type="primary" onClick={add} Style="margin: 3px;">Add</Button>
      </div>
      <Table columns={columns} dataSource={data} />
      <Modal
          title="Basic Modal"
          visible={show}
          title="创建"
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {
            <Form layout="vertical" wrappedComponentRef={saveFormRef}>
            <Form.Item label="Title">
              {props.form.getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {props.form.getFieldDecorator('description')(<Input type="textarea" />)}
            </Form.Item>
            
          </Form>
          }
        
        </Modal>
    </div>
  )
}

export default  Form.create({ 'name': 'chuangjian' })(MyTables)