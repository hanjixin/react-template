import React, { useState } from "react";
import { Table, Divider, Button, Modal, Form, Input } from "antd";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../store/modules/todoAction.js";
function MyTables(props) {
  const [show, setShow] = useState(false);
  const [editState, setEdit] = useState(false);
  // let show = false, temp = {};
  function add() {
    setShow(true);
    // console.log('add')
  }
  function del(item, index) {
    console.log("del")  ;
    props.deleteItem({
      item,
      index
    })
  }
  function edit(e) {
    setEdit(true)
    console.log("edit", e, arguments);
    props.form.setFieldsValue(e)
    setShow(true)
  }
  let handleOk = e => {
    console.log(e);
    setShow(false);
    
    // alert()
    props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      console.log(fieldsValue);
      if(editState) {
        props.editItem(fieldsValue);

      } else {
        props.addItem(fieldsValue);
      }
      props.form.resetFields();
    });
    // console.log(props.form.getFieldsValue());
  };

  let handleCancel = e => {
    console.log(e);
    setShow(false);
  };
  let saveFormRef = formRef => {
    this.formRef = formRef;
  };
  const columns = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      render: text => <a href="javascript:;">{text}</a>
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => {
        // console.log(record)
        return (
          <span>
            <Button
              type="primary"
              onClick={() => {
                edit(record, index);
              }}
              Style="margin: 3px;"
            >
              Edit
            </Button>
            <Divider type="vertical" />
            <Button
              type="danger"
              onClick={() => {
                del(record, index);
              }}
              Style="margin: 3px;"  
            >
              Delete
            </Button>
          </span>
        );
      }
    }
  ];

  const data = [
    {
      key: "1",
      title: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      title: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park"
    },
    {
      key: "3",
      title: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park"
    }
  ];

  return (
    <div className="content">
      <h2> Test</h2>
      <div className="action">
        <Button type="primary" onClick={add} Style="margin: 3px;">
          Add
        </Button>
      </div>
      <Table columns={columns} dataSource={props.todos} />
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
              {props.form.getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="address">
              {props.form.getFieldDecorator("address")(
                <Input type="textarea" />
              )}
            </Form.Item>
          </Form>
        }
      </Modal>
    </div>
  );
}

const mapStateToProps = function(state, ownProps) {
  console.log(state, ownProps, "mapStateToProps");
  return {
    todos: state.todos
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(dispatch, ownProps, "mapDispatchToProps");
  return {
    addItem: e => {
      console.log(12313, "addItem", e);
      dispatch(addTodo(e));
      // dispatch(setVisibilityFilter(ownProps.filter))
    },
    editItem: e => {
      dispatch(addTodo(e));
      // dispatch(setVisibilityFilter(ownProps.filter))
    },
    deleteItem: e => {
      console.log(12313, "deleteItem", e);
      dispatch(deleteTodo(e));
      // dispatch(setVisibilityFilter(ownProps.filter))
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTables);
