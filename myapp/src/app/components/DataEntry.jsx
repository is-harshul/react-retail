import { Form, Input, Tooltip, Icon, Select, Button, DatePicker } from "antd";
import React from "react";
const { Option } = Select;

class DataEntry extends React.Component {
  state = {
    name: "",
    date: "",
    phone: "",
    confirmDirty: false,
    autoCompleteResult: []
  };


  handleName = e =>{
    const name = e.target.value
    this.setState({name})  
  }

  handleDate = e =>{
    const date = e.target.value
    this.setState({date})  
  }

  handlePhone = e =>{
    const phone = e.target.value
    this.setState({phone})  
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  onChange = (date, dateString) => {
      this.setState({date})
    console.log(date, dateString);
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "+91"
    })(
      <Select>
        <Option value="+91">+91</Option>
      </Select>
    );

    return (
      <div className="formContainer" style={{border: "1px solid grey", borderRadius: "7px", width: "90%", margin: 50, padding: 30 }}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label={
              <span>
                Name&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator("nickname", {
              rules: [
                {
                  required: true,
                  message: "Please input your Name!",
                  whitespace: true
                }
              ]
            })(<Input onChange={this.handleName} style={{ width: "30%" }} />)}
          </Form.Item>
          <Form.Item
            label={
              <span>
                Date of birth&nbsp;
                <Tooltip title="Enter your date of birth">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator("dob", {
              rules: [
                {
                  required: true,
                  message: "Please input your Date of birth!",
                  whitespace: true
                }
              ]
            })(
              <DatePicker onChange={this.onChange} style={{ width: "30%" }} />
            )}
          </Form.Item>
          <Form.Item label="Phone Number">
            {getFieldDecorator("phone", {
              rules: [
                { required: true, message: "Please input your phone number!" }
              ]
            })(<Input addonBefore={prefixSelector} onChange={this.handlePhone} style={{ width: "30%" }} />)}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          {console.log("All states: ", this.state)}
        </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(DataEntry);

export default WrappedRegistrationForm;
