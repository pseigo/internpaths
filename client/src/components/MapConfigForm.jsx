import React, { Component } from 'react';
import { Form, Input, Icon, Checkbox, Button } from 'antd';

class MapConfigForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        md: { span: 24 },
        lg: { span: 5 },
      },
      wrapperCol: {
        md: { span: 24 },
        lg: { span: 19 },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit} hideRequiredMark="true" className="map-config-form">
        <Form.Item
          {...formItemLayout}
          label="Job title"
        >
          {getFieldDecorator('jobTitle', {
            rules: [{ required: true, message: 'You must input a job title.' }],
          })(
            <Input prefix={<Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Junior Software Engineer" />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Location"
        >
          {getFieldDecorator('location', {
            rules: [{ required: true, message: 'You must choose a location.' }],
          })(
            <Input prefix={<Icon type="pushpin" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Vancouver, BC" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Button type="primary" icon="search" htmlType="submit" className="map-config-form-button">
              Search!
            </Button>
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default MapConfigForm;
